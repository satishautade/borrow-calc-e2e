import BasePage from './base.page';
import { fromFinanceNumberToNumber } from './utils/converters';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class BorrowingCalculatorPage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get applicationTypePartialLocator() { return 'input#application_type_' }
  get selectDependantsDropdown() { return $('select[title="Number of dependants"]') }
  get inputYourIncome() { return $('input[aria-labelledby="q2q1"]') }
  get inputYourOtherIncome() { return $('input[aria-labelledby="q2q2"]') }
  get inputLivingExpenses() { return $('input#expenses') }
  get inputCurrentHomeLoanRepayments() { return $('input#homeloans') }
  get inputOtherLoanRepayments() { return $('input#otherloans') }
  get inputOtherCommittments() { return $('input[aria-labelledby="q3q4"]') }
  get inputTotalCreditCardLimits() { return $('input#credit') }
  get buttonBorrowCalculator() { return $('button#btnBorrowCalculater') }
  get textBorrowEstimateResult() { return $('span#borrowResultTextAmount') }
  get buttonStartOver() { return $$('button.start-over')[0] }

  /**
  * overwrite specifc options to adapt it to page object
  */
  open() {
    return super.open('personal/home-loans/calculators-tools/much-borrow/');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async inputBorrowingInformation(borrowingDataHashmap) {
    console.log(JSON.stringify(borrowingDataHashmap));
    await Object.keys(borrowingDataHashmap).forEach(async keyName => {
      switch (keyName.toLowerCase()) {

        case 'applicationtype':
          await this.selectApplicationType(borrowingDataHashmap[keyName]);
          break;

        case 'numberofdependants':
          await this.selectNumberOfDependants(borrowingDataHashmap[keyName]);
          break;

        case 'propertytype':
          await this.selectPropertyType(borrowingDataHashmap[keyName]);
          break;

        case 'yourincome':
          await this.fillInputWithValue(this.inputYourIncome, borrowingDataHashmap[keyName]);
          break;

        case 'yourotherincome':
          await this.fillInputWithValue(this.inputYourOtherIncome, borrowingDataHashmap[keyName]);
          break;

        case 'livingexpenses':
          await this.fillInputWithValue(this.inputLivingExpenses, borrowingDataHashmap[keyName]);
          break;

        case 'currenthomeloanrepayments':
          await this.fillInputWithValue(this.inputCurrentHomeLoanRepayments, borrowingDataHashmap[keyName]);
          break;

        case 'otherloanrepayments':
          await this.fillInputWithValue(this.inputOtherLoanRepayments, borrowingDataHashmap[keyName]);
          break;

        case 'othercommittments':
          await this.fillInputWithValue(this.inputOtherCommittments, borrowingDataHashmap[keyName]);
          break;

        case 'totalcreditcardlimits':
          await this.fillInputWithValue(this.inputTotalCreditCardLimits, borrowingDataHashmap[keyName]);
          break;

        default:
          new Error(`No property with name ${keyName} found in borrowing data.`)
      }
    });
    await this.clickOnWorkoutHowMuchICanBorrowButton();
  }

  async clickOnWorkoutHowMuchICanBorrowButton() {
    const buttonCalculateBorrowingPower = await this.buttonBorrowCalculator;
    await buttonCalculateBorrowingPower.waitForDisplayed({ timeout: 3000 });
    await buttonCalculateBorrowingPower.click();
  }

  async selectApplicationType(applicationType) {
    const applicationTypeLocator = this.applicationTypePartialLocator + applicationType.toLowerCase()
    const appTypeButton = await $(applicationTypeLocator).waitForClickable({timeout:2000});
    await appTypeButton.click();
  }

  async selectNumberOfDependants(numberOfDependants) {
    const selectBox = await this.selectDependantsDropdown;
    await selectBox.waitForClickable({timeout:2000});
    await selectBox.selectByVisibleText(numberOfDependants);
  }

  async selectPropertyType(propertyPurpose) {
    console.log("propertyPurpose => " + propertyPurpose);
    switch (propertyPurpose.toLowerCase()) {
      case 'home to live in':
        const selectHomeToLiveIn = await $('input#borrow_type_home').waitForClickable({timeout:2000});
        await selectHomeToLiveIn.click();
        break;
      case 'residential investment':
        const selectResidentialInvestment = await $('input#borrow_type_investment').waitForClickable({timeout: 2000});
        await selectResidentialInvestment.click();
        break;
      default:
        new Error('Please choose a valid property Type. Valid values are "Home to live in" and "Residential investment"');
    }

  }

  async fillInputWithValue(inputLocator, value) {
    const inputElement = await inputLocator;
    await inputElement.waitForClickable({ timeout: 3000 });
    await inputElement.setValue(value);
  }

  async getBorrowingEstimate() {
    const borrowingEstimateElement = await this.textBorrowEstimateResult;
    await borrowingEstimateElement.waitForDisplayed({ timeout: 3000 });
    const actualBorrowingEstimate = await borrowingEstimateElement.getText();
    console.log("YOU CAN BORROW => " + actualBorrowingEstimate);
    const actualBorrowingEstimateNumber = fromFinanceNumberToNumber(actualBorrowingEstimate);
    return actualBorrowingEstimateNumber;
  }

}

export default new BorrowingCalculatorPage();
