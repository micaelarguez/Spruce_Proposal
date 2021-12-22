import BasePage from '../../pages/base.page';

class AdminOrderDashPage extends BasePage {

    //WebElements
    get ordersTab() { return $('[title=Orders]') }
    get orderTabHeader() { return $('//div[text()="Orders"]') }
    get quotesTab() { return $('[title=Quotes]') }
    get accountingTab() { return $('[title=Accounting]') }
    get lendersTab() { return $('[title=Lenders]') }
    get clientsTab() { return $('[title=Clients]') }

    get newButton() { return $('[data-testid="global-navigation-actions button"]') }
    get newOrder() { return $('a[href*="/create_order/"]') }
    get newQuote() { return $('a[href*="/quotes/new"]') }
    get newLender() { return $('a[href*="/admin/lender_companies/new"]') }

    get logOutButton() { return $('[title="Log Out"]') }

    get searchForFilesField() { return $('[placeholder="Search for files"]') }
    get nameSearchBar() { return $('[name=borrower]') }
    get addressSearchBar() { return $('[name=streetAddress]') }
    get unitSearchBar() { return $('[name=unit]') }
    get searchButton() { return $('button[type=submit]') }

    get accountingTab() { return $('[title=Accounting]') }

    get firstOrderOnGrid() { return $('tbody tr:first-child td a') }

    get advancedSearchButton() { return $('//button[text()="Advanced Search"]') }
    get basicSearchButton() { return $('//button[text()="Basic Search"]') }
    get curativeGrade() { return $('//div[text()="Curative Grade(s)"]/following-sibling::div//div[text()="Curative Grade(s)"]') }
    get transactionCategoryFilter() { return $('//div[text()="Transaction Category"]/following-sibling::div//div[text()="Select"]') }
    get ordersGrid() { return $('table.table-bordered') }
    get ordersGridElements() { return $('table > tbody') }
    get ordersGridHeader() { return $('table > thead > tr') }
    get createButton() { return $('input[value="Create Order"]:not([data-testid])') }
    get editSearchReportButton() { return $('a[href*="/searchReport/"]') }

    get titleTab() { return $('a[href$="/title"][title="Title"]') }

    // Actions
    async searchByType(type, target) {
        await super.emptyFieldAndSendText(await type, target);
        await this.fileNumberSearchBar.keys('Enter');
    }

    async createNew(element) {
        await super.clickElement(await this.newButton);
        await super.clickElement(await element);
    }

    async openFirstOrder() {
        await super.clickElement(await this.firstOrderOnGrid);
    }

    async changeTab(tab) {
        await super.clickElement(await tab);
    }

    async selectTransactionCategoryAndCurativeGrade(category, grade) {

        await super.clickElement(await this.advancedSearchButton);
        //category
        await super.clickElement(await this.transactionCategoryFilter);
        if (category == "Refinance") {
            await super.clickElement(await $('#react-select-14-option-0'));
        } else {
            await super.clickElement(await $('#react-select-14-option-1'));
        }
        //grade
        await super.clickElement(await this.curativeGrade);
        if (grade == "Grade A") {
            await super.clickElement(await $('#react-select-16-option-0'));
        } else if (grade == "Grade B") {
            await super.clickElement(await $('#react-select-16-option-1'));
        }
        else if (grade == "Grade C") {
            await super.clickElement(await $('#react-select-16-option-2'));
        }
        else if (grade == "Grade D") {
            await super.clickElement(await $('#react-select-16-option-3'));
        }
        // do search
        
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
            await super.clickElement(await this.createButton);
        }
        else {
            await super.clickElement(await this.editSearchReportButton);
        }
    }

}

export default new AdminOrderDashPage();
