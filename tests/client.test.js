import loginPage from "../pages/client/loginPage";
import orderDashPage from "../pages/client/orderDashPage";
import newOrderPage from "../pages/client/newOrderPage";
import orderOverviewPage from "../pages/client/orderOverviewPage";
import orderFeesPage from "../pages/client/orderFeesPage";
import orderTitleSummPage from "../pages/client/orderTitleSummPage";
import newQuotePage from "../pages/client/newQuotePage";
import quoteDashPage from "../pages/client/quoteDashPage";
import quoteDetailPage from "../pages/client/quoteDetailPage";
import dotenv from 'dotenv';
dotenv.config();

const clientData = {
    user: process.env.CLIENT_USER,
    pass: process.env.CLIENT_PASS,
    loginURL: process.env.CLIENT_URL
};


describe('Pinecone', () => {
    it('Testing clients pages', async () => {
        //Login page
        await loginPage.open(clientData.loginURL);
        await expect(loginPage.loginButton).toBeDisplayed();
        await loginPage.loginAction(clientData.user, clientData.pass);

        //Client Dashboard page
        addStep(`Validate Orders Tab`);
        await expect(await orderDashPage.searchForFilesField).toBeDisplayed();
        await expect(await orderDashPage.newButton).toBeClickable();
        await expect(await orderDashPage.nameOfActor.getText()).toEqual("Lender");
 
        //Open New Order page  
        addStep(`Check creating title order page`);
        await orderDashPage.createNew(orderDashPage.newOrder);
        await expect(await newOrderPage.pageTitle.getText()).toEqual("Create a new order");
        await expect(await newOrderPage.createOrderButton).toBeDisplayed();
        await newOrderPage.clickElement(newOrderPage.cancelOrderButton);

        //Create New Quote page
        addStep(`Check creating quote page`);
        await orderDashPage.createNew(orderDashPage.newQuote);
        await expect(await newQuotePage.pageTitle.getText()).toEqual("Create a new quote");
        await expect(await newQuotePage.createQuoteButton).toBeDisplayed();
        await newOrderPage.clickElement(newQuotePage.cancelQuoteButton);

        //Order Details page - Overview
        addStep(`Validate Order - Overview`);
        await orderDashPage.openFirstOrder();
        await expect(await orderOverviewPage.orderTitle).toBeDisplayed();
        await expect(await orderOverviewPage.summary.getText()).toEqual("Summary");

        //Order Details page - Fees
        addStep(`Validate Order - Fees`);
        await orderOverviewPage.goToTab(orderOverviewPage.feesTab);
        await expect(await orderFeesPage.gridTitle.getText()).toEqual("Fees");
        await expect(await orderFeesPage.totalsOnGrid).toBeDisplayed();

        //Order Details page - Title summary
        addStep(`Validate Order - Title Summary`);
        await orderOverviewPage.goToTab(orderOverviewPage.titleSummTab);
        await expect(await orderTitleSummPage.gridTitle.getText()).toEqual("Title Summary");
        await expect(await orderTitleSummPage.mortagesOnGrid).toBeDisplayed();

        //Quotes List
        addStep(`Validate Quotes Tab`);
        await orderOverviewPage.goToOrderDashPage();
        await orderDashPage.seeOrdersOrQuotes(orderDashPage.quotesTab);
        await expect(await quoteDashPage.quotesSearchBar).toBeDisplayed();

        //Quote Detail page
        addStep(`Validate Quotes detail page`);
        await quoteDashPage.openFirstQuote();
        await expect(await quoteDetailPage.orderTitleButton).toBeDisplayed();
        await expect(await quoteDetailPage.gridTitle.getText()).toEqual("Fees");
    })
});
