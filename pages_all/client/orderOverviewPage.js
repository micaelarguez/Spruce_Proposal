import BasePage from '../basePage';

class OrderOverviewPage extends BasePage {

    //WebElements
    get orderTitle() { return $('.dTLEOK') }
    get cancelOrderButton() { return $('.sc-gZMcBi.gpSpMI') }

    get summary() { return $('//div[@class="sc-fjdhpX oFLpz"][text()="Summary"]') }

    get overviewTab() { return $('#lender-order-header-target [title="Overview"]') }
    get feesTab() { return $('#lender-order-header-target [title="Fees"]') }
    get titleSummTab() { return $('#lender-order-header-target [title="Title Summary"]') }

    get logo() { return $('#logo') }

    //Actions
    async goToTab(tab) {
        await super.clickElement(await tab);
    }

    async goToOrderDashPage() {
        await super.clickElement(this.logo);
    }
}

export default new OrderOverviewPage();