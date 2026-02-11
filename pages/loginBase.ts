import { expect, type Locator, type Page } from '@playwright/test';
import { baseUrl } from "../fixtures/constants";
import { LoginUser } from '../config/user';


export class loginPage {
    readonly page: Page
    readonly userNameBox: Locator;
    readonly passwordBox: Locator;
    readonly signInButton: Locator;
    readonly loginToast: Locator;




    constructor(page: Page) {
        this.page = page;
        this.userNameBox = page.getByLabel('User Name');
        this.passwordBox = page.getByLabel('Password');
        this.signInButton = page.getByRole("button", {name: 'Sign in'});
        this.loginToast = page.locator('.cdk-overlay-pane')
            .getByText('Welcome');

    }
    //TO DO: Turn these into one method
   

    async loginUser(user: LoginUser) {
        await this.userNameBox.fill(user.username);
        await this.passwordBox.fill(user.password);
        await this.signInButton.click();
        await expect(this.page).toHaveTitle('Home - EQMS');
    //wait for the toast to go away since some test run fast enough that it can be in the way of grabbing elements
        await this.loginToast.waitFor({state: 'hidden'});
    }

    async openPage(){
        await this.page.goto(baseUrl);
        await expect(this.page).toHaveTitle('Login - QAD EQMS');

    }
}










