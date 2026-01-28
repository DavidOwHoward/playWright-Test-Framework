import { expect, Page, locator } from '@playwright/test';


export async function createLocatorFromListSpec(

    page: Page,
    //menu: locator,
    menuList: locator,

)
{

 const menuItems = await page.menuList.allTextContents();
 console.log(menuItems);

}