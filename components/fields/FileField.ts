import { expect } from "@playwright/test";
import { FieldComponent } from "./FieldComponents";
import path from "path";
import { ConfirmationDialog } from "../ConfirmationDialog";
import { Snackbar } from "../SnackBar";

export class FileField extends FieldComponent {

    private snack = new Snackbar(this.page);
    
    private browseFiles() {
        return this.root.getByRole('button', { name: 'Browse Files' });
    };

    private useTemplate() {
        return this.root.getByRole('button', { name: 'Use Template' });
    };

    private kendoUpload() {
        return this.root.locator('kendo-upload');
    };

    private upload() {
        return this.root.getByRole('button').filter({ hasText: "file_upload" });    
    };

    private checkOutButton() {
        return this.root.getByRole('button').filter({ hasText: "lock" });
    };

    private checkInButton() {
        return this.root.getByRole('button').filter({ hasText: "lock_open" });
    };

    private link() {
        return this.root.getByRole('button').filter({ hasText: "link" });
    };

    private checkOutDialog() {
        return new ConfirmationDialog(this.page, "Check Out");
    };

    private checkInDialog() {
        return new ConfirmationDialog(this.page, "Check In");
    };


    // need to figure out to make one locator for the Office File types and pdf since they are the only file types that will have a specific icon.
    private fileTypeIcon() {
        return this.root.locator('#DocumentFile_f').locator('.fa-file-""')
    };

    private fileDownload() {
        return this.root.getByRole('button').filter({ hasText: "file_download" });

    };

    async uploadFile(filePath: string) {

        const fileName = path.basename(filePath);
        
        await this.ensureReady();
        if (!(await this.browseFiles().isVisible())) {
            await this.upload().click();
        };

        const [fileChooser] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            this.browseFiles().click()
        ]);

        await fileChooser.setFiles(filePath);        
        await expect(this.root.getByText(fileName), `Check if file uploaded successfully`).toBeVisible();
        await this.snack.waitForGone();
    };
        
    async checkOutFile() {
        
        await this.ensureReady();
        await this.checkOutButton().click();
        await expect(this.checkOutDialog().root, "Assert that Check Out dialog is visible").toBeVisible();
        await this.checkOutDialog().yes.click();
        await expect(this.checkInButton(), "Assert that Check In button is visible after checking out file").toBeVisible();
    };

    async checkInFile() {
        
        await this.ensureReady();
        await this.checkInButton().click();
        await expect(this.checkInDialog().root, "Assert that Check In dialog is visible").toBeVisible();
        await this.checkInDialog().yes.click();
        await expect(this.checkOutButton(), "Assert that Check Out button is visible after checking in file").toBeVisible();

    };

};