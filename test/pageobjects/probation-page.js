/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable semi */
const Page = require('./main-page');

class CreateFormProbation extends Page {
  // All Requests page
  get REF_NUMBERS() { return $$('//*[@id="grid"]/div[2]/table/tbody/tr/td[2]/a') }

  // get header elements
  get TITLE() { return $('//div/span[@class="caption-subject uppercase ng-binding"]') }

  get SAVE_BUTTON() { return $('//button[@class="btn btn-default btn-sm btsave ng-binding ng-scope k-button"]') }

  get CLOSE_BUTTON() { return $('//button[@class="btn btn-default btn-sm ng-binding k-button"]') }

  get SEND_REQUEST_BUTTON() { return $('//button[@ng-click="submit(button.id, button.name)"]') }

  get CANCEL_BUTTON() { return $('//button[@ng-if="status.allowToCancel"]') }

  get APPROVE_BUTTON() { return $('//button[@ng-if="status.allowToVote && status.approveFieldText"]') }

  get CONFIRM_BUTTON() { return $('//button[@ng-if="status.allowToVote && status.approveFieldText"]') }

  // get master field's elements
  get SAP_TEXTBOX() { return $('//span[@aria-owns="sapCode_listbox"]') }

  get SAP_DROPDOWN() { return $('//span[@class="k-list-filter"]/input[@aria-owns="sapCode_listbox"]') }

  get SAP_VALUE() { return $('//li[@aria-selected="true"]') }

  get FULL_NAME_TEXTBOX() { return $('//input[@ng-model="model.fullName"]') }

  get DEPARTMENT_TEXTBOX() { return $('//input[@ng-model="model.department"]') }

  get POSITION_TEXTBOX() { return $('//input[@ng-model="model.position"]') }

  get DATE_JOINED_TEXTBOX() { return $('//label[contains(text(),"Date Joined:")]') }

  get PERIOD_FROM_DATETIME() { return $('#fromDate_id') }

  get PERIOD_TO_DATETIME() { return $('#toDate_id') }

  // get Competency grid elements
  REQUIRED_PERFORMANCE_LEVEL_TEXTBOX(i) { return $(`//tr[${i}]//span/input[@k-ng-model="dataItem.requirePerformanceLevel"]/..`) }

  ACHIEVED_PERFORMANCE_TEXTBOX(i) { return $(`//tr[${i}]//span/input[@k-ng-model="dataItem.achievedPerformance"]/..`) }

  get GRID_ROW() { return $$('//tbody[@role="rowgroup"]/tr').length - 1; }

  // get Performance Review elements
  get SUBMITTER_DESCRIBE_TEXTBOX() { return $('//textarea[@ng-model="model.describeAreasRequiringImproment"]') }

  get FIRST_APPROVAL_SIGN_RADIO() { return $('//label[@for="signOfficial"]') }

  get APPRAISEE_AGREE_RADIO() { return $('//label[@for="agreeProposal"]') }

  get HR_PERIOD_RADIO() { return $('//label[@for="toBeConfimed"]') }

  get HR_PROBATION_PERIOD_TEXTBOX() { return $('probationPeriodText') }

  // get confirm dialog
  get OK_BUTTON() { return $('//div/button[contains(text(),"OK")]') }
}

module.exports = new CreateFormProbation();
