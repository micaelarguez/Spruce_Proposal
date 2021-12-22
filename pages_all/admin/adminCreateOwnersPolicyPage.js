import BasePage from '../../pages/base.page';
import adminOrderTitleDashPage from './adminOrderTitleDashPage';

class AdminCreateOwnersPolicyPage extends BasePage {

    //WebElements
    get logOutButton() { return $('[title="Log Out"]') }

    get ordersTab() { return $('[title="Orders"]') }

    get pageTitle() { return $('.dTLEOK=Create Owners Policy') }

    get saveAndExitButton() { return $('[data-id="Sign Out"]') }
    get nextButton() { return $('button=Next') }
    get backButton() { return $('button=Back') }

    //Actions
    async goToButton(button) {
        await super.clickElement(await button);
    }

    async validateOwnersPolicyDash() {

        //Go to Create Owner's Policy
        await expect(await adminOrderTitleDashPage.createOwnersPolicyButton).toBeClickable();
        await adminOrderTitleDashPage.goToButton(adminOrderTitleDashPage.createOwnersPolicyButton);

        //Create Owner's Policy
        await expect(await this.pageTitle).toBeDisplayed();
        await expect(await this.pageTitle.getText()).toEqual("Create Owners Policy");
        await expect(await this.saveAndExitButton).toBeClickable();
        await expect(await this.nextButton).toBeClickable();
        await expect(await this.backButton).toBeClickable();
        await this.goToButton(this.backButton);
    }
    
}

export default new AdminCreateOwnersPolicyPage();