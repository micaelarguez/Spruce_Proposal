import BasePage from "../basePage";

class LoginPage extends BasePage {

    //WebElements
    get clientEmail() { return $('#client_user_email') }
    get clientPassword() { return $('#client_user_password') }
    get loginButton() { return $('[name=commit]') }

    //Actions
    async loginAction(email, pass) {
        addStep(`Clients Login`);
        await super.emptyFieldAndSendText(await this.clientEmail, email);
        await super.emptyFieldAndSendText(await this.clientPassword, pass);
        await super.clickElement(await this.loginButton);
    }
}

export default new LoginPage();
