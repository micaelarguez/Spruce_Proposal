import BasePage from '../basePage';

class AdminOrderEscrowPage extends BasePage {

    //WebElements
    get orderTitle(){ return $('.dTLEOK') }
    get fundingCompleteButton(){ return $('[value="Funding Complete"]') }

    get disbursedTab(){ return $('nav ul li:first-child') }
    get createEditTab(){ return $('nav ul li:last-child') }

    get gridTitle(){ return $('//h2[text()="Incoming"]') }

    // Actions
    async switchTab(tab) {
        await super.clickElement(await tab);
    }
}

export default new AdminOrderEscrowPage();
