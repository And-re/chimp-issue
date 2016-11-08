# Installation

`npm install`

# Start application

`npm start`

# Start tests

`npm test`


# Problem

## First test

```
Feature: Sample Test


  Scenario: Login form


[12:21:19]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/url"

[12:21:19]  DATA	{"url":"http://localhost:3000"}

[12:21:20]  RESULT	null

[12:21:20]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/elements"

[12:21:20]  DATA	{"using":"id","value":"username"}

[12:21:20]  RESULT	[{"ELEMENT":"0"}]

[12:21:20]  COMMAND	GET "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element/0/displayed"

[12:21:20]  DATA	{}

[12:21:20]  RESULT	true

  ✔ Given I am on the login page

[12:21:20]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/elements"

[12:21:20]  DATA	{"using":"xpath","value":"//*[@id='username']"}

[12:21:20]  RESULT	[{"ELEMENT":"0"}]

[12:21:20]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element/0/clear"

[12:21:20]  DATA	{}

[12:21:20]  RESULT	null

[12:21:20]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element/0/value"

[12:21:20]  DATA	{"value":["t","e","s","t","@","t","e","s","t",".","(3 more items)"]}

[12:21:20]  RESULT	null

  ✔ When I enter "test@test.com" in "username" field

[12:21:20]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/elements"

[12:21:20]  DATA	{"using":"xpath","value":"//*[@id='password']"}

[12:21:20]  RESULT	[{"ELEMENT":"1"}]

[12:21:20]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element/1/clear"

[12:21:20]  DATA	{}

[12:21:20]  RESULT	null

[12:21:20]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element/1/value"

[12:21:20]  DATA	{"value":["t","e","s","t",".","t","e","s","t"]}

[12:21:20]  RESULT	null

  ✔ And I enter "test.test" in "password" field


[12:21:20]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element"

[12:21:20]  DATA	{"using":"xpath","value":"//button[contains(text(),'Clear')]"}

[12:21:20]  RESULT	{"ELEMENT":"2"}

[12:21:20]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element/2/click"

[12:21:20]  DATA	{}

[12:21:20]  RESULT	null

  ✔ And I click on the "Clear" button


[12:21:20]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/elements"

[12:21:20]  DATA	{"using":"xpath","value":"//*[@id='username']"}

[12:21:20]  RESULT	[{"ELEMENT":"0"}]

[12:21:20]  COMMAND	GET "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element/0/attribute/value"

[12:21:20]  DATA	{}

[12:21:20]  RESULT	""

[12:21:20]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/elements"

[12:21:20]  DATA	{"using":"xpath","value":"//*[@id='password']"}

[12:21:20]  RESULT	[{"ELEMENT":"1"}]

[12:21:20]  COMMAND	GET "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element/1/attribute/value"

[12:21:20]  DATA	{}

[12:21:20]  RESULT	""

  ✔ Then I should see empty inputs
```

## Last test
```
Feature: Sample Test


  Scenario: Login form

[12:45:06]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/url"

[12:45:06]  DATA	{"url":"http://localhost:3000"}

[12:45:07]  RESULT	null

[12:45:07]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/elements"

[12:45:07]  DATA	{"using":"id","value":"username"}

[12:45:08]  RESULT	[{"ELEMENT":"600"}]

[12:45:08]  COMMAND	GET "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element/600/displayed"

[12:45:08]  DATA	{}

[12:45:09]  RESULT	true

  ✔ Given I am on the login page

[12:45:09]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/elements"

[12:45:09]  DATA	{"using":"xpath","value":"//*[@id='username']"}

[12:45:10]  RESULT	[{"ELEMENT":"600"}]

[12:45:11]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element/600/clear"

[12:45:11]  DATA	{}

[12:45:11]  RESULT	null

[12:45:11]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element/600/value"

[12:45:11]  DATA	{"value":["t","e","s","t","@","t","e","s","t",".","(3 more items)"]}

[12:45:12]  RESULT	null

  ✔ When I enter "test@test.com" in "username" field

[12:45:12]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/elements"

[12:45:12]  DATA	{"using":"xpath","value":"//*[@id='password']"}

[12:45:13]  RESULT	[{"ELEMENT":"601"}]

[12:45:13]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element/601/clear"

[12:45:13]  DATA	{}

[12:45:14]  RESULT	null

[12:45:14]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element/601/value"

[12:45:14]  DATA	{"value":["t","e","s","t",".","t","e","s","t"]}

[12:45:14]  RESULT	null

  ✔ And I enter "test.test" in "password" field

[12:45:15]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element"

[12:45:15]  DATA	{"using":"xpath","value":"//button[contains(text(),'Clear')]"}

[12:45:16]  RESULT	{"ELEMENT":"602"}

[12:45:16]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element/602/click"
[12:45:16]  DATA	{}

[12:45:17]  RESULT	null

  ✔ And I click on the "Clear" button

[12:45:17]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/elements"

[12:45:17]  DATA	{"using":"xpath","value":"//*[@id='username']"}

[12:45:18]  RESULT	[{"ELEMENT":"600"}]

[12:45:18]  COMMAND	GET "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element/600/attribute/value"

[12:45:18]  DATA	{}

[12:45:18]  RESULT	""

[12:45:19]  COMMAND	POST "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/elements"

[12:45:19]  DATA	{"using":"xpath","value":"//*[@id='password']"}

[12:45:20]  RESULT	[{"ELEMENT":"601"}]

[12:45:20]  COMMAND	GET "/wd/hub/session/189fb3c3-8952-4deb-b804-5581c9ef9c54/element/601/attribute/value"

[12:45:20]  DATA	{}

[12:45:20]  RESULT	""

  ✔ Then I should see empty inputs



201 scenarios (201 passed)
1005 steps (1005 passed)
24m00.163s
```
