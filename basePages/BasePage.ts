import { expect, type Locator, type Page } from "@playwright/test";
import { Sections } from "../components/Sections";
import { Snackbar } from "../components/SnackBar";

export abstract class BasePage {
  protected readonly page: Page;
  protected readonly snack: Snackbar;
  constructor(page: Page) {
    this.page = page;
    this.snack = new Snackbar(this.page);
  }

  protected fieldRoot(id: string): Locator {
    return this.page.locator(`#${id}`);
  }

  protected sectionByName(name: string): Sections {
    let tab: Locator;
    if (name === "[Frozen Section]" || name === "Frozen Section") {
      tab = this.page.locator("#sticky");
    } else {
      tab = this.page.getByRole("tablist").getByRole("tab", { name: name });
    }
    return new Sections(this.page, tab);
  }

  protected fieldRootInSection(fieldId: string, sectionName: string) {
    const root = this.fieldRoot(fieldId);
    const section = this.sectionByName(sectionName);
    return { root, section };
  }
}
