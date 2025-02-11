import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import dotenv from 'dotenv';

dotenv.config();

test.describe('hover test', () => {
    test('Successful hover', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const email : string  = process.env.EMAIL as string;
        const password  = process.env.PASSWORD as string;
        await loginPage.login(email, password);
        await homePage.naviagteVacations();
        await expect(page).toHaveURL('https://unosquare.sharepoint.com/sites/Intranet/SitePages/My-Vacation-Days.aspx');
    });
});
