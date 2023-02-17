import { test, expect } from '@playwright/test';
import { mainPageLocators } from './pages/mainPageLocators.page';
import { textGenerator } from '../Helper/helperTextGenerator';
import { searchFieldTestLoc } from './pages/searchFieldTestLoc.page';
import { downloadPageLocators } from './pages/downloadPage.page';
import { signupPageLocators } from './pages/signupPage.page';
import { signinPageLocators } from './pages/signinPage.page';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.redmine.org');
  });


test.describe('1.Test main page buttons and text', () => {
    test('main page buttons and text test', async ({ page }) => {
        const mainPageLoc = new mainPageLocators(page)
        console.log(await mainPageLoc.overviewBut().isEditable())
        console.log(await mainPageLoc.downloadBut().isEditable())
        console.log(await mainPageLoc.activityBut().isEditable())
        console.log(await mainPageLoc.roadmapBut().isEditable())
        console.log(await mainPageLoc.issuesBut().isEditable())
        console.log(await mainPageLoc.newsBut().isEditable())
        console.log(await mainPageLoc.wikiBut().isEditable())
        console.log(await mainPageLoc.boardsBut().isEditable())
        console.log(await mainPageLoc.repositoryBut().isEditable())
        await mainPageLoc.MPButton(page).click()
        console.log(page.url())
        console.log(await mainPageLoc.redTextFil(page).innerText())
        await mainPageLoc.redDownTextFil(page).scrollIntoViewIfNeeded()
        console.log(await mainPageLoc.redDownTextFil(page).innerText())
    })
})
   test.describe('2.Test search field ', () => {
    test('search test', async ({ page }) => {
        const searchFilTestLoc = new searchFieldTestLoc()
        const textGen = new textGenerator()
        await searchFilTestLoc.searchField(page).click()
        await searchFilTestLoc.searchField(page).fill(textGen.randomText())
        await searchFilTestLoc.searchField(page).press('Enter')
        console.log(page.url())
        console.log(await searchFilTestLoc.searchResText(page).innerText())
        await searchFilTestLoc.searchField(page).click()
        await searchFilTestLoc.searchField(page).fill(textGen.testSerchText())
        await searchFilTestLoc.searchField(page).press('Enter')
        console.log(page.url())
        console.log(await searchFilTestLoc.searchResText(page).innerText())
        console.log(await searchFilTestLoc.firstLinc(page).innerText())
        await searchFilTestLoc.firstLinc(page).click()
        console.log(page.url())
    })
})
test.describe('3.Test download ', () => {
    test('download test', async ({ page }) => {
        const mainPageLoc = new mainPageLocators(page)
        const downloadPageLoc = new downloadPageLocators() 
        await mainPageLoc.downloadBut().click()
        console.log(await downloadPageLoc.firstBut(page).isEditable())
        await downloadPageLoc.firstBut(page).click()
        console.log(await downloadPageLoc.secondBut(page).isEditable())
        await downloadPageLoc.secondBut(page).click()
        console.log(await downloadPageLoc.thirdBut(page).isEditable())
        await downloadPageLoc.thirdBut(page).click()
        console.log(await downloadPageLoc.fourthBut(page).isEditable())
        await downloadPageLoc.fourthBut(page).click()
    })
})
test.describe('4.Test Sign Up', () => {
    test('signup test', async ({ page }) => {
        const textGen = new textGenerator()
        const signUpLoc = new signupPageLocators()
        await signUpLoc.signUpBut(page).click()
        await signUpLoc.userLoginFil(page).fill(textGen.randomName())
        await signUpLoc.userPasswordFil(page).fill(textGen.randomPassword())
        const password = await signUpLoc.userPasswordFil(page).inputValue()
        await signUpLoc.userPasswordPassFil(page).fill(password)
        await signUpLoc.userNameFil(page).fill(textGen.randomName())
        await signUpLoc.userLastnameFil(page).fill(textGen.randomName())
        await signUpLoc.userMailFil(page).fill(textGen.randomEmail())
        await signUpLoc.languageBut(page).click()
        await signUpLoc.languageEngBut(page).dispatchEvent('click')
        await signUpLoc.passBut(page).click()
        console.log(await signUpLoc.messageText(page).innerText())
    })
})
test.describe('5.Test Sign In', () => {
    test('signin test', async ({ page }) => {
        const textGen = new textGenerator()
        const signInLoc = new signinPageLocators()
        await signInLoc.signinBut(page).click()
        await signInLoc.usernameField(page).fill(textGen.randomName())
        await signInLoc.passwordField(page).fill(textGen.randomPassword())
        await signInLoc.passButton(page).click()
        console.log(await signInLoc.errorMessageText(page).innerText())
        await signInLoc.signinBut(page).click()
        await signInLoc.usernameField(page).fill(textGen.usernameText())
        await signInLoc.passwordField(page).fill(textGen.passwordText())
        await signInLoc.passButton(page).click()
        console.log(await signInLoc.errorMessageText(page).innerText())
    })
})
