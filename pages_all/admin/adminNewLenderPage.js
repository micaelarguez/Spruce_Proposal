import BasePage from '../basePage';

class AdminNewLenderPage extends BasePage {

    //WebElements
    get createLenderButton() { return $('[name=commit]') }

    get nameOfLender() { return $('#lender_company_name') }

    //Actions
    async validateHeaderByText(element, tab) {
        await expect(await $(`//${element}[text()="${tab}"]`)).toBeDisplayed();
    }
}

export default new AdminNewLenderPage();