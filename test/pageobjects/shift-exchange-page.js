const Page = require('./main-page');

class ShiftExchange extends Page {
    get TITLE () { return $('//div/*[contains(text(),"New Item: Shift Exchange Application")]')}
    get ADD_USER_BUTTON () { return $('#create')}
    get USER1_CHECKBOX () { return $('#isCheck1')}
    get REVIEW_USER_CHECKBOX() { return $('//button[contains(text(),"Review User")]')}
    get OK_BUTTON() { return $('//div/button[contains(text(),"OK")]')}
    get WARNING_MESSAGE() { return $('//div/h5[contains(text(),"Please Enter All Required Fields")]')}
    
}
module.exports = new ShiftExchange();