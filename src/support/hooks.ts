import { Before, After, Status, setDefaultTimeout, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from './world';
import { loginPage } from '../../basePages/LoginBase';
import { SideNav } from '../../components/sideNav';
import { SearchScreen } from '../../basePages/SearchScreenBase';
import { ReportsBase } from '../../components/ReportBase';
import { DetailsTopToolBar } from '../../components/DetailsTopToolBar';

setDefaultTimeout(60000);



Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({
    headless: false,
    args: ['--window-size=1920,1080']
  });

  this.context = await this.browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  this.page = await this.context.newPage();

  // Instantiate all POM classes
  this.login   = new loginPage(this.page);
  this.nav     = new SideNav(this.page);
  this.search  = new SearchScreen(this.page);
  this.details = new DetailsTopToolBar(this.page);
  this.reports = new ReportsBase(this.page);
});

AfterAll(async function () {
  console.log('\nTest suite execution complete')
});

After(async function (this: CustomWorld, scenario) {
  // Screenshot on failure
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot({ fullPage: true });
    await this.attach(screenshot, 'image/png');
  }

  await this.context?.close();
  await this.browser?.close();
});
