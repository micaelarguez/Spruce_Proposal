import BasePage from '../basePage';

class QuoteDashPage extends BasePage {

    //WebElements
    get newButton() { return $('[data-testid="global-navigation-actions button"]') }
    get logOutButton() { return $('[title="Log Out"]') }

    get quotesSearchBar() { return $('.gbYmTM') }

    get firstQuoteOnGrid() { return $('tbody tr:first-child td a') }

    //Actions
    async openFirstQuote() {
        await super.clickElement(await this.firstQuoteOnGrid);
    }
    
}

export default new QuoteDashPage();