import BasePage from "./base.page";

class ClientPage extends BasePage{
    get clientsTab() { return $('[title=Clients]') }
    get logOutButton() { return $('[title="Log Out"]') }
    get pageTitle() { return $('.dTLEOK') }

    get firstClientOnGrid() { return $('tbody tr:first-child td a') }
     //WebElements
     get newButton() { return $('[data-testid="global-navigation-actions button"]') }
     get logOutButton() { return $('[title="Log Out"]') }
     get pageTitle() { return $('.dTLEOK') }
     get lendersAssociatedTab() { return $('[title="Lenders"]') }
     get lendersLabel(){ return $('//div[text()="Lenders"]') }


     async openFirstClient() {
        await super.clickElement(await this.firstClientOnGrid);
    }

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
export default new ClientPage();