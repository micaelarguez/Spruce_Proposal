
import dotenv from 'dotenv';
import LoginPage from "../pages/login.page";
import QuotePage from "../pages/quote.page";
import OrderPage from "../pages/order.page";

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

const codeWrong = '33600';

describe('Pinecone', () => {

  it('Create lenders pages', async () => {

    //Lender Dashboard page
    await LoginPage.open(lenderData.loginURL);
    await expect(await LoginPage.loginButton).toBeDisplayed();
    await LoginPage.loginAction_lenders(lenderData.user, lenderData.pass);
    
    //Create New Quote page
    addStep(`Creating quote page`);
    // await OrderPage.createNew(await OrderPage.newQuote);
    // expect(await (await QuotePage.pageTitle).getText()).toEqual("Create a new quote");
    // expect(await QuotePage.createQuoteButton).toBeDisplayed();
    await QuotePage.createNewQuote(quoteProps);
    await OrderPage.clickElement(OrderPage.cancelOrderButton);
    //validations of the new 
    

  });

  // //validation input requiered
  // it('Verify requiered input Zip code messages', async () => {
  //   addStep(`Create quote input Zip code requiered`);
  //   await OrderPage.createNew(OrderPage.newQuote);
  //   expect(await QuotePage.createQuoteButton).toBeDisplayed();
  //   expect(await QuotePage.zipRequieredMsg(codeWrong)).toEqual("Error get geo information by zip code");
  //   await OrderPage.clickElement(OrderPage.cancelOrderButton);

  // });

  // it('Verify requiered input Amount messages', async () => {
  //   addStep(`Create quote input Amount requiered`);
  //   await OrderPage.createNew(OrderPage.newQuote);
  //   expect(await QuotePage.createQuoteButton).toBeDisplayed();
  //   await expect(await QuotePage.amountRequieredMsg()).toEqual("This is required");
  //   await OrderPage.clickElement(OrderPage.cancelOrderButton);
  // });

  // it('Verify requiered input Price messages', async () => {
  //   addStep(`Create quote input Price requiered`);
  //   await lenderOrderDashPage.createNew(lenderOrderDashPage.newQuote);
  //   await expect(await QuotePage.createQuoteButton).toBeDisplayed();
  //   await QuotePage.selectTransaction('Purchase');

  //   expect(await QuotePage.priceRequieredMsg()).toEqual("This is required");
  //   await OrderPage.clickElement(OrderPage.cancelOrderButton);
  // });

});