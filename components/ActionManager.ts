import {expect, type Locator, type Page} from '@playwright/test';


export class ActionManager {
    readonly page: Page;
    readonly assignments: Locator;
    readonly approvals: Locator;
    readonly groupItem: Locator;
    readonly groupMessage: Locator;
    readonly groupMessageH3: Locator;
    readonly open: Locator;

    constructor(page: Page) {
        this.page = page;
        this.assignments = page.locator('.assignments');
        this.approvals = page.locator('.approvals');
        this.groupItem = this.assignments.locator('.notification-group-item');
        this.groupMessage = this.assignments.locator('.notification-group-item-message');
        this.groupMessageH3 = this.groupMessage.locator('h3');
        this.open = this.assignments.locator('.notification-buttons-container').getByRole('button').filter({hasText:"open_in_new"});
    }

    async openAssignment(group: string, assignment: string,  searchString: string) {
        const assignmentGroup = this.assignments.locator(`#assignment-group${group}-shell`);

        
        await assignmentGroup.click();
        
        await expect(this.groupItem.first()).toBeVisible();

        for (let i = 0; i <= 4; i++) {
            await this.groupItem.filter({hasText:assignment}).nth(i).click();
            let rawMatch = await this.groupMessageH3.innerText();       
                if (!(rawMatch.includes(searchString))) {
                    await this.groupItem.nth(i).click();
                    continue;              
                } else {
                    await this.open.click();
                    return;
                }       
        }
            throw new Error(`Could not find assignment with text: ${searchString}`);
    }
}