import BasePage from '../../pages/base.page';

class OrderFeesPage extends BasePage {

    //WebElements
    get orderTitle(){ return $('.dTLEOK') }
    get gridTitle(){ return $('.oFLpz') }

    get totalsOnGrid(){ return $('tbody tr:last-child td:first-child div') }

}

export default new OrderFeesPage();
