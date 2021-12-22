import BasePage from '../basePage';

class OrderDashPage extends BasePage {

    //WebElements
    get ordersTab() { return $('[title=Orders]') }
    get quotesTab() { return $('[title=Quotes]') }
 
    get newButton() { return $('[data-testid="global-navigation-actions button"]') }
    get newOrder() { return $('a[href*="create_order"]') }
    get newQuote() { return $('a[href*="/quotes/new"]') }

    get logOutButton() { return $('[title="Log Out"]') }

    get searchForFilesField(){ return $('[placeholder="Search for files"]') }
    get nameSearchBar() { return $('[name=borrower]') }
    get addressSearchBar() { return $('[name=streetAddress]') }
    get unitSearchBar() { return $('[name=unit]') }
    get searchButton() { return $('button[type=submit]') }

    get firstOrderOnGrid() { return $('tbody tr:first-child td a') }

    get nameOfActor() { return $('th.sortable[aria-label="Lender sortable"]') }

    //Actions
    async searchByType(type, target) {
        await super.emptyFieldAndSendText(await type, target);
        await this.fileNumberSearchBar.keys('Enter');
    }

    async createNew(element) {
        await super.clickElement(await this.newButton);
        await super.clickElement(await element);
    }

    async openFirstOrder() {
        await super.clickElement(await this.firstOrderOnGrid);
    }

    async seeOrdersOrQuotes(tab) {
        await super.clickElement(await tab);
    }
}

export default new OrderDashPage();