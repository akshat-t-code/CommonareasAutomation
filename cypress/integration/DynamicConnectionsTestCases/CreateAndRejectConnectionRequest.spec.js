import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("Login for new User than Create A new Connection and Reject the Request ", function () {
  this.beforeEach(
    "Getting the Dynmaically Generated data through Fixtures file",
    function () {
      // cy.eyesOpen({
      //   appName: "Common Aera UI Automation",
      //   testName: "Reject the New User Connection Request",
      // });
      //debugger;
      cy.fixture("ConnectionsDynamicTestData/ConnectionUserCredentials").then(
        function (JsonData) {
          this.Credentials = JsonData;
          cy.log(this.Credentials.UserEmail);
          cy.log(this.Credentials.Fname);
          cy.log(this.Credentials.Lname);
        }
      );
    }
  );

  it("First Time Login into the appLication for New User", function () {
    //PageObjects
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visit();
    lp.EnterEmail(this.Credentials.UserEmail);
    lp.EnterPassword("1234567Aa");
    //cy.eyesCheckWindow("First time user logging into the application");
    lp.Submit();
    //First Time login commands
    cy.url().should("include", "Public/TermsAndConditions?acceptTerms=True");
    cy.get("#readTerms").click();
    //cy.eyesCheckWindow();
    cy.wait(15000);
    cy.log("New Users has been logged in first time successfully");
    //cy.eyesCheckWindow("Logged In");
    //Welcome User Assertion
    cy.get(
      "#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div.row.content-wrapper.fill-width.fill-height > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div > div.px-4.col.col-12 > div > span"
    ).should("have.text", "Home Page Overview");
    cy.get(
      "#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div > div.px-4.col.col-12 > div"
    ).then(function ($WelEle) {
      const WelcomeTxt = $WelEle.text();
      cy.log(WelcomeTxt);
      const username = this.Credentials.Fname;
      cy.log(username);
      expect(username).eq(this.Credentials.Fname);
      cy.wait(3000);
    });
  });

  it("Creating a new Connection ", function () {
    const lp = new LoginPage();
    lp.visit();
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
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
    cy.wait(10000);
  });

  it("Login Again into the AppLication for Reject the Request", function () {
    //PageObjects
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visit();
    lp.EnterEmail(this.Credentials.UserEmail);
    lp.EnterPassword("1234567Aa");
    //cy.eyesCheckWindow("Logging into the application for new User");
    lp.Submit();
    cy.wait(10000);
    cy.log("Users has been logged in successfully");
    //cy.eyesCheckWindow("Getting connection Request");
    //Click On Connection Request notification Icon
    cy.get(".menu-items-icon:nth-child(2) > path").click();
    //cy.eyesCheckWindow();
    cy.wait(5000);
    //cy.eyesCheckWindow();
    //Assertion For getting connection Request
    cy.get(":nth-child(3) > .v-btn > .v-btn__content > .v-icon").should(
      "be.visible"
    );
    cy.wait(5000);
    //Reject the Request
    cy.get(":nth-child(3) > .v-btn > .v-btn__content > .v-icon")
      .first()
      .click();
    cy.wait(3000);
    //cy.eyesCheckWindow("Request Rejected");
    cy.log("Connection Request has been Rejected");
    cy.reload();
    cy.wait(10000);
    //cy.eyesCheckWindow("Reloaded");
    //Click on HMB Icon
    cy.get(".v-btn__content > .v-icon").click();
    //Click On Connections
    cy.get(".v-list-item:nth-child(3) .v-list-item__title").click();
    //Assertion
    cy.wait(3000)
    //cy.eyesCheckWindow("NO Connections here");
    cy.contains("Kali Stanley").should("not.be.visible");
    cy.contains(
      "\n\t\t\t\t\t\t\t\tDrummond Realty Trust\n\t\t\t\t\t\t\t"
    ).should("not.be.visible");
    cy.wait(5000);
  });
  // this.afterAll(function () {
  //   cy.eyesClose();
  // });
});
