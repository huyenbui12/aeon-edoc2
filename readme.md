# AEON Automation
Automation tool for AEON project.
# Getting started

## Prerequisites

- Ensure `Node 12` installed

## How to run

- Run `npm install`

- Create `login.json`  which contains login information (username, password) and `endpoint.json` with testing endpoint in `utils` folder with below structure:

#### utils/login.json
```json
{
    "HR_Admin":{
        "fullname":"********",
        "username":"********",
        "password":"********"
    },
    "1st_Approval":{
        "fullname":"********",
        "username":"********",
        "password":"********"
    }
}
```

#### utils/endpoint.json
```json
{
    "BaseURL": "*****************"
}
```
- Run `npm run` with name of script (config in `package.json`). Example: `npm run addBTA`

## How to add new Test Suite
- Create new test file in `test/specs` (Ex: `test/specs/BTA-add-new.js`)
- Add the test file path into the `suites` in the `wdio.conf.js` file (Ex: `addNewBTA`)

#### wdio.conf.js
```js
{
    suites: {
        ...
        addNewBTA: ['./test/specs/BTA-add-new.js']
    }
}
```
- Add the new `scripts` into the `package.json` (Ex: `addBTA`)

#### package.json
```json
"scripts": {
    "addBTA": "npx wdio wdio.conf.js --suite addNewBTA"
},
```

- Run `npm run` with that script that created in `package.json` (Ex: `npm run addBTA`)

## How to debug

- Edit `args` with test case that need to debug in `.vscode/launch.json`. Example for `BTA-add-new.js` in the below.

#### .vscode/launch.json
```js
{
    "args": [
        "--spec", "BTA-add-new.js"
    ]
}
```

- Select `Run in debug` in `Run` tab of VSCode 

## Documentation

- [WebdriverIO Documentation](https://webdriver.io/docs/gettingstarted.html)
