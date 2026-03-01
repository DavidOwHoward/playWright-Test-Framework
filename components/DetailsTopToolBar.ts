import { Locator, type Page} from '@playwright/test';
import { DetailsPageBase } from '../basePages/DetailsPageBase';
import { BasePage } from '../basePages/BasePage';


export class DetailsTopToolBar extends BasePage{

    
    readonly topToolBar: Locator;
    readonly addButton: Locator;
    readonly deleteButton: Locator;
    readonly ellipseButton: Locator;
    readonly reportsButton: Locator;
    readonly actionsButton: Locator;
    readonly attachmentsButton: Locator;
    readonly commentsButton: Locator;

    constructor(page: Page) {

        super(page);
        this.topToolBar = page.locator('eqms-details-layout')
            .locator('.content')
            .locator('.toolbar');


        this.addButton = this.page.locator('#new-details-toolbar');
        this.deleteButton = this.page.locator('#delete-details-toolbar');
        this.ellipseButton = this.page.locator('#more-details-toolbar');
        this.reportsButton = this.page.getByRole('button', { name: 'Reports' });
        this.actionsButton = this.page.getByRole('button', { name: 'Actions' });
        this.attachmentsButton = this.page.getByRole('button', { name: 'Attachments' });
        this.commentsButton = this.page.locator('#comments-details-toolbar');
    };

    async openActions() {
        await this.actionsButton.click();
    };

}