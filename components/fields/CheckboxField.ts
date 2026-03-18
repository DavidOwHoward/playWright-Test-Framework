import { expect } from "../../fixtures/fixtures";
import { FieldComponent } from "./FieldComponents";

export class CheckboxField extends FieldComponent {

    private checkbox() {
        return this.root.getByRole('checkbox');
    };

    private toggle() {
        return this.root.getByRole('radiogroup');
    };

    async check() {

        await this.ensureReady();
        await this.checkbox().check();
        await expect(this.checkbox(), 'Assert the checkbox is checked').toBeChecked();

    };

    async uncheck() {

        await this.ensureReady();
        await this.checkbox().uncheck();
        await expect(this.checkbox(), 'Assert the checkbox is unchecked').not.toBeChecked();

    };

    async setToggle(value: string) {

        await this.ensureReady();
        const option = this.toggle().getByRole('radio', {name: value});
        await option.check();
        await expect(option, `Assert the "${value}" toggle option is selected`).toBeChecked();

    };
};
