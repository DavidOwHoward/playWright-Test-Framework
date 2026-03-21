import { test } from "../../fixtures/fixtures";
import { users } from "../../config/user";
import { Documents_p } from "../../pages/D/Documents_p";
import { testFiles } from "../../fixtures/fileExports";
import { DocumentSkillTrainingRoles_p } from "../../pages/D/DocumentSkillTrainingRoles_p";
import { SkillTrainingQuestions_p } from "../../pages/S/SkillTrainingQuestions_p";

test("Documents and Training Workflow", async ({
  login,
  nav,
  search,
  home,
  page,
}) => {
  const doc = new Documents_p(page);
  const docTraining = new DocumentSkillTrainingRoles_p(page);
  const docSkill = new SkillTrainingQuestions_p(page);
  const uniqueTitle = `Gamma Ray Operating Instructions ${Date.now()}`;

  await test.step("Create a Document record in Draft state", async () => {
    await login.openPage();
    await login.loginUser(users.demo);
    await nav.openProcess("Document Control", "Documents");
    await search.addNewRecord();
    await doc.DocumentTitle.set(uniqueTitle);
    await doc.DocumentType.set("General Documents");
    await doc.EffectiveDate.setToday();
    await doc.DocumentFile.uploadFile(testFiles.testDoc);
    await doc.AutomaticallyCreateNewSkill.check();
    await doc.saveRecord("DRAFT");
  });
  await test.step("Creating a training event and linking a Training Role", async () => {
    await doc.CreateTrainingEvent.check();
    await doc.TrainingRoles.addItem();
    await docTraining.TrainingRole.assertVisibility();
    await docTraining.TrainingRole.set("Internal Auditor");
    await docTraining.RequiredRating.set("Very Good");
    await docTraining.saveRecord();
    await docTraining.closeRecord();
    await doc.TrainingRoles.assertRowValue("Internal Auditor");
  });
  await test.step("Add a Skill Training Question", async () => {
    await doc.SkillTrainingQuestions.addItem();
    await docSkill.Skill.assertVisibility();
    await docSkill.Question.set("Does this pass?");
    await docSkill.AnswerChoices.setGlobalChoice("Auditing - Pass/Fail");
    await docSkill.saveRecord("ACTIVE");
    await docSkill.closeRecord();
    await doc.SkillTrainingQuestions.assertRowValue("Does this pass?");
  });

  await test.step("Submit the Document for approval", async () => {
    await doc.moveState("DRAFT", "AWAITING APPROVAL");
    await doc.saveRecord();
  });

  await test.step("Log in as each approver and approve the Document", async () => {
    await home.userLogout();
    await login.loginUser(users.mgrDoc);
    await nav.openProcess("Document Control", "Documents");
    await search.openRecord(uniqueTitle);
    await doc.approveRecord(users.mgrDoc, "Approving the document");
    await home.userLogout();
    await login.loginUser(users.demo);
    await nav.openProcess("Document Control", "Documents");
    await search.openRecord(uniqueTitle);
    await doc.approveRecord(users.demo, "Approving the document");
  });
});
