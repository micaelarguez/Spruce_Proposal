import BasePage from '../../pages/base.page';

class searchReportPage extends BasePage {

    //WebElements
    get headerEditCreateReport(){ return $('//div[contains(text(),"Search Report & Title Commitment")]') }
    get searchReportTab(){ return $('//a[text()="Search Report"]') }
    get searchReportExceptionsTab(){ return $('a[href*="/searchReportExceptions"]') }
    get summaryForm(){ return $('//div[text()="Summary"]') }
    get legalAndVestingForm(){ return $('//div[text()="Legal & Vesting"]') }
    get propertyTaxForm(){ return $('//div[text()="Property Tax Summary"]') }
    get deedForm(){ return $('//div[text()="Deed Information"]') }
    get mortgageForm(){ return $('//div[text()="Mortgage Information"]') }
    get judgementLienForm(){ return $('//div[text()="Judgement/Lien Information"]') }
    get bankruptcyForm(){ return $('//div[text()="Bankruptcy Information"]') }
    get submitChangesHeader(){ return $('//div[text()="Save or submit Search Report & Title Commitment"]') }
    get saveButtons(){ return $('//button[text()="Save"]') }
    get finalizeButtons(){ return $('//button[text()="Finalize"]') }

    //Actions
    
    async validateSearchReportSection() {

        await expect(await this.headerEditCreateReport).toBeDisplayed({message:'Not displayed the page header'});
        await expect(await this.searchReportTab).toBeDisplayed({message:'Not displayed the search report tab'});
        await expect(await this.summaryForm).toBeDisplayed({message:'Not displayed the Summary form'});
        await expect(await this.legalAndVestingForm).toBeDisplayed({message:'Not displayed the Legal & Vesting form'});
        await expect(await this.propertyTaxForm).toBeDisplayed({message:'Not displayed the Property Tax Summary form'});
        await expect(await this.deedForm).toBeDisplayed({message:'Not displayed the Deed Information form'});
        await expect(await this.mortgageForm).toBeDisplayed({message:'Not displayed the Mortgage Information form'});
        await expect(await this.judgementLienForm).toBeDisplayed({message:'Not displayed the Judgement/Lien Information form'});
        await expect(await this.bankruptcyForm).toBeDisplayed({message:'Not displayed the Bankruptcy Information form'});
        await expect(await this.submitChangesHeader).toBeDisplayed({message:'Not displayed the submit changes header'});
        await expect(await this.saveButtons).toBeDisplayed({message:'Not displayed the save buttons'});
        await expect(await this.finalizeButtons).toBeDisplayed({message:'Not displayed the finalize buttons'});
    }
}

export default new searchReportPage();