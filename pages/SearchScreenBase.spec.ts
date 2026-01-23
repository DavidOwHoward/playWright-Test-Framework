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
    readonly filterRowVisible: Locator;
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
        this.filterAndLayout = page.locator('#settings-search-toolbar');
        this.clearSort = page.locator('#clear-sorting-search-toolbar');
        this.clearGroup = page.locator('#grouping-color-search-toolbar');
        this.filterRowShow = page.getByRole('menuitem', { name: 'Show Filter Row' })
        this.layoutPanel = page.getByRole('menuitem', { name: 'Show Filters & Layouts Panel' })
        this.filterRowVisible = page.locator('eqms-grid[role="grid"][aria-label="Data table]').locator('tr.k-filter-row')
        this.hideFilterRow = page.getByRole('menuitem', { name: 'Hide Filter Row' })
        this.actionsExport = page.locator('#export-search-toolbar');
        this.actionsBulk = page.locator('#bulk-search-toolbar');


    }
    async showFilterRow() {
        await this.filterAndLayout.click();
        await expect(this.page.getByRole('menuitem', { name: /Show Filter Row/i })).toBeVisible();
        await this.filterRowShow.click();
        await expect(this.filterRowVisible).toBeVisible();
        await this.filterAndLayout.click();
        await this.hideFilterRow.click();
        await expect(this.filterRowVisible).not.toBeVisible();
    }


}