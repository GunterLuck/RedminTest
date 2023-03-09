import { Page,Locator,expect } from "@playwright/test";

export class MainPage{
    readonly overviewButtonLocator: Locator
    readonly downloadButtonLocator: Locator
    readonly activityButtonLocator: Locator
    readonly roadmapButtonLocator: Locator
    readonly issuesButtonLocator: Locator
    readonly newsButtonLocator: Locator
    readonly wikiButtonLocator: Locator
    readonly boardsButtonLocator: Locator
    readonly repositoryButtonLocator: Locator
    readonly signinButtonLoc: Locator
    readonly signUpButtonLoc: Locator
    readonly redmineDownTextField: Locator
    readonly searchFieldLoc: Locator;
    constructor(page: Page){
        this.overviewButtonLocator = page.locator('.overview')
        this.downloadButtonLocator = page.locator('.download')
        this.activityButtonLocator = page.locator('.activity')
        this.roadmapButtonLocator = page.locator('.roadmap')
        this.issuesButtonLocator = page.locator('.issues')
        this.newsButtonLocator = page.locator('.news')
        this.wikiButtonLocator = page.locator('[class="wiki selected"]')
        this.boardsButtonLocator = page.locator('.boards')
        this.repositoryButtonLocator = page.locator('.repository')
        this.redmineDownTextField = page.locator('.bgr')
        this.signinButtonLoc = page.locator('.login')
        this.signUpButtonLoc = page.locator('.register')
        this.searchFieldLoc = page.locator('#q')
    }
    async isClicableOverviewButton() {
        await this.overviewButtonLocator.click({trial: true })
    }
    async isClicableDownloadButton() {
        await this.downloadButtonLocator.click({trial: true })
    }
    async clickDownloadButton() {
        await this.downloadButtonLocator.click()
    }
    async isClicableActivityButton() {
        await this.activityButtonLocator.click({trial: true })
    }
    async isClicableRadmapButton() {
        await this.roadmapButtonLocator.click({trial: true })
    }
    async isClicableIssuesButton() {
        await this.issuesButtonLocator.click({trial: true })
    }
    async isClicableNewsButton() {
        await this.newsButtonLocator.click({trial: true })
    }
    async isClicableWikiButton() {
        await this.wikiButtonLocator.click({trial: true })
    }
    async isClicableBoardsButton() {
        await this.boardsButtonLocator.click({trial: true })
    }
    async isClicableRepositoryButton() {
        await this.repositoryButtonLocator.click({trial: true })
    }
    async checkRedmineDownTextField() {
        const RedmineText = this.redmineDownTextField
        await expect(RedmineText).toHaveText("Powered by Redmine © 2006-2014 Jean-Philippe Lang")
    }
    async clickSignInButton() {
        await this.signinButtonLoc.click()
    }
    async clickSignUpButton() {
        await this.signUpButtonLoc.click()
    }
    async fillTextInSearchField(randomTextGen) {
        await this.searchFieldLoc.fill(randomTextGen)
    }
    async pressEnterOnSearchField() {
        await this.searchFieldLoc.press('Enter')
    }
}

