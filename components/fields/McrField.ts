import { expect } from "../../fixtures/fixtures";
import { FieldComponent } from "./FieldComponents";

export class McrField extends FieldComponent {

    private link() {
        return this.root.getByRole('button').filter({ hasText: 'Link' });
    };

    private showItems() {
        return this.root.getByRole('button').filter({ hasText: 'reorder' });
    };

    private unlink() {
        return this.root.getByRole('button').filter({ hasText: 'remove_circle_outline' });
    };

    private linkWindow() {
        return this.page.getByRole('dialog')
    };

    private linkSearch() {
        return this.linkWindow().getByRole('textbox');
    };

    private linkButton() {
        return this.linkWindow().getByRole('button', {name: "Link"});
    };

    private cancel() {
        return this.linkWindow().getByRole('button', {name: "Cancel"});
    };

    private clickFirst() {
        return this.linkWindow().locator('.k-grid-table').getByRole('row').nth(0).getByRole('checkbox');
    };

    private getRow() {
        return this.linkWindow().locator('.k-grid-table').getByRole('row');
    };


    async setLink(value: string) {

        this.ensureReady();
        await this.link().click();
        await this.linkSearch().fill(value);
        await expect(this.getRow().first(), `Check for ${value}`).toContainText(value);
        await this.clickFirst().click();
        await expect(this.clickFirst(), 'Check if checked').toBeChecked();
        await this.linkButton().click();
    };

    async unlinkItem(value: string) {

        this.ensureReady();
        const item = await this.root.getByRole('row').filter({ hasText: value });
        await expect(item, `Check if ${value} is linked`).toBeVisible();
        await item.click();
        await expect(this.unlink(), 'Check if remove link is enabled').toBeEnabled();
        await this.unlink().click();
        await expect(item, `Check if ${value} is unlinked`).not.toBeVisible();
    };





};
