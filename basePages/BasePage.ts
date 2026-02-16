import { expect, type Locator, type Page } from '@playwright/test';

export abstract class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async xref(field: Locator, value: string) {
        await field.getByRole('button').filter({ hasText: 'arrow_drop_down' }).click();

        const listbox = this.page.getByRole('listbox');
        await expect(listbox).toBeVisible();

        // Prefer option role if it exists; fallback can be getByText if needed
        const option = this.page.getByRole('gridcell').getByText(value);
        await option.click();

        await expect(listbox).not.toBeVisible();
        await expect(field).toContainText(value);
    }
}


