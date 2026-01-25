import {expect, Locator, type Page} from '@playwright/test';

export class SearchScreen {
    readonly page: Page;
    readonly searchBox: Locator;
    readonly addButton: Locator;
    readonly ellipseButton: Locator;
    readonly reportsButton: Locator;
    readonly actionsButton: Locator;
    readonly closeButton: Locator;
    readonly refreshButton: Locator;
    readonly filterAndLayout: Locator;
    readonly clearSort: Locator;
    readonly clearGroup: Locator;
    readonly filterRowShow: Locator;
    readonly actionsExport: Locator;
    readonly actionsBulk: Locator;
    readonly filterRow: Locator;
    readonly hideFilterRow: Locator;



    constructor (page: Page)    {
        this.page = page;
        this.searchBox = page.locator('#filter-text-search-toolbar');
        this.addButton = page.locator('#new-search-toolbar');
        this.ellipseButton = page.locator('#more-search-toolbar');
        this.reportsButton = page.getByRole('button', { name: 'Reports' });
        this.actionsButton = page.getByRole('button', { name: 'Actions' });
        this.closeButton = page.getByRole('button', { name: 'Close', exact: true });
        this.refreshButton = page.locator('#refresh-search-footer');
        this.clearSort = page.locator('#clear-sorting-search-toolbar');
        this.clearGroup = page.locator('#grouping-color-search-toolbar');
        this.actionsExport = page.locator('#export-search-toolbar');
        this.actionsBulk = page.locator('#bulk-search-toolbar');


    }
    async showFilterRow() {
        await this.filterAndLayout.click();
        await this.filterRowShow.click();
        await expect(this.filterRow).toBeVisible();
        await this.filterAndLayout.click();
        await this.hideFilterRow.click();
        await expect(this.filterRow).toHaveCount(0);
    }


}