import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("Login for new User and Reject the Connection request(Second Flow TC)", function () {
  this.beforeEach(
    "Getting the Dynmaically Generated data through Fixtures file",
    function () {
      // cy.eyesOpen({
      //   appName: "Common Aera UI Automation",
      //   testName: "Reject the New User Connection Request",
      // });
      //debugger;
      cy.fixture(
        "ConnectionsDynamicTestData/Connection2ndFlowUserCredentials"
      ).then(function (JsonData) {
        this.Credentials = JsonData;
        cy.log(this.Credentials.UserEmail);
        cy.log(this.Credentials.Fname);
        cy.log(this.Credentials.Lname);
      });
      cy.viewport(1000, 600);
    }
  );

  it("First Time Login into the appLication for New User", function () {
    //PageObjects
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visit();
    lp.EnterEmail(this.Credentials.UserEmail);
    lp.EnterPassword("1234567Aa");
    //cy.eyesCheckWindow("First time user logging into the application");
    lp.Submit();
    //First Time login commands
    cy.url().should("include", "Public/TermsAndConditions?acceptTerms=True");
    cy.get("#readTerms").click();
    //cy.eyesCheckWindow();
    cy.wait(15000);
    cy.log("New Users has been logged in first time successfully");
    //cy.eyesCheckWindow("Logged In");
    //Welcome User Assertion
    cy.get(
      "#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div.row.content-wrapper.fill-width.fill-height > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div > div.px-4.col.col-12 > div > span"
    ).should("have.text", "Home Page Overview");
    cy.get(
      "#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div > div.px-4.col.col-12 > div"
    ).then(function ($WelEle) {
      const WelcomeTxt = $WelEle.text();
      cy.log(WelcomeTxt);
      const username = this.Credentials.Fname;
      cy.log(username);
      expect(username).eq(this.Credentials.Fname);
      cy.wait(3000);
    });
  });

  it("Login Again into the AppLication for Reject the Request", function () {
    //PageObjects
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visit();
    lp.EnterEmail(this.Credentials.UserEmail);
    lp.EnterPassword("1234567Aa");
    //cy.eyesCheckWindow("Logging into the application for new User");
    lp.Submit();
    cy.wait(10000);
    cy.log("Users has been logged in successfully");
    //cy.eyesCheckWindow("Getting connection Request");
    //Click On Connection Request notification Icon
    cy.get(".menu-items-icon:nth-child(2) > path").click();
    //cy.eyesCheckWindow();
    cy.wait(5000);
    //cy.eyesCheckWindow();
    //Assertion For getting connection Request
    cy.get(":nth-child(3) > .v-btn > .v-btn__content > .v-icon").should(
      "be.visible"
    );
    cy.wait(5000);
    //Reject the Request
    cy.get(":nth-child(3) > .v-btn > .v-btn__content > .v-icon")
      .first()
      .click();
    cy.wait(3000);
    //cy.eyesCheckWindow("Request Rejected");
    cy.log("Connection Request has been Rejected");
    cy.reload();
    cy.wait(10000);
    //cy.eyesCheckWindow("Reloaded");
    //Click on HMB Icon
    cy.get(".v-btn__content > .v-icon").click();
    //Click On Connections
    cy.get(".v-list-item:nth-child(3) .v-list-item__title").click();
    //Assertion
    cy.wait(3000);
    //cy.eyesCheckWindow("NO Connections here");
    cy.contains("Kali Stanley").should("not.be.visible");
    cy.contains(
      "\n\t\t\t\t\t\t\t\tDrummond Realty Trust\n\t\t\t\t\t\t\t"
    ).should("not.be.visible");
    cy.wait(5000);
  });
  // this.afterAll(function () {
  //   cy.eyesClose();
  // });
});
