/* eslint-disable no-loop-func */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
const loginPage = require('../pageobjects/login-page');
const dashBoardPage = require('../pageobjects/dashboard-page');
const coreHelper = require('../utils/coreHelper');
const dashboardPage = require('../pageobjects/dashboard-page');
const handoverPage = require('../pageobjects/handover-page');

// Employee submits Handover ticket
describe.skip('Handover - Employee', () => {
  const credentials = coreHelper.readFile('../utils/handover-data.json');

  it('should navigate to Probation page successfully', () => {
    loginPage.open();
    loginPage.loginByForms(credentials.Submitter.login, credentials.Submitter.password);
    coreHelper.clickAndWait(dashBoardPage.HANDOVER_BUTTON, handoverPage.TITLE);
    expect(handoverPage.TITLE).toBeExisting();
  });

  it('should Send Request successfully', () => {
    browser.pause(2000);
    handoverPage.SEND_REQUEST_BUTTON.click();
    browser.pause(2000);
    // get Ref Number
    let refNumber = handoverPage.TITLE.getHTML(false);
    refNumber = refNumber.replace('\n', '');
    refNumber = refNumber.trim();
    arrStringContainRefNumber = refNumber.split(' ');
    refNumber = arrStringContainRefNumber[arrStringContainRefNumber.length - 1];
    let obj = { RefNumber: refNumber };
    let JSONString = JSON.stringify(obj);
    coreHelper.writeFile(JSONString);
    expect(handoverPage.SEND_REQUEST_BUTTON).not.toBeExisting();
  });

  it('should sign out successfully', () => {
    browser.pause(2000);
    coreHelper.clickAndWait(dashboardPage.AVATAR_DROPDOWN, dashboardPage.SIGN_OUT_BUTTON);
    browser.pause(3000);
    coreHelper.clickAndWait(dashboardPage.SIGN_OUT_BUTTON, loginPage.CREDENTIAL_TEXTBOX);
  });
});
// 6 Departments review
describe.skip('Handover - Facility', () => {
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
    browser.pause(2000);
    // Click on Facility checkbox
    for (let i = 1; i < 3; i++) {
      let facility = `div[kendo-grid="facilityGrid"] tr:nth-child(${i}) input[ng-model="dataItem.isVerified"]`;
      coreHelper.clickCheckBox(facility);
    }

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
describe('Handover - Admin', () => {
  const credentials = coreHelper.readFile('../utils/handover-data.json');

  it('should navigate to Probation page successfully', () => {
    loginPage.open();
    loginPage.loginByForms(credentials.Admin.login, credentials.Admin.password);
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
    browser.pause(2000);
    // Click on Facility checkbox
    for (let i = 1; i < 5; i++) {
      let adminSelector = `div[kendo-grid="adminGrid"] tr:nth-child(${i}) input[ng-model="dataItem.isVerified"]`;
      coreHelper.clickCheckBox(adminSelector);
    }
    // Click Confirm button
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
describe('Handover - IT', () => {
  const credentials = coreHelper.readFile('../utils/handover-data.json');

  it('should navigate to Probation page successfully', () => {
    loginPage.open();
    loginPage.loginByForms(credentials.IT.login, credentials.IT.password);
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
    browser.pause(2000);
    // Click on Facility checkbox
    for (let i = 1; i < 2; i++) {
      let itSelector = `div[kendo-grid="systemITGrid"] tr:nth-child(${i}) input[ng-model="dataItem.isVerified"]`;
      coreHelper.clickCheckBox(itSelector);
    }
    // Click Confirm button
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
describe('Handover - Accounting', () => {
  const credentials = coreHelper.readFile('../utils/handover-data.json');

  it('should navigate to Probation page successfully', () => {
    loginPage.open();
    loginPage.loginByForms(credentials.Accounting.login, credentials.Accounting.password);
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
    coreHelper.scrollToFooter();
    browser.pause(2000);
    // Click on Facility checkbox
    for (let i = 1; i < 2; i++) {
      let accountingSelector = `div[kendo-grid="paymentAccountGrid"] tr:nth-child(${i}) input[ng-model="dataItem.isVerified"]`;
      coreHelper.clickCheckBox(accountingSelector);
    }
    // Click Confirm button
    coreHelper.scrollToHeader();
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
describe('Handover - Human Resource', () => {
  const credentials = coreHelper.readFile('../utils/handover-data.json');

  it('should navigate to Probation page successfully', () => {
    loginPage.open();
    loginPage.loginByForms(credentials.HumanResource.login, credentials.HumanResource.password);
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
    coreHelper.scrollToFooter();
    browser.pause(2000);
    // Click on Facility checkbox
    for (let i = 1; i < 2; i++) {
      let humanRescourceSelector = `div[kendo-grid="humanResourceGrid"] tr:nth-child(${i}) input[ng-model="dataItem.isVerified"]`;
      coreHelper.clickCheckBox(humanRescourceSelector);
    }
    // Click Confirm button
    coreHelper.scrollToHeader();
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
describe('Handover - Direct Supervisor', () => {
  const credentials = coreHelper.readFile('../utils/handover-data.json');

  it('should navigate to Probation page successfully', () => {
    loginPage.open();
    loginPage.loginByForms(credentials.DirectSupervisor.login, credentials.DirectSupervisor.password);
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
    coreHelper.scrollToFooter();
    browser.pause(2000);
    // Click on Facility checkbox
    for (let i = 1; i < 3; i++) {
      let directSupervisorSelector = `div[kendo-grid="workSupervisorGrid"] tr:nth-child(${i}) input[ng-model="dataItem.isVerified"]`;
      coreHelper.clickCheckBox(directSupervisorSelector);
    }
    // Click Confirm button
    coreHelper.scrollToHeader();
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
// Start the workflow
describe.skip('Handover - 1st Approval', () => {
  const credentials = coreHelper.readFile('../utils/handover-data.json');

  it('should navigate to Probation page successfully', () => {
    loginPage.open();
    loginPage.loginByForms(credentials.FirstApproval.login, credentials.FirstApproval.password);
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
