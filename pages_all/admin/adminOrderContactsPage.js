import BasePage from '../basePage';

class AdminOrderContactsPage extends BasePage {

    //WebElements
    get orderTitle(){ return $('.dTLEOK') }
    get addContactButton(){ return $('.hdvLzR') }

    get gridTitle(){ return $('.oFLpz') }

    // Actions
    async addContact() {
        await super.clickElement(this.addContactButton);
    }
}

export default new AdminOrderContactsPage();
