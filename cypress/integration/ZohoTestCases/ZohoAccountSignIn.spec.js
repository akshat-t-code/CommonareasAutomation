import ZohoPage from "../PageObject/ZohoPage";

describe("Login into the Zoho Account ", function () {
  this.beforeEach(function () {
    cy.fixture("ZohoTestData/SignIn").then(function (LoginData) {
      this.Credentials = LoginData;
    });
  });

  it.only("Login into the Zoho Account for existing User", function () {
    //PageObject
    const Zoho = new ZohoPage();

    Zoho.visitZohoSignIn();

    cy.get("#headtitle").should("have.text", "Sign in");

    //Login Assertions

    Zoho.EnterEmail(this.Credentials.UserEmail);
    Zoho.NextBtn();
    cy.wait(3000);
    Zoho.EnterPassword(this.Credentials.Password);
    Zoho.ClickOnSignInBtn();
    cy.wait(10000);
    cy.log("Users has been logged in successfully");
  });

  it.only('new url',function(){


    cy.visit('https://subscriptions.zoho.com/app#/')

  })

});
