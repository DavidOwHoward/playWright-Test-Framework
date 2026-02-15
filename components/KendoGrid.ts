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

    async getGroupChildCount(groupRow: Locator): Promise<number> {
        const raw = await groupRow.locator('.group-counter').innerText(); // "(8 items)"
        const digits = raw.match(/\d+/)?.[0];
        return digits ? Number(digits) : 0;
    }

    // async findAllChildGroups(groupRow: Locator)  {



    //     const totalItems = await this.getGroupChildCount(groupRow);
    //     // const indexStart = await Number(groupRow.getAttribute('aria-rowindex'));
    //     for (let i = 0; i < totalItems; i++) {
    //       const index = await masterRow.nth(i).getAttribute('aria-rowindex');
    //       console.log(index);
    //     }
    //
    // }


    async auditGrouping() {

        const groups = this.findAllGroupRows();
        const groupCount = await groups.count();
        const gridBody = this.root.locator('tbody');
        const masterRow = gridBody.locator('tr.k-master-row');

                for (let i =0; i < groupCount; i++) {

                  const groupRow = groups.nth(i);
                  const nextGroup = groups.nth(i+1);
                  const totalItems = this.getGroupChildCount(groupRow);
                  const rawIndexStart = await groupRow.getAttribute('aria-rowindex');
                  const indexStart = Number(rawIndexStart);

                if (!(await this.isGroupExpanded(groupRow))) {

                    await this.expandGroup(groupRow)
                    const rawIndexEnd = await nextGroup.getAttribute('aria-rowindex');
                    const indexEnd = Number(rawIndexEnd);

                    let rowCount = 0
                    for (let rowIndex = indexStart + 1; rowIndex < indexEnd; rowIndex++) {
                        if (gridBody.locator('tr[aria-rowindex=${rowIndex}]'))  {
                            rowCount += 1
                        }

                    }

                    //await this.findAllChildGroups(groupRow)
                    await this.collapseGroup(groupRow)

                }

            };




    }


}