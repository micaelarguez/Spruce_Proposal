import BasePage from '../../pages/base.page';

class AdminNewQuotePage extends BasePage {

    //WebElements
    get createQuoteButton() { return $('[name=commit]') }

    get zipCode() { return $('#quote_creation_property_address_attributes_zip_code') }

    //Actions
    async validateHeaderByText(element, tab) {
        await expect(await $(`//${element}[text()="${tab}"]`)).toBeDisplayed();
    }
}

export default new AdminNewQuotePage();