import BasePage from "./base.page";

class OrderPage extends BasePage {

    constructor(){
        super();
        this.title = 'Orders';
    }

  //selector
get orderTitle(){ return $('.dTLEOK') }
get eventsGrid(){ return $('#auditEventShow') }
get gridTitle(){ return $('//h1[text()=("Audit Trail")]') }
get gridTitle(){ return $('//div[text()="Parties"]') }
get overviewTab(){ return $('#root a[title="Overview"]') }
get overviewTab() { return $('#lender-order-header-target [title="Overview"]') }
get addButton(){ return $('[type=submit]') }
get postCommentButton(){ return $('input.admin-order-comment-submit') }
get createOrderButton(){ return $('input[type=submit]:not([data-testid])') }
get existingContactField(){ return $('.css-1hwfws3:not(.select__value-container--is-multi)') }
get cancelButton(){ return $('[type=reset]') }
get gridTitle(){ return $('//div[text()="New Contact"]') }
get gridTitle(){ return $('article h1') }
get addSellerTitle(){ return $('//div[text()="Seller"]') }
get addSellerButton(){ return $('//div[text()="Add Seller"]')}
get gridTitle(){ return $('#orderShowOrderCommentsIndex') }
get addContactButton(){ return $('.hdvLzR') }
get gridTitle(){ return $('.oFLpz') }
get ordersTab() { return $('[title=Orders]') }
get orderTabHeader() { return $('//div[text()="Orders"]') }
//no deberian estar link de cada tab y page
get accountingTab() { return $('[title=Accounting]') }//repetido
get quotesTab() { return $('[title=Quotes]') }//repetido
get lendersTab() { return $('[title=Lenders]') }
get clientsTab() { return $('[title=Clients]') }
get newOrder() { return $('a[href*="create_order"]') }
get newQuote() { return $('a[href*="/quotes/new"]') }
get newLender() { return $('a[href*="/admin/lender_companies/new"]') }
// puede ir en una page navigate
get searchForFilesField() { return $('[placeholder="Search for files"]') }
get nameSearchBar() { return $('[name=borrower]') }
get addressSearchBar() { return $('[name=streetAddress]') }
get unitSearchBar() { return $('[name=unit]') }
get firstOrderOnGrid() { return $('tbody tr:first-child td a') }
get advancedSearchButton() { return $('//button[text()="Advanced Search"]') }
get basicSearchButton() { return $('//button[text()="Basic Search"]') }
get curativeGrade() { return $('//div[text()="Curative Grade(s)"]/following-sibling::div//div[text()="Curative Grade(s)"]') }

get transactionCategoryFilter() { return $('//div[text()="Transaction Category"]/following-sibling::div//div[text()="Select"]') }
get ordersGrid() { return $('table.table-bordered') }
get ordersGridElements() { return $('table > tbody') }
get ordersGridHeader() { return $('table > thead > tr') }
get createButton() { return $('input[value="Create Order"]:not([data-testid])') }

get searchReportTab(){ return $('//a[text()="Search Report"]') }
get editSearchReportButton() { return $('a[href*="/searchReport/"]') }
get searchReportExceptionsTab(){ return $('a[href*="/searchReportExceptions"]') }
get titleTab() { return $('a[href$="/title"][title="Title"]') }
get titleTab(){ return $('#root a[title="Title"]') }
get dragAndDropBox(){ return $(`[type="Upload"]`) }
get addPortalDocument(){ return $('//a[text()="Add portal document"]') }
get firstDocument(){ return $('tbody tr:first-child td:first-child') }
get fundingCompleteButton(){ return $('[value="Funding Complete"]') }
get disbursedTab(){ return $('nav ul li:first-child') }
get createEditTab(){ return $('nav ul li:last-child') }
get gridTitle(){ return $('//h2[text()="Disbursed Transactions"]') }
get gridTitle(){ return $('//h2[text()="Incoming"]') }
get generatePDFButton(){ return $('.cd-title .kDGzFZ') }
get gridTitle(){ return $('//div[text()="Loan Costs"]') }
get transactionType() { return $('.css-1hwfws3.select__value-container--has-value') }
//comunes y repetidos 
get cancelOrderButton() { return $('[title=Cancel]') }
get newButton() { return $('[data-testid="global-navigation-actions button"]') }
get logOutButton() { return $('[title="Log Out"]') }

get nameOfActor() { return $('th.sortable[aria-label="Lender sortable"]') }
get changeStatusButton(){ return $('//div[text()="Change Status"]') }

get tasksTab(){ return $('#root a[title="Tasks"]') }
get gridTitle(){ return $('//div[contains(text(),"Tasks")]') }

get commentsTab(){ return $('#root a[title="Comments"]') }
get docsTab(){ return $('#everything a[title="Docs"]') }
get feesTab(){ return $('#everything a[title="Fees"]') }
get contactsTab(){ return $('#root a[title="Contacts"]') }
get escrowTab(){ return $('#root a[title="Escrow"]') }
get activityTab(){ return $('#everything a[title="Activity"]') }
get addPartyButton(){ return $('[data-testid="add-party-button button"]')}
get addBuyerButton(){ return $('//div[text()="Add "]')}
get newTaskButton(){ return $('[data-testid="new-task"]') }
//report
get requirementsHeader(){ return $('//div[text()="Schedule B1 - Requirements"]') }
get exceptionsHeader(){ return $('//div[text()="Schedule B2 - Exceptions"]') }
get exitButton(){ return $('button[title="Save & Exit"]') }
get headerEditCreateReport(){ return $('//div[contains(text(),"Search Report & Title Commitment")]') }

get summaryForm(){ return $('//div[text()="Summary"]') }
get legalAndVestingForm(){ return $('//div[text()="Legal & Vesting"]') }
get propertyTaxForm(){ return $('//div[text()="Property Tax Summary"]') }
get deedForm(){ return $('//div[text()="Deed Information"]') }
get mortgageForm(){ return $('//div[text()="Mortgage Information"]') }
get judgementLienForm(){ return $('//div[text()="Judgement/Lien Information"]') }
get bankruptcyForm(){ return $('//div[text()="Bankruptcy Information"]') }
get submitChangesHeader(){ return $('//div[text()="Save or submit Search Report & Title Commitment"]') }
get saveButtons(){ return $('//button[text()="Save"]') }
get finalizeButtons(){ return $('//button[text()="Finalize"]') }
get cancelOrderButton() { return $('.sc-gZMcBi.gpSpMI') }
get signingAppointment() { return $('div=Borrower Signing Appointment') }
get feesTab() { return $('#lender-order-header-target [title="Fees"]') }
get titleSummTab() { return $('#lender-order-header-target [title="Title Summary"]') }

//WebElements repetidos
//get orderTitle(){ return $('.dTLEOK') }//repetido
//get addBuyerTitle(){ return $('//div[text()="Add"]') }//repetido
//get saveContactButton(){ return $('[type=submit]') }//repetido
//get orderTitle(){ return $('.dTLEOK') }//repetido
//get uploadButton(){ return $('[type=submit]') }//repetido
//get orderTitle(){ return $('.dTLEOK') }//repetido
//get gridTitle(){ return $('//div[text()="Parties"]') }//repetido
//get overviewTab(){ return $('#root a[title="Overview"]') }//repetido
//get addButton(){ return $('[type=submit]') }//repetido
//get orderTitle(){ return $('.dTLEOK') }//repetido
// get orderTitle(){ return $('.dTLEOK') }//repetido
//get newButton() { return $('[data-testid="global-navigation-actions button"]') }//repetidos
//get newOrder() { return $('a[href*="/create_order/"]') }//repetido
//get newQuote() { return $('a[href*="/quotes/new"]') }//repetido
//get logOutButton() { return $('[title="Log Out"]') }//repetido
// get nameSearchBar() { return $('[name=borrower]') }//repetido
//get addressSearchBar() { return $('[name=streetAddress]') }//repetido
//get searchButton() { return $('button[type=submit]') }//repetido
//get accountingTab() { return $('[title=Accounting]') }//repetido
//get orderTitle(){ return $('.dTLEOK') }//repetido
//get gridTitle(){ return $('.oFLpz') }//repetido
//get orderTitle(){ return $('.dTLEOK') }//repetido
//get orderTitle(){ return $('.dTLEOK') }//repetido
//get fundingCompleteButton(){ return $('[value="Funding Complete"]') }//repetido
// get disbursedTab(){ return $('nav ul li:first-child') }//repetido
// get createEditTab(){ return $('nav ul li:last-child') }//repetido
// get orderTitle(){ return $('.dTLEOK') }//repetido
//get pageTitle() { return $('.dTLEOK') }//repetido
// get ordersTab() { return $('[title=Orders]') }//repetido
//get newQuote() { return $('a[href*="/quotes/new"]') }//repetido
// get searchForFilesField(){ return $('[placeholder="Search for files"]') }//repetido
//get unitSearchBar() { return $('[name=unit]') }//repetido
//get searchButton() { return $('button[type=submit]') }//repetido
//get firstOrderOnGrid() { return $('tbody tr:first-child td a') }//repetido
//get orderTitle(){ return $('.dTLEOK') }//repetido
//get gridTitle(){ return $('//div[text()="Parties"]') }//repetido
//get overviewTab(){ return $('#root a[title="Overview"]') }//repetido
//get orderTitle(){ return $('.dTLEOK') }repetido
//get gridTitle(){ return $('//div[text()="Parties"]') }//repetido
//get addSellerTitle(){ return $('//div[text()="Seller"]') }//repetido
//get overviewTab(){ return $('#root a[title="Overview"]') }
//get addButton(){ return $('[type=submit]') }repetido
// get orderTitle(){ return $('.dTLEOK') }repetido
// get pageTitle(){ return $('.dTLEOK') }//repetido
// get createOrderButton(){ return $('input[type=submit]:not([data-testid])') }
// get cancelOrderButton(){ return $('[title=Cancel]') }
//get transactionType(){ return $('.css-1hwfws3.select__value-container--has-value') }//repetido
//get orderTitle() { return $('.dTLEOK') } repetido
  


/*de aca*/ 
    async createNewOrder({...props}){
        await this.createNew(this.title);

    }
    async createNewOrder({...props}){
        await this.createNew(this.title);
        // Steps para rellenar Quote Form
        switch (this.user) {
            case 'admin':
                    await this.adminForm(...props)
                break;
            case 'client':
                    await this.clientForm(...props)
                break;
            case 'vendor':
                    await this.vendorForm(...props)
                break;
            default:
                await this.lenderForm(...props);
                break;
        }
        return this;
    }



//para arreglar
// Actions
async searchByType(type, target) {
    await this.emptyFieldAndSendText(await type, target);
    await this.fileNumberSearchBar.keys('Enter');
}

async createNew(element) {
    await this.clickElement(await this.newButton);
    await this.clickElement(await element);
}
//repetidos
async openFirstOrder() {
    await this.clickElement(await this.firstOrderOnGrid);
}
//repetidos
async changeTab(tab) {
    await this.clickElement(await tab);
}

async selectTransactionCategoryAndCurativeGrade(category, grade) {

    await this.clickElement(await this.advancedSearchButton);
    //category
    await this.clickElement(await this.transactionCategoryFilter);
    if (category == "Refinance") {
        await this.clickElement(await $('.select__option=Refinance'));
    } else {
        await this.clickElement(await $('.select__option=Purchase'));
    }
    //grade

   //pa to el mundo arreglado selectores generales
    await this.clickElement(await this.curativeGrade);
    if (grade == "Grade A") {
        await this.clickElement(await $('.select__menu-list [id*="option-0"]')); //#react-select-10-option-0 lender   .select__menu-list [id*='option-0'] selector total
    } else if (grade == "Grade B") {
        await this.clickElement(await $('.select__menu-list [id*="option-1"]'));
    }
    else if (grade == "Grade C") {
        await this.clickElement(await $('.select__menu-list [id*="option-2"]'));
    }
    else if (grade == "Grade D") {
        await this.clickElement(await $('.select__menu-list [id*="option-3"]'));
    }
    // do search
    //a revisar
    await expect(await $('.bvArbq .select__single-value')).toBeDisplayed();
    await expect(await $('.css-12jo7m5')).toBeDisplayed();
    await this.clickElement(await this.searchButton);
    await this.clickElement(await this.basicSearchButton);
    await expect(await this.advancedSearchButton).toBeDisplayed();
}

