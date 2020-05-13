import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("User Login into the application ", function () {
  this.beforeEach(function () {
    cy.fixture("SignUpPageData").then(function (data) {
      this.data = data;
    });
  });

  it("Login into appLication", function () {
    const sp = new SignUpPage();
    const lp = new LoginPage();

    sp.visit();
    lp.EnterEmail(this.data.UserEmail);
    lp.EnterPassword(this.data.Password);
    lp.Submit();

    //login vailidation
    debugger;
    //  if(cy.get('.field-validation-error').should('be.visible')){

    //     cy.get('#passErrorMessage > span').should('have.text','Invalid username or password.')
    //     cy.log('Invalid username or password.Please enter Valid UserName or Password')
    //  }

    //  else {

    //         cy.title().should('eq', 'Common Areas')

    //         cy.log('You have logged in successfully')

    //          }

    // cy.get('.field-validation-error').then(($btn) => {
    //     if ($btn.css('#passErrorMessage > span')) {
    //       // do something if it's active
    //       cy.log('Invalid username or password.Please enter Valid UserName or Passwoed')
    //     }
    //      else {

    //         cy.title().should('eq', 'Common Areas')

    //         cy.log('You have logged in successfully')

    //     }
    //   })

    cy.wait(10000);
  });
});
