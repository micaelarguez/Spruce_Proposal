import BasePage from '../../pages/base.page';
import adminOrderTitleDashPage from './adminOrderTitleDashPage';

class AdminCreateLongFormLoanPolicyPage extends BasePage {

    //WebElements
    get logOutButton() { return $('[title="Log Out"]') }

    get ordersTab() { return $('[title="Orders"]') }

    get pageTitle() { return $('.dTLEOK=Create Long Form Loan Policy') }

    get saveAndExitButton() { return $('[data-id="Sign Out"]') }
    get nextButton() { return $('button=Next') }
    get backButton() { return $('button=Back') }

    //Actions
    async goToButton(button) {
        await super.clickElement(await button);
    }

    async validateLongFormPolicyDash(){

        //Go to Create Long Form Loan Policy
        await expect(await adminOrderTitleDashPage.createLongFormLendersPolicyButton).toBeClickable();
        await adminOrderTitleDashPage.goToButton(adminOrderTitleDashPage.createLongFormLendersPolicyButton);

        //Create Long Form Loan Policy
        await expect(await this.pageTitle).toBeDisplayed();
        await expect(await this.pageTitle.getText()).toEqual("Create Long Form Loan Policy");
        await expect(await this.saveAndExitButton).toBeClickable();
        await expect(await this.nextButton).toBeClickable();
        await expect(await this.backButton).toBeClickable();
        await this.goToButton(this.backButton);
    }

    
    
}

export default new AdminCreateLongFormLoanPolicyPage();