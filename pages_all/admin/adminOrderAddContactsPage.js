import BasePage from '../basePage';

class AdminOrderAddContactsPage extends BasePage {

    //WebElements
    get existingContactField(){ return $('.css-1hwfws3:not(.select__value-container--is-multi)') }
    get cancelButton(){ return $('[type=reset]') }
    get saveContactButton(){ return $('[type=submit]') }

    get gridTitle(){ return $('//div[text()="New Contact"]') }

    // Actions
    async createContact() {
        await super.clickElement(this.saveContactButton);
    }
    async closeContactModal() {
        await super.clickElement(this.cancelButton);
    }
}

export default new AdminOrderAddContactsPage();
