import { Given, When, Then } from '@cucumber/cucumber';
import { users } from "../../config/user";
import { expect } from '@playwright/test';

Given('the user enters the application URL {string}', async ({login,page}) => {
           // Write code here that turns the phrase above into concrete actions
           await login.openPage();
           
           return 'pending';
         });

When('the user enters valid credentials', async ({login,page}) => {
           // Write code here that turns the phrase above into concrete actions
           await login.userNameBox.fill(users.mgrDoc.username);
           await login.passwordBox.fill(users.mgrDoc.password);
           return 'pending';
         });

When('the user clicks the Sign In button', async ({login,page}) =>{
           // Write code here that turns the phrase above into concrete actions
           await login.signInButton.click();
           return 'pending';
         });

Then('the user should be logged in successfully', async ({page}) => {
           // Write code here that turns the phrase above into concrete actions
              await expect(page).toHaveTitle('Home - EQMS');
           return 'pending';
         });

Then('the user should see the Welcome message at the bottom of the home page', async ({login,page}) => {
           // Write code here that turns the phrase above into concrete actions
           await login.loginToast.waitFor({state: 'hidden'});
           return 'pending';
         });