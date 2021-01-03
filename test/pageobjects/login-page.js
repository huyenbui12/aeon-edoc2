/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable import/no-useless-path-segments */
const Page = require('../pageobjects/main-page');

class LoginPage extends Page {
  get CREDENTIAL_TEXTBOX() { return $('#ctl00_PlaceHolderMain_ClaimsLogonSelector') }

  get WINDOWS_LOGIN_OPTION() { return $('option[value="Windows"]') }

  get FORM_LOGIN_OPTION() { return $('option[value="Forms"]') }

  get FORM_USERNAME_TEXTBOX() { return $('#ctl00_PlaceHolderMain_signInControl_UserName') }

  get FORM_PASSWORD_TEXTBOX() { return $('#ctl00_PlaceHolderMain_signInControl_password') }

  get FORM_LOGIN_BUTTON() { return $('#ctl00_PlaceHolderMain_signInControl_login') }

  get MAIN_PAGE_LOGO() { return $('.app-logo') }

  loginByForms(username, password) {
    this.CREDENTIAL_TEXTBOX.click();
    this.FORM_LOGIN_OPTION.click();
    this.FORM_USERNAME_TEXTBOX.setValue(username);
    this.FORM_PASSWORD_TEXTBOX.setValue(password);
    this.FORM_LOGIN_BUTTON.click();
    this.MAIN_PAGE_LOGO.waitForExist(20000);
  }

  open() {
    return super.openUrl();
  }
}
module.exports = new LoginPage();
