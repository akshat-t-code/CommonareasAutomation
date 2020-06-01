import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";
import RandomString from "../PageObject/RandomString";

describe("TestCase For Invalid Password", function () {
  this.beforeEach(function () {
    debugger;
    cy.fixture("NegativeLoginTestData/InvalidPassword").then(function (
      LoginData
    ) {
      this.Credentials = LoginData;
    });
  });

  it("Login into the appLication With wrong Password", function () {
    //PageObject
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visit();
    lp.EnterEmail(this.Credentials.UserEmail);
    lp.EnterPassword(this.Credentials.Password);
    //log Password
    cy.log(this.Credentials.Password);
    lp.Submit();
    cy.wait(2000);
    //Assertion for Invalid Email or Password
    cy.get(".field-validation-error").should("be.visible");
    cy.get(".field-validation-error").should(
      "have.text",
      "Invalid username or password."
    );
    cy.log("Please Enter a Valid Password");
  });
});
