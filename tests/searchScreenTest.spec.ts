import { test } from '@playwright/test'
import { SearchScreen } from "../pages/SearchScreenBase.spec";
import { loginPage } from "../pages/loginBase.spec"
import { HomePage } from "../pages/HomePageBase.spec"

// test.use({
//     viewport: {width: 1920, height: 1080}})

test('SearchScreen', async ({page}) => {
    const srch = new SearchScreen(page);
    const login = new loginPage(page);
    const home = new HomePage(page);

    await login.openPage();
    await login.loginUser('demo','qad');
    await home.nav.searchProcess('Record Types');
    await home.nav.navOpenProcess('RecordTypes_p');
    //await srch.searchBox.fill('Audits');
    //await srch.addButton.click();
    //await srch.ellipseButton.click();
    //await srch.reportsButton.click();
    //await srch.actionsButton.click();
    //await srch.clearGroup.click();
    //await srch.clearSort.click();
    //await srch.refreshButton.click();
    //await srch.closeButton.click();
    //await srch.filterAndLayout.click();
    //await srch.showFilterRow();
    await home.lfp.layoutsOpenSearch('Data');
    await home.lfp.filtersOpenSearch('Active');



})