import { Locator, type Page} from '@playwright/test';
import { BasePage } from "./BasePage";

export class DetailsPageBase extends BasePage {


    readonly footer: Locator;
    readonly closeButton: Locator;
    readonly saveButton: Locator;
    readonly saveNextButton: Locator;
    readonly stateSelector: Locator;
    readonly saveStateBar: Locator;
    readonly stateDialog: Locator;

    constructor(page: Page)  {

        super(page);
        this.footer = page.locator('.footer-toolbar');
        this.saveStateBar = this.footer
            .locator('.commands-container');

        this.saveButton = this.saveStateBar
            .getByRole('button', {name:'Save'});
        this.saveNextButton =this.saveStateBar
            .getByRole('button', {name:'Save & Next'});
        this.closeButton = this.saveStateBar
            .getByRole('button', { name: 'Close', exact: true })
        this.stateSelector = this.saveStateBar
            .getByRole('button', {name:'Active'});
        this.stateDialog = page.locator('eqms-details-layout-dialog-confirm-state')

};

    async closeRecord() {
        await this.closeButton.click();
    }


    async saveRecord() {
        await this.saveButton.click();
    }

}