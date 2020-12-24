const LoginPage = require('../pageobjects/login-page');
const DashBoard = require('../pageobjects/dashboard-page');
const BTAAddNewPage = require('../pageobjects/BTA-add-new-page');
const coreHelper = require('../utils/coreHelper');
const dashboardPage = require('../pageobjects/dashboard-page');

//const inputFile = process.argv[3];

describe.skip('BTA page - Requester', () => {
    const credentials = coreHelper.readFileJson('../utils/BTAdata.json');
    const departure = 'Cà Mau';
    const arrival = 'Hà Nội';
    const genderMale = 'Nam';
    const genderFemale = 'Nữ';
    const hotel = 'Solaria';
    const reason = 'hreason';

    it('should navigate to Add BTA page successfully',() => {
        LoginPage._open();
        LoginPage._loginByForms(credentials.HQ_G1toG4.Requester.username, credentials.HQ_G1toG4.Requester.password);
        coreHelper.clickAndWait(DashBoard.BTA_BUTTON,BTAAddNewPage.TITLE);
        expect(BTAAddNewPage.TITLE).toBeExisting();
    });

    it('should save a ticket successfully (add 1 user)"', () => {
        coreHelper.scrollToHeader();
        //Click Add User button
        browser.pause(1000);
        coreHelper.clickAndWait(BTAAddNewPage.ADD_USER_BUTTON, BTAAddNewPage.ADD_USER_DIALOG);
        //Click Search in Add User dialog 
        browser.pause(1000);
        BTAAddNewPage.SEARCH_ADD_USER_DIALOG.click();
        //Input name of the expected user
        coreHelper.inputText(BTAAddNewPage.SEARCH_ADD_USER_DIALOG,credentials.HQ_G1toG4.Employee_6.username);
        browser.pause(1000);
        BTAAddNewPage.SELECT_ALL_CHECKBOX_DIALOG.click();
        //Click Review User button
        browser.pause(1000);
        coreHelper.clickAndWait(BTAAddNewPage.REVIEW_USER_BUTTON, BTAAddNewPage.REVIEW_DIALOG);
        //Click OK button 
        BTAAddNewPage.REVIEW_OK_BUTTON.click();
        //Input Departure
        coreHelper.clickAndWait(BTAAddNewPage.DEPARTURE_DROPDOWN, BTAAddNewPage.SEARCH_DEPARTURE_DROPDOWN);
        coreHelper.inputText(BTAAddNewPage.SEARCH_DEPARTURE_DROPDOWN,departure);    
        //Input Arrival
        coreHelper.clickAndWait(BTAAddNewPage.ARRIVAL_DROPDOWN, BTAAddNewPage.SEARCH_ARRIVAL_DROPDOWN);
        coreHelper.inputText(BTAAddNewPage.ARRIVAL_DROPDOWN,arrival);
        //Input From Date
        coreHelper.backToTop(BTAAddNewPage.FROM_DATE_TEXTBOX(1));
        let today = new Date();
        today.setHours(9, 0, 0); // set 9:00
        coreHelper.inputText(BTAAddNewPage.FROM_DATE_TEXTBOX(1), coreHelper.formatDate(today)); // input today to From_DATE_TEXTBOX
        //Input To Date
        coreHelper.backToTop(BTAAddNewPage.TO_DATE_TEXTBOX(1));
        today.setDate(today.getDate() + 2); // add 2 day for TO_DATE
        coreHelper.inputText(BTAAddNewPage.TO_DATE_TEXTBOX(1), coreHelper.formatDate(today)); 
        //Input Gender
        coreHelper.clickAndWait(BTAAddNewPage.GENDER_DROPDOWN,BTAAddNewPage.SEARCH_GENDER);
        coreHelper.inputText(BTAAddNewPage.SEARCH_GENDER,genderMale);
        //Input Hotel
        browser.keys('\uE004');
        browser.pause(2000);
        browser.keys('\uE004');
        browser.pause(2000);
        coreHelper.clickAndWait(BTAAddNewPage.HOTEL_DROPDOWN(1),BTAAddNewPage.SEARCH_HOTEL(1));
        coreHelper.inputText(BTAAddNewPage.HOTEL_DROPDOWN(1),hotel);
        //Input Check In
        coreHelper.backToTop(BTAAddNewPage.CHECKIN_DATE(1));
        let checkDate = new Date();
        checkDate.setHours(9, 0, 0); // set 9:00
        coreHelper.inputText(BTAAddNewPage.CHECKIN_DATE(1), coreHelper.formatDate(checkDate)); // input today to CHECK_IN
        //Input Check Out
        coreHelper.backToTop(BTAAddNewPage.CHECKOUT_DATE(1));
        checkDate.setDate(checkDate.getDate() + 2); // add 2 day for CHECK_OUT_DATE
        // while (checkoutDate > toDate) checkoutDate = coreHelper.randomDate(); // CHECK_OUT_DATE must lower than BUSINESS_TRIP_TO
        coreHelper.inputText(BTAAddNewPage.CHECKOUT_DATE(1), coreHelper.formatDate(checkDate)); // 
        //Input Reason
        browser.pause(5000);
        coreHelper.clickAndInput(BTAAddNewPage.REASON_TEXTBOX, BTAAddNewPage.REASON_TEXTBOX, reason);
        //Click Save
        browser.pause(5000);
        coreHelper.clickAndWait(BTAAddNewPage.SAVE_BUTTON, BTAAddNewPage.DELETE_BUTTON);
        browser.pause(5000);
        //get Ref Number
        let refNumber = BTAAddNewPage.TITLE.getHTML(false);
        refNumber = refNumber.replace("\n", "");
        refNumber = refNumber.trim();
        arrStringContainRefNumber = refNumber.split(" ");
        refNumber = arrStringContainRefNumber[arrStringContainRefNumber.length - 1]
        var obj = {RefNumber: refNumber};
        var JSONString = JSON.stringify(obj);
        coreHelper.writeFile(JSONString);
        //Checkpoint
        expect(BTAAddNewPage.SEND_REQUEST_BUTTON).toBeExisting();
    })

    it.skip('(#submit) should send request successfully after adding user step', () => {
        browser.pause(1000);
        coreHelper.clickAndWait(BTAAddNewPage.SEND_REQUEST_BUTTON, BTAAddNewPage.CANCEL_BUTTON);
        expect(BTAAddNewPage.CANCEL_BUTTON).toBeExisting();
    })
})

