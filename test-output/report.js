$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/P10433837/eclipse-workspace/BDDCucumberFramework/src/main/java/Features/ createcontact.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of page is freecrm",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click to create new contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 14,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "PChoudhary",
        "test@123",
        "Khusveer",
        "Singh",
        "Manager"
      ],
      "line": 15,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "PChoudhary",
        "test@123",
        "Kusum",
        "Singh",
        "Director"
      ],
      "line": 16,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of page is freecrm",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"PChoudhary\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click to create new contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contact details \"Khusveer\" and \"Singh\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 12844378758,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_page_is_freecrm()"
});
formatter.result({
  "duration": 9740944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PChoudhary",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 193872106,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8328563497,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 4280160,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_to_create_new_contacts()"
});
formatter.result({
  "duration": 5126486985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Khusveer",
      "offset": 29
    },
    {
      "val": "Singh",
      "offset": 44
    },
    {
      "val": "Manager",
      "offset": 56
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 2136212806,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 857558953,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of page is freecrm",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"PChoudhary\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click to create new contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contact details \"Kusum\" and \"Singh\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 11657151298,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_page_is_freecrm()"
});
formatter.result({
  "duration": 6264427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PChoudhary",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 139003417,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 7639313424,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 4291502,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_to_create_new_contacts()"
});
formatter.result({
  "duration": 1779336518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kusum",
      "offset": 29
    },
    {
      "val": "Singh",
      "offset": 41
    },
    {
      "val": "Director",
      "offset": 53
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 1939056993,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 847879039,
  "status": "passed"
});
});