import BasePage from '../basePage';

class AdminOrderCommentsPage extends BasePage {

    //WebElements
    get orderTitle(){ return $('.dTLEOK') }
    get postCommentButton(){ return $('input.admin-order-comment-submit') }

    get gridTitle(){ return $('#orderShowOrderCommentsIndex') }


}

export default new AdminOrderCommentsPage();
