import { expect, Locator, Page } from '@playwright/test';

export class Snackbar {
  constructor(private readonly page: Page) {}

  get message(): Locator {
    return this.page.locator('.mat-mdc-snack-bar-label.mdc-snackbar__label');
  };

  async expectContains(text: string | RegExp, msg = 'Assert confirmation of Save') {
    await expect(this.message, msg).toBeVisible();
    await expect(this.message, msg).toContainText(text);
  };

  async waitForContains(text: string | RegExp) {    
    await this.expectContains(text);
  };

  async waitForGone() {
    await expect(this.message).toBeHidden();
  };
  
};