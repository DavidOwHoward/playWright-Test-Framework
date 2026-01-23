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
    readonly layoutPanel: Locator;
    readonly actionsExport: Locator;
    readonly actionsBulk: Locator;
    readonly filterRow: Locator;
    readonly hideFilterRow: Locator;
    readonly gridRoot: Locator;




    constructor (page: Page)    {
        this.page = page;
        this.searchBox = page.locator('#filter-text-search-toolbar');
        this.addButton = page.locator('#new-search-toolbar');
        this.ellipseButton = page.locator('#more-search-toolbar');
        this.reportsButton = page.getByRole('button', { name: 'Reports' });
        this.actionsButton = page.getByRole('button', { name: 'Actions' });
        this.closeButton = page.getByRole('button', { name: 'Close', exact: true });
        this.refreshButton = page.locator('#refresh-search-footer');
        this.filterAndLayout = page.locator('#settings-search-toolbar');
        this.clearSort = page.locator('#clear-sorting-search-toolbar');
        this.clearGroup = page.locator('#grouping-color-search-toolbar');
        this.filterRowShow = page.getByRole('menuitem', { name: 'Show Filter Row' });
        this.layoutPanel = page.getByRole('menuitem', { name: 'Show Filters & Layouts Panel' });
        this.gridRoot = page
            .locator('eqms-grid')
            .locator('div[role="grid"][aria-label="Data table"]')
        this.filterRow = this.gridRoot.locator('tr.k-filter-row');
        this.hideFilterRow = page.getByRole('menuitem', { name: 'Hide Filter Row' });
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