import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("User has already been Exist for this Email Id", function () {
  this.beforeEach("Getting data from Fixtures file", function () {
    //debugger;
    cy.fixture("NegativeSignUpTestData/UserAlreadyExist").then(function (
      JsonData
    ) {
      this.Credentials = JsonData;
      cy.log(this.Credentials.UserEmail);
      cy.log(this.Credentials.Fname);
      cy.log(this.Credentials.Lname);
    });
  });

  it.only("Sign up for Existing User", function () {
    //PageObject
    const sp = new SignUpPage();
    sp.visitBaseBuild();
    //Login Assertions
    cy.get(".page-main-title").should("be.visible");

    cy.wait(3000);
    //cy.eyesCheckWindow()

    cy.url().should("include", "/Public/Login?ReturnUrl=%2F");
    //Click on Sign up for free
    sp.SignUp();
    cy.url().should("include", "Register/Create");
    //cy.eyesCheckWindow('Sign Up Page')
    //Sign Up detalis Custom Commands coming from command.js
    cy.SignUpUserFirstName(this.Credentials.Fname);
    cy.SignUpUserLastName(this.Credentials.Lname);
    cy.SignUpUserEmail(this.Credentials.UserEmail);
    cy.CompanyName(this.Credentials.CompanyName);

    //cy.ConfirmEmailAddress(this.Credentials.UserEmail);
    cy.SignUpUserPassword(this.Credentials.Password);
    cy.ConfirmPassword(this.Credentials.Password);

    cy.get('[name="ContactInformation.CompanyType"]').scrollIntoView({
      force: true,
    });
    cy.wait(1000);
    cy.get(
      '[name="ContactInformation.CompanyType"]'
    ).select("Facility Management", { force: true });
    //cy.eyesCheckWindow("Getting User Details");
    cy.wait(2000);

    //Click on Agree Terms and conditions
    cy.get("#AgreeTermsAndConditions").click({ force: true });

    //Click on Submit to Create the user
    cy.get("#submitButton").click();

    //Assertion for Existing User
    cy.contains(
      this.Credentials.Lname + "@mailinator.com already exists as user"
    ).should("be.visible");
    cy.log(
      "This User has already been Exist with this Email Id. Please enter another Email Id"
    );
  });
});
