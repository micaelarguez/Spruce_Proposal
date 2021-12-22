import BasePage from '../../pages/base.page';

class OrderTitleSummPage extends BasePage {

    //WebElements
    get gridTitle(){ return $('.oFLpz') }

    get mortagesOnGrid(){ return $('div=Open Mortgages') }
} 

export default new OrderTitleSummPage();