    async validateOrderTabDashboard() {

    await expect(await this.orderTabHeader).toBeDisplayed();
    await expect(await this.logOutButton).toBeDisplayed({ message: 'Log Out button not visible' });
    await expect(await this.newButton).toBeDisplayed({ message: '+New button not visible' });
    await expect(await this.searchForFilesField).toBeDisplayed({ message: 'Search for files field bar not visible' });
    await expect(await this.ordersGrid).toBeDisplayed({ message: 'Orders Grid not visible' })
    await expect(await this.ordersGridHeader).toHaveChildren({ gte: 5 }, { message: 'The Orders Grid Header does not have the expected columns.' });
    await expect(await this.ordersGridElements).toHaveChildren({ message: 'Orders Grid empty' });

}

async goToSearchReportAndTitleCommitmentBoard() {

    if (await this.createButton.isClickable()) {
        await this.clickElement(await this.createButton);
    }
    else {
        await this.clickElement(await this.editSearchReportButton);
    }
}
    async goToTab(tab) {
        await super.clickElement(await tab);
    }

    async goToAddParty(){
        await super.clickElement(await this.addPartyButton);
    }

    async goToAddSeller(){
        await super.clickElement(await this.addSellerButton);
    }

    async goToAddBuyer(){
        await super.clickElement(await this.addBuyerButton);
    }
    async openDocument() {
        await super.clickElement(this.firstDocument);
    }

