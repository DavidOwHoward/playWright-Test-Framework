import { type Page } from '@playwright/test';
import {HomeTopToolBar} from "../components/HomeTopToolBar";
import { LayoutsAndFiltersPanel} from "../components/filterAndLayoutPanel";
import { SearchFilterRow} from "../components/SearchFilterRow";


export class HomePage {
    readonly page: Page;
    readonly httb: HomeTopToolBar
    readonly lfp: LayoutsAndFiltersPanel;
    readonly srfr: SearchFilterRow



    constructor(page: Page) {

        this.page = page;
        this.httb = new HomeTopToolBar(page);
        this.lfp = new LayoutsAndFiltersPanel(page);
        this.srfr = new SearchFilterRow(page);

    }


}