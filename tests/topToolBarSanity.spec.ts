import { test } from '@playwright/test'
import { HomePage } from "../pages/HomePageBase.spec";
import { loginPage } from "../pages/loginBase.spec"


test("topToolBarSanity", async ({page}) => {
    const home = new HomePage(page);
    const login = new loginPage(page);

    await login.openPage();
    await login.logInUser('demo', 'qad');
    await home.ttb.openDocLibrary();
    await home.ttb.openEnhancement();
    await home.ttb.openWalkMe();
    await home.ttb.globalSearchOpen('titanium');
    await home.ttb.openAboutDialog();
    await home.ttb.userLogout();

})