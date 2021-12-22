import BasePage from '../../basePage';
 
class AdminAccountingInternalTransfersDashPage extends BasePage {

    //WebElements
    get accountingTab() { return $('[title=Accounting]') }

    //Internal Transfer items
    get newInternalTransferNav() { return $('//button[text()="New Internal Transfer"]') }
    get statusButton() { return $(`//button[text()="Any Status"]`) }
    get internalTransferTable() { return $('form > table > thead > tr') }
    get pageTitle() { return $('//div[contains(text(),"Internal Transfers")]') }
    get searchButton() { return $('[data-testid="internal-transfers-search-table-submit-button"]') }

    //Internal Transfer table elements
    get sectionSourceAccountc() { return $('[placeholder="Source Account"]') }
    get sectionDestinationAccount() { return $('[placeholder="Destination Account"]') }
    get sectionNote() { return $('[placeholder="Note"]') }
    get sectionOrderNumber() { return $('[placeholder="Order Number"]') }
    get sectionAmount() { return $('[placeholder="Amount"]') }

    //New Internal Transfer Modal Form elements
    get modalTitle() { return $('h4=Create Internal Transfer') }
    get fileNumberField() { return $('//div[text()="Enter File Number"]') }
    get amountField() { return $('//div[text()="Amount"]') }
    get sourceAccount() { return $('#react-select-3-input') }
    get destinationAccount() { return $('#react-select-4-input') }
    get category() { return $('//div[text()="Select A Category"]') }
    get cancelButton() { return $('//button[text()="Cancel"]') }
    get saveAndAddButton() { return $('//button[text()="Save and Add"]') }
    


    //Actions

    async changeTab(tab) {
        await super.clickElement(await tab);
    }

    async validateInternalTransfersPage() {

        await expect(await this.newInternalTransferNav).toBeDisplayed();
        await expect(await this.statusButton).toBeDisplayed();
        await expect(await this.internalTransferTable).toBeDisplayed();
        await expect(await this.pageTitle).toBeDisplayed();
        await expect(await this.searchButton).toBeDisplayed();
        await expect(await this.sectionSourceAccountc).toBeDisplayed();
        await expect(await this.sectionDestinationAccount).toBeDisplayed();
        await expect(await this.sectionNote).toBeDisplayed();
        await expect(await this.sectionOrderNumber).toBeDisplayed();
        await expect(await this.sectionAmount).toBeDisplayed();
        await this.changeTab(await this.newInternalTransferNav);
        await expect(await this.modalTitle).toBeDisplayed();
        await expect(await this.fileNumberField).toBeDisplayed();
        await expect(await this.amountField).toBeDisplayed();
        await expect(await this.sourceAccount).toBeDisplayed();
        await expect(await this.destinationAccount).toBeDisplayed();
        await expect(await this.category).toBeDisplayed();
        await expect(await this.cancelButton).toBeDisplayed();
        await expect(await this.saveAndAddButton).toBeDisplayed();
        await this.changeTab(await this.cancelButton);

    }

}

export default new AdminAccountingInternalTransfersDashPage();