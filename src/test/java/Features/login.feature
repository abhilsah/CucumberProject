Feature: Free CRM Login Feature
Scenario Outline: Free CRM Login Test Scenario

Given user is on login page
When title of page is freecrm
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then close the browser
Examples:
        |username|password|
        |PChoudhary|test@123|
        |Hetansh|test@123|
  
  
  


