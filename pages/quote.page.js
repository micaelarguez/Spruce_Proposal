import BasePage from "./base.page";
import TablePage from "./table.page";


class QuotePage extends BasePage {
   
    constructor(user='lender'){
        super();
        this.title = 'Quotes';
        this.user = user;
        this.table = new TablePage(this.title);
    }

   /*adminselector*/
   get createQuoteButton() { return $('[name=commit]') }

    get zipCode() { return $('#quote_creation_property_address_attributes_zip_code') }
    get quotesTab() { return $('[title=Quotes]') }
    get newButton() { return $('[data-testid="global-navigation-actions button"]') }
    get newQuote() { return $('a[href*="/quotes/new"]') }
   // get logOutButton() { return $('[title="Log Out"]') }//repetidos

    get firstQuoteOnGrid() { return $('tbody tr:first-child td a') }

    get createQuoteButton() { return $('//a[text()=("Create New Quote")]')}
    get newButton() { return $('[data-testid="global-navigation-actions button"]') }
   // get logOutButton() { return $('[title="Log Out"]') }//repetidos

    get tabStatus() { return $('ul > li:first-child') }
    get tabCD() { return $('ul > li:nth-child(2)') }
    get requirementsHeader(){ return $('//div[text()="Schedule B1 - Requirements"]') }
    get exceptionsHeader(){ return $('//div[text()="Schedule B2 - Exceptions"]') }
    get exitButton(){ return $('button[title="Save & Exit"]') }
    //WebElements
    get newButton() { return $('[data-testid="global-navigation-actions button"]') }
    //get logOutButton() { return $('[title="Log Out"]') }//repetidos

    get orderTitleButton() { return $('.gCFekA a') }

    get gridTitle() { return $('.oFLpz') }
    //WebElements
    get newButton() { return $('[data-testid="global-navigation-actions button"]') }
    get logOutButton() { return $('[title="Log Out"]') }

    get quotesSearchBar() { return $('.gbYmTM') }

    get firstQuoteOnGrid() { return $('tbody tr:first-child td a') }
    get quotesTab() { return $('[title=Quotes]') }
    get newButton() { return $('[data-testid="global-navigation-actions button"]') }
    get newQuote() { return $('a[href*="/quotes/new"]') }
    //get logOutButton() { return $('[title="Log Out"]') }//repetidos

    get firstQuoteOnGrid() { return $('tbody tr:first-child td a') }

    get createQuoteButton() { return $('//a[text()=("Create New Quote")]')}
    get newButton() { return $('[data-testid="global-navigation-actions button"]') }
    //get logOutButton() { return $('[title="Log Out"]') }//repetidos
    get quoteTitle() { return $('article > h2') }

    get tabStatus() { return $('ul > li:first-child') }
    get tabCD() { return $('ul > li:nth-child(2)') }
    get quotesTab() { return $('[title=Quotes]') }//repetido


    /**Quote*/
    //WebElements
    //lenders
    get createQuoteButton(){ return $('input[value="Create Quote"]') }//hay 2 ver cual selecciona
    get cancelQuoteButton(){ return $('[title=Cancel]') } //repetido es el mismo cancel 
    selectMenu(menuValue){return `.select__option=${menuValue}`}  

    // estos selectores son dinámicos hay que solicitar dataAtributes o dataid de testing para test robustos, estos no sirven
    get pageTitle(){ return $('.dTLEOK') }
    get zipCode(){ return '.sc-cIShpX' }
    get transactionSelect(){return '.select__control'}
    get loanAmount(){return '.sc-bxivhb:nth-child(2) > .sc-bRBYWo > .sc-bZQynM'} 
    get inputPropertyVale(){return '.sc-bxivhb:nth-child(3) > .sc-bRBYWo > .sc-bZQynM'}
    get inputLoanBalance(){return '.sc-bxivhb:nth-child(4) > .sc-bRBYWo > .sc-bZQynM'} 
    get newQuoteTitle(){return 'div=Create a new quote'}
    get purchasePrice(){return '.sc-cIShpX'}
  // admin
    
    
    async createNewQuote(quoteProps){
        await this.createNew(this.newQuote);
        // Steps para rellenar Quote Form
        switch (this.user) {
            case 'admin':
                    await this.adminForm(quoteProps)
                break;
            case 'client':
                    await this.clientForm(quoteProps)
                break;
            default:
                await this.lenderForm(quoteProps);
                break;
        }
        return this;
    }

    async lenderForm(quoteProps){
        const {code, transaction, amount, property, balance, price} = quoteProps; 
        const title=await $(this.newQuoteTitle);
        await title.waitForDisplayed();
        const zipCodeInput = await $(this.zipCode) ;
        await zipCodeInput.setValue(code);
        
        const transactionMenu=await $(this.transactionSelect) ;
        await transactionMenu.click();

        const selectMenuField= await $(this.selectMenu(transaction)) ;
        await selectMenuField.click();

        if( balance ){
            const loanBalanceInput= await $(this.inputLoanBalance);
            await loanBalanceInput.setValue(balance);
        }  
        if(property )  {
            const propertyValeInput=await $(this.inputPropertyVale) ;
            await propertyValeInput.setValue(property);
        }
        if(price){
            const purchasePriceField= await $(this.purchasePrice); //*requiered
            await purchasePriceField.setValue(price);

        }
        //comun
        const  loanAmountInput=await $(this.loanAmount); //*requiered
        await loanAmountInput.setValue(amount);  
       
        await this.clickElement(this.createQuoteButton);
     
    }
    async adminForm(...props){
        

    }

    async clientForm(...props){}

     
    async search(column, value){
        const rowValues = await this.table.search(column, value);
        return rowValues;
    }


    
//metodos a ver
    async openFirstQuote() {
        await super.clickElement(await this.firstQuoteOnGrid);
    }
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
    async validateHeaderByText(element, tab) {
        await expect(await $(`//${element}[text()="${tab}"]`)).toBeDisplayed();
    }

    // validar input requeridos  el tray quiero capturar el error mientras pongo un console 
    async zipRequieredMsg(codeWrong){
        const zipCodeInput = await $(this.zipCode);
        await zipCodeInput.setValue(codeWrong);
        const zipMsgelement = await $(this.zipCodeMsg);
        const zipMsg= await zipMsgelement.getText();
        return  zipMsg;
                
            

        }

    async amountRequieredMsg(){
        const  loanAmountInput=await $(this.loanAmount);
        await loanAmountInput.click()
        const propertyValeInput=await $(this.inputPropertyVale) ;
        await propertyValeInput.click();
        const amountMsg = await $(this.amountReqMsg);
        return await amountMsg.getText();

        
    }
    async priceRequieredMsg(){
        const purchasePriceField= await $(this.purchasePrice); 
        await purchasePriceField.click();
        const  loanAmountInput=await $(this.loanAmount);
        await loanAmountInput.click()
        const priceMsg = await $(this.priceReqMsg);
        return  await priceMsg.getText();

        
    }

    // return Refinance/Purchase
    async getTypeQuoteName() {
        const typeQuoteName = await this.typeQuotenName.getText();
        return typeQuoteName;
    }


}
export default   new QuotePage();