/* eslint-disable no-dupe-class-members */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
const Page = require('./main-page');

class AddNewBTA extends Page {
  // Menu
  get TITLE() { return $('//span[contains(.,"Business Trip Application")]') }

  get BTA_MENU() { return $('//li[@ng-repeat="item in childMenus"][1]//a[contains(.,"Business Trip Application")]') }

  get ALL_REQUESTS() { return $('//a[@href="#!/home/business-trip-application/allRequests"]') }

  get REF_NUMBERS() { return $$('//*[@id="grid"]/div[2]/table/tbody/tr/td[2]/a') }

  get ALL_REQUESTS_TITLE() { return $('//span[contains(.,"All Business Trip Requests")]') }

  // Action button
  // Requester
  get ADD_USER_BUTTON() { return $('//a[contains(.,"Add User")]') }

  get SAVE_BUTTON() { return $('action-items[form="g1"] > [ng-if="(!model.id && isLoaded) || hasPerm(2)"]') }

  get SEND_REQUEST_BUTTON() { return $('action-items[form="g1"] > [ng-repeat="button in status.workflowButtons"]') }

  get CANCEL_BUTTON() { return $('action-items[form="g1"] > [ng-if="status.allowToCancel"]') }

  get DELETE_BUTTON() { return $('action-items[form="btaForm"] > [ng-if="status.allowToDelete"]') }

  // Approvals
  get APPROVE_BUTTON() { return $('//button[@ng-if="status.allowToVote && status.approveFieldText"]') }

  get APPROVE_OK_BUTTON() { return $('//div[@id="dialog"]/following-sibling::div/button') }

  get REQUEST_TO_CHANGE_BUTTON() { return $('//button[@ng-if="status.allowRequestToChange"]') }

  get REJECT_BUTTON() { return $('//button[@ng-if="status.allowToVote && status.rejectFieldText"]') }

  // Dialog
  get ADD_USER_DIALOG() { return $('//span[.="Add User"]') }

  DETAILED_USER_CHECKBOX(i) { return $(`//*[@id="userGrid"]//tr[${i}]//td[1]`) }

  get SEARCH_ADD_USER_DIALOG() { return $('#FieldFilter') }

  get SEARCH_ICON_DIALOG() { return $('[ng-click="searchGridUser()"]') }

  get SELECT_ALL_CHECKBOX_DIALOG() { return $('[for="allCheck"]') }

  get REVIEW_USER_BUTTON() { return $('//div/button[contains(text(),"Review User")]') }

  get REVIEW_OK_BUTTON() { return $('//div/button[contains(text(),"OK")]') }

  get REVIEW_DIALOG() { return $('#dialog_Detail_Review') }

  // Room Organization
  get ROOM_APPROVE_BUTTON() { return $('//button[@ng-if="status.allowToVote && status.approveFieldText"]') }

  get ROOM_APPROVE_OK_BUTTON() { return $('//div[@id="dialog_Room"]/following-sibling::div/button') }

  get ROOM_TYPE_DROPDOWN() { return $('//span[@aria-owns="roomTypeId_listbox"]') }

  // get ROOM_TYPE_DROPDOWN() { return $('//select[@id="roomTypeId"]')}
  get SEARCH_ROOM_TYPE_DROPDOWN() { return $('//input[@aria-owns="roomTypeId_listbox"]') }

  get PEOPLE_DROPDOWN() { return $('//div[@class="k-multiselect-wrap k-floatwrap"]') }

  get LIST_PEOPLE_DROPDOWN() { return $('//div[@id="peopleOption1-list"]//ul[@id="peopleOption1_listbox"]') }

  get CONFIRM_ROOM_OK_BUTTON() { return $('//div[@id="dialog_RoomConfirm"]/following-sibling::div/button') }

  // MainTable
  ID_CARD_TEXTBOX(i) { return $(`//div[@id="btaListDetailGrid"]//tr[${i}]//input[@name="idCard"]`) }

  get PASSPORT_TEXTBOX() { return $$('//input[@name="passport"]') }

  get DELETE_BUTTON() { return $('//a[.="Delete"]') }

  get LOADING_SPIN() { return $('//div/span[@class="k-loading-text"]') }

  get GENDER_DROPDOWN() { return $('//select[@data-k-ng-model="dataItem.gender"]/..') }

  get SEARCH_GENDER() { return $('//div[@class="k-list-container k-popup k-group k-reset k-state-border-up"]//input[@class="k-textbox"]') }

  get DEPARTURE_DROPDOWN() { return $('//select[@data-k-ng-model="dataItem.departureCode"]/..') }

  get SEARCH_DEPARTURE_DROPDOWN() { return $('//div[@class="k-list-container k-popup k-group k-reset k-state-border-up"]//input[@class="k-textbox"]') }

  get ARRIVAL_DROPDOWN() { return $('//select[@data-k-ng-model="dataItem.arrivalCode"]/..') }

  get SEARCH_ARRIVAL_DROPDOWN() { return $('//div[@class="k-list-container k-popup k-group k-reset k-state-border-up"]//input[@class="k-textbox"]') }

  FROM_DATE_TEXTBOX(i) { return $(`#fromDate${i}`) }

  TO_DATE_TEXTBOX(i) { return $(`#toDate${i}`) }

  HOTEL_DROPDOWN(i) { return $(`span[aria-owns="hotel${i}_listbox"] .k-input`) }

  SEARCH_HOTEL_DROPDOWN(i) { return $(`span[aria-owns="hotel${i}_listbox"] .k-input`) }

  CHECKIN_DATE(i) { return $(`#checkInHotelDate${i}`) }

  CHECKOUT_DATE(i) { return $(`#checkOutHotelDate${i}`) }

  FLIGHT_NUMBER_DROPDOWN(i) { return $(`//*[@id="checkOutHotelDate${i}"]/../../../following-sibling::td[1]`) }

  COMEBACK_FLIGHT_NUMBER_DROPDOWN(i) { return $(`//*[@id="checkOutHotelDate${i}"]/../../../following-sibling::td/following-sibling::td[2]`) }

  get EMAIL_LABEL() { return $('[data-field="email"]') }

  get REASON_TEXTBOX() { return $('//textarea[@ng-model="model.requestorNote"]') }
}

module.exports = new AddNewBTA();
