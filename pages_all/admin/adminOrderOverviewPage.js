import BasePage from '../../pages/basePage';

class AdminOrderOverviewPage extends BasePage {

    //WebElements
    get orderTitle(){ return $('.dTLEOK') }
    get changeStatusButton(){ return $('//div[text()="Change Status"]') }

    get gridTitle(){ return $('//div[text()="Parties"]') }

    get overviewTab(){ return $('#root a[title="Overview"]') }
    get tasksTab(){ return $('#root a[title="Tasks"]') }
    get commentsTab(){ return $('#root a[title="Comments"]') }
    get docsTab(){ return $('#everything a[title="Docs"]') }
    get feesTab(){ return $('#everything a[title="Fees"]') }
    get contactsTab(){ return $('#root a[title="Contacts"]') }
    get escrowTab(){ return $('#root a[title="Escrow"]') }
    get activityTab(){ return $('#everything a[title="Activity"]') }
    get titleTab(){ return $('#root a[title="Title"]') }

    get addPartyButton(){ return $('[data-testid="add-party-button button"]')}
    get addSellerButton(){ return $('//div[text()="Add Seller"]')}
    get addBuyerButton(){ return $('//div[text()="Add "]')}

    //Actions
    async goToTab(tab) {
        await super.clickElement(await tab);
    }

    async goToAddParty(){
        await super.clickElement(await this.addPartyButton);
    }

    async goToAddSeller(){
        await super.clickElement(await this.addSellerButton);
    }

    async goToAddBuyer(){
        await super.clickElement(await this.addBuyerButton);
    }

}

export default new AdminOrderOverviewPage();
