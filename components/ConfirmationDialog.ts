import { type Page, type Locator, expect} from '@playwright/test';

type ConfirmationButton =
    | 'Yes'
    | 'No'
    | 'Leave'
    | 'Continue Editing'
    | 'Cancel'
    | 'Remove';

export class ConfirmationDialog {
    constructor(
        private readonly page: Page,
        private readonly title: string
    ) {}

    get root(): Locator {
        return this.page
            .getByRole('dialog')
            .filter({ has: this.page.getByRole('heading', { name: this.title }) });
    }

    button(name: ConfirmationButton): Locator {
        return this.root.getByRole('button', { name });
    }

    async dialog(name: ConfirmationButton): Promise<void> {
        await this.button(name).click();
    }

}

