/* eslint-disable import/no-useless-path-segments */
/* eslint-disable semi */
/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
module.exports = class Page {
  openUrl() {
    browser.maximizeWindow();
    const endpoint = require('./../utils/endpoint.json');
    browser.url(endpoint.BaseURL);
  }
}
