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

    cy.title().should('eq', 'Common Areas')
    cy.log('You have logged in successfully')
    cy.wait(10000);

    //login vailidation
    debugger;
    //   cy.get('body').then(($body)=>{

    //     if($body.get('.field-validation-error')){
    //         cy.log('Invalid username or password.Please enter Valid UserName or Password')

    //     }

    //   })
        
    // cy.get('body').then(($body)=>{

    //    else{ cy.title().should('eq', 'Common Areas')

    //         cy.log('You have logged in successfully')
    //         cy.wait(10000);
    // }
    //     })

    
  
})
})

  