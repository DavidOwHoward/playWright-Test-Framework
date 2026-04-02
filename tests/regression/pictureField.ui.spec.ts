import { test } from "../../fixtures/fixtures";
import { users } from "../../config/user";
import { QualityAlerts_p } from '../../pages/Q/QualityAlerts_p';
import { faker } from '@faker-js/faker';
import { testFiles } from '../../fixtures/fileExports';


test('Picture field regression test',{tag: '@Regression'}, async ({login, nav, search, page}) => {

    const alert = new QualityAlerts_p(page);

    await login.openPage();
    await login.loginUser(users.demo);
    await nav.openProcess('NCR & CAPA', "Quality Alerts");
    await search.addNewRecord();
    await alert.IssueDescription.set(faker.word.words(10));        
    await alert._IssuePictures.uploadFile(testFiles.classImage);
    await alert._IssuePictures.addAdditional(testFiles.bathroomImage);
    await alert._IssuePictures.setDefault();
    await alert._IssuePictures.addAdditional(testFiles.receptionImage);
    await alert.saveRecord("DRAFT");
    await alert._IssuePictures.removePicture(3);
    await alert.saveRecord("DRAFT");


});
