import { Before, Given, When, Then, DataTable } from "@cucumber/cucumber";

import { users } from "../../config/user";
import { testFiles } from "../../fixtures/fileExports";

import { Documents_p } from "../../pages/D/Documents_p";
import { DocumentSkillTrainingRoles_p } from "../../pages/D/DocumentSkillTrainingRoles_p";
import { SkillTrainingQuestions_p } from "../../pages/S/SkillTrainingQuestions_p";
import { TrainingEvents_p } from "../../pages/T/TrainingEvents_p";
import { TrainingEventLogs_p } from "../../pages/T/TrainingEventLogs_p";
import { faker } from "@faker-js/faker";

type UserKey = keyof typeof users;

interface CustomWorld {
  actors: any;  
  uniqueTitle: string;
  currentActor?: any;
  currentUserKey?: UserKey;
  doc?: any;
  docTraining?: any;
  docSkill?: any;
  trainingEvent?: any;
  currentTrainingEvent?: any;
}

Before(async function (this: CustomWorld) {
  this.uniqueTitle = `Gamma Ray Operating Instructions - ${faker.string.alphanumeric({ length: 10 })}`;
});

function resolveUser(userKey: string) {
  return users[userKey as UserKey];
}

function resolveTestFile(fileKey: string) {
  const file = (testFiles as Record<string, string>)[fileKey];
  if (!file) throw new Error(`No test file found for key "${fileKey}"`);
  return file;
}

async function switchToUser(this: CustomWorld, userKey: UserKey) {
  const actor = await this.actors.as(resolveUser(userKey));
  this.currentActor = actor;
  this.currentUserKey = userKey;
  return actor;
}

async function logoutIfNeeded(world: CustomWorld) {
  if (world.currentActor) {
    await world.currentActor.home.userLogout();
  }
}

Given("the test data uses a unique document title", async function (this: CustomWorld) {
  // Title already created in Before. Step kept for readability.
});

Given("{string} is logged into the application", async function (this: CustomWorld, userKey: UserKey) {
  const actor = await switchToUser.call(this, userKey);
  await actor.login();

  this.doc = actor.process(Documents_p);
  this.docTraining = actor.process(DocumentSkillTrainingRoles_p);
  this.docSkill = actor.process(SkillTrainingQuestions_p);
  this.trainingEvent = actor.process(TrainingEvents_p);
});

Given(
  "{string} opens the {string} process in the {string} module",
  async function (this: CustomWorld, userKey: UserKey, processName: string, moduleName: string) {
    const actor =
      this.currentUserKey === userKey ? this.currentActor : await switchToUser.call(this, userKey);

    await actor.nav.openProcess(moduleName, processName);
  },
);

Given("{string} starts a new document record", async function (this: CustomWorld, userKey: UserKey) {
  const actor =
    this.currentUserKey === userKey ? this.currentActor : await switchToUser.call(this, userKey);

  await actor.search.addNewRecord();
});

When("{string} enters the document details", async function (this: CustomWorld, _userKey: UserKey, table: DataTable) {
  const row = table.hashes()[0];

  await this.doc.DocumentTitle.set(this.uniqueTitle);
  await this.doc.DocumentType.set(row.documentType);  
  await this.doc.EffectiveDate.setToday();
  await this.doc.DocumentFile.uploadFile(resolveTestFile(row.file));
});

When("{string} sets skill options", async function (this: CustomWorld, _userKey: UserKey) {
    await this.doc.AutomaticallyCreateNewSkill.check();
});

When("{string} saves the document in {string} state", async function (this: CustomWorld, _userKey: UserKey, state: string) {
  await this.doc.saveRecord(state);
});

When("{string} sets training event creation", async function (this: CustomWorld, _userKey: UserKey) {
  await this.doc.CreateTrainingEvent.check();
});

When("{string} saves the document", async function (this: CustomWorld) {
  await this.doc.saveRecord();
});

When(
  "{string} adds the following training roles",
  async function (this: CustomWorld, _userKey: UserKey, table: DataTable) {
    for (const row of table.hashes()) {
      await this.doc.TrainingRoles.addItem();
      await this.docTraining.TrainingRole.assertVisibility();
      await this.docTraining.TrainingRole.set(row.trainingRole);
      await this.docTraining.RequiredRating.set(row.requiredRating);
      await this.docTraining.saveRecord();
      await this.docTraining.closeRecord();
    }
  },
);

