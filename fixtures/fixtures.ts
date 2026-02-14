import { test as base } from '@playwright/test';
import { SideNav } from "../components/sideNav";
import { SearchScreen } from "../pages/SearchScreenBase";
import { DetailsPageBase } from "../pages/DetailsPageBase";
import { ReportsBase } from "../components/ReportBase";
import { loginPage } from "../pages/loginBase";

type baseFixtures = {
    login: loginPage;
    nav: SideNav;
    reports: ReportsBase;
    search: SearchScreen
    details: DetailsPageBase;
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
        await use(new ReportsBase(page));
    }
})

export { expect } from '@playwright/test'