import { expect } from "../../fixtures/fixtures";
import { FieldComponent } from "./FieldComponents";

export class ChoiceField extends FieldComponent {

    private useGlobalChoice() {
        return this.root.getByRole('radio', {name:"Use Global Choice"});
    };

    private createSpecificChoiceList() {
        return this.root.getByRole('radio', {name:"Create Specific Choice List"});
    };

    private globalChoiceInput() {
        return this.root.locator('.mat-mdc-form-field').locator('input');
    };

    private listBox() {
        return this.page.getByRole('listbox');
    };

    private choiceTable() {
        return this.root.locator('tbody)'); 
    };


    async setGlobalChoice(value: string) {

        await this.ensureReady();
        await this.useGlobalChoice().check();
        await expect(this.globalChoiceInput(), 'Assert the Global Choice drop down is visible').toBeVisible();
        await this.globalChoiceInput().fill(value);
        const option = this.listBox().getByRole('option', {name: value});
        await option.click();
        await expect(this.globalChoiceInput(), `Assert the Global Choice field has the value "${value}"`).toHaveValue(value);
        await expect(this.listBox()).not.toBeVisible();

    };

    async setSpecificChoice() {

        await this.ensureReady();
        await this.createSpecificChoiceList().check();
        await expect(this.choiceTable(), 'Assert the Choice Table is visible').toBeVisible();

    };
};
