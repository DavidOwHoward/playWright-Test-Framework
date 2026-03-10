import { FieldComponent } from "./FieldComponents";

export class McrField extends FieldComponent {

    private link() {
        return this.page.getByRole('button').filter({ hasText: 'Link' });
    };

    private showItems() {
        return this.page.getByRole('button').filter({ hasText: 'reorder' });
    };

    private unlink() {
        return this.page.getByRole('button').filter({ hasText: 'remove_circle_outline' });
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










}
