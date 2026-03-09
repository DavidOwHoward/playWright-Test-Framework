import { type Page} from '@playwright/test';


export class ConfirmationDialog {
    constructor(private page: Page, private title: string) {}

    get root() {
        return this.page.getByRole('dialog')
            .filter({ has: this.page.getByRole('heading', { name: this.title }) });
    };

    get yes() {
        return this.root.getByRole('button', { name: 'Yes' });
    };

    get no() {
        return this.root.getByRole('button', { name: 'No' });
    };

    get leave() {
        return this.root.getByRole('button', { name: 'Leave' });
    };

    get continue() {
        return this.root.getByRole('button', { name: 'Continue Editing' });
    };

    get cancel() {
        return this.root.getByRole('button', { name: 'Cancel' });
    };

    get remove() {
        return this.root.getByRole('button', { name: 'Remove' });
    };

};