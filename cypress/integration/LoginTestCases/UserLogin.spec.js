import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("Login into the application for a new User ", function () {
  this.beforeEach(function () {
    debugger;
    cy.fixture("LoginTestData/UserLogin").then(function (LoginData) {
      this.Credentials = LoginData;
    });
  });

  it("Login into the appLication for New User", function () {
    //PageObject
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visitBaseBuild();
    //Login Assertions
    cy.get('.page-main-title').should('be.visible')

    lp.EnterEmail(this.Credentials.UserEmail);
    lp.EnterPassword(this.Credentials.Password);
    lp.Submit();
    cy.wait(10000);
    cy.title().should("eq", "Common Areas");
    cy.log("New Users has been logged in successfully");
    //Assertion
    cy.get(
      "#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div.row.content-wrapper.fill-width.fill-height > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div > div.px-4.col.col-12 > div > span"
    ).should("have.text", "Home Page Overview");
    cy.get(
      "#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div > div.px-4.col.col-12 > div"
    ).then(function ($WelEle) {
      const WelcomeTxt = $WelEle.text();
      cy.log(WelcomeTxt);
    });
  });
});
