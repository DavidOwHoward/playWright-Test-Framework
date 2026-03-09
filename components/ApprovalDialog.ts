import { Locator, type Page, expect} from '@playwright/test';


export class ApprovalDialog {
    constructor(private page: Page) {}

    get root() {
        return this.page.getByRole('dialog', { name: "Sign Off" })
            
    };

    get userName() {
        return this.root.getByRole('textbox', { name: 'User Name' });
    };

    get password() {
        return this.root.getByRole('textbox', { name: 'Password' });
    };

    get comments() {
        return this.root.getByRole('textbox', { name: 'Comments' });
    };

    get approveRadio() {
        return this.root.getByRole('radio', { name: 'Approve' });
    };

    get rejectRadio() {
        return this.root.getByRole('radio', { name: 'Reject' });
    };

    get approve() {
        return this.root.getByRole('button', { name: 'Approve' });
    };

    get reject() {
        return this.root.getByRole('button', { name: 'Reject' });
    };

    get cancel() {
        return this.root.getByRole('button', { name: 'Cancel' });
    };

};