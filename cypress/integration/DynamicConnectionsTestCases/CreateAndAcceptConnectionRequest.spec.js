import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("Login for new User than Create A new Connection and Accept the request ", function () {
  this.beforeEach(
    "Getting the Dynmaically Generated data through Fixtures file",
    function () {
      //debugger;
      cy.fixture("DynamicData/UserCredentials").then(function (JsonData) {
        this.Credentials = JsonData;
        cy.log(this.Credentials.UserEmail);
        cy.log(this.Credentials.Fname);
        cy.log(this.Credentials.Lname);
      });
    }
  );

  it("First Time Login into the appLication for New User", function () {
    //PageObjects
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visit();
    lp.EnterEmail(this.Credentials.UserEmail);
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    //First Time login commands
    cy.url().should("include", "Public/TermsAndConditions?acceptTerms=True");
    cy.get("#readTerms").click();
    cy.wait(15000);
    cy.log("New Users has been logged in first time successfully");
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
    lp.Submit();
    cy.wait(10000);
    cy.log("Users has been logged in successfully");
    lp.PlusIcon();
    lp.ConnectionIcon();
    //Connection commands coming from commands.js
    cy.ConnectionFirstName(this.Credentials.Fname);
    cy.ConnectionLastName(this.Credentials.Lname);
    cy.ConnectionEmail(this.Credentials.UserEmail);
    cy.log("Connection detalis has been Entered");
    //click on DropDown
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div.row.position-relative.contact-detail-wrapper.md11.fill-height.new-connection > div.base-layout-main-content.d-flex.pa-0.fill-height.px-8.col > div.row.wrapper-content.px-8.py-4.pb-4 > div > div.v-input.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select.v-select--chips.v-select--is-multi > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    ).click({ force: true });
    cy.contains("Meeting").click();
    cy.contains("02").click();
    cy.contains("LOL").click();
    //Click on Save btn
    cy.get(".button-pop-ups--size").click();
    cy.log("Connection Request has been sent successfully");
    cy.wait(10000);
  });

  it.only("Login Again to appLication for Accepting the Request", function () {
    //PageObjects
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visit();
    lp.EnterEmail(this.Credentials.UserEmail);
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.wait(10000);
    cy.log("Users has been logged in successfully");
    //Click On Connection Request notification Icon
    cy.get(".menu-items-icon:nth-child(2) > path").click();
    cy.wait(5000);
    //click to Accept the Request
      cy.get(".green--text").click();
    //cy.get(':nth-child(4) > .v-btn > .v-btn__content > .v-icon').click()
    cy.log("Connection Request has been accepted");
    //Click On HMB icon
    cy.get(".v-btn__content > .theme--dark").click();
    //Click on Connection
    cy.get(".v-list-item:nth-child(3) .v-list-item__title").click();
    cy.wait(5000);
    //Getting User
    // cy.get(".row:nth-child(2) > .d-flex .v-list-item__title").then(function (
    //   $txt
    // ) {
    //   const UserData = $txt.text();
    //   cy.log(UserData);
    //   // expect(UserData).eq(this.Credentials.Fname+" "+this.Credentials.Lname)
    // });
    //Click On Created Connection
    // cy.get(".row:nth-child(1) .company_container:nth-child(1)")
    //   .should("be.visible")
    //   .click();
    cy.log("Connection Created");
    //cy.wait(7000);
  });
});
