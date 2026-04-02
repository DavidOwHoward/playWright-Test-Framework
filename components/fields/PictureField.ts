import { FieldComponent } from "./FieldComponents";
import { Snackbar } from "../SnackBar";
import path from "path";
import { expect } from "@playwright/test";
import { ConfirmationDialog } from "../ConfirmationDialog";

export class PictureField extends FieldComponent {

    private snack = new Snackbar(this.page);
    private confirm = new ConfirmationDialog(this.page, 'Removing Image');

    private browseFiles() {
        return this.root.getByRole('button', {name:"Browse Files"})
    };

    private deletePicture() {
        return this.root.getByRole('button').filter({hasText:"delete"})
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

    private pictureCounter() {
        return this.root.locator('.counter');
    }


        async uploadFile(filePath: string) {

        const fileName = path.basename(filePath);
        
        await this.ensureReady();

        const [fileChooser] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            this.browseFiles().click()
        ]);

        await fileChooser.setFiles(filePath);        
        await expect(this.imageDescription(), `Check if file uploaded successfully`).toHaveText(fileName);
        await this.snack.waitForGone();
    };

    async addAdditional(filePath: string) {

        const fileName = path.basename(filePath);

        const [fileChooser] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            this.addAdditionalPicture().click()
        ]);

        await fileChooser.setFiles(filePath);        
        await expect(this.imageDescription(), `Check if file uploaded successfully`).toHaveText(fileName);
        await this.snack.waitForGone();

    };

    async setDefault() {
        await this.defaultPicture().click();
        await expect(this.defaultPicture().locator('mat-icon'), `Check if picture is set as default`).toHaveText('star');

    }

    async scrollToPicture(value: number) { 
        await this.ensureReady();
        
        const total = await this.getTotalPictures();
        let current = await this.getPicutreIndex();

        if (value < 1) {
            throw new Error(`Value ${value} must be greater than 0`);
        }

        if (value > total) {
            throw new Error(`Value ${value} exceeds total number of pictures ${total}`);
        }

        while(current !== value) {
            if(current < value) {
                await this.nextPicture().click();
            } else if (current > value) {
                await this.previousPicture().click();
            }

            current = await this.getPicutreIndex();
        }
        
        await expect(this.pictureCounter(), `Check if scrolled to picture ${value}`).toHaveText(
            new RegExp(`^${value}\\s+of\\s+${total}$`, 'i')
        );
    }

    async getCurrentPicture() {
        const raw = (await this.pictureCounter().textContent())?.trim();
        const match = raw?.match(/(\d+)\s+of\s+(\d+)/i);

        if (!match) {
            throw new Error(`Unable to parse picture counter value: "${raw ?? ""}"`);
        }

        const [, currentText, totalText] = match;
        const current = Number(currentText);
        const total = Number(totalText);

        return {current, total};
    }

    async getPicutreIndex() {
        return (await this.getCurrentPicture()).current;
    }

    async getTotalPictures() {
        return (await this.getCurrentPicture()).total;
    }

    async removePicture(value: number) {
        await this.ensureReady();
        const before = await this.getTotalPictures();
        await this.scrollToPicture(value);
        await this.deletePicture().click();
        await expect(this.confirm.root, 'Check if removing image dialog is visible').toBeVisible();
        await this.confirm.dialog('Yes');
        await expect(this.confirm.root, 'Check if removing image dialog is closed').toBeHidden();
        await expect
            .poll(async () => await this.getTotalPictures(), {
                message: 'Check if picture was removed',
            })
            .toEqual(before - 1);
    }
};
