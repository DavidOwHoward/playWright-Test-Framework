import { test, expect } from '../fixtures/fixtures'
import { users } from "../config/user";
import { Documents } from '../pages/Documnents_p'



test('addDocRecord', async ({login, nav, search, details, page}) => {

    const doc = new Documents(page)
    await login.openPage();
    await login.loginUser(users.demo);
    await nav.navOpenProcess('Document Control', "Documents");
    await search.addNewRecord();
    await doc.documentTitle.fill('automated new doc' );
    await expect(doc.responsibleSite.locator('input')).toHaveValue(users.demo.defaultSite)
    await expect(doc.domain.locator('input')).toHaveValue(users.demo.defaultDomain);
    await details.xref(doc.documentType, 'General Documents');
    await details.saveRecord();
    await expect(details.stateDialog).toBeVisible();
    await details.selectState("Draft")




});