import { test, expect } from '../fixtures/fixtures'
import { users } from "../config/user";
import { Documents } from '../pages/Documnents_p'



test('addDocRecord', async ({login, nav, search, details, page}) => {

    const doc = new Documents(page)
    await login.openPage();
    await login.loginUser(users.demo);
    await nav.navOpenProcess('Document Control', "Documents");
    await search.addNewRecord();
    await doc.documentTitle.set('automated new doc');
    await doc.documentType.set('General Documents');
    await doc.documentType.expectValue('General Documents');
    await doc.effectiveDate.setToday();    
    // await doc.notificationRole.set('Accounting');
    // await doc.notificationRole.expectValue('Accounting');
    // await doc.notificationRole.showItem();
    // const p = page.getByText('Security Roles', { exact: true });
    // await expect(p).toBeVisible();
    // await details.closeButton.click();
    // await doc.notificationRole.expectValue('Accounting');
    // await doc.notificationRole.clear();
    // await doc.notificationRole.expectValue('');
    // await doc.numberofDaysforApproval.clear();
    // await doc.numberofDaysforApproval.expectValue('');
    // await doc.numberofDaysforApproval.set('5');
    // await doc.numberofDaysforApproval.expectValue('5');
    await details.saveRecord();
    await expect(details.stateDialog).toBeVisible();
    await details.selectState("Draft");




})