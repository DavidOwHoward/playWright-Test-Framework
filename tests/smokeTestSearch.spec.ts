import { test, expect } from '../fixtures/fixtures'
import { users } from "../config/user";



test('smokeTestSearch', async ({login, nav, search, details}) => {


    await login.openPage();
    await login.loginUser(users.demo);
    await nav.navOpenProcess('Document Control', "Documents");
    await search.openRecord("4096");
    await details.closeRecord();
    await search.findRecordSearch("Burr")
    await expect(search.searchGrid.getByText("Burr")).toBeVisible();
    await expect(search.searchGridRow).toHaveCount(1);
    await search.ClearSearch();
    await expect(search.searchGridRow).toHaveCount(25);
    await search.clearSort()
    await search.dragDrop("Current State");
    await search.grid.auditGrouping()
    await search.groupPanelRemove.click()
    await search.page.waitForTimeout(2000);
    await expect(search.searchGridRow).toHaveCount(25);
    await search.clearGroupButton.click()
    await expect(search.groupPanel).not.toBeVisible();


     

});

// this test covers the following:
// navigating to and opening a process
// opening a record in that process
// closing the record
// searching for a record and asserting it is the only result
// clearing the search and asserting the correct amount of records appears in the search
// clearing the default sorting of the search and asserting that none of the columns are sorted
// grouping the search by Current State and asserting the correct amount of groups is shown
// clearing the grouping by clicking the x on the grouping field and asserting that the search grid has the correct amount of records
// clicking the clear group button and asserting the group panel is no longer visible