import { expect } from "@playwright/test";
import { FieldComponent } from "./FieldComponents";

export class TextField extends FieldComponent {
  
  private control() {
    return this.root.locator("textarea");
  };
  

    async set(value: string) {
        await this.ensureReady();
        await this.control().fill(value);
    };
    
    async expectValue(value:string) {
        await this.ensureReady();
        await expect(this.control(), "Text field value did not match").toHaveValue(value);
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