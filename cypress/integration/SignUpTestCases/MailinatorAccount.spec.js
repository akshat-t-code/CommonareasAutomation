import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("Activation Mailinator Account for New Sign up User", function () {
  this.beforeEach(
    "Getting the Dynmaically Generated data through Fixtures file",
    function () {
      // cy.eyesOpen({
      //   appName: "Common Aera UI Automation",
      //   testName: "Mailinator Account Verification",
      // });

      //debugger;
      cy.fixture("ConnectionsDynamicTestData/ConnectionUserCredentials").then(
        function (JsonData) {
          this.Credentials = JsonData;
          cy.log(this.Credentials.UserEmail);
        }
      );
    }
  );

  it("Verifying Email Id for Randomly generated New User on Mailinator site", function () {
    //PageObject
    const sp = new SignUpPage();
    sp.mailinatorSite();
    cy.url().should("include", "mailinator.com");
    sp.EnterMailinatorEmail(this.Credentials.UserEmail);
    cy.log("User Email has been Entered");
    // cy.eyesCheckWindow("User Mail");
    //Click on Go
    sp.Go();
    cy.wait(3000);
    //cy.eyesCheckWindow("Common Aera Mail in the inbox");
    // cy.contains("Common Areas - Account Activation").click();
    cy.screenshot("Verifying for getting common aera email");
    cy.wait(10000);
    cy.contains("Welcome to Commonareas - Verify Email").click();

    //debugger
    cy.wait(5000);
    //cy.eyesCheckWindow();
    //New Sign up user Account Verification on mailinator
    sp.ActiveAccount();
    cy.wait(5000);
    cy.log("New user Account has been verified successfully on Mailinator");
    cy.screenshot("successfully Account has been verified on Mailinator");
    cy.wait(10000);
  });
  // this.afterAll(function () {
  //   cy.eyesClose();
  // });
});
