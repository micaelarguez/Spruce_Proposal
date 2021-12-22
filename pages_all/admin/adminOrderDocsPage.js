import BasePage from '../basePage';

class AdminOrderDocsPage extends BasePage {

    //WebElements
    get orderTitle(){ return $('.dTLEOK') }
    get dragAndDropBox(){ return $(`[type="Upload"]`) }

    get gridTitle(){ return $('.oFLpz') }

    get firstDocument(){ return $('tbody tr:first-child td:first-child') }
    get addPortalDocument(){ return $('//a[text()="Add portal document"]') }

    //Actions
    async openDocument() {
        await super.clickElement(this.firstDocument);
    }

    async addDocument() {
        await super.clickElement(this.addPortalDocument);
    }

}

export default new AdminOrderDocsPage();
