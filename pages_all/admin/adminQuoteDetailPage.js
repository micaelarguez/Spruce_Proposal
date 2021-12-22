import BasePage from '../../pages/base.page';

class AdminQuoteDetailPage extends BasePage {

    //WebElements
    get newButton() { return $('[data-testid="global-navigation-actions button"]') }
    get logOutButton() { return $('[title="Log Out"]') }
    get quoteTitle() { return $('article > h2') }

    get tabStatus() { return $('ul > li:first-child') }
    get tabCD() { return $('ul > li:nth-child(2)') }

    //Actions
    async validateHeaderByText(element, tab) {
        await expect(await $(`//${element}[text()="${tab}"]`)).toBeDisplayed();
    }

}

export default new AdminQuoteDetailPage();
