import { test, expect } from '@playwright/test'
import { HomePage } from "../pages/HomePageBase.spec"
import { loginPage } from "../pages/loginBase.spec"

test.use({
    viewport: {width: 1920, height: 1080}})

test('smokeTest', async ({page}) => {
    const login = new loginPage(page);
    const eqms = new HomePage(page);

    await login.openPage();
    await login.loginUser('demo', 'qad');
    await eqms.nav.navOpenProcess('Document Control', "Documents");
    await eqms.srch.openRecord("4096");
    await eqms.debp.closeRecord();
    await eqms.srch.findRecordSearch("Burr")
    await expect(eqms.srch.searchGrid.getByText("Burr")).toBeVisible();
    await expect(eqms.srch.searchGrid.locator("tr")).toHaveCount(1);
    await eqms.srch.ClearSearch();
    await expect(eqms.srch.searchGrid.locator("tr")).toHaveCount(25);
    await eqms.srch.clearSort()





});