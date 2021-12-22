import AccountingPage from "./accounting.page";

class IncomingTransactionsPage extends AccountingPage {

    constructor(){
        super();
        this.title = 'Incoming_transactions';
    }
     
    //selectors
    //Incoming Transactions items
    get wiresNav() { return $('[data-testid=navigate-to-wires]') }
    get checksNav() { return $('[data-testid=navigate-to-checks]') }
    get achsNav() { return $('[data-testid=navigate-to-achs]') }



  async navigate(){
    await  super.navigate();
    await this.clickElement(this.unrestrictedInternalTransfersNav);
  }

  async changeTab(tab) {
    await super.clickElement(await tab);
   }


}
export default new IncomingTransactionsPage();