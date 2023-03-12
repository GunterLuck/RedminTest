import { Page,Locator } from "@playwright/test";

export class SignupPage{
    readonly userLoginFieldLoc: Locator
    readonly userPasswordPassFieldLoc: Locator
    readonly userPasswordFieldLoc: Locator
    readonly userNameFieldLoc: Locator
    readonly userLastnameFieldLoc: Locator
    readonly userMailFieldLoc: Locator
    readonly languageButtonLoc: Locator
    readonly languageEngButtonLoc: Locator
    readonly passButtonLoc: Locator
    readonly messageTextLoc: Locator
    constructor(page: Page){
        this.userLoginFieldLoc =  page.locator('#user_login')
        this.userPasswordFieldLoc = page.locator('#user_password')
        this.userPasswordPassFieldLoc = page.locator('#user_password_confirmation')
        this.userNameFieldLoc = page.locator('#user_firstname')
        this.userLastnameFieldLoc = page.locator('#user_lastname')
        this.userMailFieldLoc = page.locator('#user_mail')
        this.languageButtonLoc = page.locator('#user_language')
        this.languageEngButtonLoc = page.locator('[value="en"]')
        this.passButtonLoc = page.locator('[name="commit"]')
        this.messageTextLoc = page.locator('#flash_notice')
    }
    async enterValidUserLoginText(Name) {
        await this.userLoginFieldLoc.fill(Name)
    }
    async enterValidUserPasswordText(Password) {
        await this.userPasswordFieldLoc.fill(Password)
    }
    userPasswordField(){
        return this.userPasswordFieldLoc
    }
    async enterValidPasswordPassText(password) {
        await this.userPasswordPassFieldLoc.fill(password)
    }
    async enterValidUserNameText(Name) {
        await this.userNameFieldLoc.fill(Name)
    }
    async enterValidUserLastnameText(Name) {
        await this.userLastnameFieldLoc.fill(Name)
    }
    async enterValidUserMailText(Email) {
        await this.userMailFieldLoc.fill(Email)
    }
    async clickLanguageButton() {
        await this.languageButtonLoc.click()
    }
    async clickLanguageEngButton() {
        await this.languageEngButtonLoc.dispatchEvent('click')
    }
    async clickPassButton() {
        await this.passButtonLoc.click()
    }
    async checkMessageTextVisibility() {
        await this.messageTextLoc.isVisible()
    }
}