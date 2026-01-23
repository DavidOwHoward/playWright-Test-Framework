import { type Locator, type Page } from '@playwright/test';

//function escapeRegExp(value: string): string {
    //return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');}

export class SideNav {
    readonly page: Page;
    readonly navSearch: Locator;
    readonly navCollapse:Locator;
    readonly navPanel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navSearch = page.getByPlaceholder('Looking for a Process');
        this.navCollapse = page.locator('fm-navigation').getByRole('button').filter({ hasText: 'menu' });
        this.navPanel = page.locator('.fm-navigation');
    }


    async ensureNavExpanded() {
        const isCollapsed = await this.navPanel.evaluate(el =>
            el.classList.contains('side-to-icon')
        );

        if (isCollapsed) {
            await this.navCollapse.click();
        }
    }


    //enters search text into Nav Search. checks to see if nav is collapsed and expands it if it is
    async searchProcess(searchText: string) {
        await this.ensureNavExpanded()
        await this.navSearch.fill(searchText);
    }


    //clicks the link to open the process. for now, will use the searchText variable to validate the correct process object opens using the browser title
    async navOpenProcess(path: string) {
        const link = this.page.locator(`a[href="/search/${path}"]`);
        await link.waitFor({ state: 'visible' });
        await link.click();
    }


}
