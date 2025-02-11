import { Locator, Page } from '@playwright/test';

export class HomePage {
    private page: Page;
    private navButton: Locator;
    private vacationsOption: Locator;



    constructor(page: Page) {
        this.page = page;
        this.navButton = page.getByRole('link', { name: 'My Resources' })
        this.vacationsOption = page.getByRole('menuitem', { name: 'My Vacation Days' })
    }

    async naviagteVacations() {
        await this.navButton.hover()
        await this.vacationsOption.click()
        await this.page.waitForLoadState('networkidle');
    }

}