import { test } from '@playwright/test'
import { HomePage } from "../pages/HomePageBase.spec"
import { loginPage } from "../pages/loginBase"


test("topToolBarSanity", async ({page}) => {
    const home = new HomePage(page);
    const login = new loginPage(page);

    await login.openPage();
    await login.loginUser('demo', 'qad');
    // await home.httb.openDocLibrary();
    // await home.httb.openEnhancement();
    // await home.httb.openWalkMe();
    // await home.httb.globalSearchOpen('titanium');
    // await home.httb.openAboutDialog();
    // await home.httb.userLogout();
    await home.httb.openSettings()


})