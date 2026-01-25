import { Locator, Page } from '@playwright/test';


export class LayoutsAndFiltersPanel {

    readonly root: Locator;
    readonly layoutsList: Locator;
    readonly layoutsSearch: Locator;
    readonly layoutsAdd: Locator;
    readonly filtersList: Locator;
    readonly filterSearch: Locator;
    readonly filtersAdd: Locator;


    constructor(page: Page) {

      this.root = page.locator('.layouts-and-filters-panel');
      this.layoutsList = this.root.locator('.layouts-and-filters-container')
          .getByText('Layouts');

      this.layoutsSearch = page.locator('#layouts-text-search-settings');
      this.layoutsAdd = page.locator('#layouts-add-search-settings');
      this.filtersList = this.root.locator('.layouts-and-filters-container')
          .getByText('Filters');

      this.filterSearch = page.locator('#filters-text-search-settings');
      this.filtersAdd = page.locator('#filters-add-search-settings');



    }
}