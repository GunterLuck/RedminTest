import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage.page';
import { TextGeneratorHelper } from '../../Helper/helperTextGenerator';
import { SearchPage } from '../pages/searchPage.page';
import { DownloadPage } from '../pages/downloadPage.page';
import { SignupPage } from '../pages/signupPage.page';
import { SigninPage } from '../pages/signinPage.page';

let mainPageLoc: MainPage
let textGenerator: TextGeneratorHelper
let searchFieldTestLoc: SearchPage
let downloadPageLoc: DownloadPage
let signUpLoc: SignupPage
let signInLoc: SigninPage

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.redmine.org/');
        mainPageLoc = new MainPage(page)
        textGenerator = new TextGeneratorHelper()
        searchFieldTestLoc = new SearchPage(page)
        downloadPageLoc = new DownloadPage(page)
        signUpLoc = new SignupPage(page) 
        signInLoc = new SigninPage(page)
});
test.describe('Test cases', () => {
    test('1) Main menu buttons clickability test', async () => {
        await mainPageLoc.isClicableOverviewButton()
        await mainPageLoc.isClicableDownloadButton()
        await mainPageLoc.isClicableActivityButton()
        await mainPageLoc.isClicableRadmapButton()
        await mainPageLoc.isClicableIssuesButton()
        await mainPageLoc.isClicableNewsButton()
        await mainPageLoc.isClicableWikiButton()
        await mainPageLoc.isClicableBoardsButton()
        await mainPageLoc.isClicableRepositoryButton()
    })
    test('2) Test search field with zero results', async () => {
        const randomTextGen = textGenerator.randomText()
        await mainPageLoc.fillTextInSearchField(randomTextGen)
        await mainPageLoc.pressEnterOnSearchField()
        const resultsText = searchFieldTestLoc.searchResText()
        await expect(resultsText).toContainText("Results (0)")
    })
    test('3) Test search field with results, and check the first link for a match ', async ({ page }) => {
        const testText = textGenerator.testSerchText()
        await mainPageLoc.fillTextInSearchField(testText)
        await mainPageLoc.pressEnterOnSearchField()
        const linkUrl = await searchFieldTestLoc.getLinkFromFirstButton()
        await searchFieldTestLoc.clickFirstLink()
        await expect(page).toHaveURL('https://www.redmine.org' + linkUrl);
    })
    test('4) 4 main download buttons clickability test', async () => {
        await mainPageLoc.clickDownloadButton()
        for (let i = 0; i < 4; i++){
            await downloadPageLoc.isClickableDownloadButtons(i).click({trial: true })
        }
    })
    test('5) Test Sign Up with valid values', async () => {
        await mainPageLoc.clickSignUpButton()
        const randomNameGen = textGenerator.randomName()
        const randomPasswordGen = textGenerator.randomPassword()
        const randomEmailGen = textGenerator.randomEmail()
        await signUpLoc.fillRandomUserLoginText(randomNameGen)
        await signUpLoc.fillRandomUserPasswordText(randomPasswordGen)
        const password = await signUpLoc.userPasswordField().inputValue()
        await signUpLoc.fillUserPasswordPassText(password)
        await signUpLoc.fillRandomUserNameText(randomNameGen)
        await signUpLoc.fillRandomUserLastnameText(randomNameGen)
        await signUpLoc.fillRandomUserMailText(randomEmailGen)
        await signUpLoc.clickLanguageButton()
        await signUpLoc.clickLanguageEngButton()
        await signUpLoc.clickPassButton()
        await signUpLoc.isVisibleMessageText()
    })
    test('6) Test Sign In with negative scenario', async () => {
        await mainPageLoc.clickSignInButton()
        const randomNameGen = textGenerator.randomName()
        const randomPasswordGen = textGenerator.randomPassword()
        await signInLoc.fillRandomUsernameField(randomNameGen)
        await signInLoc.fillRandomPasswordField(randomPasswordGen)
        await signInLoc.clickPassButton()
        await signInLoc.isVisibleErrorMessage()
    })
})