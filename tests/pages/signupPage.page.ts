import { Page,Locator } from "@playwright/test";

export class signupPageLocators{
    readonly page: Page;
    signUpBut(page) {
        return page.locator('.register')
    }
    userLoginFil(page) {
        return page.locator('#user_login')
    }
    userPasswordFil(page) {
        return page.locator('#user_password')
    }
    userPasswordPassFil(page) {
        return page.locator('#user_password_confirmation')
    }
    userNameFil(page) {
        return page.locator('#user_firstname')
    }
    userLastnameFil(page) {
        return page.locator('#user_lastname')
    }
    userMailFil(page) {
        return page.locator('#user_mail')
    }
    languageBut(page) {
        return page.locator('#user_language')
    }
    languageEngBut(page) {
        return page.locator('//*[@id="user_language"]/option[12]')
    }
    passBut(page) {
        return page.locator('[id="new_user"]>input')
    }
    messageText(page) {
        return page.locator('#flash_notice')
    }
}