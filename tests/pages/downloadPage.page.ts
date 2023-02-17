import { Page,Locator } from "@playwright/test";

export class downloadPageLocators{
    readonly page: Page;
    firstBut(page) {
        return page.locator('//ul[2]/li/ul/li[1]/a')
    }
    secondBut(page) {
        return page.locator('//ul[2]/li/ul/li[2]/a')
    }
    thirdBut(page) {
        return page.locator('//ul[3]/li/ul/li[2]/a')
    }
    fourthBut(page) {
        return page.locator('//ul[2]/li/ul/li[2]/a')
    }
}
