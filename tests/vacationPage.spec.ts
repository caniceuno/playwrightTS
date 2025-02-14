import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { VacationPage } from '../pages/vacationpage';
import dotenv from 'dotenv';

dotenv.config();

/*
A few pointers, I'd remove Page from all your test file names as these are test files.
Given this is an end-to-end test this filename should be named something like login.e2e.spec.ts
Alternatively, you could have within your tests folder, a subfolder called e2e and then this file called login.spec.ts
*/

//You can also refactor your login code to reuse the authentication across all tests or tests.BeforeEach() or setup a test fixture.

//test fixture name and name outdated.
test.describe('hover test', () => {
    test.only('Successful hover', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const vacationPage = new VacationPage(page);
        const email : string  = process.env.EMAIL as string;
        const password  = process.env.PASSWORD as string;
        await loginPage.login(email, password);
        await homePage.naviagteVacations();
        await vacationPage.selectDay();
        await vacationPage.selectPoc();
        await vacationPage.backToPoc();
        await vacationPage.backToDay();
        const selectedDate = await vacationPage.getSelectedDateTextValue()
        await expect(selectedDate).toBe('02/18/2025')

        /*
        Trello mentiones must verify the start date, end date and point of contact.
        Chrome and Firefox is only required.

    });
});
