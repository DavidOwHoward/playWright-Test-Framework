import { Given, When, Then } from '@cucumber/cucumber';
import { users } from "../../config/user";
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('the user vists the application login page', async function (this: CustomWorld) {
  
    await this.login.openPage();
});

When('the user logs in with {string} credentials', async function (this: CustomWorld, credentialType: string) {
    
    const credentialMap = {
        valid: users.mgrDoc,
        passwordInvalid: { username: users.mgrDoc.username, password:'123'},
        usernameInvalid: { username: 'MrgDoc', password: users.mgrDoc.password}
    } as const;

    const creds = credentialMap[credentialType as keyof typeof credentialMap];
    if (!creds) throw new Error(`Unknown credential type ${credentialType}`);
    await this.login.userNameBox.fill(creds.username);
    await this.login.passwordBox.fill(creds.password);
    await this.login.signInButton.click();
});


Then('the user should be on the home page', async function (this: CustomWorld) {
  
    await expect(this.page).toHaveTitle('Home - EQMS');
});

Then('the user should remain on the login page', async function (this: CustomWorld) {
      
    await expect(this.page).toHaveTitle('Login - QAD EQMS');
});

Then('the user should see an error message', async function (this: CustomWorld) {

    const outcome = await Promise.race(
        [this.login.snack.waitForContains('Login failed. Please check your username and password and try again.')
            .then(() => 'Login failed. Please check your username and password and try again.'), 
        this.login.snack.waitForContains('Authentication failed.')
            .then(() => 'Authentication failed.')
        ]
    );
  
    expect(outcome).toMatch(/Login failed. Please check your username and password and try again.|Authentication failed./);    
    
});


