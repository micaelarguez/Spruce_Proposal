import BasePage from '../basePage';

class OrderTitleSummPage extends BasePage {

    //WebElements
    get orderTitle() { return $('.dTLEOK') }
    get gridTitle() { return $('.oFLpz') }
    get mortagesOnGrid(){ return $('div=Open Mortgages') }

}

export default new OrderTitleSummPage();