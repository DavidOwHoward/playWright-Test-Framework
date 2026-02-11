import { expect, type Page } from '@playwright/test';


export async function groupColumn(page: Page, column: string) {
        const anchor = page.locator('.k-drag-clue');
        const target = page.getByRole('toolbar', { name: 'Group panel' })

        await page.getByText(`${column}`).hover();
        await page.mouse.down();
        await page.waitForTimeout(2000);
        await page.mouse.move(600,110);
        await anchor.dragTo(target, {targetPosition: {x:100, y:30}, timeout: 3000});
        await expect(page.locator('.k-grouping-row')).toHaveCount(5);
    }
