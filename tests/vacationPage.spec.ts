import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { VacationPage } from '../pages/vacationpage';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Day off test', () => {
    test('Successful hover', async ({ page }) => {
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
    });
});
