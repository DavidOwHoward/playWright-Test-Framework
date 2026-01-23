import {Page, test} from '@playwright/test'
import { SearchScreen } from "../pages/SearchScreenBase.spec";
import { loginPage } from "../pages/loginBase.spec"
import { HomePage } from "../pages/HomePageBase.spec"

test('SearchScreen', async ({page}) => {
    const srch = new SearchScreen(page);
    const login = new loginPage(page);
    const home = new HomePage(page);

    await login.openPage();
    await login.loginUser('demo','qad');
    await home.nav.searchProcess('Record Types');
    await home.nav.navOpenProcess('RecordTypes_p');
    await srch.searchBox.fill('Audits');

})