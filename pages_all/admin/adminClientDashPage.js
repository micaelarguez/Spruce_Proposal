import BasePage from '../basePage';

class AdminClientDashPage extends BasePage {

    //WebElements
    get clientsTab() { return $('[title=Clients]') }
    get logOutButton() { return $('[title="Log Out"]') }
    get pageTitle() { return $('.dTLEOK') }

    get firstClientOnGrid() { return $('tbody tr:first-child td a') }

    //Actions
    async openFirstClient() {
        await super.clickElement(await this.firstClientOnGrid);
    }

    async changeTab(tab) {
        await super.clickElement(await tab);
    }

    async validateHeaderByText(element, tab) {
        await expect(await $(`//${element}[text()="${tab}"]`)).toBeDisplayed();
    }
}

export default new AdminClientDashPage();