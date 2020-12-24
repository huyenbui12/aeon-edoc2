const Page = require('../pageobjects/main-page');

class LeaveManagement extends Page {
    get TITLE() { return $('//div/span[@class="caption-subject uppercase ng-binding"]')}
    get EXPANDED_BUTTON() { return $('//button/img[@class="ng-isolate-scope"]')}
    get PROCESS_BUTTON() { return $('//a[contains(text()," Processing Stage ")]')}
    get SAVE_BUTTON() { return $('//button[@class="btn btn-default btn-sm ng-binding ng-scope k-button"]')}
    get CLOSE_BUTTON() { return $('//button[@class="btn btn-default btn-sm ng-binding k-button"]')}
    get SELECT_FILES_BUTTON() { return $('//div/input[@name="files"]')}
    get FROM_DATE_DTPICKER() { return $('#fromDate1')}
    get TO_DATE_DTPICKER() { return $('#toDate1')}
    get LEAVE_KIND_DROPDOWN() { return $$('//td/span[@class="k-widget k-dropdown"]')}
    get SEARCH_LEAVE_KIND_DROPDOWN() { return $('//span[@class="k-list-filter"]')}
    get QUANTITY_TEXTBOX() { return $('//td/input[@class="k-input w100 ng-pristine ng-valid ng-empty ng-touched"]')}
    REASON_TEXTBOX(i) { return $(`#reason${i}`)}
    get DELETE_BUTTON() { return $('//a[contains(text(),"Delete")]')}
    get ADD_MORE_BUTTON() { return $('//button[@class="btn btn-default btn-sm pull-right ng-binding k-button"]')}
    get SAVE_SUCCESS_MESSAGE() { return $('//div/div[@class="message ng-binding"]')}
    get SEND_REQUEST_BUTTON() { return $('//action-items/button/span[contains(text(),"Send Request")]')}
    get CANCEL_BUTTON() { return $('action-items > button.btn.btn-default.btn-sm.ng-binding.ng-scope.k-button')}

}
module.exports = new LeaveManagement();