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

    async expandGroup(groupRow: Locator) {

        const stateCell = groupRow.locator('td[aria-expanded]');
        await groupRow.locator('a[aria-label="Expand Group"]').click()
        await expect(stateCell).toHaveAttribute('aria-expanded', 'true');


    }

    async collapseGroup(groupRow: Locator) {

        const stateCell = groupRow.locator('td[aria-expanded]');
        await groupRow.locator('a[aria-label="Collapse Group"]').click()
        await expect(stateCell).toHaveAttribute('aria-expanded', 'false');
        await expect
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
        console.log(groupCount);
        const gridBody = this.root.locator('tbody');
        const masterRow = gridBody.locator('tr.k-master-row');

        for (let i = 0; i < groupCount; i++) {

            const groupRow = groups.nth(i);

            const totalItems = this.getGroupChildCount(groupRow);

            // const nextGroupRow = Number(rawNextGroupRow);


            if (!(await this.isGroupExpanded(groupRow))) {

                const rawIndexStart = await groupRow.getAttribute('aria-rowindex');
                const indexStart = Number(rawIndexStart);
                await this.expandGroup(groupRow)
                await expect(gridBody.locator(`tr[aria-rowindex="${indexStart + 1}"]`)).toBeVisible();
                let indexEnd: number;

                    if (i + 1 < groupCount) {
                        const nextGroup = groups.nth(i + 1);
                        const rawEnd = await nextGroup.getAttribute('aria-rowindex');
                        indexEnd = Number(rawEnd);
                    } else {
                        // last group: end is last row in tbody (+1 so the loop includes the last row)
                        const rawLast = await gridBody.locator('tr').last().getAttribute('aria-rowindex');
                        indexEnd = Number(rawLast) + 1;
                    }
                // const nextGroup = groups.nth(i + 1);
                // const rawIndexEnd = await nextGroup.getAttribute('aria-rowindex');
                // const indexEnd = Number(rawIndexEnd);
                console.log(`this is the header: ${groupRow}`);
                // console.log(`this is the next header: ${nextGroup}`);
                console.log(`this is the start: ${indexStart}`);
                console.log(`this is the end: ${indexEnd}`);

                let rowCount = 0
                for (let rowIndex = indexStart + 1; rowIndex < indexEnd; rowIndex++) {
                    let row = gridBody.locator(`tr[aria-rowindex="${rowIndex}"]`);
                    const isMaster = await row.evaluate(el =>
                        el.classList.contains('k-master-row'))
                    if (isMaster) {
                        rowCount += 1
                    }
                    console.log(`this is the count:${rowCount}`);
                    console.log(`this is the row we got: ${row}`);


                }

                //await this.findAllChildGroups(groupRow)
                await this.collapseGroup(groupRow)

            }

        }



    }
}