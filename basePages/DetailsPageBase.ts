import { Locator, type Page, expect} from '@playwright/test';
import { DetailsTopToolBar } from '../components/DetailsTopToolBar';

export class DetailsPageBase extends DetailsTopToolBar {


    readonly footer: Locator;
    readonly closeButton: Locator;
    readonly saveButton: Locator;
    readonly saveNextButton: Locator;
    readonly stateSelector: Locator;
    readonly saveStateBar: Locator;
    readonly stateDialog: Locator;    

    constructor(page: Page)  {

        super(page);
        this.footer = page.locator('.footer-toolbar');
        this.saveStateBar = this.footer
            .locator('.commands-container');

        this.saveButton = this.saveStateBar
            .getByRole('button', {name:'Save'});
        this.saveNextButton =this.saveStateBar
            .getByRole('button', {name:'Save & Next'});
        this.closeButton = this.saveStateBar
            .getByRole('button', { name: 'Close', exact: true });
        this.stateSelector = this.saveStateBar
            .getByRole('button', {name:'Active'});
        this.stateDialog = page.locator('eqms-details-layout-dialog-confirm-state');   
        

};
    
    async closeRecord() {
        await expect(this.saveButton, 'Check to see if Save button is disabled.').toHaveClass(/mat-mdc-button-disabled/)
        await this.closeButton.click();
    };


    async selectState(state: string) {        
        
        await expect(this.stateDialog, 'The State popup was not visible').toBeVisible();
        const stateButton = this.page.getByRole('button', {name: state});
        await expect(stateButton, `Could not find "${state}" in the State dialog`).toBeVisible();
        await this.stateDialog.getByRole('button', {name: state}).click();
        await this.snack.waitForContains(/was/i);
    };

    async saveRecord(state?: string) {
        await expect(this.saveButton, 'Check to see if Save button is enabled.')
        .not.toHaveClass(/mat-mdc-button-disabled/);

        await this.saveButton.click();
  
        const outcome = await Promise.race([
            this.stateDialog.waitFor({ state: 'visible' }).then(() => 'state' as const),
            this.snack.message.waitFor({ state: 'visible' }).then(() => 'snack' as const),
        ]);

        if (outcome === 'state') {
            if (!state) throw new Error('saveRecord(state) required when State dialog appears.');
            await this.selectState(state);
        } else {
    
        await this.snack.waitForContains(/was/i);
            return;
        };
  
        await this.snack.waitForContains(/was/i);
    };

};