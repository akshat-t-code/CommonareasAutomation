import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("Sign Out for logged User Test case ", function () {
  this.beforeEach(function () {
    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.fixture("ConnectionsDynamicTestData/ConnectionUserCredentials").then(
      function (LoginData) {
        this.SignOUtCredentials = LoginData;
      }
    );
  });

  it("Login into the appLication A User", function () {
    //PageObject
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visitBaseTest();
    //Login Assertions
    cy.contains(" Log In ").should("be.visible");
    //Enter credentials
    lp.EnterEmail(this.SignOUtCredentials.UserEmail);
    lp.EnterPassword(this.SignOUtCredentials.Password);
    cy.wait(7000);
    lp.Submit();
    cy.log("User has been Logged In into the application");

    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.wait(10000);
    cy.title().should("eq", "Common Areas");
    cy.log("New Users has been logged in successfully");
    //Home Page Assertion
    cy.get(
      "#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div.row.content-wrapper.fill-width.fill-height > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div > div.px-4.col.col-12 > div > span"
    ).should("have.text", "Home Page Overview");
    cy.get(
      "#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div > div.px-4.col.col-12 > div"
    ).then(function ($WelEle) {
      const WelcomeTxt = $WelEle.text();
      cy.log(WelcomeTxt);
    });
    cy.wait(10000);
  });

  it("Sign Out for logged in user", function () {
    //Click on admin
    cy.get('[name="your-profile"]').click({ force: true });
    cy.wait(2000);
    cy.contains("Sign Out").click({ force: true });
    cy.wait(5000);
    //Log out validation assertion
    cy.contains(" Log In ").should("be.visible");
    cy.url().should("include", "/Public/Login?");
    cy.log("User has been sign out");
  });
});
