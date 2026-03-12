import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
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

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);