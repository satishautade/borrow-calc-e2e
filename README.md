# Description
End to End UI tests for Borrowing Calculator. 
This projects uses Typescript with following tools
- Cucumber framework to document tests in [Gherkin](https://docs.cucumber.io) (Given, When, Then) format.
- [Webdriver IO](https://webdriver.io) as the automation library.

All the test files have a `.feature` extension and can be found in `features` directory of the project.

## Pre-requisites:
To run this project you need 
- Nodejs v12 or higher. You can download it from [here](https://nodejs.org/en/download/current/) 
Its recommended to use a LTS version (currently v14.15.4)
- Allure Commandline need Java 8 or higher 

# How to Run Tests:
  All the configuration is in `config/wdio.conf.ts` file. Use a powershell/command window to run following commands from project root folder (wherever you have cloned this repo).
```
  cd <project_dir>
  npm install # to install dependencies
  npm test  # to run all the tests with '@regression' tag
```  
Tests accept following environment variables to injected at runtime to alter the test execution. 

TAGS - Select the specific cucumber scenarios to be run
TIMEOUT - Configure overall step timeout in seconds. (defaults to 60 sec)
BROWSER - Which browser to run UI tests against (chrome and firefox supported)
BASE_URL - The application base URL to target

You can pass these to the test runner as below:
```
  TAGS=@borrowing TIMEOUT=70 BROWSER=chrome npm test # Runs all tests for borrowing feature
  TAGS=@api TIMEOUT=30 npm test
```

+ HTML Reports (Allure):
This project uses the [allure-reports](https://webdriver.io/docs/allure-reporter.html) plugin to generate HTML reports.
Running the tests, logs the results in JSON format in `allure-results` directory.  The reporter is configured to automatically generate HTML reports from these JSON files at the end of test execution. HTML reports are available in `allure-report` directory.
Run following command to open these reports if they don't open automatically.
```
  npm run allure:open
```
