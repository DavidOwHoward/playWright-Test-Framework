import { expect } from "../../fixtures/tests";
import { FieldComponent } from "./FieldComponents";

export class RcrField extends FieldComponent {
  private getTableRow() {
    return this.root.locator(".k-grid-table").getByRole("row");
  }

  async open(value: string | RegExp) {
    await this.ensureReady();
    await this.getTableRow().filter({ hasText: value }).first().dblclick();
  }

  async assertValue(value: string | RegExp) {
    await this.ensureReady();
    await expect(this.getTableRow().filter({ hasText: value }).first()).toBeVisible();
  }
}
