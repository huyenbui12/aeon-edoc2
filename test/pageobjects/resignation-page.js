/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable semi */
const Page = require('./main-page');

class Resignation extends Page {
// Get header elements
  get TITLE() { return $('//span[@class="caption-subject uppercase ng-binding"]') }

  // Get action buttons
  get SAVE_BUTTON() { return $('#saveCommon') }

  get SEND_REQUEST_BUTTON() { return $('//button[@ng-click="submit(button.id, button.name)"]') }

  // Get HR elements
  get HR_REVIEW_BUTTON() { return $('//button[@ng-if="status.allowToVote && status.approveFieldText"]') }

  get HR_OK_BUTTON() { return $('//div/button[contains(text(),"OK")]') }

  // Get Approval elements
  get APPROVE_BUTTON() { return $('//button[@ng-if="status.allowToVote && status.approveFieldText"]') }

  get APPROVE_OK_BUTTON() { return $('//div/button[contains(text(),"OK")]') }
}

module.exports = new Resignation();
