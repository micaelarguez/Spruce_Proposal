import BasePage from '../basePage';

class QuoteDetailPage extends BasePage {

    //WebElements
    get newButton() { return $('[data-testid="global-navigation-actions button"]') }
    get logOutButton() { return $('[title="Log Out"]') }

    get orderTitleButton() { return $('.gCFekA a') }

    get gridTitle() { return $('.oFLpz') }

}

export default new QuoteDetailPage();