import {
  Browser,
  BrowserContext,
  BrowserContextOptions,
  Page,
} from '@playwright/test';

import { LoginUser } from '../../config/user';
import { loginPage } from '../../BasePages/LoginBase';
import { SideNav } from '../../components/SideNav';
import { SearchScreen } from '../../BasePages/SearchScreenBase';
import { HomeTopToolBar } from '../../components/HomeTopToolBar';
import { ActionManager } from '../../components/ActionManager';

type PageCtor<T> = new (page: Page) => T;

export class ActorSession {
  readonly browser: Browser;
  readonly user: LoginUser;
  private readonly contextOptions: BrowserContextOptions;

  context!: BrowserContext;
  page!: Page;

  
  loginPage!: loginPage;
  nav!: SideNav;
  search!: SearchScreen;
  home!: HomeTopToolBar;
  action!: ActionManager;

  constructor(
    browser: Browser,
    user: LoginUser,
    contextOptions: BrowserContextOptions = {}
  ) {
    this.browser = browser;
    this.user = user;
    this.contextOptions = contextOptions;
  }

  async init(): Promise<this> {
    this.context = await this.browser.newContext(this.contextOptions);
    this.page = await this.context.newPage();

   
    this.loginPage = new loginPage(this.page);
    this.nav = new SideNav(this.page);
    this.search = new SearchScreen(this.page);
    this.home = new HomeTopToolBar(this.page);
    this.action = new ActionManager(this.page);

    return this;
  }

  process<T>(PageObject: PageCtor<T>): T {
    return new PageObject(this.page);
  }

  async login(): Promise<void> {
    await this.loginPage.openPage();
    await this.loginPage.loginUser(this.user);
  }

  async close(): Promise<void> {
    await this.context?.close();
  }
}