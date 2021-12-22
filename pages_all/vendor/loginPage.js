import BasePage from '../../pages/basePage';

class VendorPage extends BasePage {

    //WebElements
    get vendorEmail(){ return $('#vendor_user_email') }
    get vendorPassword(){ return $('#vendor_user_password') }
    get loginButton(){ return $('[name=commit]') }

    //Actions
    async loginAction(email, pass) {
        addStep('Vendor Login');
        await super.emptyFieldAndSendText(await this.vendorEmail, email);
        await super.emptyFieldAndSendText(await this.vendorPassword, pass);
        await super.clickElement(await this.loginButton);
    }

}

export default new VendorPage();
