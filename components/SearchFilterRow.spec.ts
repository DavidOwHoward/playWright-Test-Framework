import { Locator, Page } from '@playwright/test';

export class SearchFilterRow {

    readonly root: Locator;
    readonly page: Page;
    readonly filterRow: Locator;
    readonly showFilterRow: Locator;
    readonly hideFilterRow: Locator;

    constructor(page: Page) {

        this.root = page
            .locator('eqms-grid')
            .locator('div[role="grid"][aria-label="Data table"]')

        this.filterRow = this.root.locator('tr.k-filter-row');
        this.showFilterRow = page.getByRole('menuitem', { name: 'Show Filter Row' });
        this.hideFilterRow = page.getByRole('menuitem', { name: 'Hide Filter Row' });

    }


}