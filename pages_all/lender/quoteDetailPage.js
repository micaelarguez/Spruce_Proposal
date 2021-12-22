import BasePage from '../../pages/base.page';

class QuoteDetailPage extends BasePage {

    //WebElements
    
    get typeQuoteName(){return '.dCENKe'}
    get addressZipCode(){return '.dTLEOK'}
    get btnOrderTitle(){return ''}
    get propertyVale(){return ''}
    get propertyVale_value(){return ''}
    get existLoanBalance(){return ''}
    get existLoanBalance_value(){return ''}
    get loanBalance(){return ''}
    get loanBalance_value(){return ''}
    get country(){return ''}
    get countryValue(){return ''}
}

export default new QuoteDetailPage();