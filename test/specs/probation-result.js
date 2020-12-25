const loginPage = require('../pageobjects/login-page');
const dashBoardPage = require('../pageobjects/dashboard-page');
const coreHelper = require('../utils/coreHelper');
const dashboardPage = require('../pageobjects/dashboard-page');
const probationPage = require('../pageobjects/probation-page');

describe('Probation - Result - Submitter',() => {
    const credentials = coreHelper.readFile('../utils/probationData.json');

    it('should navigate to Probation page successfully',() => {
        loginPage._open();
        loginPage._loginByForms(credentials.HQ_G1G3.Submitter.username, credentials.HQ_G1G3.Submitter.password);
        coreHelper.clickAndWait(dashBoardPage.PROBATION_EVALUATION_BUTTON,probationPage.TITLE);
        //browser.pause(1000); --nhanh quá nhìn không kịp nên để pause chỗ này ahihi
        expect(probationPage.TITLE).toBeExisting();
    });

    it('should navigate to All Requests page',() => {
        coreHelper.scrollToHeader();
        coreHelper.waitAndClickConstTime(dashboardPage.MORE_MENU);
        browser.pause(2000);
        coreHelper.hoverMouse(dashboardPage.PROBATION_MENU);
        coreHelper.waitAndClickConstTime(dashboardPage.PROBATION_ALL_REQUESTS_MENU);
        browser.pause(2000);
        expect(dashboardPage.PROBATION_ALL_REQUESTS_PAGE).toBeExisting();
    });

    it('should open the recent created ticket successfully',() => {
        const refNumberNeedRead = coreHelper.readFile('../utils/test.json');
        const refNumbers = probationPage.REF_NUMBERS;
        for (let i = 0; i < refNumbers.length; i++) {
            sref = refNumbers[i].getAttribute("ui-sref");
            if (sref.includes(refNumberNeedRead.RefNumber)) {
                refNumbers[i].click();
                browser.pause(5000);
                break;
            }
        }
        expect(probationPage.TITLE).toBeExisting();
    }); 
    it('should Save the ticket successfully',() => {
        // Constant value - HQ(G4 up)
        const ARRAY_ACHIEVED_PERFORMANCE = ['3', '4', '5'];
        const numberOfRows = probationPage.GRID_ROW
        // Input values into Required Performance Level column
        for (let i = 1; i <= numberOfRows; i++) {
            let randomNumber = Math.floor(Math.random() * 100) % 3; 
            probationPage.ACHIEVED_PERFORMANCE_TEXTBOX(i).click();
            coreHelper.inputText(probationPage.ACHIEVED_PERFORMANCE_TEXTBOX(i), ARRAY_ACHIEVED_PERFORMANCE[randomNumber]);
        }
        // Scroll page to footer
        coreHelper.scrollToFooter();
        // Fill required information 
        coreHelper.clickAndInput(probationPage.SUBMITTER_DESCRIBE_TEXTBOX,probationPage.SUBMITTER_DESCRIBE_TEXTBOX,'Good');
        browser.pause(2000);
        // Click Save
        probationPage.SAVE_BUTTON.click();
        browser.pause(5000);
        // Check point
        expect(probationPage.SEND_REQUEST_BUTTON).toBeExisting();
    });

    it('should Send Request successfully',() => {
        // Click Send
        browser.pause(2000);
        probationPage.SEND_REQUEST_BUTTON.click();
        browser.pause(2000);
        expect(probationPage.CANCEL_BUTTON).toBeExisting();
    });

    it('should sign out successfully',() => {
        browser.pause(2000);
        coreHelper.clickAndWait(dashboardPage.AVATAR_DROPDOWN,dashboardPage.SIGN_OUT_BUTTON);
        browser.pause(3000);
        coreHelper.clickAndWait(dashboardPage.SIGN_OUT_BUTTON,loginPage.CREDENTIAL_TEXTBOX);
    });
});

