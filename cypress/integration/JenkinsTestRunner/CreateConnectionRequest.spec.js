import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("New User Create A new Connection Request ", function () {
  this.beforeEach(
    "Getting the Dynmaically Generated data through Fixtures file",
    function () {
      Cypress.Cookies.preserveOnce(
        ".AspNet.ApplicationCookie",
        "ASP.NET_SessionId",
        "ca-cf-auth",
        "kit-detail-selected-tab",
        "jwt",
        "refreshToken",
        "jwtAccessToken"
      );

      // cy.eyesOpen({
      //   appName: "Common Aera UI Automation",
      //   testName: "Accept the New User Connection Request",
      // });
      //debugger;
      cy.fixture("ConnectionsDynamicTestData/ConnectionUserCredentials").then(
        //cy.fixture("VerificationTestCasesData/AcceptRequestUserData").then(
        function (JsonData) {
          this.Credentials = JsonData;
          cy.log(this.Credentials.UserEmail);
          cy.log(this.Credentials.Fname);
          cy.log(this.Credentials.Lname);
        }
      );
      //cy.viewport(1000, 600);
    }
  );

  it("Create a new Connection ", function () {
    const lp = new LoginPage();
    lp.visitServiceBuild();
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    cy.screenshot("User Details-(To Create Connection Request");
    cy.wait(10000);
    //cy.eyesCheckWindow("Logging into the application");
    lp.Submit();
    cy.wait(10000);
    cy.log("Users has been logged in successfully");
    //cy.eyesCheckWindow("Logged into the application");
    lp.PlusIcon();
    lp.ConnectionIcon();
    cy.wait(2000);
    //cy.eyesCheckWindow();
    //Connection Custom Commands coming from commands.js
    cy.ConnectionFirstName(this.Credentials.Fname);
    cy.ConnectionLastName(this.Credentials.Lname);
    cy.ConnectionEmail(this.Credentials.UserEmail);
    cy.screenshot("User Connection Details");
    cy.wait(7000);
    //cy.eyesCheckWindow("Connection Details");
    cy.log("Connection detalis has been Entered");
    //click on DropDown(This DropDown feature has be removed from this connection module)
    // cy.get(
    //   "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div.row.position-relative.contact-detail-wrapper.md11.fill-height.new-connection > div.base-layout-main-content.d-flex.pa-0.fill-height.px-8.col > div.row.wrapper-content.px-8.py-4.pb-4 > div > div.v-input.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select.v-select--chips.v-select--is-multi > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    // ).click({ force: true });
    // cy.contains("Meeting").click();
    // cy.contains("02").click();
    // cy.contains("LOL").click();
    //cy.eyesCheckWindow();
    //Click on Save btn
    cy.get(".button-pop-ups--size").click();
    cy.log("Connection Request has been sent successfully");
    cy.screenshot("Connection Request has been sent successfully");
    cy.wait(10000);
  });

  // this.afterAll(function () {
  //   cy.eyesClose();
  // });
});
