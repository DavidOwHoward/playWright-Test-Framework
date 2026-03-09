import { test, expect } from '../fixtures/fixtures'
import { users } from "../config/user";
import { Documents_p } from '../pages/D/Documents_p'


test('addDocRecord', async ({login, nav, search, page}) => {

    const doc = new Documents_p(page);
    
    await login.openPage();
    await login.loginUser(users.mgrDoc);
    await nav.navOpenProcess('Document Control', "Documents");
    await search.addNewRecord();
    await doc.DocumentTitle.set('approval test Charlie');
    await doc.DocumentType.set('General Documents');
    await doc.DocumentType.expectValue('General Documents');
    await doc.EffectiveDate.set('03/09/2026');
    await doc.DocumentFile.uploadFile('D:\\playWright\\sandbox\\testFiles\\David Howard - Allied.docx');  
    await doc.saveRecord('Draft'); 
    await doc.moveState('Draft', 'Awaiting Approval');
    await doc.saveRecord();   
    await doc.approveRecord(users.mgrDoc);

});