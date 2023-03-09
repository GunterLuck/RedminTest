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
    async fillRandomUserLoginText(randomNameGen) {
        await this.userLoginFieldLoc.fill(randomNameGen)
    }
    async fillRandomUserPasswordText(randomPasswordGen) {
        await this.userPasswordFieldLoc.fill(randomPasswordGen)
    }
    userPasswordField(){
        return this.userPasswordFieldLoc
    }
    async fillUserPasswordPassText(password) {
        await this.userPasswordPassFieldLoc.fill(password)
    }
    async fillRandomUserNameText(randomNameGen) {
        await this.userNameFieldLoc.fill(randomNameGen)
    }
    async fillRandomUserLastnameText(randomNameGen) {
        await this.userLastnameFieldLoc.fill(randomNameGen)
    }
    async fillRandomUserMailText(randomEmailGen) {
        await this.userMailFieldLoc.fill(randomEmailGen)
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
    async isVisibleMessageText() {
        await this.messageTextLoc.isVisible()
    }
}