import { Page,Locator, } from "@playwright/test";

export class SigninPage{
    readonly usernameFieldLoc: Locator
    readonly passButtonLoc: Locator
    readonly passwordFieldLoc: Locator
    readonly errorMessageLoc: Locator
    constructor(page: Page){
        this.usernameFieldLoc =  page.locator('#username')
        this.passwordFieldLoc = page.locator('#password')
        this.passButtonLoc = page.locator('[name="login"]')
        this.errorMessageLoc = page.locator('#flash_error')
    }
    async enterInvalidUsernameField(Name) {
        await this.usernameFieldLoc.fill(Name)
    }
    async enterInvalidPasswordField(Password) {
        await this.passwordFieldLoc.fill(Password)
    }
    async clickPassButton() {
        await this.passButtonLoc.click()
    }
    async checkMessageTextVisibility() {
        await this.errorMessageLoc.isVisible()
    }
}