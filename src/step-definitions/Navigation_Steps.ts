import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { users } from "../../config/user";
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { SideNav } from '../../components/sideNav';


Given('the user visits the application login page', async function (this: CustomWorld) {
    
    await this.login.openPage();    

});

When('the user logs in with valid credentials', async function (this: CustomWorld) {

    await this.login.userNameBox.fill(users.mgrDoc.username);
    await this.login.passwordBox.fill(users.mgrDoc.password);
    await this.login.signInButton.click();

});

Then('the user is on the home page', async function (this: CustomWorld) {
    
    await expect(this.page).toHaveTitle('Home - EQMS');
});

Then('the user can find each process in the navigation menu', async function (this: CustomWorld, dataTable: DataTable) {

    const sideNav = new SideNav(this.page);
    
    const processes = dataTable.rows().map(row => row[0]);

    for (const process of processes) {
        await sideNav.navSearch.fill(process); 
        await sideNav.navContainsProcess(process);
    await sideNav.navSearch.fill('');

    };
});


