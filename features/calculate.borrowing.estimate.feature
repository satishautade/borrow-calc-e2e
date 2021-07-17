Feature: Calculate Borrowing Estimate
  AS A "Home Loan Customer"
  I WANT TO "get a fair estimate of my borrowing capacity"
  SO THAT "I can make informed decision to apply for home loan"

  Scenario Outline: Get a borrowing estimate by filling up all the information

    Given I am on the 'borrowingCalculator' page
    When I input following borrowing information
      | ApplicationType           | <ApplicationType>           |
      | NumberOfDependents        | <NumberOfDependents>        |
      | PropertyPurpose           | <PropertyPurpose>           |
      | YourIncome                | <YourIncome>                |
      | YourOtherIncome           | <YourOtherIncome>           |
      | LivingExpenses            | <LivingExpenses>            |
      | CurrentHomeLoanRepayments | <CurrentHomeLoanRepayments> |
      | OtherLoanRepayments       | <OtherLoanRepayments>       |
      | OtherCommittments         | <OtherCommittments>         |
      | TotalCreditCardLimit      | <TotalCreditCardLimit>      |
    Then my borrowing estimate should be equal to <ExpectedBorrowingEstimate>

    Examples: Owner/Occupier Single person with 90000 annual income
      | ApplicationType | NumberOfDependents | PropertyPurpose | YourIncome | YourOtherIncome | LivingExpenses | CurrentHomeLoanRepayments | OtherLoanRepayments | OtherCommittments | TotalCreditCardLimit | ExpectedBorrowingEstimate |
      | Single          | 0                  | Home to live in | 80000      | 10000           | 500            | 0                         | 100                 | 0                 | 10000                | 507000                    |
