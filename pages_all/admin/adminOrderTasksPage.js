import BasePage from '../../pages/basePage';

class AdminOrderTasksPage extends BasePage {

    //WebElements
    get orderTitle(){ return $('.dTLEOK') }
    get newTaskButton(){ return $('[data-testid="new-task"]') }

    get gridTitle(){ return $('//div[contains(text(),"Tasks")]') }


}

export default new AdminOrderTasksPage();
