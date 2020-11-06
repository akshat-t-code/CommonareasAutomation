import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("Reset password OR Update Password", function () {
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

    cy.fixture("LoginTestData/ResetPassword").then(function (LoginData) {
      this.UserCredentials = LoginData;
    });
  });

  it("Reseting the Password", function () {
    //PageObject
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visitBaseBuild();
    //Login Assertions
    cy.contains(" Log In ").should("be.visible");
    cy.contains("Forgot Password?").click({ force: true });
    cy.wait(2000);
    //Reset page assertion
    cy.url().should("include", "RequestReset");
    cy.contains("Forgot Password ?").should("be.visible");
    //Enter Email which meant to reset password
    cy.get('[name="Username"]').type(this.UserCredentials.ExistingEmailId);
    cy.wait(2000);
    cy.contains("Reset Password").click({ force: true });
    cy.wait(1000);
    cy.contains("Check your Email to retrieve your new password").should(
      "be.visible"
    );
    cy.wait(5000);
  });

  it("Reset Password verification link on mailinato", function () {
    //PageObject
    const sp = new SignUpPage();
    sp.mailinatorSite();
    cy.url().should("include", "mailinator.com");
    cy.log(this.UserCredentials.ExistingEmailId);
    sp.EnterMailinatorEmail(this.UserCredentials.ExistingEmailId);
    cy.log("User Email has been Entered");
    //Click on Go
    sp.Go();
    cy.wait(5000);
    cy.contains("Password reset request").should("be.visible");
    cy.contains("Password reset request").click({ force: true });
    cy.wait(3000);

    cy.get("#msg_body").then(($iframe) => {
      const $a = $iframe.contents().find("a");
      cy.wrap($a)
        .contains("Reset your password")
        .then(function ($a) {
          //extract the fully qualified href property
          const href = $a.prop("href");
          cy.log(href).writeFile(
            "cypress/fixtures/LoginTestData/ResetPasswordUrl.json",
            {
              ResetPwdURL: href,
            }
          );
        });
    });

    cy.wait(7000);
  });
});

describe("Reset/Creating New Password", function () {
  this.beforeEach("Fixtures file data", function () {
    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.fixture("LoginTestData/ResetPasswordUrl").then(function (ResetPWDUrl) {
      this.Url = ResetPWDUrl;
    });

    cy.fixture("LoginTestData/ResetPassword").then(function (LoginData) {
      this.UserCredentials = LoginData;
    });
  });

  it("Create New Password", function () {
    cy.wait(5000);
    //Reset page assertion
    cy.visit(this.Url.ResetPwdURL);
    cy.wait(5000);
    cy.contains(" Set New Password ").should("be.visible");
    cy.get('[name="ChangePassword.Password"]').type(
      this.UserCredentials.NewPassword
    );
    cy.wait(4000);
    cy.get('[name="ChangePassword.ConfirmPassword"]').type(
      this.UserCredentials.ConfirmPassword
    );
    cy.wait(4000);
    cy.contains("CONFIRM").click({ force: true });
    cy.wait(4000);
    //Password reset assertion
    cy.url().should("include", "ConfirmForgotPassword");
    cy.contains("Success").should("be.visible");
    cy.contains("Your password has been successfully changed!").should(
      "be.visible"
    );
    cy.wait(2000);
  });

  it("Login Aagin for Change Credentials", function () {
    //PageObject
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visitBaseBuild();
    //Login Assertions
    cy.contains(" Log In ").should("be.visible");
    //Enter credentials
    lp.EnterEmail(this.UserCredentials.ExistingEmailId);
    lp.EnterPassword(this.UserCredentials.NewPassword);
    cy.wait(2000);
    lp.Submit();
    cy.log("Users has been logged in successfully with new Credentials");

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
    cy.log("Users has been logged in successfully with new Credentials");
    cy.wait(10000);
  });
});
