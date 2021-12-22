import BasePage from '../basePage';

class AdminLenderDashPage extends BasePage {

    //WebElements
    get lendersTab() { return $('[title=Lenders]') }
    get newButton() { return $('[data-testid="global-navigation-actions button"]') }
    get newLender() { return $('a[href*="/admin/lender_companies/new"]') }
    get logOutButton() { return $('[title="Log Out"]') }

    get firstLenderOnGrid() { return $('tbody tr:first-child td a') }
    get lenderCompanyName() { return $('tbody > tr:nth-child(1) > td:nth-child(1)')}

    //Actions
    async createNew(element) {
        await super.clickElement(await this.newButton);
        await super.clickElement(await element);
    }

    async openFirstLender() {
        await super.clickElement(await this.firstLenderOnGrid);
    }

    async changeTab(tab) {
        await super.clickElement(await tab);
    }

    async validateHeaderByText(element, tab) {
        await expect(await $(`//${element}[text()="${tab}"]`)).toBeDisplayed();
    }
    
    async validateLenderCompany(lenderName) {

        await expect(await $(`//div[text()="${lenderName}"]`)).toBeDisplayed({message:'The lender name header is not visible'});
    }
}

export default new AdminLenderDashPage();