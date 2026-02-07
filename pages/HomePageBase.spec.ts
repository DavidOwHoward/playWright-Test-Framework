import { type Page } from '@playwright/test';
import {SideNav} from "../components/sideNav";
import {HomeTopToolBar} from "../components/HomeTopToolBar";
import { LayoutsAndFiltersPanel} from "../components/filterAndLayoutPanel.spec";
import { DetailsTopToolBar } from "../components/DetailsTopToolBar.spec";
import { SearchScreen } from "./SearchScreenBase.spec"
import { ReportsBase} from "../components/ReportBase.spec";
import { SearchFilterRow} from "../components/SearchFilterRow.spec";

export class HomePage {
    readonly page: Page;
    readonly nav: SideNav;
    readonly httb: HomeTopToolBar
    readonly srch: SearchScreen;
    readonly lfp: LayoutsAndFiltersPanel;
    readonly reps: ReportsBase;
    readonly srfr: SearchFilterRow


    constructor(page: Page) {

        this.page = page;
        this.nav = new SideNav(page);
        this.httb = new HomeTopToolBar(page);
        this.lfp = new LayoutsAndFiltersPanel(page);
        this.srch = new SearchScreen(page);
        this.reps = new ReportsBase(page);
        this.srfr = new SearchFilterRow(page);
    }


}