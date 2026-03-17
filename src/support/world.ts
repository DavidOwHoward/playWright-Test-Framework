import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { loginPage } from '../../basePages/LoginBase';
import { SideNav } from '../../components/sideNav';
import { SearchScreen } from '../../basePages/SearchScreenBase';
import { ReportsBase } from '../../components/ReportBase';
import { DetailsTopToolBar } from '../../components/DetailsTopToolBar';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  // POM Classes
  login!: loginPage;
  nav!: SideNav;
  search!: SearchScreen;
  details!: DetailsTopToolBar;
  reports!: ReportsBase;

  // Generic test data
  testData: Record<string, any> = {};

  // On Demand page instantiation
  getPage<T>(PageClass: new (page: Page) => T): T {
    return new PageClass(this.page);
  };

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);