import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("Login into the application for a new User ", function () {
  this.beforeEach(function () {
    //debugger;
    cy.fixture("LoginTestData/UserLogin").then(function (LoginData) {
      this.Credentials = LoginData;
    });
  });

  it("Login into the appLication for New User", function () {
    //PageObject
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visit();
    lp.EnterEmail("UXAHH@mailinator.com");
    lp.EnterPassword("1234567Aa");
    lp.Submit();

    cy.get("body").then(($body) => {

      if ($body.text().includes("Invalid username or password.")) {

        cy.get('.field-validation-error').should('be.visible') 
        cy.log("Invalid username or password you have");

      }       
      else if($body.find('#inspire > div.v-application--wrap > div:nth-child(2) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div.row.content-wrapper.fill-width.fill-height > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div > div.px-4.col.col-12 > div > span')){
        cy.log("You have been logged in");
        cy.title().should("include", "Common Areas");
      }
      else{
          cy.log('You are a idiot')
      }

    });
  });
});
