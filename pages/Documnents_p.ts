import { type Page, Locator } from '@playwright/test';
import { DetailsPageBase } from '../basePages/DetailsPageBase';
import { TextField } from '../components/fields/TextField';
import { ScrField } from '../components/fields/ScrField';
import { NumericField } from '../components/fields/Numeric';
import { DateField } from '../components/fields/DateField';

export class Documents extends DetailsPageBase {

    
    get documentTitle() {
        
        const { root, section} = this.fieldRootInSection('DocumentTitle', 'General');
        
        return new TextField(this.page, root, async () => section.openAndWait(root));
    };

    get documentType() {

        const { root, section} = this.fieldRootInSection('DocumentType', 'General');

        return new ScrField(this.page, root, async () => section.openAndWait(root));
    };
    
    get notificationRole() {
        
        const { root, section} = this.fieldRootInSection('NotificationRole', 'Owner');
        
        return new ScrField(this.page, root, async () => section.openAndWait(root));   
    };
    
    get numberofDaysforApproval() {
        
        const { root, section } = this.fieldRootInSection('NumberofDaysforApproval', 'Owner');

        return new NumericField(this.page, root, async () => section.openAndWait(root));
    };

    get effectiveDate() {

        const { root, section } = this.fieldRootInSection('EffectiveDate', 'General');
    
        return new DateField(this.page, root, async () => section.openAndWait(root));    
    
    };
    
    
    // readonly page: Page;
    // readonly documentTitle: Locator;
    // readonly documentType: Locator;
    // readonly owner: Locator;
    // readonly responsibleSite: Locator;
    // readonly domain: Locator;

    // constructor(page: Page) {
    //     this.page = page;
    //     this.documentTitle = page.locator('#DocumentTitle_f');
    //     this.documentType = page.locator('#DocumentType_f');
    //     this.owner = page.locator('#Owner_f')
    //     this.domain = page.locator('#Entity_f')
    //     this.responsibleSite = page.locator('#Site_f');
    // };

}