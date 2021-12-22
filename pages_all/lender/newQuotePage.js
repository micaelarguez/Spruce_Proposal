import BasePage from '../../pages/base.page';

class newQuotePage extends BasePage {

    //WebElements
    get createQuoteButton(){ return $('input[value="Create Quote"]') }//hay 2 ver cual selecciona
    get cancelQuoteButton(){ return $('[title=Cancel]') }
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
   
    //msg required field para test negativos
    get zipCodeMsg(){return '.sc-hMqMXs'}
    get amountReqMsg(){return '.bdHYTL'}
    get priceReqMsg(){return '.sc-bdVaJa'}

  

    async createNewQuote(quoteProps){
        
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

   //validate negativas para probar y luego poner en el create dentro de un catch
    async selectTransaction(transaction){
        const transactionMenu=await $(this.transactionSelect) ;
        await transactionMenu.click();
        const selectMenuField= await $(this.selectMenu(transaction)) ;
        await selectMenuField.click();
      
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

   async search(){}

}


export default new newQuotePage();
