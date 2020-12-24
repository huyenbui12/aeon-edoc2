const Page = require('./main-page');

class Handover extends Page {
    // get title and buttons
    get TITLE() { return $('//div/span[@class="caption-subject uppercase ng-binding"]')}
    get SEND_REQUEST_BUTTON() { return $('//span[contains(.,"Send Request")]')}

    // get Office Quipment - Facility
    FACILITY_ITEM_CHECKBOX(i) { return $(`//*[@id="facilityGrid"]//tr[${i}]/td[2]/label`)}
}

module.exports = new Handover();