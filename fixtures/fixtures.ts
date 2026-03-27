import { test as base } from '@playwright/test';
import { SideNav } from "../components/SideNav";
import { SearchScreen } from "../BasePages/SearchScreenBase";
import { DetailsPageBase } from "../BasePages/DetailsPageBase";
import { ReportsBase } from "../components/ReportBase";
import { loginPage } from "../BasePages/LoginBase";
import { DetailsTopToolBar } from '../components/DetailsTopToolBar';
import { HomeTopToolBar } from '../components/HomeTopToolBar';
import { ActionManager } from '../components/ActionManager';


type baseFixtures = {
    login: loginPage;
    nav: SideNav;
    reports: ReportsBase;
    search: SearchScreen
    details: DetailsTopToolBar;
    home: HomeTopToolBar;
    action: ActionManager;


}

export const test = base.extend<baseFixtures>({
    login: async ({page}, use) => {
        await use(new loginPage(page));
    },
    nav: async ({page}, use) => {
        await use(new SideNav(page));
    },
    search: async ({page}, use) => {
        await use(new SearchScreen(page));
    },
    details: async ({page}, use) => {
        await use(new DetailsTopToolBar(page));
    },
    reports: async ({page}, use) => {
        await use(new ReportsBase(page));
    },
    home: async ({page}, use) => {
        await use(new HomeTopToolBar(page));
    },
    action: async ({page}, use) => {
        await use(new ActionManager(page));
    },
})

export { expect } from '@playwright/test'