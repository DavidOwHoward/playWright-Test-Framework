import { Locator } from '@playwright/test';


export async function getListWithoutIcons(listItems: Locator): Promise<string[]> {
    return await listItems.evaluateAll((nodes) => {
        return nodes.map((node) => {
            //Make a deep copy so the DOM isn't modified
            const clone = node.cloneNode(true) as Element;

            //Remove all mat-icon elements from the clone
            clone.querySelectorAll('mat-icon').forEach((icon) => icon.remove());

            const text = clone.textContent;

            return text
        });
    });
}