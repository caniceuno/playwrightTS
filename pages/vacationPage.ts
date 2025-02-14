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
        this.selectedDaySquare = page.locator('#fc-dom-134') //flag id should be dynamic - alternatives, in a test data setup script you could get the id of first working day of the next year and use it each run.
        this.startDateButton = page.getByRole('button', { name: /Choose date, selected date is/i }).first()
        this.endDateButton = page.getByRole('button', { name: /Choose date, selected date is/i }).nth(1)
        this.selectStartDate = page.getByRole('gridcell', { name: '18' })
        this.selectEndDate = page.getByRole('gridcell', { name: '19' }) 
        this.nextButton = page.getByRole('button', { name: 'Next' }).first() 
        this.firstDropdown = page.locator('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input').first()
        this.secondDropdown = page.locator('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input').nth(1)
        this.chrisCrawford = page.getByRole('option', { name: 'Chris Crawford' })
        this.jakeSexton = page.getByRole('option', { name: 'Jake Sexton' }) //dynamic ids using template literals or generic data. Where will the tests be running?
        this.backButton = page.getByRole('button', { name: 'back' })  
        this.selectedDateText = page.locator('#mui-15')      
    }

    async selectDay() {
        await this.selectedDaySquare.click()
        await this.page.waitForLoadState('networkidle');
        await this.startDateButton.click()
        await this.selectStartDate.click() //if specific dates mattered you could pass in a date as a parameter.
        await this.endDateButton.click()
        await this.selectEndDate.click()
        await this.nextButton.click()
        await this.page.waitForLoadState('networkidle');
    }

    async selectPoc() {
        await this.firstDropdown.click()
        await this.chrisCrawford.click() //better to rename the property so it's more intuitive. chrisCrawford could mean anything to a new SDET. Less of a learning curve if it's more true to what it is. Debugging process also quicker. Framework also scales better.  
        await this.secondDropdown.click()
        await this.jakeSexton.click()
        await this.nextButton.click()
        await this.page.waitForLoadState('networkidle'); //DOMContentLoaded
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