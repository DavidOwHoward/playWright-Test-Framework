import { Locator, Page, expect } from "@playwright/test";

export abstract class FieldComponent {
    constructor(protected readonly page: Page, protected readonly root: Locator) {}

    async expectVisible() {
        await expect(this.root, "Field wrapper not visible").toBeVisible();
    }
}