import {expect, type Locator, type Page} from '@playwright/test';


export class HomeTopToolBar {
    readonly page: Page;
    readonly globalSearch: Locator;
    readonly helpAbout: Locator;
    readonly globalText: Locator;
    readonly docLibraryLink: Locator;
    readonly walkMeLink: Locator;
    readonly aboutLink: Locator;
    readonly enhancementLink: Locator;
    readonly globalSearchSend: Locator;
    readonly globalClose: Locator;
    readonly aboutDialog: Locator;
    readonly closeWalkMe: Locator;
    readonly walkMeFrame: Locator;
    readonly walkMeDisabled: Locator;
    readonly globalSearchContainer: Locator;
    readonly closeDisabledWalkMe: Locator;
    readonly profile: Locator;
    readonly profileSettings: Locator;
    readonly logout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.helpAbout = page.locator('button#help-shell');
        this.docLibraryLink = page.getByRole('menuitem', { name: 'Document library' });
        this.aboutLink = page.getByRole('menuitem', { name: 'About' });
        this.aboutDialog = page.locator('eqms-dialog-about-environment');
        this.enhancementLink = page.getByRole('menuitem', { name: 'Submit Enhancement Idea' });
        this.walkMeLink = page.getByRole('menuitem', { name: 'Guide Me' });
        this.closeWalkMe = page.locator('.walkme-menu')
            .getByTitle('Close');

        this.walkMeFrame = page.locator('.walkme-menu');
        this.walkMeDisabled = page.locator('EQMS-GUIDE-ME-DIALOG')
            .getByText('Could not establish connection to Guide me server.');

        this.closeDisabledWalkMe = page.locator('[role="dialog"]:has(mat-icon:text("close"))')
            .getByText('close');

        this.globalSearch = page.locator('button#global-search-shell')
        this.globalText = page.getByRole('textbox', { name: 'Global Search' });
        this.globalSearchSend = page.locator('button#global-search-submit-shell');
        this.globalSearchContainer = page.locator('eqms-global-search');
        this.globalClose = page.locator('eqms-global-search')
            .getByRole('button', { name: 'Close', exact: true });

        this.profile = page.locator('button#profile-shell');
        this.profileSettings = page.getByRole('menuitem', { name: 'Settings' });
        this.logout = page.getByRole('menuitem', { name: 'Sign Out' });


    }

    //TO DO: Create a helper function to click on a context menu and select an item inside that menu(helpAbout and profileSettings)
    async openDocLibrary() {

        await this.helpAbout.click();

        await expect(this.page.getByRole('menuitem', { name: /about/i }))
            .toBeVisible({ timeout: 5000 });

        const [page2] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.docLibraryLink.click(),
        ]);

        await expect(page2).toHaveTitle(/Document Library/i);
        await page2.close();
    }

    async openEnhancement() {

        await this.helpAbout.click();

        await expect(this.page.getByRole('menuitem', { name: /about/i }))
            .toBeVisible({ timeout: 5000 });

        const [page2] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.enhancementLink.click(),
        ]);

        await expect(page2).toHaveTitle(/Onelogin/i);
        await page2.close();
    }

    async openWalkMe(): Promise<'opened' | 'disabled'> {
        await this.helpAbout.click();
        await expect(this.walkMeLink).toBeVisible({ timeout: 5000 });
        await this.walkMeLink.click();

        // Wait for either: frame appears OR disabled message appears
        const result = await Promise.race([
            this.walkMeFrame.waitFor({ state: 'visible', timeout: 5000 }).then(() => 'Walk Me opened' as const),
            this.walkMeDisabled.waitFor({ state: 'visible', timeout: 5000 }).then(() => 'Walk Me is disabled' as const),
        ]);

        if (result === 'Walk Me opened') {
            await this.closeWalkMe.click();
            return 'opened';
        } else {
            await this.closeDisabledWalkMe.click();
            console.log('Walk Me is disabled');
            return 'disabled';
        }
    }


    async globalSearchOpen(data: string) {
        await this.globalSearch.click();
        await expect(this.globalText).toBeVisible({ timeout: 5000 });
        await this.globalText.fill(data);
        await this.globalSearchSend.click();
        await expect(this.globalSearchContainer).toBeVisible({timeout:20000});
        await this.globalClose.click();

    }


    async openAboutDialog() {
        await this.helpAbout.click();
        await this.aboutLink.click();
        await expect(this.aboutDialog).toBeVisible({ timeout: 5000 });
        await this.page.keyboard.press('Escape');
        await expect(this.aboutDialog).not.toBeVisible({ timeout: 5000 });

    }


    async openSettings() {
        await this.profile.click()
        await this.profileSettings.click();
        await expect(this.page.locator('fm-sidenav')
            .locator('eqms-actions-bar-settings')
            .getByText('Show User Name')).toBeVisible()

    }


    async userLogout() {
        await this.profileSettings.click();
        await this.logout.click();
        await expect(this.page).toHaveTitle('Login - QAD EQMS');

    }

}