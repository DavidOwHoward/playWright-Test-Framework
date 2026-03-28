import { FieldComponent } from "./FieldComponents";

export class AutoNumField extends FieldComponent {

    private input() {
        return this.root.locator('input');
    }

    async getValue() {
        return await this.input().inputValue();
    }
}
