import { test } from '@playwright/test'
import { HomePage} from "../basePages/HomePageBase.spec";
import { users } from "../config/user";
import { loginPage } from "../basePages/LoginBase"



test.use({
    viewport: {width: 1920, height: 1080}
})

test('First Go', async ({ page }) => {
    const login = new loginPage(page);
    const home = new HomePage(page);

    await login.openPage();
    await login.loginUser(users.demo);
    await home.nav.navOpenProcess('NCR & CAPA', "Non-Conformances");
   


})


