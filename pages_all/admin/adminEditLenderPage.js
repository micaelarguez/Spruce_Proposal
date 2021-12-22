import BasePage from '../basePage';

class AdminEditLenderPage extends BasePage {

    //WebElements
    get newButton() { return $('[data-testid="global-navigation-actions button"]') }
    get logOutButton() { return $('[title="Log Out"]') }
    get pageTitle() { return $('article > h1') }
    get updateButton() { return $('[name="commit"]') }

    //Actions
    async validateHeaderByText(element, tab) {
        await expect(await $(`//${element}[text()="${tab}"]`)).toBeDisplayed();
    }

}

export default new AdminEditLenderPage();