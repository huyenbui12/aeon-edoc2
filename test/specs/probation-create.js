const loginPage = require('../pageobjects/login-page');
const dashBoardPage = require('../pageobjects/dashboard-page');
const coreHelper = require('../utils/coreHelper');
const probationPage = require('../pageobjects/probation-page');
const dashboardPage = require('../pageobjects/dashboard-page');

describe('Probation - CreateForm - Submitter',() => {
    const credentials = coreHelper.readFileJson('../utils/probationData.json');

    it('should navigate to Probation page successfully',() => {
        loginPage._open();
        loginPage._loginByForms(credentials.Store_G3up.Submitter.username, credentials.Store_G3up.Submitter.password);
        coreHelper.clickAndWait(dashBoardPage.PROBATION_EVALUATION_BUTTON,probationPage.TITLE);
        //browser.pause(1000); --nhanh quá nhìn không kịp nên để pause chỗ này ahihi
        expect(probationPage.TITLE).toBeExisting();
    });

    it('should Save the ticket successfully',() => {
        // Constant value - HQ(G4 up)
        const ARRAY_PERFORMANCE_LEVEL = ['3', '4', '5'];
        // Scroll page to top 
        coreHelper.scrollToHeader();
        // Click on SAP Code to display dropdown
        coreHelper.clickAndWait(probationPage.SAP_TEXTBOX,probationPage.SAP_DROPDOWN);
        // Input SAP Code into search bar in the dropdown
        coreHelper.inputText(probationPage.SAP_DROPDOWN,credentials.Store_G3up.Appraisee.username);
        browser.pause(1000);

        const numberOfRows = probationPage.GRID_ROW
        // Input values into Required Performance Level column
        for (let i = 1; i <= numberOfRows; i++) {
            let randomNumber = Math.floor(Math.random() * 100) % 3; 
            probationPage.REQUIRED_PERFORMANCE_LEVEL_TEXTBOX(i).click();
            coreHelper.inputText(probationPage.REQUIRED_PERFORMANCE_LEVEL_TEXTBOX(i), ARRAY_PERFORMANCE_LEVEL[randomNumber]);
        }
        // Scroll page to top
        coreHelper.scrollToHeader();
        // Click Save
        probationPage.SAVE_BUTTON.click();
        browser.pause(5000);
        //get Ref Number
        let refNumber = probationPage.TITLE.getHTML(false);
        refNumber = refNumber.replace("\n", "");
        refNumber = refNumber.trim();
        arrStringContainRefNumber = refNumber.split(" ");
        refNumber = arrStringContainRefNumber[arrStringContainRefNumber.length - 1]
        var obj = {RefNumber: refNumber};
        var JSONString = JSON.stringify(obj);
        coreHelper.writeFile(JSONString);
        // Check point
        expect(probationPage.SEND_REQUEST_BUTTON).toBeExisting();
    });

    it('should Send Request successfully',() => {
        //coreHelper.clickAndWait(probationPage.SEND_REQUEST_BUTTON,probationPage.CANCEL_BUTTON);
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

describe('Probation - CreateForm - First_Approval', () => {
    const credentials = coreHelper.readFileJson('../utils/probationData.json');

    it('should navigate to Probation page successfully',() => {
        loginPage._open();
        loginPage._loginByForms(credentials.Store_G3up.First_Approval.username, credentials.Store_G3up.First_Approval.password);
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
        const refNumberNeedRead = coreHelper.readFileJson('../utils/test.json');
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

describe('Probation - CreateForm - HR/C&B_Approval', () => {
    const credentials = coreHelper.readFileJson('../utils/probationData.json');

    it('should navigate to Probation page successfully',() => {
        loginPage._open();
        loginPage._loginByForms(credentials.Store_G3up.HR_Approval.username, credentials.Store_G3up.HR_Approval.password);
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
        const refNumberNeedRead = coreHelper.readFileJson('../utils/test.json');
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

describe('Probation - CreateForm - Appraisee', () => {
    const credentials = coreHelper.readFileJson('../utils/probationData.json');

    it('should navigate to Probation page successfully',() => {
        loginPage._open();
        loginPage._loginByForms(credentials.Store_G3up.Appraisee.username, credentials.Store_G3up.Appraisee.password);
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
        const refNumberNeedRead = coreHelper.readFileJson('../utils/test.json');
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