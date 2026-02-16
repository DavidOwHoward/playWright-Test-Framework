import { type Page, Locator } from '@playwright/test';

export class Documents {

    readonly page: Page;
    readonly documentTitle: Locator;
    readonly documentType: Locator;
    readonly owner: Locator;
    readonly responsibleSite: Locator;
    readonly domain: Locator;

    constructor(page: Page) {
        this.page = page;
        this.documentTitle = page.locator('#DocumentTitle_f').locator('textarea');
        this.documentType = page.locator('#DocumentType_f');
        this.owner = page.locator('#Owner_f')
        this.domain = page.locator('#Entity_f')
        this.responsibleSite = page.locator('#Site_f');
    };

}