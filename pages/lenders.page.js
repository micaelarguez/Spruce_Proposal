import BasePage from "./base.page";
class LenderPage extends BasePage{

    get createLenderButton() { return $('[name=commit]') }
    get nameOfLender() { return $('#lender_company_name') }
    
    get newButton() { return $('[data-testid="global-navigation-actions button"]') }

    
    //get logOutButton() { return $('[title="Log Out"]') }//repetido
    get pageTitle() { return $('article > h1') }
    //get updateButton() { return $('[name="commit"]') }//repetido
    get lendersTab() { return $('[title=Lenders]') }
    //get newButton() { return $('[data-testid="global-navigation-actions button"]') }//repetido
    get newLender() { return $('a[href*="/admin/lender_companies/new"]') }
   // get logOutButton() { return $('[title="Log Out"]') }//repetido

    get firstLenderOnGrid() { return $('tbody tr:first-child td a') }
    get lenderCompanyName() { return $('tbody > tr:nth-child(1) > td:nth-child(1)')}
     //WebElements
     //get newButton() { return $('[data-testid="global-navigation-actions button"]') }//repetido
   //  get logOutButton() { return $('[title="Log Out"]') }repetido
     get lenderTitle() { return $('article > section > h2') }
     get editLender() { return $('//div[text()="Lender Details"]/following-sibling::a[@title="Edit"]') }
 
     get tabStatus() { return $('ul > li:first-child') }
     get tabCD() { return $('ul > li:nth-child(2)') }
     //get createLenderButton() { return $('[name=commit]') }//repetido

    //get nameOfLender() { return $('#lender_company_name') }//repetido
    // get lendersTab() { return $('[title=Lenders]') }//repetido
    // get newButton() { return $('[data-testid="global-navigation-actions button"]') }//repetidos
    // get newLender() { return $('a[href*="/admin/lender_companies/new"]') }//repetdiso
    // get logOutButton() { return $('[title="Log Out"]') }//repetidos

    // get firstLenderOnGrid() { return $('tbody tr:first-child td a') }
    // get lenderCompanyName() { return $('tbody > tr:nth-child(1) > td:nth-child(1)')}
    get ordersTab(){ return $('[title=Orders]') }
    get quotesTab(){ return $('[title=Quotes]') }

    get newButton(){ return $('[data-testid="global-navigation-actions button"]') }
    get newOrder() { return $('a[href*="create_order"]') }
    get newQuote() { return $('a[href*="/quotes/new"]') }

    get searchForFilesField(){ return $('[placeholder="Search for files"]') }
    get nameSearchBar(){ return $('[name=borrower]') }
    get addressSearchBar(){ return $('[name=streetAddress]') }
    get unitSearchBar(){ return $('[name=unit]') }
    get searchButton(){ return $('button[type=submit]') }
    
    get firstOrderOnGrid(){ return $('tbody tr:first-child td a') }
    //WebElements
    get gridTitle(){ return $('.oFLpz') }

    get mortagesOnGrid(){ return $('div=Open Mortgages') }
    get quotesSearchBar(){ return $('.gbYmTM') }
    get firstQuoteOnGrid(){ return $('tbody tr:first-child td a') }
    




    async createNew(element) {
        await super.clickElement(await this.newButton);
        await super.clickElement(await element);
    }
    
    async openFirstLender() {
        await super.clickElement(await this.firstLenderOnGrid);
    }

    async changeTab(tab) {
        await super.clickElement(await tab);
    }

    async validateHeaderByText(element, tab) {
        await expect(await $(`//${element}[text()="${tab}"]`)).toBeDisplayed();
    }
    
    async validateLenderCompany(lenderName) {

        await expect(await $(`//div[text()="${lenderName}"]`)).toBeDisplayed({message:'The lender name header is not visible'});
    }
    //Actions
    async validateHeaderByText(element, tab) {
        await expect(await $(`//${element}[text()="${tab}"]`)).toBeDisplayed();
    }
}
export default new LenderPage();