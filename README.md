# ui-automation
Webdriver IO test automation suite

## Prerequisites.

1. Java
2. Node.js (version 12 or lower)
3. Node Package Manager (npm)


## Create a personal access token.

On github go to 
settings > developer settings > personal access tokens > generate new token


## Cloning the repository.

Open a terminal and navegate to the desired folder then execute:

```sh
git clone https://github.com/myuser/myrepo.git
```
When prompted for Username, fill your username.

When prompted for Password, fill the token instead.

NOTE: after cloning the repo navegate inside the repo's folder and execute ```npm install``` to install all dependencies.

## Environment variables.

To run tests locally you must create a ".env" file on the root folder to store test user credentials.
This file should contain following variables:

```sh
ADMIN_USER_EMAIL = user@spruce.co
ADMIN_USER_PASSWORD = xxxxxxxxxx
ADMIN_USER_KEY = xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx
CLIENT_USER = xxxxxx@xxxx.xxx
CLIENT_PASS = xxxxxxxxxx
LENDER_VENDOR_USER = xxxxxx@xxxx.xxx
LENDER_VENDOR_PASS = xxxxxxxxxx
```

* SECRET_KEY value can be obtained by following this steps on [this link](https://medium.com/@udarasembukuttiarachchi/can-we-automate-a-login-with-two-factor-authentication-1eb28ee5d729) under "Configuring google account 2FA settings"
* ADMIN_USER_EMAIL and ADMIN_USER_PASSWORD are the credentials to login an admin user.
* CLIENT_USER and CLIENT_PASS are the credentials to login a client user.
* LENDER_VENDOR_USER and LENDER_VENDOR_PASS are the credentials to login a lender/vendor user.

## Runing tests.

To run all tests execute ```npm run test```

## CircelCI.

There is a CircleCI project linked to this repo storing information about each test run.

Before triggering this pipeline you need to be sure that it's targeting the right URL's. On CircleCI's "config.yml" file edit the values of "ADMIN_URL", "CLIENT_URL", "LENDER_URL" and "VENDOR_URL" to your needs.

After test execution is compleated a report will be sent to the "test-notifications" channel on slack.
You may find a more detailed allure report stored on the artifacts of each pipeline execution as "index.html".