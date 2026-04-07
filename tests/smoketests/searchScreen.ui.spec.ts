import { test } from '../../fixtures/fixtures'
import { users } from "../../config/user";
import { Documents_p } from '../../pages/D/Documents_p'

test('Search Screen Smoke Test', { tag: '@Smoke' }, async ({ login, nav, search, home, page }) => {
    const doc = new Documents_p(page);

    await login.openPage();
    await login.loginUser(users.mgrDoc);
    await nav.openProcess('Document Control', "Documents");
    await search.openRecord("Burr Inspection");    
    await doc.closeRecord();
    await search.ClearSearch();
    await search.dragDrop("Responsible Site");
    await search.grid.auditGrouping();
    await search.groupPanelRemove.click();
    await search.clearGroupButton.click();
    await home.userLogout();

});