import {expect, Locator, Page} from '@playwright/test';

export class ReportsBase{

    readonly page: Page;
    readonly locator: Locator;
    readonly reportsButton: Locator;
    readonly reportsContainer: Locator
    readonly reportsList: Locator;
    readonly listMenu:  Locator;
    readonly reportsExport: Locator;
    readonly togglePrint: Locator;
    readonly printReport: Locator;
    readonly reportZoomIn: Locator;
    readonly reportZoomOut: Locator;
    readonly reportFullPage: Locator;
    readonly reportsClose: Locator;
    readonly reportsRefresh: Locator;
    readonly reportsRender: Locator;
    readonly portrait: Locator;
    readonly portraitFit: Locator;
    readonly landscape: Locator;
    readonly landscapeFit: Locator;
    readonly reportSearch: Locator;



    constructor(page: Page) {

        this.page = page;
        this.reportsButton = page.getByRole('button', {name: 'Reports'});
        this.reportsContainer = page.locator('eqms-report-viewer');
        this.reportsList = this.reportsContainer
            .locator('.mat-mdc-nav-list');

        this.listMenu = this.reportsContainer
            .locator('.utilities-container')
            .locator('.mat-icon', {hasText:"menu"});

        //the icon text for this button is both "file download" and "arrow_drop_down" which just seems like the wrong way to locate this button
        this.reportsExport = this.reportsContainer
            .locator('.utilities-container')
            .locator('.mat-mdc-menu-trigger');

        this.togglePrint = this.reportsContainer
            .locator('.utilities-container')
            .locator('.mat-icon', {hasText:"description"});

        this.printReport = this.reportsContainer
            .locator('.utilities-container')
            .locator('mat-icon', {hasText:"print"});

        this.reportZoomIn = this.reportsContainer
            .locator('.utilities-container')
            .locator('mat-icon', {hasText:"zoom_in"});

        this.reportZoomOut = this.reportsContainer
            .locator('.utilities-container')
            .locator('mat-icon', {hasText:"zoom_out"});

        this.reportFullPage = this.reportsContainer
            .locator('.utilities-container')
            .locator('mat-icon', {hasText:"screenshot_monitor"});

        this.reportsClose = this.reportsContainer
            .locator('.utilities-container')
            .getByRole('button', {name:"Close"});

        this.reportsRefresh = this.reportsContainer
            .locator('.utilities-container')
            .locator('mat-icon', {hasText:"refresh"});

        this.reportsRender = this.reportsContainer
            .locator('.utilities-container')
            .locator('mat-icon', {hasText:"close"});

        this.portrait = this.reportsList
            .locator('.mat-list-item')
            .getByText('Portrait', {exact: true});

        this.portraitFit = this.reportsList
            .locator('.mat-list-item')
            .getByText('Portrait Fit to Page', {exact: true});

        this.landscape = this.reportsList
            .locator('.mat-list-item')
            .getByText('Landscape', {exact: true});

        this.landscapeFit = this.reportsList
            .locator('.mat-list-item')
            .getByText('Landscape Fit to Page', {exact: true});

        this.reportSearch = this.reportsList
            .locator('mat-icon', {hasText:"Search"})



    }
}