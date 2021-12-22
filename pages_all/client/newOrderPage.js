import BasePage from '../basePage';

class NewOrderPage extends BasePage {

    //WebElements
    get pageTitle() { return $('.dTLEOK') }
    get createOrderButton(){ return $('input[type=submit]:not([data-testid])') }
    get cancelOrderButton() { return $('[title=Cancel]') }
    get transactionType() { return $('.css-1hwfws3.select__value-container--has-value') }
}

export default new NewOrderPage(); 