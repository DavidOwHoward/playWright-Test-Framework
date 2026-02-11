import { expect, type Locator, type Page } from '@playwright/test';
import { ensureClassAbsent } from "../utils/ensureClassAbsent";
import { BaseComponent} from "./baseComponent";


export class SideNav extends BaseComponent {
    readonly navSearch: Locator;
    readonly navCollapse: Locator;

    constructor(page:Page) {

        super(page, page.locator('.fm-navigation'));
        this.navSearch = this.root.getByPlaceholder('Looking for a Process');
        this.navCollapse = this.root.locator('fm-navigation').getByRole('button').filter({ hasText: 'menu' });
    }

    async ensureNavExpanded() {
        await ensureClassAbsent (
            this.page,
            this.root,
            'side-to-icon',
        async () => {
                await this.navCollapse.click();
        },
            {
                maxRetries: 3,
                retryDelayMs: 300,
            }
        );
    }


    async navOpenProcess(group: string, process: string) {
        await this.ensureNavExpanded();

        const navGroupItem = this.root.locator('.mat-mdc-list-item', { hasText: group});
        await navGroupItem.click();

        const navChildItem = this.root.locator('.mdc-list-item', { hasText: process});

        await expect(navChildItem).toBeVisible();
        await navChildItem.scrollIntoViewIfNeeded();
        await navChildItem.click();
    }

}



