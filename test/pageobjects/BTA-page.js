/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable import/no-useless-path-segments */
const Page = require('../pageobjects/main-page');

class BTAPage extends Page {
  get REPORT_BUTTON() { return $('//div/*[contains(text(),"Add A Business Trip Report")]') }

  get REPORT_TITLE() { return $('//div/*[contains(text(),"Add A Business Trip Application Report")]') }

  get TITLE() { return $('//span[@class="caption-subject uppercase bold-section-title ng-binding"]') }
}

module.exports = new BTAPage();
