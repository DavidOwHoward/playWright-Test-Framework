import { test } from "../../fixtures/fixtures";
import { users } from "../../config/user";
import { Documents_p } from '../../pages/D/Documents_p';


test('Reports smoke test', {tag: '@Smoke'}, async ({login, nav, search, reports, home, page}) => {

    const doc = new Documents_p(page);

    await login.openPage();
    await login.loginUser(users.mgrDoc);
    await nav.openProcess('Document Control', "Documents");
    await search.reportsButton.click();
    await reports.openEasyReport('Portrait');
    await home.userLogout();

});
