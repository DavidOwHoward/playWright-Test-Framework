import { FieldComponent } from "./FieldComponents";
import { Snackbar } from "../SnackBar";
import path from "path";
import { expect } from "@playwright/test";

export class PictureField extends FieldComponent {

    private snack = new Snackbar(this.page);

    private browseFiles() {
        return this.root.getByRole('button', {name:"Browse Files"})
    };

    private deletePicture() {
        return this.root.locator('#IssuePicture_f').getByRole('button').filter({hasText:"delete"})
    };

    private defaultPicture() {
        return this.root.getByRole('button').filter({hasText:"star"});
    };

    private downloadPicture() {
        return this.root.getByRole('button').filter({hasText:"download"});
    };

    private addAdditionalPicture() {
        return this.root.getByRole('button').filter({hasText:"add_photo_alternate"}); 
    };

    private nextPicture() {
        return this.root.getByRole('button').filter({hasText:"chevron_right"});
    };

    private previousPicture() {
        return this.root.getByRole('button').filter({hasText:"chevron_left"});
    };

    private imageDescription() {
        return this.root.locator('.description-container');
    };


        async uploadFile(filePath: string) {

        const fileName = path.basename(filePath);
        
        await this.ensureReady();


        const [fileChooser] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            this.browseFiles().click()
        ]);

        await fileChooser.setFiles(filePath);        
        await expect(this.imageDescription().innerText, `Check if file uploaded successfully`).toEqual(fileName);
        await this.snack.waitForGone();
    };

};