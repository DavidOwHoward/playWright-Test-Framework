import { expect, type Locator, type Page } from '@playwright/test';

//helper function to cleanup any potential invalid characters entered by the user
function escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
export class navBasePage {
    readonly page: Page;
    readonly navSearch: Locator;
    readonly navCollapse:Locator;
    readonly navHoverText: Locator;
    readonly navPanel: Locator;

    //used to assert correct process is opened
    private lastSearchedProcess?: string;



    constructor(page: Page) {
        this.page = page;
        this.navSearch = page.getByPlaceholder('Looking for a Process');
        this.navCollapse = page.getByRole('button').filter({ hasText: 'menu' });
        this.navHoverText = page.locator('.cdk-overlay-container .mat-mdc-tooltip-surface');
        this.navPanel = page.locator('.fm-navigation');
    }

    //evaluates the classList to determine the state of the Navigation Panel, if it is collapsed, it will expand it.
    async ensureNavExpanded() {
        const isCollapsed = await this.navPanel.evaluate(el =>
            el.classList.contains('side-to-icon')
        );

        if (isCollapsed) {
            await this.navCollapse.click();
        }
    }



    //enters search text into Nav Search. checks to see if nav is collapsed and expands it if it is
    async searchProcess(searchText: string) {
        await this.navCollapse.hover()
        await expect(this.navHoverText).toBeVisible()
        await this.ensureNavExpanded()
        this.lastSearchedProcess = searchText;
        await this.navSearch.fill(searchText);
    }

    //clicks the link to open the process. for now, will use the searchText variable to validate the correct process object opens using the browser title
    async navOpenProcess(path: string) {
        const link = this.page.locator(`a[href="/search/${path}"]`);
        await link.waitFor({ state: 'visible' });
        await link.click();
        if (!this.lastSearchedProcess) {
            throw new Error(
                'navOpenProcess() was called before searchProcess(). ' +
                'Call searchProcess("...") first so the POM can validate the title.'
            );
        }
        //asserting that the correct process is opened. The regEx string simply removes any invalid characters. Not sure if necessary but doesn't hurt anything
        await expect(this.page).toHaveTitle(new RegExp(`^${escapeRegExp(this.lastSearchedProcess)}\\s-\\sEQMS$`, 'i'));
    }

}

export class homePage {
    readonly page: Page;
    readonly globalSearch: Locator;
    readonly notificationsButton: Locator;
    readonly helpAbout: Locator;
    readonly profileSettings: Locator;
    readonly addDashboard: Locator;
    readonly dashboardDesign: Locator;
    readonly dashboardEdit: Locator;
    readonly globalText: Locator;
    readonly dashboardDelete: Locator;
    readonly userSettings: Locator;
    readonly logout: Locator;
    readonly logoutEdit: Locator;
    readonly approvals: Locator;
    readonly assignments: Locator;
    readonly comments: Locator;
    readonly refresh: Locator;
    readonly settingsClose: Locator;
    readonly docLibraryLink: Locator;
    readonly guideMeLink: Locator;
    readonly aboutLink: Locator;
    readonly enhancementLink: Locator;
    readonly emptyDashboard: Locator;
    readonly cancelDashboard: Locator;
    readonly applyDashboard: Locator;
    readonly notificationsFlyout: Locator;
    readonly flyoutSettings: Locator;
    readonly dashboardDialog: Locator;
    readonly globalSearchSend: Locator;
    readonly globalSearchResultsContainer: Locator;
    readonly globalClose: Locator;
    readonly aboutDialog: Locator;


    constructor(page: Page) {
        this.page = page;
        this.globalSearch = page.locator('button#global-search-shell')
        this.notificationsButton = page.locator('button#notifications-shell');
        this.helpAbout = page.locator('button#help-shell');
        this.profileSettings = page.locator('button#profile-shell');
        this.addDashboard = page.locator('button#add-dashboard');
        this.dashboardDesign = page.locator('button#design');
        this.globalText = page.getByRole('textbox', { name: 'Global Search' });
        this.globalSearchSend = page.locator('button#global-search-submit-shell');
        this.userSettings = page.getByRole('menuitem', { name: 'Settings' });
        this.logout = page.getByRole('menuitem', { name: 'Sign Out' });
        this.notificationsFlyout = page.locator('eqms-actions-bar-notification-approvals');
        //this.approvals = this.notificationsFlyout.locator('button:has(mat-icon:text("thumb_up"))');
        this.approvals = page.locator('[role="tab"]:has(mat-icon:text("thumb_up"))');
        this.assignments = page.locator('[role="tab"]:has(mat-icon:text("event_available"))');
        this.comments = page.locator('[role="tab"]:has(mat-icon:text("chat"))');
        this.flyoutSettings = page.locator('[role="tab"]:has(mat-icon:text("settings"))');
        this.refresh = this.notificationsFlyout.locator('button:has(mat-icon:text("autorenew"))');
        this.settingsClose = this.notificationsFlyout.locator('button:has(mat-icon:text("close"))');
        this.docLibraryLink = this.page.getByRole('menuitem', { name: 'Document library' });
        this.guideMeLink = this.page.getByRole('menuitem', { name: 'Guide Me' });
        this.enhancementLink = this.page.getByRole('menuitem', { name: 'Enhancement' });
        this.aboutLink = this.page.getByRole('menuitem', { name: 'About' });
        this.dashboardDialog = this.page.getByRole('dialog', { name: 'New Dashboard'})
        this.cancelDashboard = this.dashboardDialog.locator('button:has(mat-icon:text("close"))');
        this.applyDashboard = this.dashboardDialog.locator('button:has(mat-icon:text("done"))');
        this.emptyDashboard = this.dashboardDialog.locator('button:has(mat-icon:text("computer"))');
        this.globalSearchResultsContainer = page.locator('eqms-global-search');
        this.globalClose = page.getByRole('button', { name: 'Close', exact: true });
        this.aboutDialog = this.page.locator('eqms-dialog-about-environment')

    }

    async openDocLibrary() {

        await this.helpAbout.click();


        await expect(this.page.getByRole('menuitem', { name: /about/i }))
            .toBeVisible({ timeout: 5000 });


        const [page2] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.docLibraryLink.click(),
        ]);

        await expect(page2).toHaveTitle(/Document Library/i);
    }

    async openEnhancement () {

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

}



