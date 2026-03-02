import { test, expect } from '../fixtures/fixtures'
import { users } from "../config/user";
import { Documents } from '../pages/Documnents_p'



test('addDocRecord', async ({login, nav, search, page}) => {

    const doc = new Documents(page);
    
    await login.openPage();
    await login.loginUser(users.demo);
    await nav.navOpenProcess('Document Control', "Documents");
    await search.addNewRecord();
    await doc.documentTitle.set('automated new doc');
    await doc.documentType.set('General Documents');
    await doc.documentType.expectValue('General Documents');
    await doc.effectiveDate.set('03/03/2026');
    await doc.documentFile.uploadFile('D:\\playWright\\sandbox\\testFiles\\David Howard - Allied.docx');  
    await doc.saveRecord('Draft');

    

});