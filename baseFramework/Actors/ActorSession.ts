import { Browser, BrowserContext, Page } from "@playwright/test";
import { loginPage } from "../../BasePages/LoginBase";
import { SideNav } from "../../components/SideNav";
import { SearchScreen } from "../../BasePages/SearchScreenBase";
import { HomeTopToolBar } from "../../components/HomeTopToolBar";
import { LoginUser } from "../../config/user";
import { baseUrl } from "../../fixtures/constants";
import { ActionManager } from "../../components/ActionManager";

type PageCtor<T> = new (page: Page) => T;

export class ActorSession {
  readonly browser: Browser;
  readonly user: LoginUser;

  context!: BrowserContext;
  page!: Page;

  loginPage!: loginPage;
  nav!: SideNav;
  search!: SearchScreen;
  home!: HomeTopToolBar;
  action!: ActionManager;


  constructor(browser: Browser, user: LoginUser) {
    this.browser = browser;
    this.user = user;
  }

  // Initialize the session by creating a new browser context and page, and then initializing all shared page objects with that page
  async init(): Promise<this> {
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    this.loginPage = new loginPage(this.page);
    this.nav = new SideNav(this.page);
    this.search = new SearchScreen(this.page);
    this.home = new HomeTopToolBar(this.page);
    this.action = new ActionManager(this.page);

    return this;
  }

  // Helper function to make login one step in tests
  async login(url: string = baseUrl): Promise<void> {
    await this.loginPage.openPage(url);
    await this.loginPage.loginUser(this.user);
  }
  // Helper function to create and return any page object that takes a Page in its constructor
  process<T>(PageObject: PageCtor<T>): T {
    return new PageObject(this.page);
  }

  // Helper function to refresh the session by closing the current context and page
  async refreshSession(): Promise<void> {
    await this.close();
    await this.init();
    await this.login();
  }

  async close(): Promise<void> {
    await this.context.close();
  }
}
