Feature: Free CRM Login Feature
Scenario Outline: Free CRM Login Test Scenario

Given user is on login page
When title of page is freecrm
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user click to create new contacts
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then close the browser

Examples:
    |username  |password|firstname|lastname|position|
    |PChoudhary|test@123|Khusveer |Singh   |Manager|
    |PChoudhary|test@123|Kusum 	  |Singh   |Director|