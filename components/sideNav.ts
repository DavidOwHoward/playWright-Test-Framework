import { expect, type Locator, type Page } from '@playwright/test';
import { ensureClassAbsent } from "../utils/ensureClassAbsent.spec";



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


    async newNavOpenProcess(group: string, process: string) {
        await this.ensureNavExpanded()

        const navGroupItem = this.navPanel
            .locator('.mat-mdc-list-item', {hasText: `${group}`})

        await navGroupItem.click();

        const navChildItem = this.navPanel
            .locator('.mdc-list-item', {hasText: `${process}`});

        await expect(navChildItem).toBeVisible();
        await navChildItem.scrollIntoViewIfNeeded();
        await navChildItem.click();

    }

}
