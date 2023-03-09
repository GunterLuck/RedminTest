import { Page,Locator } from "@playwright/test";

export class DownloadPage{
    readonly allDownloadButtonsLocator: Locator;
    constructor(page: Page){
        this.allDownloadButtonsLocator = page.locator('[href^="/releases/redmine"]')
    }
    isClickableDownloadButtons(i) {
        return this.allDownloadButtonsLocator.nth(i)
    }
}
