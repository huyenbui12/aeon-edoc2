/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
const loginPage = require('../pageobjects/login-page');
const dashBoardPage = require('../pageobjects/dashboard-page');
const coreHelper = require('../utils/coreHelper');
const dashboardPage = require('../pageobjects/dashboard-page');
const handoverPage = require('../pageobjects/handover-page');

describe.skip('Handover - Employee', () => {
    const credentials = coreHelper.readFile('../utils/handover-data.json');
  
    it('should navigate to Probation page successfully', () => {
      loginPage.open();
      loginPage.loginByForms(credentials.HQ_G1G3.Submitter.username, credentials.HQ_G1G3.Submitter.password);
      coreHelper.clickAndWait(dashBoardPage.HANDOVER_BUTTON, handoverPage.TITLE);
      expect(handoverPage.TITLE).toBeExisting();
    });
  
    it('should Send Request successfully', () => {
      browser.pause(2000);
      handoverPage.SEND_REQUEST_BUTTON.click();
      browser.pause(2000);
      expect(handoverPage.SEND_REQUEST_BUTTON).not.toBeExisting();
    });
  
    it('should sign out successfully', () => {
      browser.pause(2000);
      coreHelper.clickAndWait(dashboardPage.AVATAR_DROPDOWN, dashboardPage.SIGN_OUT_BUTTON);
      browser.pause(3000);
      coreHelper.clickAndWait(dashboardPage.SIGN_OUT_BUTTON, loginPage.CREDENTIAL_TEXTBOX);
    });
  });
  
describe('Handover - Facility', () => {
    const credentials = coreHelper.readFile('../utils/handover-data.json');
  
    it('should navigate to Probation page successfully', () => {
      loginPage.open();
      loginPage.loginByForms(credentials.Facility.login, credentials.Facility.password);
      // coreHelper.scrollToFooter();
      coreHelper.clickAndWait(dashBoardPage.HANDOVER_BUTTON, handoverPage.TITLE);
      expect(handoverPage.TITLE).toBeExisting();
    });
  
    it('should navigate to All Requests page', () => {
        coreHelper.scrollToHeader();
        coreHelper.waitAndClickConstTime(dashboardPage.MORE_MENU);
        browser.pause(2000);
        coreHelper.hoverMouse(dashboardPage.HANDOVER_MENU);
        coreHelper.waitAndClickConstTime(dashboardPage.HANDOVER_ALL_REQUESTS_MENU);
        browser.pause(2000);
        expect(dashboardPage.HANDOVER_ALL_REQUESTS_TITLE).toBeExisting();
      });
  
    it('should open the recent created ticket successfully', () => {
      const refNumberNeedRead = coreHelper.readFile('../utils/test.json');
      const refNumbers = handoverPage.REF_NUMBERS;
      for (let i = 0; i < refNumbers.length; i++) {
        sref = refNumbers[i].getAttribute('ui-sref');
        if (sref.includes(refNumberNeedRead.RefNumber)) {
          refNumbers[i].click();
          browser.pause(5000);
          break;
        }
      }
      expect(handoverPage.TITLE).toBeExisting();
    });
  
    it('should APPROVE the ticket successfully', () => {
        coreHelper.waitAndClickConstTime(handoverPage.FACILITY_ITEM_CHECKBOX(1));
        coreHelper.waitAndClickConstTime(handoverPage.FACILITY_ITEM_CHECKBOX(2));
        handoverPage.CONFIRM_BUTTON.click();
        browser.pause(2000);
        expect(handoverPage.CONFIRM_BUTTON).not.toBeExisting();
    });
  
    it('should sign out successfully', () => {
      browser.pause(2000);
      coreHelper.clickAndWait(dashboardPage.AVATAR_DROPDOWN, dashboardPage.SIGN_OUT_BUTTON);
      browser.pause(3000);
      coreHelper.clickAndWait(dashboardPage.SIGN_OUT_BUTTON, loginPage.CREDENTIAL_TEXTBOX);
    });
});

