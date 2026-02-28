import { expect } from "@playwright/test";
import { FieldComponent } from "./FieldComponents";
import { ScrPager } from "./fieldWidgets/ScrPager";

export class ScrField extends FieldComponent {

    private dropDown() {
        return this.root.getByRole('button').filter({ hasText: 'arrow_drop_down' });
    }
    
    private input() {
        return this.root.locator("input");
    };

    private listBox() {
        return this.page.getByRole('listbox');
    };

    private openItem() {
        return this.root.getByRole('button').filter({ hasText: 'adjust' });
    };

    private clearItem() {
        return this.root.getByRole('button').filter({ hasText: 'remove_circle_outline' });
    };


    async open() {
        await this.ensureReady();
        await this.dropDown().click();
        await expect(this.listBox(), "SCR field dropdown did not open").toBeVisible();
    };   
    
    async set(value: string) {

        await this.open();
        await this.dropDown().click();
        await expect(this.listBox()).toBeVisible();
        const option = this.page.getByRole('gridcell').getByText(value);
        await expect(option, `Could not find "${value}" in the SCR dropdown options`).toBeVisible();
        await option.click({force: true});
        await expect(this.listBox()).not.toBeVisible();
        
    };

    async expectValue(value:string, opts?: { assertContains?: string | RegExp}) {
        await this.ensureReady();
        const expected = opts?.assertContains ?? value

        if (expected instanceof RegExp) {
            await expect(this.input(), "SCR field value did not match").toHaveValue(expected);
        } else {
            const escaped = expected.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            await expect(this.input(), "SCR field value did not match").toHaveValue(new RegExp (escaped, 'i'));
        }
    };

    async showItem() {
        await expect(this.openItem(), "SCR field open item button is not visible").toBeVisible();
        await this.openItem().click();
    };

    async clear() {
        await expect(this.clearItem(), "SCR field clear item button is not visible").toBeVisible();
        await this.clearItem().click();
    };

    async auditPager() {
        await this.open();
        try {
            await new ScrPager(this.listBox()).auditPager();
        } finally {
            if (await this.listBox().isVisible()) {
                await this.dropDown().click();
                await expect(this.listBox()).not.toBeVisible();
            }
        }
    }


};
