import BasePage from '../../basePage';

class AdminAccountingDashPage extends BasePage {

    //WebElements

    get accountingTab() { return $('[title=Accounting]') }
    get incomingTransactionsNav() { return $('[data-testid=navigate-to-incoming-transactions]') }
    get journalEntriesNav() { return $('[title="Journal Entries"]') }
    get unrestrictedInternalTransfersNav() { return $('[data-testid=navigate-to-unrestricted-internal-transfers]') }
    get logOutButton() { return $('[title="Log Out"]') }
    get pageTitle() { return $('.dTLEOK') }

    //Actions

    async changeTab(tab) {
        await super.clickElement(await tab);
    }

    async validateAccountingItems() {

        await expect(await this.incomingTransactionsNav).toBeDisplayed();
        await expect(await this.journalEntriesNav).toBeDisplayed();
        await expect(await this.unrestrictedInternalTransfersNav).toBeDisplayed();

    }
}

export default new AdminAccountingDashPage();