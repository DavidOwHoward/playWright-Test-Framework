import { Locator, type Page, expect} from '@playwright/test';
import { DetailsTopToolBar } from '../components/DetailsTopToolBar';
import { ApprovalDialog } from '../components/ApprovalDialog';
import { LoginUser } from '../config/user';
import { dateOnly } from '../helpers/dateFormat';


export class DetailsPageBase extends DetailsTopToolBar {


    readonly footer: Locator;
    readonly closeButton: Locator;
    readonly saveButton: Locator;
    readonly saveNextButton: Locator;
    readonly stateSelector: Locator;
    readonly saveStateBar: Locator;
    readonly stateDialog: Locator;
    readonly approveDialog: Locator
    readonly approve: ApprovalDialog;
    readonly breadcrumb: Locator;    

    constructor(page: Page)  {

        super(page);
        this.approve = new ApprovalDialog(page);
        this.footer = page.locator('.footer-toolbar');
        this.saveStateBar = this.footer
            .locator('.commands-container');

        this.saveButton = this.saveStateBar
            .getByRole('button', {name:'Save'});

        this.saveNextButton =this.saveStateBar
            .getByRole('button', {name:'Save & Next'});

        this.closeButton = this.saveStateBar
            .getByRole('button', { name: 'Close', exact: true });

        this.stateDialog = page.locator('eqms-details-layout-dialog-confirm-state');
        this.approveDialog = page.getByRole('button', {name: "Approve / Reject"});

        this.breadcrumb = page.locator('fm-breadcrumbs')
            .locator('.breadcrumbs-container')
            .locator('ul')
        

};
    
    async closeRecord() {
        await expect(this.saveButton, 'Check to see if Save button is disabled.').toHaveClass(/mat-mdc-button-disabled/)
        await this.closeButton.click();
    };

    async moveState(oldState: string, newState: string) {

        let currentState = await this.saveStateBar.getByRole('button', { name: oldState});
        const stateMenu = this.page.getByRole('menu').getByRole('menuitem', {name:"Show States Diagram"});
        const nextState = this.page.getByRole('menu').getByRole('menuitem', { name: newState });
        await currentState.click();
        await expect(stateMenu, `Check to see if state menu appeared`).toBeVisible();
        await nextState.click();
        const stateAfter = await this.saveStateBar.getByRole('button', {name: newState});
        await expect(stateAfter, `Check to see if state changed to ${newState}`).toBeVisible();   
    };

    async assertState(state: string) {

        await expect(this.saveStateBar.getByRole('button', {name: state}), `Check to see if the state is ${state}`).toBeVisible();
    };


    async selectState(state: string) {        
        
        await expect(this.stateDialog, 'Check to see if State dialog is visible').toBeVisible();
        const stateButton = this.page.getByRole('button', {name: state, exact: true});
        await expect(stateButton, `Could not find "${state}" in the State dialog`).toBeVisible();
        await this.stateDialog.getByRole('button', {name: state, exact: true}).click();
        await this.snack.waitForContains(/was/i);
    };

    async saveRecord(state?: string) {
        
        await expect(this.saveButton, 'Check to see if Save button is enabled.')
        .not.toHaveClass(/mat-mdc-button-disabled/);

        await this.saveButton.click();
  
        let outcome = await Promise.race([
            this.stateDialog.waitFor({ state: 'visible' }).then(() => 'state' as const),
            this.snack.message.waitFor({ state: 'visible' }).then(() => 'snack' as const),
        ]);

        if (outcome === 'state') {
            if (!state) throw new Error(`Check to see if ${state} is available.`);
            await this.selectState(state);
        } else {
        // tempororary regex until I can find a better way to assert    
        await this.snack.waitForContains(/was/i);
            return;
        };
        // tempororary regex until I can find a better way to assert
        await this.snack.waitForContains(/was/i);
        await this.snack.waitForGone();
    };


    async approveRecord(user: LoginUser, comments?: string) {
           
        await this.approveDialog.click();
        await expect(this.approve.root, 'Check to see if Approval dialog is visible').toBeVisible();
        // the below assertion is not working for some reason. it is resolving to 9 locators according to the error. will need to possibly revist the locator
        // await expect(this.approve.userName, 'Check to see if current users user name filled in by default').toContainText(user.username);
        await this.approve.password.fill(user.password);
        if(comments) {
            await this.approve.comments.fill(comments);
        }
        await this.approve.approve.click();
        await this.snack.waitForContains(/Approval action completed/i);
        await this.snack.waitForGone();
    };

    async rejectRecord(user: LoginUser, comments: string) {

        await expect(this.approve.root, 'Check to see if Approval dialog is visible').toBeVisible();
        // the below assertion is not working for some reason. it is resolving to 9 locators according to the error. will need to possibly revist the locator
        // await expect(this.approve.userName, 'Check to see if current users user name filled in by default').toContainText(user.username);
        await this.approve.password.fill(user.password);
        await expect(this.approve.reject, 'Check to see if Reject button is disabled before comments added').toBeDisabled();
        await this.approve.comments.fill(comments);
        await this.approve.reject.click();
        await this.snack.waitForContains(/Approval action completed/i);
        await this.snack.waitForGone();
    };

    async setToday() {
        return dateOnly();
    };

};