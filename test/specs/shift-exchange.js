const ShiftEx = require('../pageobjects/shift-exchange-page');
const LoginPage = require('../pageobjects/login-page');
const DashBoard = require('../pageobjects/dashboard-page');

describe('Add A New Shift Exchange application', () => {

    it('should login with valid credentials', () => {
        LoginPage._open();
        LoginPage._loginByForms(credentials.G4_Member.username, credentials.G4_Member.password);
        DashBoard.BTA_BUTTON.click();
        expect(ShiftEx.ADD_USER_BUTTON).toBeExisting();
    });

    it('should add a new user', () => {
        ShiftEx.ADD_USER_BUTTON.click();
        ShiftEx.USER1_CHECKBOX.click();
        ShiftEx.REVIEW_USER_CHECKBOX.click();
        ShiftEx.OK_BUTTON.click();
        expect(ShiftEx.ADD_USER_BUTTON).toBeExisting();
    });
});