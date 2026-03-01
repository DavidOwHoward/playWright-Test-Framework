import { expect } from "@playwright/test";
import { FieldComponent } from "./FieldComponents";


export class NumericField extends FieldComponent {
  
  private control() {
    return this.root.locator(".k-input-inner");
  };
  

    async set(value: string) {
        await this.ensureReady();
        await this.control().fill(value);
    };
    
    async expectValue(value:string) {
        await this.ensureReady();
        await expect(this.control(), "Number field value did not match").toHaveValue(value);
    };

    async clear() {
        await this.ensureReady();
        await this.control().fill('');
    };

    async getValue() {
        await this.ensureReady();
        return await this.control().inputValue();
    };

};