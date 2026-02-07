import { Locator, type Page} from '@playwright/test';

export class searchOpenRecord {
    readonly page: Page;
    readonly grid: Locator;


    constructor(page: Page) {
        this.page = page;
        this. grid = page.locator('kendo-grid-list')
            .locator('table')
            .locator('tbody')
    };

    async openRecord(recId: string): Promise<void> {

        await this.grid.getByText(`${recId}`).dblclick();
    }
};