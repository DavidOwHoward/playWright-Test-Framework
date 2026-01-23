import { test } from '@playwright/test'
import { HomePage} from "../pages/HomePageBase.spec";
import { loginPage } from "../pages/loginBase.spec"


test.use({
    viewport: {width: 1920, height: 1080}
})

test('First Go', async ({ page }) => {
    const login = new loginPage(page);
    const home = new HomePage(page);

    await login.openPage();
    await login.logInUser('demo', 'qad');
    await home.nav.searchProcess('Non-Conformances');
    await home.nav.navOpenProcess('Nonconformances_p');


})


