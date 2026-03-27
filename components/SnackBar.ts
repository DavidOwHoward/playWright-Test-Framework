import { expect, Locator, Page } from '@playwright/test';

export class Snackbar {
  constructor(private readonly page: Page) {}

  
  get container(): Locator {
    return this.page.locator('.cdk-overlay-pane').locator('simple-snack-bar');
  };
  get message(): Locator {
    return this.container.locator('.mat-mdc-snack-bar-label.mdc-snackbar__label');
  };

  async expectContains(text: string | RegExp, msg = 'Assert confirmation of Save') {
    await expect(this.message, msg).toBeVisible();
    await expect(this.message, msg).toContainText(text);
  };

  async waitForContains(text: string | RegExp) {    
    await this.expectContains(text);
  };

  async waitForGone() {
    await expect(this.message).toHaveCount(0, { timeout: 10000 });
  };
  
};