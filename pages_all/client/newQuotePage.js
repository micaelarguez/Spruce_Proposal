import BasePage from '../basePage';

class NewQuotePage extends BasePage {

    //WebElements
    get pageTitle() { return $('.dTLEOK') }
    get createQuoteButton(){ return $('input[value="Create Quote"]') }
    get cancelQuoteButton() { return $('[title=Cancel]') }

    get zipCode() { return $('.sc-ktHwxA') }

}

export default new NewQuotePage();