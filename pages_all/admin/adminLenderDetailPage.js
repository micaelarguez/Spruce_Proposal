import BasePage from '../basePage';

class AdminLenderDetailPage extends BasePage {

    //WebElements
    get newButton() { return $('[data-testid="global-navigation-actions button"]') }
    get logOutButton() { return $('[title="Log Out"]') }
    get lenderTitle() { return $('article > section > h2') }
    get editLender() { return $('//div[text()="Lender Details"]/following-sibling::a[@title="Edit"]') }

    get tabStatus() { return $('ul > li:first-child') }
    get tabCD() { return $('ul > li:nth-child(2)') }

    //Actions
    async validateHeaderByText(element, tab) {
        await expect(await $(`//${element}[text()="${tab}"]`)).toBeDisplayed();
    }

    async editLenderDetails(){
        await super.clickElement(await this.editLender);
    }

}

export default new AdminLenderDetailPage();
