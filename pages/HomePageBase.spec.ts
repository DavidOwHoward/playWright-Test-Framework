import { type Page } from '@playwright/test';
import {SideNav} from "../components/sideNav";
import {HomeTopToolBar} from "../components/HomeTopToolBar";
import { LayoutsAndFiltersPanel} from "../components/filterAndLayoutPanel.spec";

export class HomePage {
    readonly page: Page;
    readonly nav: SideNav;
    readonly ttb: TopToolBar
    readonly lfp: LayoutsAndFiltersPanel;


    constructor(page: Page) {

        this.page = page;
        this.nav = new SideNav(page);
        this.httb = new HomeTopToolBar(page);
        this.lfp = new LayoutsAndFiltersPanel(page);
    }


}