# Description
End to End UI tests for Borrowing Calculator. 
This projects uses 
- Cucumber framework to document tests in [Gherkin](https://docs.cucumber.io) (Given, When, Then) format.
- [Webdriver IO](https://webdriver.io) as the automation library.
- Typescript

All the test files have a `.feature` extension and can be found in `features` directory of the project.

## Pre-requisites:
To run this project you need Nodejs installed. You can download it from [here](https://nodejs.org/en/download/current/) 
Its recommended to use a LTS version (currently v14.15.4)

# How to Run Tests:
  All the configuration is in `wdio.conf.ts` file. Use a powershell/command window to run following commands from project root folder (wherever you have cloned this repo).
```
  cd <project_dir>
  npm install # to install dependencies
  npm test  # to run all the tests in feature directory
```  

+ Generate HTML Reports:
Running the tests, logs the results in the form on JSON files using [allure-reports](https://webdriver.io/docs/allure-reporter.html) plugin. The following command would interpret those JSON files and generate HTML reports for you in the `allure-report` directory.
The command to run tests is 
```
      npm run reports
```  
If it doesn't automatically open the reports for you, it can be found at `./allure-report/index.html`
