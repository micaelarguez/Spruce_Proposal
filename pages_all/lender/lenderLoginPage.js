
import BasePage from '../../pages/base.page';

class LenderLoginPage extends BasePage {

    //WebElements
    get lenderEmail() {  return $('#lender_user_email')}
    get lenderPassword() {return $('#lender_user_password')}
    get loginButton() {return $('[name=commit]')}
    get logoutBtn() { return $('button[title="Log Out"]')}
    
    //Actions
    async loginAction(email, pass) {
        try {
            addStep(`Lender Login`);
            await super.emptyFieldAndSendText(await this.lenderEmail, email);
            await super.emptyFieldAndSendText(await this.lenderPassword, pass);
            await super.clickElement(await this.loginButton);
        } catch (error) {
            console.log("Error in Lender Login");
        }

    }

    async logOutAction() {
        try {
            addStep(`Lender Logout`);
            await super.clickElement(await this.logoutBtn);
        } catch (error) {
            console.log("Error in Lender LogOut");
        }
    }
   // agregarle las demas verificaciones del login
    // async ensureLogoutInPage() {
    //     try {
    //         const loginInPage = browser.$(this.singIn);
    //         return await loginInPage.isDisplayed();
    //     } catch (error) {
    //         console.log('error in ensure the Page');
    //     }
    // }

}

export default new LenderLoginPage();