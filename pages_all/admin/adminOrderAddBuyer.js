import BasePage from '../basePage';

class AdminOrderAddBuyer extends BasePage {

    //WebElements
    get orderTitle(){ return $('.dTLEOK') }

    get gridTitle(){ return $('//div[text()="Parties"]') }

    get addBuyerTitle(){ return $('//div[text()="Add"]') }

    get overviewTab(){ return $('#root a[title="Overview"]') }

    get addButton(){ return $('[type=submit]') }

    //Actions
    async goToTab(tab) {
        await super.clickElement(await tab);
    }

}

export default new AdminOrderAddBuyer();