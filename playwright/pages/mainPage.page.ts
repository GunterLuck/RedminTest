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
    async checkeOverviewButtonClickability() {
        await this.overviewButtonLocator.click({trial: true })
    }
    async checkDownloadButtonClickability() {
        await this.downloadButtonLocator.click({trial: true })
    }
    async clickDownloadButton() {
        await this.downloadButtonLocator.click()
    }
    async checkActivityButtonClickability() {
        await this.activityButtonLocator.click({trial: true })
    }
    async checkeRadmapButtonClickability() {
        await this.roadmapButtonLocator.click({trial: true })
    }
    async checkIssuesButtonClickability() {
        await this.issuesButtonLocator.click({trial: true })
    }
    async checkNewsButtonClickability() {
        await this.newsButtonLocator.click({trial: true })
    }
    async checkWikiButtonClickability() {
        await this.wikiButtonLocator.click({trial: true })
    }
    async checkBoardsButtonClickability() {
        await this.boardsButtonLocator.click({trial: true })
    }
    async checkRepositoryButtonClickability() {
        await this.repositoryButtonLocator.click({trial: true })
    }
    async clickSignInButton() {
        await this.signinButtonLoc.click()
    }
    async clickSignUpButton() {
        await this.signUpButtonLoc.click()
    }
    async enterTextInSearchField(randomTextGen) {
        await this.searchFieldLoc.fill(randomTextGen)
    }
    async pressEnterOnSearchField() {
        await this.searchFieldLoc.press('Enter')
    }
}

