import { Before, After, Status, setDefaultTimeout, AfterAll } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from './world';
import { ActorsManager } from '../../BaseFramework/Actors/ActorsManager';
import { ActorSession } from '../../BaseFramework/Actors/ActorSession';

setDefaultTimeout(360000);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({
    headless: false,
  });  

  this.actors = new ActorsManager(this.browser);
  this.currentActor = undefined;
  this.testData = {};
});

AfterAll(async function () {
  console.log('\nTest suite execution complete');
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED && this.currentActor?.page) {
    const screenshot = await this.currentActor.page.screenshot({ fullPage: true });
    await this.attach(screenshot, 'image/png');
  }

  await this.actors?.dispose();
  await this.browser?.close();
});
