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
    //sp.visit();
    cy.visit('https://serviceproviders.ca-test.com/Public/Login?ReturnUrl=%2F#/')
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();

    lp.PlusIcon()
    cy.get('[placeholder="Search Item"]').type('Akshatkit')
    //cy.contains('Akshatkit').click()
    cy.get('.v-btn__content > .menu-items-icon > use').click();


    
});

})
