import loginPage from "../pages/vendor/loginPage";
import mainVendorDashboardPage from '../pages/vendor/mainVendorDashboardPage';
import orderDashboardPage from "../pages/vendor/orderDashboardPage";
import searchReportPage from "../pages/vendor/searchReportPage";
import searchReportExceptionsPage from "../pages/vendor/searchReportExceptionsPage";
import dotenv from 'dotenv';
dotenv.config();

const vendorData = {
    user: process.env.LENDER_VENDOR_USER,
    pass: process.env.LENDER_VENDOR_PASS,
    loginURL: process.env.VENDOR_URL
  };

describe('Pinecone', () => {

    it('Testing vendor pages', async () => {
      // Login page 
      await loginPage.open(vendorData.loginURL);
      await loginPage.loginButton.waitForDisplayed({timeoutMsg:'The submit button "LOG IN" is not visible'});
      await loginPage.loginAction(vendorData.user, vendorData.pass);
 
      // Title Search tab 
      addStep(`Validate Title Search Tab`);
      await mainVendorDashboardPage.validateTabDashboard(mainVendorDashboardPage.titleSearchTab);
      let fileNumber = await mainVendorDashboardPage.firstOrderOnGrid.getAttribute('title');
      // Title Search - Order Dashboard
      await mainVendorDashboardPage.openFirstOrder();
      let tab = "Title Search";

      addStep(`Validate order dashboard`);
      await orderDashboardPage.validateOrderHeaders(fileNumber, tab);
      await orderDashboardPage.validateOrderInformationTables(tab);
      await orderDashboardPage.validateOrderDocumentsSection();
      await orderDashboardPage.validateSearchReportSection();
      await orderDashboardPage.goToSearchReportAndTitleCommitmentBoard();
      // Title Search - Order - Search Report Dashboard
      await searchReportPage.validateSearchReportSection();
      await mainVendorDashboardPage.goToTab(searchReportPage.searchReportExceptionsTab);
      // Title Search - Order - Search Report Exceptions Dashboard
      await searchReportExceptionsPage.validateSearchReportExceptionsSection();
      await mainVendorDashboardPage.goToTab(searchReportExceptionsPage.exitButton);
      await mainVendorDashboardPage.goToTab(mainVendorDashboardPage.spruceRefreshButton);

      addStep(``);
      // Payoff tab
      addStep(`Validate Payoff Tab`);
      await mainVendorDashboardPage.goToTab(mainVendorDashboardPage.payoffTab);
      await mainVendorDashboardPage.validateTabDashboard(mainVendorDashboardPage.payoffTab);
      fileNumber = await mainVendorDashboardPage.firstOrderOnGrid.getAttribute('title');
      // Payoff - Order Dashboard
      await mainVendorDashboardPage.openFirstOrder();
      tab = "Payoff";
      addStep(`Validate order dashboard`);
      await orderDashboardPage.validateOrderHeaders(fileNumber, "Payoff");
      await orderDashboardPage.validateOrderInformationTables();
      await orderDashboardPage.validateOrderDocumentsSection();
      await orderDashboardPage.validateSearchReportSection();
      // Payoff - Order - Search Report Dashboard
      await orderDashboardPage.goToSearchReportAndTitleCommitmentBoard();
      await searchReportPage.validateSearchReportSection();
      // Payoff - Order - Search Report Exceptions Dashboard
      await mainVendorDashboardPage.goToTab(searchReportPage.searchReportExceptionsTab);
      await searchReportExceptionsPage.validateSearchReportExceptionsSection();
    });
  
  });
  