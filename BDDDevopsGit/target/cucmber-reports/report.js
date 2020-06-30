$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/DemoDDT.feature");
formatter.feature({
  "name": "Test login functionality with different set of date",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test Login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UnitTest"
    }
  ]
});
formatter.step({
  "name": "User is on newtours site",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \"\u003cUsername\u003e\"\tand \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Display user logged in newtours successfully.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "mercury",
        "mercury"
      ]
    },
    {
      "cells": [
        "askmail29",
        "askmail29"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test Login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@UnitTest"
    }
  ]
});
formatter.step({
  "name": "User is on newtours site",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.DDTTest.user_is_on_newtours_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"mercury\"\tand \"mercury\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.DDTTest.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Display user logged in newtours successfully.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.DDTTest.display_user_logged_in_newtours_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test Login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@UnitTest"
    }
  ]
});
formatter.step({
  "name": "User is on newtours site",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.DDTTest.user_is_on_newtours_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"askmail29\"\tand \"askmail29\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.DDTTest.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Display user logged in newtours successfully.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.DDTTest.display_user_logged_in_newtours_successfully()"
});
formatter.result({
  "status": "passed"
});
});