import { Page,Locator } from "@playwright/test";

export class signinPageLocators{
    readonly page: Page;
    signinBut(page) {
        return page.locator('.login')
    }
    usernameField(page) {
        return page.locator('#username')
    }
    passwordField(page) {
        return page.locator('#password')
    }
    passButton(page) {
        return page.locator('//tr[4]/td[2]/input')
    }
    errorMessageText(page) {
        return page.locator('#flash_error')
    }
    passMessageText(page) {
        return page.locator('#flash_notice')
    }
}