import AccountingPage from "./accounting.page";
import BasePage from "./base.page";

class InternalTransfersPage extends AccountingPage {
    constructor(){
        super();
        this.title = 'Internal_transfers';
    }

  async navigate(){
    await  super.navigate();
    await this.clickElement(this.incomingTransactionsNav);
  }


}
export default new InternalTransfersPage();