When(
  "{string} adds the following skill training questions",
  async function (this: CustomWorld, _userKey: UserKey, table: DataTable) {
    for (const row of table.hashes()) {
      await this.doc.SkillTrainingQuestions.addItem();
      await this.docSkill.Skill.assertVisibility();
      await this.docSkill.Question.set(row.question);
      await this.docSkill.AnswerChoices.setGlobalChoice(row.answerChoiceSet);
      await this.docSkill.saveRecord(row.state);
      await this.docSkill.closeRecord();
    }
  },
);

Then("the document should contain the following training roles", async function (this: CustomWorld, table: DataTable) {
  for (const row of table.hashes()) {
    await this.doc.TrainingRoles.assertRowValue(row.trainingRole);
  }
});

Then(
  "the document should contain the following skill training questions",
  async function (this: CustomWorld, table: DataTable) {
    for (const row of table.hashes()) {
      await this.doc.SkillTrainingQuestions.assertRowValue(row.question);
    }
  },
);

When(
  "{string} submits the document for {string}",
  async function (this: CustomWorld, _userKey: UserKey, state: string) {
    await this.doc.saveRecord(state);    
  },
);

When("{string} saves the document", async function (this: CustomWorld) {
  await this.doc.saveRecord();
});



When("the following users approve the document", async function (this: CustomWorld, table: DataTable) {
  const rows = table.hashes();

  for (const row of rows) {
    const userKey = row.user as UserKey;
    const comment = row.comment;

    await logoutIfNeeded(this);

    const actor = await switchToUser.call(this, userKey);
    const doc = actor.process(Documents_p);

    await actor.login();
    await actor.nav.openProcess("Document Control", "Documents");
    await actor.search.openRecord(this.uniqueTitle);
    await doc.approveRecord(resolveUser(userKey), comment);

    this.doc = doc;
    this.trainingEvent = actor.process(TrainingEvents_p);
  }
});

Then("the document should contain a generated training event", async function (this: CustomWorld) {
  await this.doc._TrainingEvents.assertValue("New version training for document: " + this.uniqueTitle);
});

Then("{string} opens the generated training event", async function (this: CustomWorld, userKey: UserKey) {
  if (this.currentUserKey !== userKey) {
    await logoutIfNeeded(this);
    const actor = await switchToUser.call(this, userKey);
    await actor.login();
    await actor.nav.openProcess("Document Control", "Documents");
    await actor.search.openRecord(this.uniqueTitle);
    this.doc = actor.process(Documents_p);
    this.trainingEvent = actor.process(TrainingEvents_p);
  }

  const eventTitle = "New version training for document: " + this.uniqueTitle;
  await this.doc._TrainingEvents.open(eventTitle);
  await this.trainingEvent.TrainingEventDescription.expectVisible();
  this.currentTrainingEvent = this.trainingEvent;
});

When("the following users complete their assigned training logs", async function (this: CustomWorld, table: DataTable) {
  const rows = table.hashes();

  for (const row of rows) {
    const userKey = row.user as UserKey;
    const actor = await this.actors.as(resolveUser(userKey));
    const logs = actor.process(TrainingEventLogs_p);

    await logoutIfNeeded(this);

    await actor.login();
    await actor.action.openAssignment("Training-Management", "Training Event Awaiting Review", this.uniqueTitle);
    await logs.Employee.assertVisibility();
    await logs.TrainingEvaluationQuestions.selectAnswerBool(row.answer);
    await logs.Comments.set(row.comment);
    await logs.saveRecord();
    await logs.approveRecord(resolveUser(userKey), row.approvalComment);

    if (userKey === "quality") {
      const event = actor.process(TrainingEvents_p);
      await logs.TrainingEvent.showItem();
      this.currentTrainingEvent = event;
    }

    this.currentActor = actor;
    this.currentUserKey = userKey;
  }
});

Then("the training event should be in {string} state", async function (this: CustomWorld, expectedState: string) {
  await this.currentTrainingEvent.assertState(expectedState);
});