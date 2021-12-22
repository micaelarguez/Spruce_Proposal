import BasePage from '../../pages/base.page';
import adminOrderDashPage from './adminOrderDashPage';
import adminCreateOwnersPolicyPage from './adminCreateOwnersPolicyPage';
import adminCreateLongFormPolicyPage from './adminCreateLongFormPolicyPage';
import adminCreateShortFormPolicyPage from './adminCreateShortFormPolicyPage';

class AdminOrderTitleDashPage extends BasePage {

    //WebElements
    get logOutButton() { return $('[title="Log Out"]') }

    get ordersTab() { return $('[title="Orders"]') }
    get titleTab() { return $('#root a[title="Title"]') }

    get createOwnersPolicyButton() { return $("a=Create Owner's Policy") }
    get createLongFormLendersPolicyButton() { return $("a=Create Long Form Lender's Policy") }
    get createShortFormLendersPolicyButton() { return $("a=Create Short Form Lender's Policy") }

    //Actions
    async goToButton(button) {
        await super.clickElement(await button);
    }

    async validateTitlePolicySection(){
        
        await adminCreateOwnersPolicyPage.validateOwnersPolicyDash();
        await adminCreateLongFormPolicyPage.validateLongFormPolicyDash();
        await adminCreateShortFormPolicyPage.validateShortFormPolicyDash();
    }

}

export default new AdminOrderTitleDashPage();