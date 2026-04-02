import { test as base } from '@playwright/test';
import { SideNav } from "../components/SideNav";
import { SearchScreen } from "../BasePages/SearchScreenBase";
import { ReportsPage } from "../components/ReportPage";
import { loginPage } from "../BasePages/LoginBase";
import { DetailsPageBase } from '../BasePages/DetailsPageBase';
import { HomeTopToolBar } from '../components/HomeTopToolBar';
import { ActionManager } from '../components/ActionManager';



type baseFixtures = {
    login: loginPage;
    nav: SideNav;
    reports: ReportsPage;
    search: SearchScreen
    details: DetailsPageBase;
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
        await use(new DetailsPageBase(page));
    },
    reports: async ({page}, use) => {
        await use(new ReportsPage(page));
    },
    home: async ({page}, use) => {
        await use(new HomeTopToolBar(page));
    },
    action: async ({page}, use) => {
        await use(new ActionManager(page));
    },
})

export { expect } from '@playwright/test'