describe.skip('Probation - Result - First_Approval', () => {
    const credentials = coreHelper.readFile('../utils/probationData.json');

    it('should navigate to Probation page successfully',() => {
        loginPage._open();
        loginPage._loginByForms(credentials.HQ_G4up.First_Approval.username, credentials.HQ_G4up.First_Approval.password);
        // coreHelper.scrollToFooter();
        coreHelper.clickAndWait(dashBoardPage.PROBATION_EVALUATION_BUTTON,probationPage.TITLE);
        expect(probationPage.TITLE).toBeExisting();
    });

    it('should navigate to All Requests page',() => {
        coreHelper.scrollToHeader();
        coreHelper.waitAndClickConstTime(dashboardPage.MORE_MENU);
        browser.pause(2000);
        coreHelper.hoverMouse(dashboardPage.PROBATION_MENU);
        coreHelper.waitAndClickConstTime(dashboardPage.PROBATION_ALL_REQUESTS_MENU);
        browser.pause(2000);
        expect(dashboardPage.PROBATION_ALL_REQUESTS_PAGE).toBeExisting();
    });

    it('should open the recent created ticket successfully',() => {
        const refNumberNeedRead = coreHelper.readFile('../utils/test.json');
        const refNumbers = probationPage.REF_NUMBERS;
        for (let i = 0; i < refNumbers.length; i++) {
            sref = refNumbers[i].getAttribute("ui-sref");
            if (sref.includes(refNumberNeedRead.RefNumber)) {
                refNumbers[i].click();
                browser.pause(5000);
                break;
            }
        }
        expect(probationPage.TITLE).toBeExisting();
    }); 

    it('should APPROVE the ticket successfully',() => {
        coreHelper.scrollToFooter();
        // Fill required information
        probationPage.FIRST_APPROVAL_SIGN_RADIO.click();
        browser.pause(2000);
        //Click Approve
        coreHelper.scrollToHeader();
        coreHelper.clickAndWait(probationPage.APPROVE_BUTTON,probationPage.OK_BUTTON);
        probationPage.OK_BUTTON.click();
        browser.pause(2000);
        expect(probationPage.APPROVE_BUTTON).not.toBeExisting();
    });

    it.skip('should sign out successfully',() => {
        browser.pause(2000);
        coreHelper.clickAndWait(dashboardPage.AVATAR_DROPDOWN,dashboardPage.SIGN_OUT_BUTTON);
        browser.pause(3000);
        coreHelper.clickAndWait(dashboardPage.SIGN_OUT_BUTTON,loginPage.CREDENTIAL_TEXTBOX);
    });
});   

