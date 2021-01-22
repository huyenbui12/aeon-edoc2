# AEON Automation
Automation tool for AEON project.
# Getting started

## Prerequisites

- Ensure `Node 12` installed

## How to run

- Run `npm install`

- Create `loginData.json`  which contains login information (username, password) and `endpointData.json` with testing endpoint in `data` folder with below structure:

#### data/loginData.json
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

#### data/endpointData.json
```json
{
    "BaseURL": "*****************"
}
```
- Run `npm run` with name of script (config in `package.json`). Example: `npm run addBTA`

## How to add new Test Suite
- Create new test file in `test/specs` (Ex: `test/specs/bta.js`)
- Add the test file path into the `suites` in the `wdio.conf.js` file (Ex: `bta`)

#### wdio.conf.js
```js
{
    suites: {
        ...
        bta: ['./test/specs/bta.js']
    }
}
```
- Add the new `scripts` into the `package.json` (Ex: `bta`)

#### package.json
```json
"scripts": {
    "bta": "npx wdio wdio.conf.js --suite bta"
},
```

- Run `npm run` with that script that created in `package.json` (Ex: `npm run bta`)

## How to debug

- Edit `args` with test case that need to debug in `.vscode/launch.json`. Example for `bta.js` in the below.

#### .vscode/launch.json
```js
{
    "args": [
        "--spec", "bta.js"
    ]
}
```

- Select `Run in debug` in `Run` tab of VSCode 

## Documentation

- [WebdriverIO Documentation](https://webdriver.io/docs/gettingstarted.html)
