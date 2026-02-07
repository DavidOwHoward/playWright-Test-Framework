import { Locator, type Page} from '@playwright/test';

export class DetailsPageBase {

    readonly page: Page;
    readonly footer: Locator;
    readonly closeButton: Locator;
    readonly saveButton: Locator;
    readonly saveNextButton: Locator;
    readonly stateSelector: Locator;
    readonly saveStateBar: Locator;

    constructor(page: Page)  {

        this.page = page;
        this.footer = this.page.locator('.footer-toolbar');
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

};

    async closeRecord() {
        await this.closeButton.click();
    }

}