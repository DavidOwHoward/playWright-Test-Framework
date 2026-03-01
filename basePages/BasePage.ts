import { expect, type Locator, type Page } from '@playwright/test';
import { Sections } from '../components/Sections';

export abstract class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    protected fieldRoot(id: string): Locator {
    return this.page.locator(`#${id}_f`);
    };

    protected sectionByName(name: string): Sections {
        const tab = this.page.getByRole('tablist').locator(`#${name}-section-tab`);
        return new Sections(this.page, tab);
    };

    protected fieldRootInSection(fieldId: string, sectionName: string) {
        const root = this.fieldRoot(fieldId);
        const section  = this.sectionByName(sectionName);
        return {root, section};
    };


    async selectState(state: string) {

        const root = this.page.locator('eqms-details-layout-dialog-confirm-state')
        const stateButton = this.page.getByRole('button', {name: state})
        await expect(root, 'The State popup was not visible').toBeVisible();
        await expect(stateButton, `Could not find "${state}" in the State dialog`).toBeVisible();
        await root.getByRole('button', {name: state}).click();
    };



}


