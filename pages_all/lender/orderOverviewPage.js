import BasePage from '../../pages/base.page';

class OrderOverviewPage extends BasePage {

    //WebElements
    get orderTitle() { return $('.dTLEOK') }
    get cancelOrderButton() { return $('.sc-gZMcBi.gpSpMI') }

    get signingAppointment() { return $('div=Borrower Signing Appointment') }
     
    get overviewTab() { return $('#lender-order-header-target [title="Overview"]') }
    get feesTab() { return $('#lender-order-header-target [title="Fees"]') }
    get titleSummTab() { return $('#lender-order-header-target [title="Title Summary"]') }

    //Actions
    async goToTab(tab) {
        await super.clickElement(await tab);
    }

}

export default new OrderOverviewPage();
