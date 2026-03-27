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
        return this.linkWindow().locator('.k-grid-table').getByRole('row').first().getByRole('checkbox');
    };

    private getLinkRow() {
        return this.linkWindow().locator('.k-grid-table').getByRole('row');
    };

    private add() {
        return this.root.getByRole('button').filter({hasText:"add_circle_outline"});
    };

    private getTableRow() {
        return this.root.locator('.k-grid-table').getByRole('row');
    };


    async setLink(value: string) {

        this.ensureReady();
        await this.link().click();
        await this.linkSearch().fill(value);
        await expect(this.getLinkRow().first(), `Check for ${value}`).toContainText(value);
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

    async addItem() {

       await this.ensureReady();
       await this.add().click();

    };

    async assertRowValue(value: string) {

        await this.ensureReady();
        await expect(this.getTableRow()).toContainText(value);
    };

    async open(searchString: string) {
        await this.ensureReady();
        await this.getTableRow().filter({ hasText: searchString }).first().dblclick();
    }


};
