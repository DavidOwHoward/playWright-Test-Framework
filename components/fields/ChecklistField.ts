import { expect } from "../../fixtures/tests";
import { FieldComponent } from "./FieldComponents";

export class ChecklistField extends FieldComponent {
  private base = this.root
    .locator("eqms-process-field-check-list")
    .locator("tbody");
  private question = this.base.locator(".Question_f");
  private answer = this.base.locator(".Answer_f");
  private comments = this.base.locator(".Comments_f");
  private pass = this.page.getByRole("option", { name: "Pass" });
  private fail = this.page.getByRole("option", { name: "Fail" });
  private yes = this.page.getByRole("option", { name: "Yes" });
  private no = this.page.getByRole("option", { name: "No" });
  private answerList = this.page.getByRole("listbox");

  async selectAnswerBool(answer: string) {
    await this.ensureReady();

    await this.answer.click();
    await expect(this.answerList).toBeVisible();

    switch (answer) {
      case "Pass":
        await this.pass.click();
        await expect(this.answerList).toBeHidden();
        break;
      case "Fail":
        await this.fail.click();
        await expect(this.answerList).toBeHidden();
        break;
      case "Yes":
        await this.yes.click();
        await expect(this.answerList).toBeHidden();
        break;
      case "No":
        await this.no.click();
        await expect(this.answerList).toBeHidden();
        break;
      default:
        await this.answerList.getByRole('option').filter({ hasText: answer }).click();
        await expect(this.answerList).toBeHidden();
        break;
    }
    
    await this.root.click(); // click outside to trigger any onBlur events
    await expect(this.answer).toHaveText(answer);
  }
}
