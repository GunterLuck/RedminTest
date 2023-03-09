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
    async fillRandomUsernameField(randomNameGen) {
        await this.usernameFieldLoc.fill(randomNameGen)
    }
    async fillRandomPasswordField(randomPasswordGen) {
        await this.passwordFieldLoc.fill(randomPasswordGen)
    }
    async clickPassButton() {
        await this.passButtonLoc.click()
    }
    async isVisibleErrorMessage() {
        await this.errorMessageLoc.isVisible()
    }
}