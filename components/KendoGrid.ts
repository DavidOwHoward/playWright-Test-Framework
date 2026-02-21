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

    }

    async getGroupChildCount(groupRow: Locator): Promise<number> {

        const raw = await groupRow.locator('.group-counter').innerText();
        const digits = raw.match(/(\d+)\s+items/);
        return digits ? Number(digits[1]) : 0;
    }

    async getRowIndexFromRow(row: Locator):Promise<number> {
        return  Number(await row.getAttribute('aria-rowindex'))
    };

    async waitForFirstChild(index: number) {

        const rowIndex = index + 1;
        const row = this.root.locator(`tr[aria-rowindex="${rowIndex}"]`);
        await expect(row).toBeVisible();
    };

    async checkForPager(groupRow: Locator, indexEnd: number, indexStart: number) {

        const pager = groupRow.locator('.group-pager-container');
        const hasPager = (await pager.count()) > 0;
        const next = groupRow.locator('.group-pager-container').getByText('arrow_right');
        const previous = groupRow.locator('.group-pager-container').getByText('arrow_left');
        const groupCounter = await groupRow.locator('.group-counter').innerText();

        if (hasPager) {
            const before = await groupRow.locator('.group-counter').innerText();
            await next.click();
            const after = await groupRow.locator('.group-counter').innerText()
            expect(before).not.toEqual(after);
            await previous.click();
            expect(groupCounter,'equality not found').toEqual(before);
        }
    }

    async getGroupEndBoundary(groupCount: number, index: number, groups: Locator, gridBody: Locator) {

        if (index + 1 < groupCount) {
            const nextGroup = groups.nth(index + 1);

            const rawEnd = await nextGroup.getAttribute('aria-rowindex');
            if (rawEnd === null) {
                throw new Error('Next group header is missing aria-rowindex')
            }
            const indexEnd = Number(rawEnd)
            if (Number.isNaN(indexEnd)) {
                throw new Error(`Invalid aria-rowindex value: ${rawEnd}`)
            }
            return indexEnd;
        } else {
            const rawLast = await gridBody.locator('tr').last().getAttribute('aria-rowindex');
            if (rawLast === null) {
                throw new Error('Last row in grid is missing aria-rowindex')
            } const lastIndex = Number(rawLast)
            if (Number.isNaN(lastIndex)) {
                throw new Error(`Invalid aria-rowindex value: ${rawLast}`)
            }
            return lastIndex + 1;
        }
    };

    async countRows(indexStart: number, indexEnd:number, gridBody: Locator) {
        let rowCount = 0

        for (let rowIndex = indexStart + 1; rowIndex < indexEnd; rowIndex++) {
            let row = await gridBody.locator(`tr[aria-rowindex="${rowIndex}"]`);
            const isMaster = await row.evaluate(el => el.classList.contains('k-master-row'))
            if (isMaster)
            {
                rowCount += 1;
            }
        } return rowCount;
    };

    async auditGrouping() {

        const groups = this.findAllGroupRows();
        const groupCount = await groups.count();
        const gridBody = this.root.locator('tbody');

        for (let i = 0; i < groupCount; i++) {

            const groupRow = groups.nth(i);

            if (!(await this.isGroupExpanded(groupRow))) {

                const indexStart = await this.getRowIndexFromRow(groupRow);
                await this.expandGroup(groupRow);
                await this.waitForFirstChild(indexStart);
                const indexEnd = await this.getGroupEndBoundary(groupCount, i, groups, gridBody);
                await this.checkForPager(groupRow, indexEnd, indexStart);

                const items = await this.getGroupChildCount(groupRow);
                const actualItems = await this.countRows(indexStart, indexEnd, gridBody);

                expect(items).toEqual(actualItems);
                await this.collapseGroup(groupRow);

            }

        }
    };
}