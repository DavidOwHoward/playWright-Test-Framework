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

    async auditGrouping() {

        const groups = this.findAllGroupRows();
        const groupCount = await groups.count();
        const gridBody = this.root.locator('tbody');
        const masterRow = gridBody.locator('tr.k-master-row');

        for (let i = 0; i < groupCount; i++) {

            const groupRow = groups.nth(i);
            const totalItems = this.getGroupChildCount(groupRow);

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
                        const rawLast = await gridBody.locator('tr').last().getAttribute('aria-rowindex');
                        indexEnd = Number(rawLast) + 1;
                    }

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
                await this.collapseGroup(groupRow);

            }

        }
    };
}