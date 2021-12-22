import BasePage from '../../pages/base.page';
import adminOrderTitleDashPage from './adminOrderTitleDashPage';

class AdminCreateShortFormLoanPolicyPage extends BasePage {

    //WebElements
    get logOutButton() { return $('[title="Log Out"]') }

    get ordersTab() { return $('[title="Orders"]') }

    get pageTitle() { return $('.dTLEOK=Create Short Form Loan Policy') }
    
    get saveAndExitButton() { return $('[data-id="Sign Out"]') }
    get backButton() { return $('button=Back') }

    //Actions
    async goToButton(button) {
        await super.clickElement(await button);
    }

    async validateShortFormPolicyDash(){

        //Go to Create Short Form Loan Policy
        await expect(await adminOrderTitleDashPage.createShortFormLendersPolicyButton).toBeClickable();
        await adminOrderTitleDashPage.goToButton(adminOrderTitleDashPage.createShortFormLendersPolicyButton);

        //Create Short Form Loan Policy
        await expect(await this.pageTitle).toBeDisplayed();
        await expect(await this.pageTitle.getText()).toEqual("Create Short Form Loan Policy");
        await expect(await this.saveAndExitButton).toBeClickable();
        await expect(await this.backButton).toBeClickable();
        await this.goToButton(await this.backButton);
    }
    
}

export default new AdminCreateShortFormLoanPolicyPage();