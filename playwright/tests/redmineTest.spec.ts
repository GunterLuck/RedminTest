import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage.page';
import { TextGeneratorHelper } from '../../Helper/helperTextGenerator';
import { SearchPage } from '../pages/searchPage.page';
import { DownloadPage } from '../pages/downloadPage.page';
import { SignupPage } from '../pages/signupPage.page';
import { SigninPage } from '../pages/signinPage.page';

let mainPage: MainPage
let textGenerator: TextGeneratorHelper
let searchPage: SearchPage
let downloadPage: DownloadPage
let signUpPage: SignupPage
let signInPage: SigninPage
let Name
let Password
let Email
let Text
let testText

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.redmine.org/');
        mainPage = new MainPage(page)
        textGenerator = new TextGeneratorHelper()
        searchPage = new SearchPage(page)
        downloadPage = new DownloadPage(page)
        signUpPage = new SignupPage(page) 
        signInPage = new SigninPage(page)
        Name = textGenerator.randomName()
        Password = textGenerator.randomPassword()
        Email = textGenerator.randomEmail()
        Text = textGenerator.randomText()
        testText = textGenerator.testSerchText()
});
test.describe('Test cases', () => {
    test('1) Main menu buttons clickability test', async () => {
        await mainPage.checkeOverviewButtonClickability()
        await mainPage.checkDownloadButtonClickability()
        await mainPage.checkActivityButtonClickability()
        await mainPage.checkeRadmapButtonClickability()
        await mainPage.checkIssuesButtonClickability()
        await mainPage.checkNewsButtonClickability()
        await mainPage.checkWikiButtonClickability()
        await mainPage.checkBoardsButtonClickability()
        await mainPage.checkRepositoryButtonClickability()
    })
    test('2) Test search field with zero results', async () => {
        await mainPage.enterTextInSearchField(Text)
        await mainPage.pressEnterOnSearchField()
        const resultsText = searchPage.searchResText()
        await expect(resultsText).toContainText("Results (0)")
    })
    test('3) Test search field with results, and check the first link for a match ', async ({ page }) => {
        await mainPage.enterTextInSearchField(testText)
        await mainPage.pressEnterOnSearchField()
        const linkUrl = await searchPage.getLinkFromFirstButton()
        await searchPage.clickFirstLink()
        await expect(page).toHaveURL('https://www.redmine.org' + linkUrl);
    })
    test('4) 4 main download buttons clickability test', async () => {
        await mainPage.clickDownloadButton()
        for (let i = 0; i < 4; i++){
            await downloadPage.checkDownloadButtonsClickability(i).click({trial: true })
        }
    })
    test('5) Test Sign Up with valid values', async () => {
        await mainPage.clickSignUpButton()
        await signUpPage.enterValidUserLoginText(Name)
        await signUpPage.enterValidUserPasswordText(Password)
        const password = await signUpPage.userPasswordField().inputValue()
        await signUpPage.enterValidPasswordPassText(password)
        await signUpPage.enterValidUserNameText(Name)
        await signUpPage.enterValidUserLastnameText(Name)
        await signUpPage.enterValidUserMailText(Email)
        await signUpPage.clickLanguageButton()
        await signUpPage.clickLanguageEngButton()
        await signUpPage.clickPassButton()
        await signUpPage.checkMessageTextVisibility()
    })
    test('6) Test Sign In with negative scenario', async () => {
        await mainPage.clickSignInButton()
        await signInPage.enterInvalidUsernameField(Name)
        await signInPage.enterInvalidPasswordField(Password)
        await signInPage.clickPassButton()
        await signInPage.checkMessageTextVisibility()
    })
})