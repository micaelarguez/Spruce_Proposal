import BasePage from '../basePage';

class AdminOrderAddDocsPage extends BasePage {

    //WebElements
    get orderTitle(){ return $('.dTLEOK') }
    get uploadButton(){ return $('[type=submit]') }

    get gridTitle(){ return $('article h1') }

    //Actions
    async uploadDocument() {
        await super.clickElement(this.uploadButton);
    }

}

export default new AdminOrderAddDocsPage();
