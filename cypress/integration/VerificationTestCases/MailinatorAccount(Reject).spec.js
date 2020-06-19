import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("Activation Mailinator Account for Random New Sign up User for Reject Request Test Case ", function () {
  this.beforeEach(
    "Getting the Dynmaically Generated data through Fixtures file",
    function () {
      //debugger;
      cy.fixture("VerificationTestCasesData/RejectRequestUserData").then(
        function (Email2) {
          this.Credentials2 = Email2;
          cy.log(Email2);
          cy.log(this.Credentials2.UserEmail1);
        }
      );
    }
  );

  it("Verifying New User Email on Mailinator site for Reject Request", function () {
    //PageObject
    const sp = new SignUpPage();
    sp.mailinatorSite();
    cy.url().should("include", "mailinator.com");
    sp.EnterMailinatorEmail(this.Credentials2.UserEmail1);
    cy.log("User Email has been Entered");
    //Click on Go
    sp.Go();
    cy.wait(3000);
    cy.contains("Common Areas - Account Activation").click();
    //debugger
    cy.wait(5000);
    //New Sign up user Account Verification on mailinator
    sp.ActiveAccount();
    cy.wait(5000);
    cy.log("New user Account has been verified successfully on Mailinator");
  });
});
