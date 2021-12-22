
const PAGE_TIMEOUT = 40000

export default class BasePage {

    //declaration of the button Create
    get newBtnOrder(){return $('');}
    get newBtnQuote(){return $('');}
    get btnSearch(){return'button[type="submit"]'}
    get clearSearch(){return 'button[type="reset"]'}
    get advanceSearch(){return ''}
   
    // Actions
    async open(path) {
        await browser.url(`${path}`);
    }

    async clickElement(element) {
        await element.waitForClickable({ timeout: PAGE_TIMEOUT });
        await element.click();
    }

    async emptyFieldAndSendText(element, text) {
        await element.waitForClickable({ timeout: PAGE_TIMEOUT });
        await element.clearValue();
        await element.click();
        await element.keys(text);
    }
   

    async search(){

    }

    async searchAdvance(){

    }
    // debería existir metodo create order y create quote en la base page para reutilizar en todas las newXperfiles cuando se creen las pagepara Order y quotes
    // async createNew ({type}){
    //     const btnType=type.toLowercase();
    //     await this.clickElement(newBtn);
    //     await type==="orders" ?
    //     await this.clickElement(btnOrder):
    //     await this.clickElement(btnQuote);
    // }
    
}
