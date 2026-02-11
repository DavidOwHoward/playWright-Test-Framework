import { Locator, Page } from '@playwright/test';


export class LayoutsAndFiltersPanel {

    readonly page: Page;
    readonly layoutAndFiltersButton: Locator;
    readonly showFiltersAndLayout: Locator;
    readonly root: Locator;
    readonly layoutsList: Locator;
    readonly layoutsSearch: Locator;
    readonly layoutsAdd: Locator;
    readonly filtersList: Locator;
    readonly filterSearch: Locator;
    readonly filtersAdd: Locator;


    constructor(page: Page) {

      this.layoutAndFiltersButton = page.locator('#settings-search-toolbar');
      this.showFiltersAndLayout = page.getByRole('menuitem', { name: 'Show Filters & Layouts Panel' });
      this.root = page.locator('.layouts-and-filters-panel');
      this.layoutsList = page.locator('.layouts-and-filters-container')
          .getByText('Layouts');

      this.layoutsSearch = page.locator('#layouts-text-search-settings');
      this.layoutsAdd = page.locator('#layouts-add-search-settings');
      this.filtersList = page.locator('.layouts-and-filters-container')
          .getByText('Filters');

      this.filterSearch = page.locator('#filters-text-search-settings');
      this.filtersAdd = page.locator('#filters-add-search-settings');



    }

    async layoutsOpenSearch (searchLayout: string): Promise<void> {

        await this.layoutAndFiltersButton.click();
        await this.showFiltersAndLayout.click();
        await this.layoutsList.click();
        await this.layoutsSearch.fill(searchLayout);

    }

    async filtersOpenSearch(searchFilter: string): Promise<void> {

        //await this.layoutAndFiltersButton.click();
        await this.filtersList.click();
        await this.filterSearch.fill(searchFilter);
    }
}