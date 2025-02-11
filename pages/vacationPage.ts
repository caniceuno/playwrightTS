import { Locator, Page, expect } from '@playwright/test';

export class VacationPage {
    private page: Page;
    private selectedDaySquare: Locator;
    private startDateButton: Locator;
    private endDateButton: Locator; 
    private selectStartDate: Locator;
    private selectEndDate: Locator;
    private nextButton: Locator;
    private firstDropdown: Locator;
    private secondDropdown: Locator;
    private chrisCrawford: Locator;
    private jakeSexton: Locator
    private backButton: Locator;
    selectedDateText : Locator;



    constructor(page: Page) {
        this.page = page;
        this.selectedDaySquare = page.locator('#fc-dom-106')
        this.startDateButton = page.getByRole('button', { name: /Choose date, selected date is/i }).first()
        this.endDateButton = page.getByRole('button', { name: /Choose date, selected date is/i }).nth(1)
        this.selectStartDate = page.getByRole('gridcell', { name: '18' })
        this.selectEndDate = page.getByRole('gridcell', { name: '19' }) 
        this.nextButton = page.getByRole('button', { name: 'Next' }).first() 
        this.firstDropdown = page.locator('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input').first()
        this.secondDropdown = page.locator('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input').nth(1)
        this.chrisCrawford = page.getByRole('option', { name: 'Chris Crawford' })
        this.jakeSexton = page.getByRole('option', { name: 'Jake Sexton' }) 
        this.backButton = page.getByRole('button', { name: 'back' })  
        this.selectedDateText = page.locator('#mui-15')      
    }

    async selectDay() {
        await this.selectedDaySquare.click()
        await this.page.waitForLoadState('networkidle');
        await this.startDateButton.click()
        await this.selectStartDate.click()
        await this.endDateButton.click()
        await this.selectEndDate.click()
        await this.nextButton.click()
        await this.page.waitForLoadState('networkidle');
    }

    async selectPoc() {
        await this.firstDropdown.click()
        await this.chrisCrawford.click()
        await this.secondDropdown.click()
        await this.jakeSexton.click()
        await this.nextButton.click()
        await this.page.waitForLoadState('networkidle');
    }

    async backToPoc (){
        await this.backButton.click()
        await this.page.waitForLoadState('networkidle');
        await expect(this.firstDropdown).toHaveText('Chris Crawford')
    }

    async backToDay(){
        await this.backButton.click()
        await this.page.waitForLoadState('networkidle');
        }

    async getSelectedDateTextValue(): Promise<string> {
        return await this.selectedDateText.inputValue();
        }

    


    

}