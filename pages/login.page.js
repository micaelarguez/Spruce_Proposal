import BasePage from './base.page';

class LoginPage extends BasePage {

    //WebElements
    get loginButton() { return $('#GoogleSignInButton') }
    get pageTitle() { return $('h1') }

    get userAccount() { return $('#identifierId') }
    get userPassword() { return $('[name=password]') }
    get userCodeBox() { return $('#totpPin') }

    get checkbox() { return $('#c7') }
    get submitButton() { return $('.VfPpkd-vQzf8d') }
    
    get lenderEmail() {  return $('#lender_user_email')}
    get lenderPassword() {return $('#lender_user_password')}
    get loginButton() {return $('[name=commit]')}
    get logoutBtn() { return $('button[title="Log Out"]')}

    //Actions
    async loginAction(user, pass, code) {
        await super.clickElement(await this.loginButton);

        await super.emptyFieldAndSendText(await this.userAccount, user);
        await this.userAccount.keys('Enter');

        await super.emptyFieldAndSendText(await this.userPassword, pass);
        await this.userPassword.keys('Enter');

        await super.emptyFieldAndSendText(await this.userCodeBox, code);

        await this.checkbox.click();

        await super.clickElement(await this.submitButton);
    }

    async loginAction_lenders(email, pass) {
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

export default new LoginPage();
