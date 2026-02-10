import {expect, Locator, type Page} from '@playwright/test';
import {checkIfFavorite} from "../utils/checkIfFavorite";
import { clearSortCheck } from "../utils/clearSortCheck"

export class SearchScreen {
    readonly page: Page;
    readonly searchBox: Locator;
    readonly clearSearch: Locator;
    readonly searchGrid: Locator;
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



    constructor (page: Page) {
        this.page = page;
        this.searchBox = page.locator('#filter-text-search-toolbar');
        this.searchGrid = page.locator('kendo-grid-list')
            .locator('table')
            .locator('tbody')

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
    async favoritesButton() {
        await checkIfFavorite(
            this.page
        )
    };

    async openRecord(recId: string): Promise<void> {

        await this.searchGrid.getByText(`${recId}`).dblclick();
    }

    async clearSort() {
        await this.clearSortButton.click();
        await clearSortCheck(this.page);
    }

}