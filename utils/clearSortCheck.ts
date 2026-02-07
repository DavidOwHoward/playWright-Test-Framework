import { Page } from '@playwright/test';

// function to check that the clear sort button cleared all the sorts

export async function clearSortCheck(page: Page): Promise<boolean> {

    const headers = page.locator('kendo-grid .k-grid-header-table th');
    const headerCount = await headers.count();

    for (let i = 0; i < headerCount; i++) {

        const headerCol = headers.nth(i);

        const ascCount = await headerCol.locator('kendo-svgicon.k-svg-i-sort-asc-small').count();
        const descCount = await headerCol.locator('kendo-svgicon.k-svg-i-sort-desc-small').count();

        if (ascCount > 0 || descCount > 0) {
            return true;
        }
    }

    return false;
}