    async addDocument() {
        await super.clickElement(this.addPortalDocument);
    }

    //Actions
    async uploadDocument() {
        await super.clickElement(this.uploadButton);
    }

 // Actions
    async addContact() {
        await super.clickElement(this.addContactButton);
    }
    // Actions
    async createContact() {
        await super.clickElement(this.saveContactButton);
    }
    async closeContactModal() {
        await super.clickElement(this.cancelButton);
    }
    //repetidos
    async switchTab(tab) {
        await super.clickElement(tab);
    }
    // Actions
    async switchTab(tab) {
        await super.clickElement(await tab);
    }
    //Actions
    async openFirstQuote() {
        await super.clickElement(await this.firstQuoteOnGrid);
    }

    async createNew(element) {
        await super.clickElement(await this.newButton);
        await super.clickElement(await element);
    }

    async changeTab(tab) {
        await super.clickElement(await tab);
    }

    async validateHeaderByText(element, tab) {
        await expect(await $(`//${element}[text()="${tab}"]`)).toBeDisplayed();
    }
    //Actions
    async goToButton(button) {
        await super.clickElement(await button);
    }

    async validateTitlePolicySection(){
        
        await adminCreateOwnersPolicyPage.validateOwnersPolicyDash();
        await adminCreateLongFormPolicyPage.validateLongFormPolicyDash();
        await adminCreateShortFormPolicyPage.validateShortFormPolicyDash();
    }

