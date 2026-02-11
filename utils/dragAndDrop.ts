import { expect, type Page } from '@playwright/test';


export async function groupColumn(page: Page, column: string) {
        const anchor = page.locator('.k-drag-clue');
        const target = page.getByRole('toolbar', { name: 'Group panel' })

        await page.getByText(`${column}`).hover();
        await page.mouse.down();
        await page.waitForTimeout(2000);
        const box = await page.getByText(`${column}`).boundingBox();
        if (!box) throw new Error('No bounding  box for column ' + column);
        await page.mouse.move(box.x + box.width / 2 + 20, box.y + box.height / 2);
        await expect(anchor).toBeVisible();
        await anchor.dragTo(target, {targetPosition: {x:100, y:30}, timeout: 3000});
        await expect(page.locator('.k-grouping-row')).toHaveCount(5);
    }
