import BasePage from '../basePage';

class AdminClientDetailPage extends BasePage {

    //WebElements
    get newButton() { return $('[data-testid="global-navigation-actions button"]') }
    get logOutButton() { return $('[title="Log Out"]') }
    get pageTitle() { return $('.dTLEOK') }
    get lendersAssociatedTab() { return $('[title="Lenders"]') }
    get lendersLabel(){ return $('//div[text()="Lenders"]') }
    
    //Actions
    async changeTab(tab) {
        await super.clickElement(await tab);
    }

    async validateHeaderByText(element, tab) {
        await expect(await $(`//${element}[text()="${tab}"]`)).toBeDisplayed();
    }
}

export default new AdminClientDetailPage();