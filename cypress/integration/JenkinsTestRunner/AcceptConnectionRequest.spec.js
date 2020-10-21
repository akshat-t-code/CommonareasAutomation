import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("Accept new Connection Request for a User", function () {
  this.beforeEach(
    "Getting the Dynmaically Generated data through Fixtures file",
    function () {
      Cypress.Cookies.preserveOnce(
        ".AspNet.ApplicationCookie",
        "ASP.NET_SessionId",
        "ca-cf-auth",
        "kit-detail-selected-tab",
        "jwt",
        "refreshToken",
        "jwtAccessToken"
      );

      // cy.eyesOpen({
      //   appName: "Common Aera UI Automation",
      //   testName: "Accept the New User Connection Request",
      // });
      //debugger;
      cy.fixture("ConnectionsDynamicTestData/ConnectionUserCredentials").then(
        //cy.fixture("VerificationTestCasesData/AcceptRequestUserData").then(
        function (JsonData) {
          this.Credentials = JsonData;
          cy.log(this.Credentials.UserEmail);
          cy.log(this.Credentials.Fname);
          cy.log(this.Credentials.Lname);
        }
      );
      //cy.viewport(1000, 600);
    }
  );

  it("Login to appLication for Accepting the Request", function () {
    //PageObjects
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visitBaseBuild();
    lp.EnterEmail(this.Credentials.UserEmail);
    lp.EnterPassword("1234567Aa");
    cy.screenshot("User Details-To Logged In(Accept Connection Request");
    cy.wait(10000);
    //cy.eyesCheckWindow("Logging into the application for new User");
    lp.Submit();
    cy.wait(10000);
    cy.log("Users has been logged in successfully");
    //cy.eyesCheckWindow("Getting connection Request");
    //Click On Connection Request notification Icon
    cy.get(".menu-items-icon:nth-child(2) > path").click();
    //cy.eyesCheckWindow("Connection Request");
    cy.screenshot("Connection Request");
    cy.wait(10000);
    //click to Accept the Request
    cy.get(".green--text").click();
    //cy.get(':nth-child(4) > .v-btn > .v-btn__content > .v-icon').click()
    cy.log("Connection Request has been accepted");
    //cy.eyesCheckWindow("Request Accepted");
    //Click On HMB icon
    cy.get(".v-btn__content > .theme--dark").click();
    //Click on Connection
    cy.get(".v-list-item:nth-child(3) .v-list-item__title").click();
    //cy.eyesCheckWindow("Connection has been added");
    cy.wait(5000);
    //Assertion and Click On Created Connection
    cy.contains("Kali Stanley").should("be.visible").click({ force: true });
    cy.log("Connection Created");
    cy.screenshot("Connection Created");
    //cy.eyesCheckWindow();
    cy.wait(7000);
  });
  // this.afterAll(function () {
  //   cy.eyesClose();
  // });
});
