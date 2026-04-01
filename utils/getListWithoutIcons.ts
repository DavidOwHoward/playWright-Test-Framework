import { Locator } from '@playwright/test';

// easy reports have additional icons which make it difficult to assert on the text content of list items. This function removes the icons from the DOM and returns an array of the text content of the list items without modifying the actual DOM of the page. 
// It is a bit hacky but it works and is much easier than trying to account for the icons in the assertions.
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