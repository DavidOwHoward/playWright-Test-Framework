import { type Locator, type Page } from '@playwright/test';
import { ensureClassAbsent } from "../utils/ensureClassAbsent.spec";

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
        await ensureClassAbsent(
            this.page,
            this.navPanel,
            'side-to-icon',
            async () => {
                await this.navCollapse.click();
            },
            {
                maxRetries: 3,
                retryDelayMs: 300,
            }
        )


    }


    //TO DO: combine search and open process
    //enters search text into Nav Search. checks to see if nav is collapsed and expands it if it is
    async searchProcess(searchText: string) {
        await this.ensureNavExpanded()
        await this.navSearch.fill(searchText);
    }


    //TO DO: create a dictionary of friendly process names to process system name so user doesn't have to specify system name to open process.
    // Another option would be to figure out how to get playwright to click the link with just the search text
    //clicks the link to open the process.
    async navOpenProcess(path: string) {
        const link = this.page.locator(`a[href="/search/${path}"]`);
        await link.waitFor({ state: 'visible' });
        await link.click();
    }

    async newNavOpenProcess(group: string, process: string) {
        await this.page.locator('.fm-navigation').locator('.cdk-virtual-scroll-content-wrapper').locator('.mat-mdc-list-item').getByText(`${group}`).click()
        await this.page.locator('.fm-navigation').locator('.cdk-virtual-scroll-content-wrapper').locator('.mat-mdc-list-item').getByText(`${process}`).click();

    }

}