describe.skip('Handover - 1st Approval', () => {
    const credentials = coreHelper.readFile('../utils/handover-data.json');
  
    it('should navigate to Probation page successfully', () => {
      loginPage.open();
      loginPage.loginByForms(credentials.HQ_G1G3.HR_Approval.username, credentials.HQ_G1G3.HR_Approval.password);
      // coreHelper.scrollToFooter();
      coreHelper.clickAndWait(dashBoardPage.PROBATION_EVALUATION_BUTTON, resignationPage.TITLE);
      expect(resignationPage.TITLE).toBeExisting();
    });
  
    it('should navigate to All Requests page', () => {
      coreHelper.scrollToHeader();
      coreHelper.waitAndClickConstTime(dashboardPage.MORE_MENU);
      browser.pause(2000);
      coreHelper.hoverMouse(dashboardPage.PROBATION_MENU);
      coreHelper.waitAndClickConstTime(dashboardPage.PROBATION_ALL_REQUESTS_MENU);
      browser.pause(2000);
      expect(dashboardPage.PROBATION_ALL_REQUESTS_PAGE).toBeExisting();
    });
  
    it('should open the recent created ticket successfully', () => {
      const refNumberNeedRead = coreHelper.readFile('../utils/test.json');
      const refNumbers = resignationPage.REF_NUMBERS;
      for (let i = 0; i < refNumbers.length; i++) {
        sref = refNumbers[i].getAttribute('ui-sref');
        if (sref.includes(refNumberNeedRead.RefNumber)) {
          refNumbers[i].click();
          browser.pause(5000);
          break;
        }
      }
      expect(resignationPage.TITLE).toBeExisting();
    });
  
    it('should APPROVE the ticket successfully', () => {
      coreHelper.clickAndWait(resignationPage.APPROVE_BUTTON, resignationPage.OK_BUTTON);
      resignationPage.OK_BUTTON.click();
      browser.pause(2000);
      expect(resignationPage.APPROVE_BUTTON).not.toBeExisting();
    });
  
    it('should sign out successfully', () => {
      browser.pause(2000);
      coreHelper.clickAndWait(dashboardPage.AVATAR_DROPDOWN, dashboardPage.SIGN_OUT_BUTTON);
      browser.pause(3000);
      coreHelper.clickAndWait(dashboardPage.SIGN_OUT_BUTTON, loginPage.CREDENTIAL_TEXTBOX);
    });
});
  
describe.skip('Handover - 1st Approval', () => {
    const credentials = coreHelper.readFile('../utils/handover-data.json');
  
    it('should navigate to Probation page successfully', () => {
      loginPage.open();
      loginPage.loginByForms(credentials.HQ_G1G3.Appraisee.username, credentials.HQ_G1G3.Appraisee.password);
      // coreHelper.scrollToFooter();
      coreHelper.clickAndWait(dashBoardPage.PROBATION_EVALUATION_BUTTON, resignationPage.TITLE);
      expect(resignationPage.TITLE).toBeExisting();
    });
  
    it('should navigate to All Requests page', () => {
      coreHelper.scrollToHeader();
      coreHelper.waitAndClickConstTime(dashboardPage.MORE_MENU);
      browser.pause(2000);
      coreHelper.hoverMouse(dashboardPage.PROBATION_MENU);
      coreHelper.waitAndClickConstTime(dashboardPage.PROBATION_ALL_REQUESTS_MENU);
      browser.pause(2000);
      expect(dashboardPage.PROBATION_ALL_REQUESTS_PAGE).toBeExisting();
    });
  
    it('should open the recent created ticket successfully', () => {
      const refNumberNeedRead = coreHelper.readFile('../utils/test.json');
      const refNumbers = resignationPage.REF_NUMBERS;
      for (let i = 0; i < refNumbers.length; i++) {
        sref = refNumbers[i].getAttribute('ui-sref');
        if (sref.includes(refNumberNeedRead.RefNumber)) {
          refNumbers[i].click();
          browser.pause(5000);
          break;
        }
      }
      expect(resignationPage.TITLE).toBeExisting();
    });
  
    it('should CONFIRM the ticket successfully', () => {
      coreHelper.clickAndWait(resignationPage.CONFIRM_BUTTON, resignationPage.OK_BUTTON);
      resignationPage.OK_BUTTON.click();
      browser.pause(2000);
      expect(resignationPage.CONFIRM_BUTTON).not.toBeExisting();
    });
  
    it('should sign out successfully', () => {
      browser.pause(2000);
      coreHelper.clickAndWait(dashboardPage.AVATAR_DROPDOWN, dashboardPage.SIGN_OUT_BUTTON);
      browser.pause(3000);
      coreHelper.clickAndWait(dashboardPage.SIGN_OUT_BUTTON, loginPage.CREDENTIAL_TEXTBOX);
    });
});