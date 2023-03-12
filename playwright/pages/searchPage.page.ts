import { Page,Locator } from "@playwright/test";

export class SearchPage{
    readonly searchResultsTextLoc: Locator;
    readonly allLinksLoc: Locator;
    constructor(page: Page){
        this.searchResultsTextLoc = page.locator('#content > h3')
        this.allLinksLoc = page.locator('[href^="/projects/redmine/wiki/"]')
        
    }
    searchResText() {
        return this.searchResultsTextLoc
    }
    getLinkFromFirstButton() {
        return this.allLinksLoc.nth(1).getAttribute('href')
    }
    async clickFirstLink() {
        await this.allLinksLoc.nth(1).click()
    }
}