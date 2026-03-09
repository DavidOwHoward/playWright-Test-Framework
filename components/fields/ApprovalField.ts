import { expect } from "@playwright/test";
import { FieldComponent } from "./FieldComponents";
import { ApprovalDialog } from "../ApprovalDialog";
import { LoginUser } from "../../config/user";

export class ApprovalField extends FieldComponent {    

    private signOff() {
        return new ApprovalDialog(this.page);
    };    
    
    private history() {
        return this.page.getByRole('button').filter({hasText: 'restore'})
    };

    private showList() {
        return this.page.getByRole('button').filter({hasText: 'format_list_numbered'});
    };

    private reject() {
        return this.page.getByRole('button').filter({hasText: 'close'});
    };

    private approve() {
        return this.page.getByRole('button').filter({hasText: 'done'});
    };

    private historyDialog(){
        return this.page.getByRole('heading', {name:"Rejection  History"})
    };

    private closeHistory() {
        return this.historyDialog().getByRole('button', {name: 'Cancel'});
    };

    private approvalListDialog() {
        return this.page.getByRole('heading', {name: "Approval Details"});
    };

    private closeApprovalList() {
        return this.approvalListDialog().getByRole('button', {name: 'Cancel'});
    };
    
    private approveDialog() {
        return this.page.getByRole('heading', {name: "Sign Off"});
    };


    async showHistory() {
        
        await this.ensureReady();
        await this.history().click();
        await expect(this.historyDialog(), 'Check to see if the Rejection History dialog opened').toBeVisible();
        await this.closeHistory().click();
        await expect(this.historyDialog(), 'Check to see if the Rejection History dialog closed').not.toBeVisible();

    };

    async openApprovalList() {
        
        await this.ensureReady();
        await this.showList().click();
        await expect(this.approvalListDialog(), 'Check to see if the Approval Details dialog opened').toBeVisible();
        await this.closeApprovalList().click();
        await expect(this.approvalListDialog(), 'Check to see if the Approval Details dialog closed').not.toBeVisible();

    };

    async rejectRecord(user: LoginUser, comments: string) {

        const dialog = this.signOff();

        await this.ensureReady();
        await this.reject().click();
        await expect(dialog.root, 'Check to see if the Sign Off dialog opened').toBeVisible();
        await dialog.userName.fill(user.username);
        await dialog.password.fill(user.password);
        await expect(dialog.reject, 'Check to see if Reject button is disabled before comments added').toBeDisabled();
        await dialog.comments.fill(comments);
        await dialog.reject.click();
        await expect(dialog.root, 'Check to see if the Sign Off dialog closed').not.toBeVisible();
        };

    async approveRecord(user: LoginUser, comments?: string) {   
        
        const dialog = this.signOff();

        await this.ensureReady();
        await this.approve().click();
        await expect(dialog.root, 'Check to see if the Sign Off dialog opened').toBeVisible();
        await dialog.userName.fill(user.username);
        await dialog.password.fill(user.password);
        if (comments) {
            await dialog.comments.fill(comments);
        }
        await dialog.approve.click();
        await expect(dialog.root, 'Check to see if the Sign Off dialog closed').not.toBeVisible();
    };

};
