import BasePage from '../../pages/base.page';

class AdminQuoteDashPage extends BasePage {

    //WebElements
    get quotesTab() { return $('[title=Quotes]') }
    get newButton() { return $('[data-testid="global-navigation-actions button"]') }
    get newQuote() { return $('a[href*="/quotes/new"]') }
    get logOutButton() { return $('[title="Log Out"]') }

    get firstQuoteOnGrid() { return $('tbody tr:first-child td a') }

    get createQuoteButton() { return $('//a[text()=("Create New Quote")]')}
    

    //Actions
    async openFirstQuote() {
        await super.clickElement(await this.firstQuoteOnGrid);
    }

    async createNew(element) {
        await super.clickElement(await this.newButton);
        await super.clickElement(await element);
    }

    async changeTab(tab) {
        await super.clickElement(await tab);
    }

    async validateHeaderByText(element, tab) {
        await expect(await $(`//${element}[text()="${tab}"]`)).toBeDisplayed();
    }
}

export default new AdminQuoteDashPage();