describe('BTA page - 1st_Approval', () => {
    const credentials = coreHelper.readFileJson('../utils/BTAdata.json');
    it.skip('should sign out successfully',() => {
        browser.pause(2000);
        coreHelper.clickAndWait(dashboardPage.AVATAR_DROPDOWN,dashboardPage.SIGN_OUT_BUTTON);
        browser.pause(2000);
        coreHelper.clickAndWait(dashboardPage.SIGN_OUT_BUTTON,LoginPage.CREDENTIAL_TEXTBOX);
    });

    it('should navigate to Add BTA page successfully',() => {
        LoginPage._open();
        LoginPage._loginByForms(credentials.HQ_G1toG4.Second_Approval.username, credentials.HQ_G1toG4.Second_Approval.password);
        // coreHelper.scrollToFooter();
        coreHelper.clickAndWait(DashBoard.BTA_BUTTON,BTAAddNewPage.TITLE);
        expect(BTAAddNewPage.TITLE).toBeExisting();
    });

    it('should navigate to All Requests page',() => {
        coreHelper.scrollToHeader();
        coreHelper.waitAndClickConstTime(BTAAddNewPage.BTA_MENU);
        coreHelper.waitAndClickConstTime(BTAAddNewPage.ALL_REQUESTS);
        browser.pause(2000);
        const refNumberNeedRead = coreHelper.readFileJson('../utils/test.json');
        const refNumbers = BTAAddNewPage.REF_NUMBERS;
        for (let i = 0; i < refNumbers.length; i++) {
            sref = refNumbers[i].getAttribute("ui-sref");
            if (sref.includes(refNumberNeedRead.RefNumber)) {
                refNumbers[i].click();
                browser.pause(5000);
                break;
            }
        }
        
        //expect(BTAAddNewPage.ALL_REQUESTS_TITLE).toBeExisting();

    });

})