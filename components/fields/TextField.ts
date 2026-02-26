import { expect } from "@playwright/test";
import { FieldComponent } from "./FieldComponents";

export class TextField extends FieldComponent {
  
  private control() {
    return this.root.locator("textarea");
  }
  

    async set(value: string) {
        await this.expectVisible();
        await this.control().fill(value);
    };
    
    async expectValue(value:string) {
        await this.expectVisible();
        await expect(this.control(), "Text field value did not match").toHaveValue(value);
    };

    async clear() {
        await this.expectVisible();
        await this.control().fill('');
    };

    async getValue() {
        await this.expectVisible();
        return await this.control().inputValue();
    };

};