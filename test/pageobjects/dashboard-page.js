/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable import/no-useless-path-segments */
const Page = require('../pageobjects/main-page');

class DashBoard extends Page {
  get BTA_BUTTON() { return $('//div/*[contains(text(),"Add A Business Trip Application")]') }

  get SHIFT_EXCHANGE_BUTTON() { return $('//li/*[contains(text(),"Add A Shift Exchange Application")]') }

  get LEAVE_APPLICATION_BUTTON() { return $('//div/*[contains(text(),"Add A Leave Application")]') }

  get PROBATION_EVALUATION_BUTTON() { return $('//div/*[contains(text(),"Add A Probation Evaluation")]') }

  get HANDOVER_BUTTON() { return $('//div/*[contains(text(),"Add A Handover Resignation")]') }

  get RESIGNATION_BUTTON() { return $('//span[contains(.,"Add A Resignation Application")]') }

  // Todo-list
  get TODO_LIST() { return $('//div[@class="portlet bordered light"]') }

  get LAST_PAGE_PADDING() { return $('//div[@class="portlet bordered light"]//span[@class="k-icon k-i-arrow-end-right"]') }

  get LAST_REFERENCE_NUMBER() { return $('//div[@class="portlet bordered light"]//tbody[@role="rowgroup"]//tr[last()]/td[2]/a') }

  // Menu
  get AVATAR_DROPDOWN() { return $('//user-info[@current-user="currentUser"]//ul[@class="nav navbar-nav pull-right"]') }

  get SIGN_OUT_BUTTON() { return $('//a[@ng-click="vm.signOut()"]') }

  get MORE_MENU() { return $('//a[contains(.,"More")]') }

  get PROBATION_MENU() { return $('//a[@class="ng-binding"][contains(.,"Probation Evaluation")]') }

  get PROBATION_ALL_REQUESTS_MENU() { return $('//a[@ui-sref="home.probation-evaluation.allRequests"]') }

  get PROBATION_ALL_REQUESTS_TITLE() { return $('//span[contains(.,"All Probation Evaluation Requests")]') }

  get HANDOVER_MENU() { return $('//a[@class="ng-binding"][contains(.,"Handover for Resignation")]') }

  get HANDOVER_ALL_REQUESTS_MENU() { return $('//a[@ui-sref="home.handover-resignation.allRequests"]') }

  get HANDOVER_ALL_REQUESTS_TITLE() { return $('//span[contains(.,"All Requests")]') }

  // Probation - All Requests
  get REF_NUMBER_FIRST() { return $('//*[@id="grid"]/div[2]/table/tbody/tr[2]/td[2]/a') }

  get FIRST_ROW_STATUS() { return $('//div[@class="k-grid-content k-auto-scrollable"]//tr[1]//workflow-status[@status="Waiting For Deputy Manager (G4) Approval"]') }
}
module.exports = new DashBoard();
