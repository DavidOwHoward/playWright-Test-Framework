import { Locator, Page, expect } from "@playwright/test";


export class Sections {
    constructor(private readonly page: Page, private readonly tabButton: Locator) {}

    async open(): Promise<void> {
        const isSelected = await this.tabButton.getAttribute('aria-selected');
        if (isSelected !== 'true') {
            await this.tabButton.click();
        } 
    };


    async openAndWait(fieldRoot: Locator): Promise<void> {
        await this.open();
        await expect(fieldRoot).toBeVisible();
    };
}
