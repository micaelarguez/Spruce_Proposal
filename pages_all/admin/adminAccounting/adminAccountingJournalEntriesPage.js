import BasePage from '../../basePage';

class AdminAccountingJournalEntriesDashPage extends BasePage {

    //WebElements
    get accountingTab() { return $('[title=Accounting]') }

    //Journal Entries items
    get newJournalEntryNav() { return $('//button[text()="New Journal Entry"]') }
    get showDeletedEntriesOptionButton() { return $('//button[text()="Show Deleted Entries"]') }
    get resetSearchButton() { return $(`//a[text()="Reset Search"]`) }
    get journalEntriesTable() { return $('.react-bootstrap-table > table > thead > tr') }
    get pageTitle() { return $('//div[contains(text(),"Journal Entries")]') }

    //Journal Entries table elements
    get fileNumberSearchByTextField() { return $('.react-bootstrap-table > table > thead > tr > th:first-child input[type=text]') }
    get noteSearchByTextField() { return $('.react-bootstrap-table > table > thead > tr > th:nth-of-type(3) input[type=text]') }
    get sectionMethod() { return $('//div[text()="Method"]') }
    get sectionAccount() { return $('//div[text()="Account"]') }
    get amountSearchByTextField() { return $('.react-bootstrap-table > table > thead > tr > th:last-child') }

    //New Journal Entry Modal Form elements
    get modalTitle() { return $('//h4/div[text()="New Journal Entry"]') }
    get paymentMethodField() { return $('#paymentMethod') } 
    get fileNumberField() { return $('#orderId') }
    get amountField() { return $('[name="amountCents"]') }
    get entryTypeField() { return $('#entryType') }
    get noteField() { return $('[name="note"]') }
    get initiatedField() { return $('[name="initiatedAtDate"]') }
    get completedDateField() { return $('[name="completedAtDate"]') }
    get cancelButton() { return $('//button[text()="Cancel"]') }
    get saveAndAddButton() { return $('//button[text()="Save and Add"]') }
    


    //Actions

    async changeTab(tab) {
        await super.clickElement(await tab);
    }

    async validateJournalEntriesPage() {

        await expect(await this.newJournalEntryNav).toBeDisplayed();
        await expect(await this.showDeletedEntriesOptionButton).toBeDisplayed();
        await expect(await this.resetSearchButton).toBeDisplayed();
        await expect(await this.journalEntriesTable).toBeDisplayed();
        await expect(await this.pageTitle).toBeDisplayed();
        await expect(await this.fileNumberSearchByTextField).toBeDisplayed();
        await expect(await this.noteSearchByTextField).toBeDisplayed();
        await expect(await this.sectionAccount).toBeDisplayed();
        await expect(await this.sectionMethod).toBeDisplayed();
        await expect(await this.amountSearchByTextField).toBeDisplayed();
        await this.changeTab(await this.newJournalEntryNav);
        await expect(await this.modalTitle).toBeDisplayed();
        await expect(await this.paymentMethodField).toBeDisplayed();
        await expect(await this.fileNumberField).toBeDisplayed();
        await expect(await this.amountField).toBeDisplayed();
        await expect(await this.entryTypeField).toBeDisplayed();
        await expect(await this.noteField).toBeDisplayed();
        await expect(await this.initiatedField).toBeDisplayed();
        await expect(await this.completedDateField).toBeDisplayed();
        await expect(await this.cancelButton).toBeDisplayed();
        await expect(await this.saveAndAddButton).toBeDisplayed();
        await this.changeTab(await this.cancelButton);

    }

}

export default new AdminAccountingJournalEntriesDashPage();