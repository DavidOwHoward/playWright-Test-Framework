import {expect, Locator, Page} from '@playwright/test';

export class SearchFilterRow {

    readonly root: Locator;
    readonly page: Page;
    readonly filterAndLayout: Locator;
    readonly filterRow: Locator;
    readonly showFilterRow: Locator;
    readonly hideFilterRow: Locator;

    constructor(page: Page) {

        this.root = page
            .locator('eqms-grid')
            .locator('div[role="grid"][aria-label="Data table"]')

        this.filterAndLayout = page.locator('#settings-search-toolbar');
        this.filterRow = this.root.locator('tr.k-filter-row');
        this.showFilterRow = page.getByRole('menuitem', { name: 'Show Filter Row' });
        this.hideFilterRow = page.getByRole('menuitem', { name: 'Hide Filter Row' });

    }

    async FilterRowShow() {
        await this.filterAndLayout.click();
        await this.showFilterRow.click();
        await expect(this.filterRow).toBeVisible();

    }

    async FilterRowHide() {
        await this.filterAndLayout.click();
        await this.hideFilterRow.click();
        await expect(this.filterRow).toHaveCount(0);
    }

}