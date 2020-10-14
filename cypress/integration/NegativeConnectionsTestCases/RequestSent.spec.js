import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("Connection Request has Already been Sent for this User", function () {
  this.beforeEach("Getting data from Fixtures file", function () {
    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.fixture("NegativeConnectionTestData/RequestAlreadySent").then(function (
      JsonData
    ) {
      this.Credentials = JsonData;
      cy.log(this.Credentials.UserEmail);
      cy.log(this.Credentials.Fname);
      cy.log(this.Credentials.Lname);
    });
  });

  it("This User Already Sent Connection Request", function () {
    const lp = new LoginPage();
    lp.visitServiceTest();
    //Login Assertions
    cy.get(".page-main-title").should("be.visible");

    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.wait(10000);
    cy.log("Users has been logged in successfully");
    lp.PlusIcon();
    lp.ConnectionIcon();
    cy.wait(2000);
    //Connection Custom Commands coming from commands.js
    cy.ConnectionFirstName(this.Credentials.Fname);
    cy.ConnectionLastName(this.Credentials.Lname);
    cy.ConnectionEmail(this.Credentials.UserEmail);
    cy.log("Connection detalis has been Entered");
    //click on DropDown feature has been removed form the application
    // cy.get(
    //   "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div.row.position-relative.contact-detail-wrapper.md11.fill-height.new-connection > div.base-layout-main-content.d-flex.pa-0.fill-height.px-8.col > div.row.wrapper-content.px-8.py-4.pb-4 > div > div.v-input.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select.v-select--chips.v-select--is-multi > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    // ).click({ force: true });
    // cy.contains("Meeting").click();
    // cy.contains("02").click();
    // cy.contains("LOL").click();
    //Click on Save btn
    cy.get(".button-pop-ups--size").click();
    //Assertion For Connection Request has already been sent
    cy.contains(
      "The connection being requested is already a connection in your contacts"
    ).should("be.visible");
    cy.log("Connection Request has Already been sent with this user");
    cy.wait(5000);
  });
});
