import BasePage from '../../pages/base.page';

class QuoteDashPage extends BasePage {

    //WebElements

    get quotesSearchBar(){ return $('.gbYmTM') }
    get firstQuoteOnGrid(){ return $('tbody tr:first-child td a') }
    
    //Actions
    async openFirstQuote() {
        addStep(`Open first quote on list`);
        await super.clickElement(await this.firstQuoteOnGrid);
    }

    
}

export default new QuoteDashPage();
