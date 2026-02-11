import { test, expect } from '@playwright/test'
import { HomePage } from "../pages/HomePageBase.spec"
import { loginPage } from "../pages/loginBase"
import { users } from "../config/user";

test.use({
    viewport: {width: 1920, height: 1080}})

test('smokeTest', async ({page}) => {
    const login = new loginPage(page);
    const eqms = new HomePage(page);

    await login.openPage();
    await login.loginUser(users.demo);
    await eqms.nav.navOpenProcess('Document Control', "Documents");
    await eqms.srch.openRecord("4096");
    await eqms.debp.closeRecord();
    await eqms.srch.findRecordSearch("Burr")
    await expect(eqms.srch.searchGrid.getByText("Burr")).toBeVisible();
    await expect(eqms.srch.searchGrid.locator("tr")).toHaveCount(1);
    await eqms.srch.ClearSearch();
    await expect(eqms.srch.searchGrid.locator("tr")).toHaveCount(25);
    await eqms.srch.clearSort()
    const source = page.getByText('Current State');
    const target = page.getByRole('toolbar', { name: 'Group panel' });
    // const target = page.getByText('Drag a column header and drop');
    const dragClue = page.locator('.k-drag-clue');
    await source.hover();
    await page.mouse.down();
    await page.waitForTimeout(2000);
    await page.mouse.move(600,110);
    await dragClue.dragTo(target, {targetPosition: {x:100, y:30}, timeout: 3000});
    await expect(page.locator('.k-grouping-row')).toHaveCount(5);
    const groupedColumn = await page.locator('.k-grouping-row').allInnerTexts();
    for (const item of groupedColumn ) {
        console.log(item)
    }

          
     






});