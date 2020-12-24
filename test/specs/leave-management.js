const LoginPage = require('../pageobjects/login-page');
const DashBoard = require('../pageobjects/dashboard-page');
const LeaveManagement = require('../pageobjects/leave-management-page');
const leaveManagementPage = require('../pageobjects/leave-management-page');
const coreHelper = require('../utils/coreHelper');

describe('Leave Application',() => {

    it('should navigate to Leave page successfully',() => {
        LoginPage._open();
        LoginPage._loginByForms(credentials.G4_Member.username, credentials.G4_Member.password);
        coreHelper.clickAndWait(DashBoard.LEAVE_APPLICATION_BUTTON,LeaveManagement.TITLE);
        expect(LeaveManagement.TITLE).toBeExisting();
    });

    it('should save a ticket successfully with valid information (1 user)',() => {
        browser.pause(2000);
        coreHelper.clickAndWait(LeaveManagement.LEAVE_KIND_DROPDOWN[0],leaveManagementPage.SEARCH_LEAVE_KIND_DROPDOWN);
        coreHelper.inputText(leaveManagementPage.SEARCH_LEAVE_KIND_DROPDOWN,'ACCD');
        leaveManagementPage.REASON_TEXTBOX(1).click();
        LeaveManagement.REASON_TEXTBOX(1).keys('test');
        browser.pause(1000);
        LeaveManagement.SAVE_BUTTON.click();
        expect(LeaveManagement.SEND_REQUEST_BUTTON).toBeExisting();
    });

    it('should send a ticket successfully after saving it', () => {
        leaveManagementPage.SEND_REQUEST_BUTTON.click();
        expect(leaveManagementPage.CANCEL_BUTTON).toBeExisting();
    });
});