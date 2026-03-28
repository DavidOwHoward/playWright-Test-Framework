import { Locator, Page, expect } from "@playwright/test";


export class Sections {
    constructor(private readonly page: Page, private readonly tabButton: Locator) {}

    async openAndWait(fieldRoot: Locator): Promise<void> {
        if (await fieldRoot.isVisible()) {
            return;
        }
        await this.tabButton.click();
        await expect(fieldRoot, "Check to see if field is visible, if not, click on its section and assert it's visiblity").toBeVisible();
    };

}
