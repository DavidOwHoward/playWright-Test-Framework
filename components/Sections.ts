import { Locator, Page, expect } from "@playwright/test";


export class Sections {
    constructor(private readonly page: Page, private readonly tabButton: Locator) {}

    async openAndWait(fieldRoot: Locator): Promise<void> {
        if (await fieldRoot.isVisible()) {
            return;
        }
        await this.tabButton.click();
        await expect(fieldRoot, "Section did not open or field is not visible").toBeVisible();
    };

}
