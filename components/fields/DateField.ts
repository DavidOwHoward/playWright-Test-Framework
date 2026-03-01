import { expect } from "@playwright/test";
import { FieldComponent } from "./FieldComponents";
import { parse, isValid } from 'date-fns';


export class DateField extends FieldComponent {
  
    private calendar() {
        return this.page.locator(".k-calendar");
    };
  
    private openCalendar() {
    return this.root.getByRole('button', { name: 'Change Date' });
  };

    private today() {
        return this.calendar().getByRole('link', { name: 'Today' });
    };

    private input() {
        return this.root.locator('input');
    };


    // private setDate(day: string, month: number) {
    //     return this.calendar().getByRole('grid').locator('tbody').nth(month).getByRole('gridcell').locator('.k-link').filter({ hasText: new RegExp(`\\b${day}\\b`)});
    // };


    async open() {
        
        await this.ensureReady();
        await this.openCalendar().click();
        await expect(this.calendar(), "Calendar did not open").toBeVisible();
    };
    
    async setToday() {
        
        await this.ensureReady();
        await this.open();
        await this.today().click();
        await expect(this.calendar()).not.toBeVisible();
    };
    
    async set(value: string) {
        
        const parsed = parse(value, 'MM/dd/yyyy', new Date());
        if (!isValid(parsed)) {
            throw new Error(`Invalid date format: ${value}. Expected format is MM/dd/yyyy.`);
        }
        await this.ensureReady();
        await this.input().pressSequentially(value);
    };

    // async date(day: string, month: number) {
                
    //     await this.open();
    //     await this.setDate(day, month).click();
    //     await expect(this.calendar()).not.toBeVisible();

    // };
};