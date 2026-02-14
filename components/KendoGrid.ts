import {expect, Locator} from '@playwright/test';


export class KendoGrid {
    readonly root: Locator;

    constructor(root: Locator) {
        this.root = root;
    }


    findAllGroupRows(): Locator {

        return this.root
            .locator('tbody')
            .locator('tr[kendogridgroupheader]');
    }

    async isGroupExpanded(groupRow: Locator): Promise<boolean> {

        const stateCell = groupRow.locator('td[aria-expanded]');
        const expanded = await stateCell.getAttribute('aria-expanded');
        return expanded === 'true';

    }

    async expandGroup(groupRow: Locator)  {

        const stateCell = groupRow.locator('td[aria-expanded]');
        await groupRow.locator('a[aria-label="Expand Group"]').click()
        await expect(stateCell).toHaveAttribute('aria-expanded', 'true');

    }

    async collapseGroup(groupRow: Locator)  {

        const stateCell = groupRow.locator('td[aria-expanded]');
        await groupRow.locator('a[aria-label="Collapse Group"]').click()
        await expect(stateCell).toHaveAttribute('aria-expanded', 'false');
    }

    async findAllChildGroups(groupRow: Locator)  {

        const childCount = await groupRow.locator('.group-counter').innerText();
        const childCountNum = Number(childCount.match(/\d+/)?.[0]);
        const gridBody = this.root.locator('tbody');
        const masterRow = gridBody.locator('tr.k-master-row');
        const indexStart = await groupRow.getAttribute('aria-rowindex');

    }


    async auditGrouping() {

        const groups = this.findAllGroupRows()
        const groupCount = await groups.count()
              for (let i =0; i < groupCount; i++) {
                const groupRow = groups.nth(i)
                if (!(await this.isGroupExpanded(groupRow))) {
                    await this.expandGroup(groupRow)
                    await this.findAllChildGroups(groupRow)
                    await this.collapseGroup(groupRow)

                }

            }




    }


}