    async validateSearchReportExceptionsSection() {

        await expect(await this.requirementsHeader).toBeDisplayed({message:'Not displayed the Schedule B1 header'});
        await expect(await this.exceptionsHeader).toBeDisplayed({message:'Not displayed the Schedule B2 header'});
        await this.clickElement(await this.exitButton);
    }
    //Actions
    
    async validateSearchReportSection() {

        await expect(await this.headerEditCreateReport).toBeDisplayed({message:'Not displayed the page header'});
        await expect(await this.searchReportTab).toBeDisplayed({message:'Not displayed the search report tab'});
        await expect(await this.summaryForm).toBeDisplayed({message:'Not displayed the Summary form'});
        await expect(await this.legalAndVestingForm).toBeDisplayed({message:'Not displayed the Legal & Vesting form'});
        await expect(await this.propertyTaxForm).toBeDisplayed({message:'Not displayed the Property Tax Summary form'});
        await expect(await this.deedForm).toBeDisplayed({message:'Not displayed the Deed Information form'});
        await expect(await this.mortgageForm).toBeDisplayed({message:'Not displayed the Mortgage Information form'});
        await expect(await this.judgementLienForm).toBeDisplayed({message:'Not displayed the Judgement/Lien Information form'});
        await expect(await this.bankruptcyForm).toBeDisplayed({message:'Not displayed the Bankruptcy Information form'});
        await expect(await this.submitChangesHeader).toBeDisplayed({message:'Not displayed the submit changes header'});
        await expect(await this.saveButtons).toBeDisplayed({message:'Not displayed the save buttons'});
        await expect(await this.finalizeButtons).toBeDisplayed({message:'Not displayed the finalize buttons'});
    }

    async newOrder(){
        
    }
}
export default new OrderPage()
