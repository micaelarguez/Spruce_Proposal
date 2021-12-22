import BasePage from "./base.page";

class AccountingPage extends BasePage{
     
    
    constructor(){
        super();
        this.title = 'Accounting';
    }

    //link del tab
    get accountingTab() { return $(`[title=${this.title}]`) }

    //link de incoming transactions
    get incomingTransactionsNav() { return $('[data-testid=navigate-to-incoming-transactions]') }
    
    //link  de JournalEntries
    get journalEntriesNav() { return $('[title="Journal Entries"]') }

    //link  de internalTransfers
    get unrestrictedInternalTransfersNav() { return $('[data-testid=navigate-to-unrestricted-internal-transfers]') }
    
    


    //se iran utilizando a medidas
    //get logOutButton() { return $('[title="Log Out"]') } repetido
    
     //WebElements
     //get accountingTab() { return $('[title=Accounting]') }  //repetidos

     //Incoming Transactions items
     get wiresNav() { return $('[data-testid=navigate-to-wires]') }
     get checksNav() { return $('[data-testid=navigate-to-checks]') }
     get achsNav() { return $('[data-testid=navigate-to-achs]') }
 
     //Incoming Transactions - Wires tab elements
     get wiresTable() { return $('form > table > thead > tr') }
     get sectionOBI() { return $('[placeholder="OBI"]') }
     get sectionSender() { return $('[placeholder="Sender"]') }
     get sectionReceived() { return $('[placeholder="Received"]') }
     get sectionUnmatched() { return $('[placeholder="Unmatched"]') }
     get searchButton() { return $('[type="submit"]') }
 
     //Incoming Transactions - Checks tab elements
     //get checksTable() { return $('form > table > thead > tr') }//repetido
     get sectionCheckIdentifier() { return $('[placeholder="Check Identifier"]') }
     get sectionCheckDetail() { return $('[placeholder="Check Detail"]') }
     //get sectionReceived() { return $('[placeholder="Received"]') }//repetido
    // get sectionUnmatched() { return $('[placeholder="Unmatched"]') }//repetido
    // get searchButton() { return $('[type="submit"]') } repetido
     get labelSameDay() { return $('[for="sameDay"]') } 
     
     //Incoming Transactions - ACHs tab elements
     get headerACHs() { return $('//div[text()="INCOMING ACHs"]') }
 
     //Page Title
     get pageTitle() { return $('//div[text()="Incoming Transactions"]') }
    
     //get accountingTab() { return $('[title=Accounting]') } repetido

     //Internal Transfer items
     get newInternalTransferNav() { return $('//button[text()="New Internal Transfer"]') }
     get statusButton() { return $(`//button[text()="Any Status"]`) }
     //get internalTransferTable() { return $('form > table > thead > tr') }//repetido
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
    //get cancelButton() { return $('//button[text()="Cancel"]') }//repetido
    //get saveAndAddButton() { return $('//button[text()="Save and Add"]') }//repetido
    



   // for navigate
    async navigate(){
      const tabAccounting= await $(this.accountingTab);
      await this.clickElement(tabAccounting);
    }
   
    




}
export default  AccountingPage;