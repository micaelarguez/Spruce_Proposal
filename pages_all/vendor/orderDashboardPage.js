import BasePage from '../basePage';

class VendorOrderDashboardPage extends BasePage {

    //WebElements
    get backArrow(){ return $('a[href$="/vendor/"]') }
    get orderDetailsTable(){ return $('//div[text()="Order Details"]') }
    get statusTable(){ return $('//div[text()="Status"]') }
    get tableETA(){ return $('//div[text()="ETA"]') }
    get commentsTable(){ return $('//div[text()="Comments"]') }
    get commentField(){ return $('[placeholder="Leave a comment"]') }
    get uploadDocumentsField(){ return $('//div[text()="Drag & Drop or click to browse"]') }
    get searchReportSection(){ return $('//div[text()="Search Report and Title Commitment"]') }
    get createButton(){ return $('//a[text()="Create"]') }
    get editSearchReportButton(){ return $('a[href*="/searchReport/"]') }


    // Actions
    async validateOrderHeaders(fileNumber, tab) {

        await expect(await $(`//div[text()="${tab}"]`)).toBeDisplayed();
        await expect(await $(`//div[text()="${fileNumber}"]`)).toBeDisplayed({message:'The order file number header is not visible'});
    }

    async validateOrderInformationTables(tab) {

        await expect(await this.orderDetailsTable).toBeDisplayed({message:'Not displayed the order details form'});
        await expect(await this.statusTable).toBeDisplayed({message:'Not displayed the order status information'});
        await expect(await this.commentsTable).toBeDisplayed({message:'Not displayed the comments table'});
        await expect(await this.commentField).toBeDisplayed({message:'Not displayed the field to make order comments'});
        if (tab == "Payoff") {
            await expect(await this.tableETA).toBeDisplayed({message:'Not displayed ETA table'});
        }
    }

    async validateOrderDocumentsSection() {

        await expect(await this.uploadDocumentsField).toBeDisplayed({message:'Not displayed the field to upload documents'});
    
    }

    async validateSearchReportSection() {

        await expect(await this.searchReportSection).toBeDisplayed({message:'Not displayed the Search Report and Title Commitment section'});
    
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

export default new VendorOrderDashboardPage();
