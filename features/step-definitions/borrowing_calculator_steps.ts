import { Given, When, Then } from '@cucumber/cucumber';
import BorrowingCalculatorPage from '../pageobjects/borrowing.calculator.page';

const pages = {
    borrowingCalculator: BorrowingCalculatorPage
};

Given("I am on the {string} page", async (page) => {
    await pages[page].open()
});

When("I input following borrowing information", async (dataTable) => {
    console.log("=====================RECEIVED TEST DATA ======================")
    console.log(JSON.stringify(dataTable.raw()));
    await pages['borrowingCalculator'].completeBorrowingInformation(dataTable);
});

Then("my borrowing estimate should be equal to {int}", async (expectedBorrowingEstimate) => {
    await browser.pause(2000);
});

