import QuotePage from "../pages/quote.page";
import LenderPage from "../pages/lenders.page";
import dotenv from 'dotenv';
import OrderPage from "../pages/order.page";
import LoginPage from "../pages/login.page";
dotenv.config();

const lenderData = {
  user: process.env.LENDER_VENDOR_USER,
  pass: process.env.LENDER_VENDOR_PASS,
  loginURL: process.env.LENDER_URL
};
const quoteProps = {
 
  code: '33160',
  transaction: 'Refinance',
  amount: 500,
  property: 500,
  balance: 500,
  price: 4555555
};
describe('Pinecone', () => {
  it('Testing lenders pages', async () => {
    //Lender Dashboard page
    await LoginPage.open(lenderData.loginURL);
    await expect(await LoginPage.loginButton).toBeDisplayed();
    await LoginPage.loginAction_lenders(lenderData.user, lenderData.pass);
    
    addStep(`Validate Orders Tab`);
    await expect(await OrderPage.searchForFilesField).toBeDisplayed();
    await expect(await OrderPage.newButton).toBeClickable();

    //Open New Order page
    addStep(`Check creating title order page`);
    await LenderPage.createNew(LenderPage.newOrder);
    await expect(await OrderPage.orderTitle.getText()).toEqual("Create a new order");
    await expect(await OrderPage.createOrderButton).toBeDisplayed();
    await OrderPage.clickElement(OrderPage.cancelOrderButton);

    //Create New Quote page
    addStep(`Check creating quote page`);
    // await LenderPage.createNew(LenderPage.newQuote);
    // await expect(await QuotePage.pageTitle.getText()).toEqual("Create a new quote");
    //await expect(await QuotePage.createQuoteButton).toBeDisplayed();
    await QuotePage.createNewQuote(quoteProps);
    //agragar la validacion del titulo de la pagina siguiente.
    await OrderPage.clickElement(OrderPage.ordersTab);

    //Order Details Page - Overview
    await OrderPage.openFirstOrder();
    addStep(`Validate Order - Overview`);
    await expect(await OrderPage.orderTitle).toBeDisplayed();
    await expect(await OrderPage.signingAppointment.getText()).toContain("Signing Appointment");
   
    //Order Details Page - Fees
    addStep(`Validate Order - Fees`);
    await OrderPage.goToTab(OrderPage.feesTab);
    await expect(await OrderPage.gridTitleFees.getText()).toEqual("Fees");
    //await expect(await OrderPage.totalsOnGrid).toBeDisplayed();
    
    //Order Details Page - Title Summary
    addStep(`Validate Order - Title Summary`);
    await OrderPage.goToTab(OrderPage.titleSummTab);
    await expect(await OrdermPage.gridTitle.getText()).toEqual("Title Summary");
   // await expect(await OrderPage.mortagesOnGrid).toBeDisplayed();
    
    //Quotes List
    addStep(`Validate Quotes Tab`);
    await LenderPage.changeTab(LenderPage.quotesTab);
    await expect(await QuotePage.quotesSearchBar).toBeDisplayed();
   
    //Quote Detail Page
    addStep(`Validate Quotes detail page`);
    await QuotePage.openFirstQuote();
    await expect(await QuotePage.orderTitleButton).toBeDisplayed();
    await expect(await QuotePage.gridTitle.getText()).toEqual("Fees");
  });
  
});
