import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Login Tests', () => {
    test('Successful login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const email : string  = process.env.EMAIL as string;
        const password  = process.env.PASSWORD as string;
        await loginPage.navigate();
        await loginPage.login(email, password);
        // Assert successful login by checking redirected URL or presence of dashboard
        await expect(page).toHaveURL('https://unosquare.sharepoint.com/sites/intranet');
    });
});
