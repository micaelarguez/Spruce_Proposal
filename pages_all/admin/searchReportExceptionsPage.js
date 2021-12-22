import BasePage from '../../pages/base.page';

class searchReportExceptionsPage extends BasePage {

        //WebElements

        get requirementsHeader(){ return $('//div[text()="Schedule B1 - Requirements"]') }
        get exceptionsHeader(){ return $('//div[text()="Schedule B2 - Exceptions"]') }
        get exitButton(){ return $('button[title="Save & Exit"]') }

        //Actions

        async validateSearchReportExceptionsSection() {

            await expect(await this.requirementsHeader).toBeDisplayed({message:'Not displayed the Schedule B1 header'});
            await expect(await this.exceptionsHeader).toBeDisplayed({message:'Not displayed the Schedule B2 header'});
            await this.clickElement(await this.exitButton);
        }

}

export default new searchReportExceptionsPage();