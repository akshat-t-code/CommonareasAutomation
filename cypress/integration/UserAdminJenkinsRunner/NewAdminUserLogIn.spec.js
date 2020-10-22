import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";
import RandomString from "../PageObject/RandomString";

describe("New Admin User Login into", function () {
  this.beforeEach(
    "Getting the Dynmaically Generated data through Fixtures file",
    function () {
      // cy.eyesOpen({
      //   appName: "Common Aera UI Automation",
      //   testName: "Adding New User From Admin",
      // });
      //Dynamic taking data form this fixtures file(1)
      cy.fixture("AddUserDynamicTestData/AddUserCredentials").then(function (
        JsonData
      ) {
        this.Credentials = JsonData;
        cy.log(this.Credentials.UserEmail);
        cy.log(this.Credentials.FirstName);
        cy.log(this.Credentials.LastName);
      });

      cy.viewport(1000, 600);
      //2nd Fixture file(Static) for Adding User
      cy.fixture("AddUserDynamicTestData/AdminUserdata").then(function (data) {
        this.data = data;
      });
    }
  );

  it("First Time New Add Admin User login into the appliction", function () {
    //PageObject
    const lp = new LoginPage();
    lp.visitStarksBuild();
    //Login Page assertion
    cy.get(".page-main-title").should("be.visible");
    //fixtures file(1)
    lp.EnterEmail(this.Credentials.UserEmail);
    lp.EnterPassword(this.data.UserPassword);
    //cy.eyesCheckWindow("user logging into the application");
    cy.screenshot("New Admin User LogIn Details");
    lp.Submit();
    cy.wait(3000);
    //First Time login commands
    cy.url().should("include", "Public/TermsAndConditions?acceptTerms=True");
    cy.get("#readTerms").scrollIntoView().click({ force: true });
    //cy.eyesCheckWindow("New User");
    cy.wait(10000);
    cy.log("New User has been logged in successfully");
    //cy.eyesCheckWindow("Logged In");
    //Assertion
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    //Profile Assertion
    cy.get(
      "#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div > div.px-4.col.col-12 > div"
    ).then(function ($WelEle) {
      const WelcomeTxt = $WelEle.text();
      cy.log(WelcomeTxt);
    });
    cy.screenshot("Admin User Logged In");
    cy.wait(5000);
  });

  // this.afterAll(function () {
  //   cy.eyesClose();
  // });
});
