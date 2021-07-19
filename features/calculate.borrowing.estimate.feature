Feature: Calculate Borrowing Estimate
  AS A "Home Loan Customer"
  I WANT TO "get a fair estimate of my borrowing capacity"
  SO THAT "I can make informed decision to apply for home loan"

  Scenario Outline: Get a borrowing estimate by filling up all the information

    Given I am on the 'borrowingCalculator' page
    When I input following borrowing information
      | ApplicationType           | <ApplicationType>           |
      | NumberOfDependants        | <NumberOfDependants>        |
      | PropertyType              | <PropertyType>              |
      | YourIncome                | <YourIncome>                |
      | YourOtherIncome           | <YourOtherIncome>           |
      | LivingExpenses            | <LivingExpenses>            |
      | CurrentHomeLoanRepayments | <CurrentHomeLoanRepayments> |
      | OtherLoanRepayments       | <OtherLoanRepayments>       |
      | OtherCommittments         | <OtherCommittments>         |
      | TotalCreditCardLimits     | <TotalCreditCardLimits>     |
    And work out how much I could borrow
    Then my borrowing estimate should be equal to <ExpectedBorrowingEstimate>
    

    Examples: Owner/Occupier Single person with 90000 annual income
      | ApplicationType | NumberOfDependants | PropertyType    | YourIncome | YourOtherIncome | LivingExpenses | CurrentHomeLoanRepayments | OtherLoanRepayments | OtherCommittments | TotalCreditCardLimits | ExpectedBorrowingEstimate |
      | Single          | 0                  | Home to live in | 80000      | 10000           | 500            | 0                         | 100                 | 0                 | 10000                 | 507000                    |
