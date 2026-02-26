import { expect, type Locator, type Page } from '@playwright/test';

export abstract class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    protected fieldRoot(id: string): Locator {
    return this.page.locator(`#${id}_f`);
    };

    async xref(field: Locator, value: string, opts?: { assertContains?: string | RegExp}) {

        await field
            .getByRole('button')
            .filter({ hasText: 'arrow_drop_down' })
            .click();

        const listbox = this.page.getByRole('listbox');
        await expect(listbox).toBeVisible();

        const option = this.page.getByRole('gridcell').getByText(value);
        await option.click();

        await expect(listbox).not.toBeVisible();
        const input = field.locator('input');
        const expected = opts?.assertContains ?? value

        if (expected instanceof RegExp) {

            await expect(input).toHaveValue(expected);
        } else {
            const escaped = expected.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            await expect(input).toHaveValue(new RegExp (escaped, 'i'));
        }
    };

    async selectState(state: string) {

        const root = this.page.locator('eqms-details-layout-dialog-confirm-state')
        const stateButton = this.page.getByRole('button', {name: state})
        await expect(root, 'The State popup was not visible').toBeVisible();
        await expect(stateButton, `Could not find "${state}" in the State dialog`).toBeVisible();
        await root.getByRole('button', {name: state}).click();
    };



}


