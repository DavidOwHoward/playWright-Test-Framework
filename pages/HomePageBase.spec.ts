import { type Page } from '@playwright/test';
import {SideNav} from "../components/sideNav";
import {TopToolBar} from "../components/topToolBar";
import { LayoutsAndFiltersPanel} from "../components/filterAndLayoutPanel.spec";

export class HomePage {
    readonly page: Page;
    readonly nav: SideNav;
    readonly ttb: TopToolBar
    readonly lfp: LayoutsAndFiltersPanel;


    constructor(page: Page) {

        this.page = page;
        this.nav = new SideNav(page);
        this.ttb = new TopToolBar(page);
        this.lfp = new LayoutsAndFiltersPanel(page);
    }


}