describe.skip('Probation - Result - HR/C&B_Approval', () => {
    const credentials = coreHelper.readFile('../utils/probationData.json');

    it('should navigate to Probation page successfully',() => {
        loginPage._open();
        loginPage._loginByForms(credentials.HQ_G4up.CnB_Approval.username, credentials.HQ_G4up.CnB_Approval.password);
        // coreHelper.scrollToFooter();
        coreHelper.clickAndWait(dashBoardPage.PROBATION_EVALUATION_BUTTON,probationPage.TITLE);
        expect(probationPage.TITLE).toBeExisting();
    }); 

    it('should navigate to All Requests page',() => {
        coreHelper.scrollToHeader();
        coreHelper.waitAndClickConstTime(dashboardPage.MORE_MENU);
        browser.pause(2000);
        coreHelper.hoverMouse(dashboardPage.PROBATION_MENU);
        coreHelper.waitAndClickConstTime(dashboardPage.PROBATION_ALL_REQUESTS_MENU);
        browser.pause(2000);
        expect(dashboardPage.PROBATION_ALL_REQUESTS_PAGE).toBeExisting();
    });

    it('should open the recent created ticket successfully',() => {
        const refNumberNeedRead = coreHelper.readFile('../utils/test.json');
        const refNumbers = probationPage.REF_NUMBERS;
        for (let i = 0; i < refNumbers.length; i++) {
            sref = refNumbers[i].getAttribute("ui-sref");
            if (sref.includes(refNumberNeedRead.RefNumber)) {
                refNumbers[i].click();
                browser.pause(5000);
                break;
            }
        }
        expect(probationPage.TITLE).toBeExisting();
    }); 

    it('should APPROVE the ticket successfully',() => {
        coreHelper.scrollToFooter();
        // Fill required information
        probationPage.HR_PERIOD_RADIO.click();
        coreHelper.clickAndInput(probationPage.HR_PROBATION_PERIOD_TEXTBOX, probationPage.HR_PROBATION_PERIOD_TEXTBOX, "Today" );
        // Click Approve
        coreHelper.clickAndWait(probationPage.APPROVE_BUTTON,probationPage.OK_BUTTON);
        probationPage.OK_BUTTON.click();
        browser.pause(2000);
        expect(probationPage.APPROVE_BUTTON).not.toBeExisting();
    });

    it('should sign out successfully',() => {
        browser.pause(2000);
        coreHelper.clickAndWait(dashboardPage.AVATAR_DROPDOWN,dashboardPage.SIGN_OUT_BUTTON);
        browser.pause(3000);
        coreHelper.clickAndWait(dashboardPage.SIGN_OUT_BUTTON,loginPage.CREDENTIAL_TEXTBOX);
    });
}); 

describe.skip('Probation - Result - Appraisee', () => {
    const credentials = coreHelper.readFile('../utils/probationData.json');

    it('should navigate to Probation page successfully',() => {
        loginPage._open();
        loginPage._loginByForms(credentials.HQ_G4up.Appraisee.username, credentials.HQ_G4up.Appraisee.password);
        // coreHelper.scrollToFooter();
        coreHelper.clickAndWait(dashBoardPage.PROBATION_EVALUATION_BUTTON,probationPage.TITLE);
        expect(probationPage.TITLE).toBeExisting();
    }); 

    it('should navigate to All Requests page',() => {
        coreHelper.scrollToHeader();
        coreHelper.waitAndClickConstTime(dashboardPage.MORE_MENU);
        browser.pause(2000);
        coreHelper.hoverMouse(dashboardPage.PROBATION_MENU);
        coreHelper.waitAndClickConstTime(dashboardPage.PROBATION_ALL_REQUESTS_MENU);
        browser.pause(2000);
        expect(dashboardPage.PROBATION_ALL_REQUESTS_PAGE).toBeExisting();
    });

    it('should open the recent created ticket successfully',() => {
        const refNumberNeedRead = coreHelper.readFile('../utils/test.json');
        const refNumbers = probationPage.REF_NUMBERS;
        for (let i = 0; i < refNumbers.length; i++) {
            sref = refNumbers[i].getAttribute("ui-sref");
            if (sref.includes(refNumberNeedRead.RefNumber)) {
                refNumbers[i].click();
                browser.pause(5000);
                break;
            }
        }
        expect(probationPage.TITLE).toBeExisting();
    }); 

    it('should CONFIRM the ticket successfully',() => {
        coreHelper.scrollToFooter();
        // Fill required information
        probationPage.APPRAISEE_AGREE_RADIO.click();
        // Click Confirm
        coreHelper.clickAndWait(probationPage.CONFIRM_BUTTON,probationPage.OK_BUTTON);
        probationPage.OK_BUTTON.click();
        browser.pause(2000);
        expect(probationPage.CONFIRM_BUTTON).not.toBeExisting();
    });

    it('should sign out successfully',() => {
        browser.pause(2000);
        coreHelper.clickAndWait(dashboardPage.AVATAR_DROPDOWN,dashboardPage.SIGN_OUT_BUTTON);
        browser.pause(3000);
        coreHelper.clickAndWait(dashboardPage.SIGN_OUT_BUTTON,loginPage.CREDENTIAL_TEXTBOX);
    });
}); 