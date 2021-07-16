import BasePage from './base.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BorrowingCalculatorPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    // get inputUsername () { return $('#username') }
    // get inputPassword () { return $('#password') }
    // get btnSubmit () { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async completeBorrowingInformation (dataTable) {
        return browser.pause(2000);
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('personal/home-loans/calculators-tools/much-borrow/');
    }
}

export default new BorrowingCalculatorPage();
