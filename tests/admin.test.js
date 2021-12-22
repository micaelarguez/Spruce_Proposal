
import dotenv from 'dotenv';
dotenv.config();

import { generateToken } from "authenticator";
import loginPage from '../pages/login.page';
import OrderPage from '../pages/order.page';
import QuotePage from '../pages/quote.page';
import incomingTransactionsPage from '../pages/incomingTransactions.page';
import AccountingPage from '../pages/accounting.page';
import LendersPage from '../pages/lenders.page';
import JournalEntriesPage from '../pages/journalEntries.page';
import InternalTransfersPage from '../pages/InternalTransfers.page';
import ClientsPage from '../pages/clients.page';

let otp = generateToken(process.env.ADMIN_USER_KEY);

describe('Pinecone', () => {
    it('Testing admins initial pages', async () => {
        //Login Page
        addStep('Checks Admin - Login Page');
        await loginPage.open(process.env.ADMIN_URL);
        await expect(await LoginPage.loginButton).toBeDisplayed();
        await expect(await LoginPage.pageTitle.getText()).toEqual("Spruce Admin");

        //Orders Dashboard page
        addStep('Checks Admin - Order Dashboard Page');
        await LoginPage.loginAction(process.env.ADMIN_USER_EMAIL, process.env.ADMIN_USER_PASSWORD, otp);
        await expect(await OrderPage.searchForFilesField).toBeDisplayed();

        await expect(await OrderPage.newButton).toBeClickable();
    })

    it('Testing admins order pages', async () => {
        // Create New Order Page
        addStep('Checks Admin - New Order Page');
        await OrderPage.createNew(OrderPage.newOrder);
        await expect(await OrderPage.createOrderButton).toBeDisplayed();
        await expect(await OrderPage.pageTitle.getText()).toEqual("Create a new order");
        await OrderPage.clickElement(OrderPage.cancelOrderButton);

        //Order Details Page - Overview
        addStep('Checks Admin - Order Details Page in Overview section');
        await OrderPage.selectTransactionCategoryAndCurativeGrade("Purchase", "Grade A");
        await OrderPage.openFirstOrder();
        await expect(await OrderPage.orderTitle).toBeDisplayed();
        await expect(await OrderPage.changeStatusButton).toBeClickable();
        await expect(await OrderPage.gridTitle.getText()).toEqual("Parties");

        //Order Details Page - Overview, Add Party
        await expect(await OrderPage.addPartyButton).toBeClickable();

        await OrderPage.goToAddParty();
        await expect(await OrderPage.addSellerButton).toBeClickable();
        await expect(await OrderPage.addBuyerButton).toBeClickable();
        await OrderPage.goToAddSeller();

        //Order Details Page - Overview, Add Seller
        await expect(await OrderPage.addSellerTitle).toBeDisplayed();
        await expect(await OrderPage.addButton).toBeDisplayed();
        await browser.refresh();

        //Order Details Page - Overview, Add Buyer
        await OrderPage.goToAddParty();
        await OrderPage.goToAddBuyer();

        await expect(await OrderPage.addBuyerTitle).toBeDisplayed();
        await expect(await OrderPage.addButton).toBeDisplayed();

        //Order Details Page - Tasks
        addStep('Checks Admin - Order Details Page in Tasks section');
        await OrderPage.goToTab(OrderPage.tasksTab);
        await expect(await OrderPage.orderTitle).toBeDisplayed();
        await expect(await OrderPage.newTaskButton).toBeClickable();
        await expect(await OrderPage.gridTitle.getText()).toContain("Tasks");

        //Order Details Page - Comments
        addStep('Checks Admin - Order Details Page in Comments section');
        await OrderPage.goToTab(OrderPage.commentsTab);
        await expect(await OrderPage.orderTitle).toBeDisplayed();
        await expect(await OrderPage.postCommentButton).toBePresent();
        await expect(await OrderPage.gridTitle.getText()).toEqual("Post a new comment");

        //Order Details Page - Docs
        addStep('Checks Admin - Order Details Page in Docs section');
        await OrderPage.goToTab(OrderPage.docsTab);
        await expect(await OrderPage.orderTitle).toBeDisplayed();
        await expect(await OrderPage.dragAndDropBox).toBePresent();
        await expect(await OrderPage.gridTitle.getText()).toEqual("Standard Documents");

        //Docs - Add Portal Document
        addStep('Checks Admin - Docs Page in the Adding a Portal Document');
        await OrderPage.addDocument();
        await expect(await OrderPage.orderTitle).toBeDisplayed();
        await expect(await OrderPage.uploadButton).toBeClickable();
        await expect(await OrderPage.gridTitle.getText()).toEqual("Upload a Portal Document");

        //Order Details Page - Fees A - J
        addStep('Checks Admin - Order Details Page in Fees from A - J section');
        await OrderPage.goToTab(OrderPage.feesTab);
        await expect(await OrderPage.orderTitle).toBeDisplayed();
        await expect(await OrderPage.generatePDFButton).toBeClickable();
        await expect(await OrderPage.gridTitle.getText()).toEqual("Loan Costs");

        //Order Details Page - Fees K - N
        // NOT ALL ORDERS HAVE IT

        //Order Details Page - Contacts
        addStep('Checks Admin - Order Details Page in Contacts section');
        await OrderPage.goToTab(OrderPage.contactsTab);
        await expect(await OrderPage.orderTitle).toBeDisplayed();
        await expect(await OrderPage.addContactButton).toBeClickable();
        await expect(await OrderPage.gridTitle.getText()).toEqual("Internal Contacts");

        //Order Details Page - Add new Contacts
        addStep('Checks Admin - Order Details Page in the Adding contacts section');
        await OrderPage.addContact();
        await expect(await OrderPage.existingContactField).toBeDisplayed();
        await expect(await OrderPage.cancelButton).toBeClickable();
        await expect(await OrderPage.gridTitle).toBeDisplayed();
        await OrderPage.closeContactModal();

        //Order Details Page - Escrow - Create/Edit Transactions
        addStep('Checks Admin - Order Details Page in Escrow to Create/Edit Transactions');
        await OrderPage.goToTab(OrderPage.escrowTab);
        await expect(await OrderPage.orderTitle).toBeDisplayed();
        await expect(await OrderPage.fundingCompleteButton).toBeClickable();
        await expect(await OrderPage.gridTitle.getText()).toEqual("Incoming");

        //Order Details Page - Escrow - Disbburded Transactions
        addStep('Checks Admin - Order Details Page in Escrow - Disbburded Transactions');
        await OrderPage.switchTab(OrderPage.disbursedTab);
        await expect(await OrderPage.orderTitle).toBeDisplayed();
        await expect(await OrderPage.fundingCompleteButton).toBeClickable();
        await expect(await OrderPage.gridTitle.getText()).toEqual("Disbursed Transactions");

        //Order Details Page - Activity
        addStep('Checks Admin - Order Details Page in Activity');
        await OrderPage.goToTab(OrderPage.activityTab);
        await expect(await OrderPage.orderTitle).toBeDisplayed();
        await expect(await OrderPage.eventsGrid).toBePresent();
        await expect(await OrderPage.gridTitle.getText()).toEqual("Audit Trail");

        // Purchase Order - Title Section
        addStep('Checks Admin - Purchase Order in Title Section');
        await OrderPage.changeTab(OrderPage.titleTab);
        await OrderPage.validateTitlePolicySection();
        await OrderPage.goToSearchReportAndTitleCommitmentBoard();

        // Search Report Dashboard
        addStep('Checks Admin - Search Report Dashboard');
        await OrderPage.validateSearchReportSection();
        await OrderPage.changeTab(OrderPage.searchReportExceptionsTab);

        // Search Report Exceptions Dashboard
        addStep('Checks Admin - Report Exceptions Dashboard');
        await OrderPage.validateSearchReportExceptionsSection();
    })

    it('Testing admins quotes pages', async () => {

        //Quotes Dashboard Page
        addStep('Checks Admin - Quotes Dashboard Page');
        await QuotePage.changeTab(OrderPage.quotesTab);
        await QuotePage.validateHeaderByText("h1", "Quotes");

        //Quote Detail Page - Status
        addStep('Checks Admin - Quotes Detail Page in Status section');
        await QuotePage.openFirstQuote();
        await expect(await QuotePage.quoteTitle).toBeDisplayed();
        await expect(await QuotePage.quoteTitle.getText()).toContain("Quote");
        await OrderPage.validateHeaderByText("h2", "Quote Info");

        //Quote Detail Page - CD Items V3
        addStep('Checks Admin - Quotes Detail Page in CD Items V3 section');
        await QuotePage.changeTab(QuotePage.tabCD);
        await expect(await QuotePage.quoteTitle).toBeDisplayed();
        await expect(await QuotePage.quoteTitle.getText()).toContain("Quote");
        await QuotePage.validateHeaderByText("h2", "CD Items V3");

        //Create New Quote page
        addStep('Checks Admin - New Quote Page');
        await QuotePage.createNew(QuotePage.newQuote);
        await QuotePage.validateHeaderByText("h1", "Quote Creation");
        await expect(await QuotePage.createQuoteButton).toBeDisplayed();
    })

    it('Testing admins accounting pages', async () => {

        //Accounting Dashboard Page
        addStep('Checks Admin - Accounting Dashboard Page');
        await AccountingPage.changeTab(AccountingPage.accountingTab);
        await AccountingPage.validateAccountingItems();

        //Accounting - Incoming Transactions Dashboard Page
        addStep('Checks Admin - Accounting - Incoming Transactions Dashboard Page');
        await AccountingPage.changeTab(await AccountingPage.incomingTransactionsNav);
        await expect(await AccountingPage.pageTitle).toBeDisplayed();
        await IncomingTransactionsPage.validateAccountingIncomingTransactionsItems();
        await incomingTransactionsPage.navigateToWiresAndValidatePage();
        await AccountingPage.navigateToChecksAndValidatePage();
        await AccountingPage.navigateToACHsAndValidatePage();
        await AccountingPage.changeTab(await AccountingPage.accountingTab);
        await AccountingPage.changeTab(await AccountingPage.journalEntriesNav);
        await JournalEntriesPage.validateJournalEntriesPage();
        await AccountingPage.changeTab(await AccountingPage.accountingTab);
        await AccountingPage.changeTab(await AccountingPage.unrestrictedInternalTransfersNav);
        await InternalTransfersPage.validateInternalTransfersPage();
    })

    it('Testing admins lender pages', async () => {
        //Lenders Dashboard page
        addStep('Checks Admin - Lenders Dashboard Page');
        await LendersPage.changeTab(await LendersPage.lendersTab);
        await LendersPage.validateHeaderByText("h1", "Lender Companies");

        //Add New Lender Page
        addStep('Checks Admin - New Lender Page');
        await LendersPage.createNew(LendersPage.newLender);
        await LendersPage.validateHeaderByText("h1", "Create Lender Company");
        await expect(await LendersPage.createLenderButton).toBeDisplayed();

        //View Lender Details Page
        addStep('Checks Admin - View Lender Details Page');
        await LendersPage.changeTab(LendersPage.lendersTab);
        let lenderName = await LendersPage.lenderCompanyName.getText();
        await LendersPage.openFirstLender(); 
        await LendersPage.validateLenderCompany(lenderName);
        //await expect(await LendersPage.lenderTitle).toBeDisplayed();
        await LendersPage.validateHeaderByText("div", "Lender Details");

        //Edit Lender Page
        addStep('Checks Admin - Edit Lender Page');
        await LendersPage.editLenderDetails();
        await expect(await adminEditLenderPage.pageTitle).toBeDisplayed();
        await LenderPage.validateHeaderByText("h1", "Edit Lender Company");
        await expect(await LenderPage.updateButton).toBeDisplayed();
    })

    it('Testing admins client pages', async () => {

        //Clients Dashboard Page
        addStep('Checks Admin - Client Dashboard Page');
        await ClientsPage.changeTab( await adminClientDashPage.clientsTab);
        //await expect(await adminClientDashPage.pageTitle.getText()).toEqual("Clients");

        //View Client Details Page
        addStep('Checks Admin - Client Details Page');
        await ClientsPage.openFirstClient();
        await expect(await ClientsPage.pageTitle).toBeDisplayed();

        //View Associated Lenders Page
        addStep('Checks Admin - View Associated Lenders Page');
        await ClientsPage.changeTab(ClientsPage.lendersAssociatedTab);
        await expect(await ClientsPage.lendersLabel).toBeDisplayed();
        await expect(await ClientsPage.lendersLabel.getText()).toEqual("Lenders");
    })
});
