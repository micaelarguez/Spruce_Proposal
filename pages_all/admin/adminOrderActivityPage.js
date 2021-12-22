import BasePage from '../basePage';

class AdminOrderActivityPage extends BasePage {

    //WebElements
    get orderTitle(){ return $('.dTLEOK') }
    get eventsGrid(){ return $('#auditEventShow') }

    get gridTitle(){ return $('//h1[text()=("Audit Trail")]') }

}

export default new AdminOrderActivityPage();
