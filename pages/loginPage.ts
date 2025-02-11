import { Locator, Page } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private loginTextbox: Locator;
    private nextButton: Locator;
    private passwordTextbox: Locator;
    private signInButton: Locator;
    private confirmButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.loginTextbox = page.locator('#i0116')
        this.nextButton = page.locator('#idSIButton9')
        this.passwordTextbox = page.locator('#i0118')
        this.signInButton = page.locator('#idSIButton9')
        this.confirmButton = page.locator('#idSIButton9')
    }

    async navigate() {
        await this.page.goto('https://unosquare.sharepoint.com/');
    }

    //add to .env file later to test for invalid email

    async login(email: string, password: string) {
        await this.page.goto('https://unosquare.sharepoint.com/');
        await this.loginTextbox.fill(email);
        await this.nextButton.click();
        await this.passwordTextbox.fill(password);
        await this.signInButton.click();
        await this.confirmButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}