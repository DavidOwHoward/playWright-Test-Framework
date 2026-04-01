import {  test } from "../../fixtures/tests";
import { users } from "../../config/user";
import { Documents_p } from "../../pages/D/Documents_p";
import { testFiles } from "../../fixtures/fileExports";
import { DocumentSkillTrainingRoles_p } from "../../pages/D/DocumentSkillTrainingRoles_p";
import { SkillTrainingQuestions_p } from "../../pages/S/SkillTrainingQuestions_p";
import { TrainingEvents_p } from "../../pages/T/TrainingEvents_p";
import { TrainingEventLogs_p } from "../../pages/T/TrainingEventLogs_p";
import { faker } from "@faker-js/faker";



test("Documents and Training Workflow", { tag: ['@e2e']}, async ({ actors }) => {
  const demo = await actors.as(users.demo);

  const doc = demo.process(Documents_p);
  const docTraining = demo.process(DocumentSkillTrainingRoles_p);
  const docSkill = demo.process(SkillTrainingQuestions_p);
  const event = demo.process(TrainingEvents_p);

  const mgr = await actors.as(users.mgrDoc);
  const mgrDoc = mgr.process(Documents_p);
  const mgrLogs = mgr.process(TrainingEventLogs_p);

  const uniqueTitle = `Gamma Ray Operating Instructions - ${faker.string.alphanumeric({ length: 10 })}`;

  await test.step("Create a Document record in Draft state", async () => {
    await demo.login();
    await demo.nav.openProcess("Document Control", "Documents");
    await demo.search.addNewRecord();
    await doc.DocumentTitle.set(uniqueTitle);
    await doc.DocumentType.set("General Documents");
    await doc.EffectiveDate.setToday();
    await doc.DocumentFile.uploadFile(testFiles.testDoc);
    await doc.AutomaticallyCreateNewSkill.check();
    await doc.saveRecord("DRAFT");
  });  
  await test.step("Creating a training event and link Training Role", async () => {
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
    await docSkill.Question.set("Have you reviewed the document?");
    await docSkill.AnswerChoices.setGlobalChoice("Auditing - Pass/Fail");
    await docSkill.saveRecord("ACTIVE");
    await docSkill.closeRecord();
    await doc.SkillTrainingQuestions.assertRowValue("Have you reviewed the document?");
  });

  await test.step("Submit the Document for approval", async () => {
    await doc.moveState("DRAFT", "AWAITING APPROVAL");
    await doc.saveRecord();
  });

  await test.step("Log in as each approver and approve the Document", async () => {
    await demo.home.userLogout();     

    await mgr.login();
    await mgr.nav.openProcess("Document Control", "Documents");
    await mgr.search.openRecord(uniqueTitle);
    await mgrDoc.approveRecord(users.mgrDoc, "Approving the document");
    await mgr.home.userLogout();
    await demo.login();
    await demo.nav.openProcess("Document Control", "Documents");
    await demo.search.openRecord(uniqueTitle);
    await doc.approveRecord(users.demo, "Approving the document");
    await doc._TrainingEvents.assertValue("New version training for document: " + uniqueTitle);    
    await doc._TrainingEvents.open("New version training for document: " + uniqueTitle);    
    await event.TrainingEventDescription.expectVisible();    
    await demo.home.userLogout();    
  });

  await test.step("Login as Carl Seragosa and complete the training log with approval", async () => {
    await mgr.login();
    await mgr.action.openAssignment("Training-Management","Training Event Awaiting Review", uniqueTitle);
    await mgrLogs.Employee.assertVisibility();
    await mgrLogs.TrainingEvaluationQuestions.selectAnswerBool("Pass");
    await mgrLogs.Comments.set("I have reviewed the document");
    await mgrLogs.saveRecord();
    await mgrLogs.approveRecord(users.mgrDoc, "Approving the training log");
    await mgr.home.userLogout();

  });

  await test.step("Login as Cindy Smith and complete the training log with approval", async () => {
    const mgr2 = await actors.as(users.mgrDoc2);
    const mgr2logs = mgr2.process(TrainingEventLogs_p);
    await mgr2.login();
    await mgr2.action.openAssignment("Training-Management","Training Event Awaiting Review", uniqueTitle);
    await mgr2logs.Employee.assertVisibility();
    await mgr2logs.TrainingEvaluationQuestions.selectAnswerBool("Pass");
    await mgr2logs.Comments.set("I have reviewed the document");
    await mgr2logs.saveRecord();
    await mgr2logs.approveRecord(users.mgrDoc2, "Approving the training log");
    await mgr2.home.userLogout();
  });

  await test.step("Login as John Scott and complete the training log with approval", async () => {
    const quality1 = await actors.as(users.quality1);
    const quality1logs = quality1.process(TrainingEventLogs_p);
    await quality1.login();
    await quality1.action.openAssignment("Training-Management","Training Event Awaiting Review", uniqueTitle);
    await quality1logs.Employee.assertVisibility();
    await quality1logs.TrainingEvaluationQuestions.selectAnswerBool("Pass");
    await quality1logs.Comments.set("I have reviewed the document");
    await quality1logs.saveRecord();
    await quality1logs.approveRecord(users.quality1, "Approving the training log");
    await quality1.home.userLogout();
  });

  await test.step("Login as Phil Copper and complete the training log with approval", async () => {
    const audit = await actors.as(users.Audit);
    const auditlogs = audit.process(TrainingEventLogs_p);
    await audit.login();
    await audit.action.openAssignment("Training-Management","Training Event Awaiting Review", uniqueTitle);
    await auditlogs.Employee.assertVisibility();
    await auditlogs.TrainingEvaluationQuestions.selectAnswerBool("Pass");
    await auditlogs.Comments.set("I have reviewed the document");
    await auditlogs.saveRecord();
    await auditlogs.approveRecord(users.Audit, "Approving the training log");
    await audit.home.userLogout();
  }); 

  await test.step("Login as Jack Welch and complete the training log with approval", async () => {
    const quality = await actors.as(users.quality);
    const qualityLogs = quality.process(TrainingEventLogs_p);
    const qualityEvent = quality.process(TrainingEvents_p);

    await quality.login();
    await quality.action.openAssignment("Training-Management","Training Event Awaiting Review", uniqueTitle);
    await qualityLogs.Employee.assertVisibility();
    await qualityLogs.TrainingEvaluationQuestions.selectAnswerBool("Pass");
    await qualityLogs.Comments.set("I have reviewed the document");
    await qualityLogs.saveRecord();
    await qualityLogs.approveRecord(users.quality, "Approving the training log");
    await qualityLogs.TrainingEvent.showItem();
    await qualityEvent.assertState("Closed");
    await quality.home.userLogout();
  });

});