import { Locator, Page, expect } from "@playwright/test";

export abstract class FieldComponent {
    constructor(
        protected readonly page: Page,
        protected readonly root: Locator,
        private readonly beforeOpen?: () => Promise<void>
    ) {}

    protected async ensureReady() {
        if (this.beforeOpen) {
            await this.beforeOpen();
        }
        await this.expectVisible();
    }

    async expectVisible() {
        await expect(this.root, "Field wrapper not visible").toBeVisible();
    }
}
