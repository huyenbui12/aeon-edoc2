const LoginPage = require('../pageobjects/login-page');
const coreHelper = require('../utils/coreHelper');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        const credentials = coreHelper.readLoginCredentials();
        LoginPage._open();
        LoginPage._loginByForms(credentials.HR_Admin.username, credentials.HR_Admin.password);
        expect(LoginPage.MAIN_PAGE_LOGO).toBeExisting();
    });
});