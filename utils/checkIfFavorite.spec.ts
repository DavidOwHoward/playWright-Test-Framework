import { expect, Locator, Page } from '@playwright/test';
import {HomePage} from "../pages/HomePageBase.spec";

export async function checkIfFavorite(

    page: Page,

    )
    {

    const home = new HomePage(page);
    const favorite = home.srch.favoriteButton
    const favoriteIcon = home.srch.favoriteButton.locator('mat-icon')
    const menu = home.srch.ellipseButton

    //open the favorite menu
    await menu.click();

    //evaluate the icon text and store as iconBefore since it's before the first click action
    const iconBefore = await favoriteIcon.evaluate(el => el.textContent.trim()
    );

   //click the button
   await favorite.click();

   //since the menu closes after click, reopen the menu
   await menu.click();

   //evaluate the icon after the click and store it as icon after
   const iconAfter = await favoriteIcon.evaluate(el => el.textContent.trim())

   if(iconBefore === 'star') {
       expect(iconAfter).toBe('star_outline')

   } else
       expect(iconAfter).toBe('star');


}
