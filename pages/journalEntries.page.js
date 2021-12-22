import AccountingPage from "./accounting.page";
import BasePage from "./base.page";

class JournalEntriesPage extends AccountingPage{
    constructor(){
        super();
        this.title = 'Journal_entriess';
    }

  async navigate(){
    await  super.navigate();
    await this.clickElement(this.journalEntriesNav);
  }


}
export default new JournalEntriesPage();