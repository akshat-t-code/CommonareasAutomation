import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("Reject new Connection Request for a User", function () {
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
      //   testName: "Reject the New User Connection Request",
      // });
      //debugger;
      cy.fixture("ConnectionsDynamicTestData/ConnectionUserCredentials").then(
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

  it("Login into the AppLication for Reject the Request", function () {
    //PageObjects
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visitBaseBuild();
    lp.EnterEmail(this.Credentials.UserEmail);
    lp.EnterPassword("1234567Aa");
    cy.screenshot("User Details-To Logged In(Reject Connection Request");
    cy.wait(5000);
    //cy.eyesCheckWindow("Logging into the application for new User");
    lp.Submit();
    cy.wait(10000);
    cy.log("Users has been logged in successfully");
    //cy.eyesCheckWindow("Getting connection Request");
    //Click On Connection Request notification Icon
    cy.get(".menu-items-icon:nth-child(2) > path").click();
    //cy.eyesCheckWindow();
    cy.screenshot("Connection Request");
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
    cy.screenshot("Connection Rejected(NO Connections here)");
    cy.wait(5000);
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
