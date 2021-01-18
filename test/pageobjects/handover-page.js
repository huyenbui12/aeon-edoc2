const Page = require('./main-page');

class Handover extends Page {
    // get title and buttons
    get TITLE() { return $('//div/span[@class="caption-subject uppercase ng-binding"]')}

    get SEND_REQUEST_BUTTON() { return $('//span[contains(.,"Send Request")]')}

    get CONFIRM_BUTTON() { return $('//button[@ng-click="dSave(3)"]')}

    // get Office Quipment - Facility
    FACILITY_ITEM_CHECKBOX(i) { return $(`//*[@id="facilityGrid"]//tr[${i}]/td[2]/label`)}

    //get All Requests element
    get REF_NUMBERS() { return $$('//*[@id="grid"]/div[2]/table/tbody/tr/td[2]/a') }
}

module.exports = new Handover();