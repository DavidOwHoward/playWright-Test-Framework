import { expect, type Locator, type Page } from '@playwright/test';



export class loginPage {
    readonly page: Page
    readonly userNameBox: Locator;
    readonly passwordBox: Locator;
    readonly signInButton: Locator;




    constructor(page: Page) {
        this.page = page;
        this.userNameBox = page.getByLabel('User Name');
        this.passwordBox = page.getByLabel('Password');
        this.signInButton = page.getByRole("button", {name: 'Sign in'});

    }
    //TO DO: Turn these into one method
    async loginUser(user: string, password: string) {
        await this.userNameBox.fill(user)
        await this.passwordBox.fill(password)
        await this.signInButton.click();
    }

    async openPage(){
        const url = 'https://homedev.qad.com'
        await this.page.goto(url);
        await expect(this.page).toHaveTitle('Login - QAD EQMS');
    }
}










