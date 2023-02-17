import { Page,Locator } from "@playwright/test";

export class searchFieldTestLoc{
    readonly page: Page;
    searchField(page) {
        return page.locator('#q')
    }
    searchResText(page) {
        return page.locator('div[id="search-results-counts"]~h3')
    }
    firstLinc(page) {
        return page.locator('//dt[1]/a')
    }

}