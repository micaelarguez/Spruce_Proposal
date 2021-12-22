import BasePage from '../basePage';

class VendorDashboardPage extends BasePage {

    //WebElements
    get spruceRefreshButton(){ return $('[title="Logo"]') }
    get logOutButton(){ return $('[title="Log Out"]') }
    get filterResultButton(){ return $('div*=Filter Results') }
    get titleSearchTab(){ return $('[title="Title Search"]') }
    get payoffTab(){ return $('[title="Payoff"]') }
    get searchBar(){ return $('[placeholder="Search by Order ID"]') }
    get ordersGrid(){ return $('table.table-bordered') }
    get ordersGridElements(){ return $('table > tbody') }
    get ordersGridHeader(){ return $('table > thead > tr') }
    get firstOrderOnGrid(){ return $('tbody tr:first-child td a') }

    //Actions

    async openFirstOrder() {
        addStep(`Open first title order on grid`);
        await super.clickElement(await this.firstOrderOnGrid);
    }
    
    async goToTab(tab) {
        await super.clickElement(await tab);
    }

    async validateTabDashboard(tab){
        let tabTitle = await tab.getText();
        addStep(`Check ${tabTitle} Tab`);
        await expect(await this.spruceRefreshButton).toBeDisplayed({message:'Spruce refresh button not visible'});
        await expect(await this.logOutButton).toBeDisplayed({message:'Log Out button not visible'});
        await expect(await tab).toBeDisplayed({message:'Title Search or Payoff tab not visible'});
        await expect(await this.searchBar).toBeDisplayed({message:'Search bar not visible'});
        await expect(await this.filterResultButton).toBeDisplayed({message:'Filter Results button is not visible'});
        await expect(await this.ordersGrid).toBeDisplayed({message:'Orders Grid not visible'})
        await expect(await this.ordersGridHeader).toHaveChildren( { gte: 5 }, {message:'The Orders Grid Header does not have the expected five columns.'});
        await expect(await this.ordersGridElements).toHaveChildren({message:'Orders Grid empty'});
    }

};

export default new VendorDashboardPage();