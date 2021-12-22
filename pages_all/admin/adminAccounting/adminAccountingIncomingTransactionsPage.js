import BasePage from '../../basePage';

class AdminAccountingIncomingTransactionsDashPage extends BasePage {

    //WebElements
    get accountingTab() { return $('[title=Accounting]') }

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
    get checksTable() { return $('form > table > thead > tr') }
    get sectionCheckIdentifier() { return $('[placeholder="Check Identifier"]') }
    get sectionCheckDetail() { return $('[placeholder="Check Detail"]') }
    get sectionReceived() { return $('[placeholder="Received"]') }
    get sectionUnmatched() { return $('[placeholder="Unmatched"]') }
    get searchButton() { return $('[type="submit"]') }
    get labelSameDay() { return $('[for="sameDay"]') } 
    
    //Incoming Transactions - ACHs tab elements
    get headerACHs() { return $('//div[text()="INCOMING ACHs"]') }

    //Page Title
    get pageTitle() { return $('//div[text()="Incoming Transactions"]') }

    
    //Actions

    async changeTab(tab) {
        await super.clickElement(await tab);
    }

    async validateAccountingIncomingTransactionsItems() {

        await expect(await this.wiresNav).toBeDisplayed();
        await expect(await this.checksNav).toBeDisplayed();
        await expect(await this.achsNav).toBeDisplayed();
        
    }
    
    async navigateToWiresAndValidatePage() {

        await this.changeTab(await this.wiresNav);
        await expect(await this.wiresTable).toHaveChildren({message:'Wires table is empty'});
        await expect(await this.sectionOBI).toBeDisplayed();
        await expect(await this.sectionSender).toBeDisplayed();
        await expect(await this.sectionReceived).toBeDisplayed();
        await expect(await this.sectionUnmatched).toBeDisplayed();
        await expect(await this.searchButton).toBeDisplayed();

    }

    async navigateToChecksAndValidatePage() {

        await this.changeTab(await this.checksNav);
        await expect(await this.checksTable).toHaveChildren({message:'Checks table is empty'});
        await expect(await this.sectionCheckIdentifier).toBeDisplayed();
        await expect(await this.sectionCheckDetail).toBeDisplayed();
        await expect(await this.sectionReceived).toBeDisplayed();
        await expect(await this.sectionUnmatched).toBeDisplayed();
        await expect(await this.searchButton).toBeDisplayed();
        await expect(await this.labelSameDay).toBeDisplayed();

    }

    async navigateToACHsAndValidatePage() {

        await this.changeTab(await this.achsNav);
        await expect(await this.headerACHs).toBeDisplayed();

    }

}

export default new AdminAccountingIncomingTransactionsDashPage();