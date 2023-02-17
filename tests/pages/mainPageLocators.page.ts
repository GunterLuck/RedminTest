import { Page,Locator } from "@playwright/test";

export class mainPageLocators{
    readonly page: Page;
    readonly headerButtons: Locator
    readonly redmineTextField: Locator
    constructor(page: Page){
        this.headerButtons = page.locator('div[id="main-menu"]>ul>li')
        this.redmineTextField = page.locator('div.wiki>h1')
    }
    overviewBut() {
        return this.headerButtons.locator('.overview')
    }
    downloadBut() {
        return this.headerButtons.locator('.download')
    }
    activityBut() {
        return this.headerButtons.locator('.activity')
    }
    roadmapBut() {
        return this.headerButtons.locator('.roadmap')
    }
    issuesBut() {
        return this.headerButtons.locator('.issues')
    }
    newsBut() {
        return this.headerButtons.locator('.news')
    }
    wikiBut() {
        return this.headerButtons.locator('.wiki')
    }
    boardsBut() {
        return this.headerButtons.locator('.boards')
    }
    repositoryBut() {
        return this.headerButtons.locator('.repository')
    }
    redTextFil(page) {
        return page.locator('div.wiki>h1')
    }
    MPButton(page) {
        return page.locator('.home')
    }
    redDownTextFil(page) {
        return page.locator('.bgr')
    }
    
}

