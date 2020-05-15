import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";
import RandomString from "../PageObject/RandomString";

describe("Sign up for a New User", function () {
  this.beforeEach(function () {
    cy.fixture("SignUpPageData").then(function (data) {
      this.data = data;
    });
  });

  it.only("Sign Up for a new User", function () {
    const sp = new SignUpPage();
    sp.visit();
    cy.wait(3000);

    cy.url().should("include", "app.ca-test.com/Public/Login?ReturnUrl=%2F");
    sp.SignUpbtn();
    cy.url().should("include", "Register/Create");

    //Sign Up detalis data coming from command.js
    cy.SignUpUserFirstName(this.data.FirstName);

    cy.SignUpUserLastName(this.data.LastName);

    cy.SignUpUserEmail(this.data.UserEmail);

    cy.ConfirmEmailAddress(this.data.UserEmail);

    cy.SignUpUserPassword(this.data.Password);

    cy.ConfirmPassword(this.data.Password);

    cy.get('[name="ContactInformation.CompanyType"]').scrollIntoView({
      force: true,
    });

    cy.wait(5000);
    cy.get('[name="ContactInformation.CompanyType"]').select(
      "Facility Management"
    );

    //Click on Submit to Create the user
    cy.get(".icon:nth-child(1)").click();
    cy.log("New User has been signed up successfully");

    cy.wait(5000);

    //Assertion
    cy.get(".login-message").should(
      "have.text",
      "An email has been sent to you to verify the email address you provided with a link to activate your account."
    );

    cy.wait(5000);
    cy.get(".icon").click();
    cy.url().should("include", "/Public/Login");

    cy.wait(10000);
  });

  it("Verifying the New user Email Id for New User on Mailinator site", function () {
    const sp = new SignUpPage();
    sp.mailinatorSite();
    cy.url().should("include", "mailinator.com");
    sp.EnterMailinatorEmail(this.data.UserEmail);
    //Click on Go
    sp.Go();
    cy.wait(3000);
    cy.contains("Common Areas - Account Activation").click();
    //debugger
    cy.wait(5000);
    ////New Sign up user Account Verification on mailinator
    sp.ActiveAccount();
    cy.wait(5000);
    cy.log("New user Account has been verified successfully on Mailinator");
  });
});
