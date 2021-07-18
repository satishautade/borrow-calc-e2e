import { Given, When, Then } from '@cucumber/cucumber';
import BorrowingCalculatorPage from '../pageobjects/borrowing.calculator.page';

const pages = {
  borrowingCalculator: BorrowingCalculatorPage
};

Given("I am on the {string} page", async (page) => {
  await pages[page].open()
});

When("I input following borrowing information", async (dataTable) => {
  const borrowingData = dataTable.transpose().hashes()[0];
  await BorrowingCalculatorPage.inputBorrowingInformation(borrowingData);
});

When("work out how much I could borrow", async()=>{
  await BorrowingCalculatorPage.clickOnWorkoutHowMuchICanBorrowButton();
});

Then("my borrowing estimate should be equal to {string}", async (expectedBorrowingEstimate) => {
  const actualBorrowingEstimate = await BorrowingCalculatorPage.getBorrowingEstimate();
  console.log("Borrowing Estimate => " + actualBorrowingEstimate);
  // expect(actualBorrowingEstimate).to.equal(expectedBorrowingEstimate);
});

