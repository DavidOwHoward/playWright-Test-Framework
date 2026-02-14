import {expect, Locator, type Page} from '@playwright/test';
import { clearSortCheck } from "../utils/clearSortCheck"
import { groupColumn } from "../utils/dragAndDrop";
import { KendoGrid} from "../components/KendoGrid";

export class SearchScreen {
    readonly page: Page;
    readonly searchBox: Locator;
    readonly clearSearch: Locator;
    readonly searchGrid: Locator;
    readonly searchGridRow: Locator;
    readonly groupPanel: Locator;
    readonly groupPanelRemove: Locator;
    readonly groupGridRoot: Locator;
    readonly addButton: Locator;
    readonly ellipseButton: Locator;
    readonly favoriteButton: Locator;
    readonly reportsButton: Locator;
    readonly actionsButton: Locator;
    readonly closeButton: Locator;
    readonly refreshButton: Locator;
    readonly clearSortButton: Locator;
    readonly clearGroupButton: Locator;
    readonly actionsExport: Locator;
    readonly actionsBulk: Locator;
    readonly favoriteIcon: Locator;
    readonly grid: KendoGrid;



    constructor (page: Page) {
        this.page = page;
        this.searchBox = page.locator('#filter-text-search-toolbar');
        this.searchGrid = page.locator('kendo-grid-list')
            .locator('table')
            .locator('tbody')

        this.searchGridRow = this.searchGrid
            .locator('tr')

        this.groupPanel = page.getByRole('toolbar', { name: 'Group panel' });
        this.groupPanelRemove = this.groupPanel
            .locator('.k-chip-remove-action')

        this.groupGridRoot = page.locator('.k-grid-table-wrap')
        this.grid = new KendoGrid(this.groupGridRoot)
        this.clearSearch = page.locator('#filter-text-clear-search-toolbar')
        this.addButton = page.locator('#new-search-toolbar');
        this.ellipseButton = page.locator('#more-search-toolbar');
        this.favoriteButton = page.getByRole('menuitem', { name: 'Favorites' });
        this.reportsButton = page.getByRole('button', {name: 'Reports'});
        this.actionsButton = page.getByRole('button', {name: 'Actions'});
        this.closeButton = page.getByRole('button', {name: 'Close', exact: true});
        this.refreshButton = page.locator('#refresh-search-footer');
        this.clearSortButton = page.locator('#clear-sorting-search-toolbar');
        this.clearGroupButton = page.locator('#grouping-color-search-toolbar');
        this.actionsExport = page.locator('#export-search-toolbar');
        this.actionsBulk = page.locator('#bulk-search-toolbar');
        this.favoriteIcon = this.favoriteButton.locator('mat-icon')


    };
    //this is going to be turned into its own method when I get to working with the search screen
    async findRecordSearch(searchText: string) {

        await this.searchBox.fill(searchText);
    };

    async ClearSearch() {

        await this.clearSearch.click()
    }

    async addNewRecord() {

        await this.addButton.click();
    };

    async openRecord(recId: string): Promise<void> {

        await this.searchGrid.getByText(`${recId}`).dblclick();
    }

    async clearSort() {
        await this.clearSortButton.click();
        await clearSortCheck(this.page);
    }

    async dragDrop(column: string) {
        await groupColumn(this.page , column)
    }

    async toggleFavorite() {
        //open the favorite menu
        await this.ellipseButton.click();

        //evaluate the icon text and store as iconBefore since it's before the first click action
        const iconBefore = await this.favoriteIcon.evaluate(el => el.textContent.trim()
        );

        //click the button
        await this.favoriteButton.click();

        //since the menu closes after click, reopen the menu
        await this.ellipseButton.click();

        //evaluate the icon after the click and store it as icon after
        const iconAfter = await this.favoriteIcon.evaluate(el => el.textContent.trim())

        if(iconBefore === 'star') {
            expect(iconAfter).toBe('star_outline')

        } else
            expect(iconAfter).toBe('star');
    }

}