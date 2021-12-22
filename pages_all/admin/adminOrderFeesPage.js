import BasePage from '../basePage';

class AdminOrderFeesPage extends BasePage {

    //WebElements
    get orderTitle(){ return $('.dTLEOK') }
    get generatePDFButton(){ return $('.cd-title .kDGzFZ') }

    get gridTitle(){ return $('//div[text()="Loan Costs"]') }


}

export default new AdminOrderFeesPage();
