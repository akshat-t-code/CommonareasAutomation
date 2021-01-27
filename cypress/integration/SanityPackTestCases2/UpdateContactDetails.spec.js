import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("Update Connection Details", function () {
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

    //debugger;
    // cy.fixture("LoginTestData/UserLogin").then(function (LoginData) {
    //   this.Credentials = LoginData;
    // });

    cy.fixture("ConnectionsDynamicTestData/ConnectionUserCredentials").then(
      function (LoginData) {
        this.Credentials = LoginData;
      }
    );

    cy.fixture("SanityPackTestData2/UpdateContactDetails").then(function (
      ContactInfo
    ) {
      this.ContactData = ContactInfo;
    });
  });

  it.only("Login into the appLication for New User", function () {
    //PageObject
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visitBaseTest();
    //cy.visit('https://app.ca-test.com/Public/Login?ReturnUrl=%2F')
    //Login Assertions
    cy.contains(" Log In ").should("be.visible");
    //Enter credentials
    lp.EnterEmail(this.Credentials.UserEmail);

    lp.EnterPassword(this.Credentials.Password);
    //cy.screenshot("User logged In Details");
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
    //cy.title().should("eq", "Common Areas");
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
    cy.log("New Users has been logged in successfully");
    //cy.screenshot("New Users has been logged in successfully");
    cy.wait(10000);
  });

  it("Accept Connection Request", function () {
    //PageObjects
    const sp = new SignUpPage();
    const lp = new LoginPage();
    cy.wait(3000);
    //Click On Connection Request notification Icon
    cy.get(".menu-items-icon:nth-child(2) > path").click({ force: true });
    //cy.eyesCheckWindow("Connection Request");
    //cy.screenshot("Connection Request");
    cy.wait(10000);
    //click to Accept the Request
    cy.get(".green--text").click();
    //cy.get(':nth-child(4) > .v-btn > .v-btn__content > .v-icon').click()
    cy.log("Connection Request has been accepted");
    cy.wait(2000);
  });

  it.only("Update Connection Details", function () {
    //Click On HMB icon
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    //Click on Connection
    cy.get(".v-list-item:nth-child(3) .v-list-item__title").click({
      force: true,
    });
    //cy.eyesCheckWindow("Connection has been added");
    cy.wait(5000);

    //Click on contact
    cy.get(".contact-details__icon-account").click({ force: true });
    //Assertion
    cy.contains("Details").should("be.visible");
    cy.wait(5000);
    //Click to do Auto Sync off
    cy.get(
      ".v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple"
    ).click({ force: true });

    cy.wait(3000);
    cy.contains("Connection Details").should("be.visible");
    cy.wait(1000);
    cy.CompanyName(this.ContactData.CompanyName);
    cy.wait(1000);
    cy.JobTitle(this.ContactData.JobTitle);
    cy.wait(1000);
    cy.WebSite(this.ContactData.WebSite);
    cy.wait(1000);
    cy.PhoneNumber(this.ContactData.PhoneNumber);
    cy.wait(1000);
    cy.MobilePhone(this.ContactData.MobilePhone);
    cy.wait(1000);
    cy.FaxNumber(this.ContactData.FaxNumber);
    cy.wait(1000);
    cy.Address1(this.ContactData.Address1);
    cy.wait(1000);
    cy.Address2(this.ContactData.Address2);
    cy.wait(1000);
    cy.City(this.ContactData.City);
    cy.wait(1000);
    cy.ZipCode(this.ContactData.ZipCode);
    cy.wait(1000);
    cy.Country(this.ContactData.Country);
    cy.wait(1000);
    cy.State(this.ContactData.State);
    cy.wait(1000);
    cy.Note(this.ContactData.Note);
    cy.wait(3000);

    //Save the details
    cy.get(".ca-button-green > .v-btn__content").click({ force: true });
    cy.wait(4000);
    //Close the form
    cy.get(".wrapper--close-icon path").click({ force: true });
    cy.wait(2000);
    //Click on connection(contact)
    cy.get(".contact-details__icon-account").click({ force: true });
    cy.wait(5000);
    cy.get('[name="zipCode"]').scrollIntoView({ force: true });
    cy.wait(2000);
  });

  it("Validate updated Conection Details", function () {
    //Click on connection(contact)
    cy.get(".contact-details__icon-account").click({ force: true });
    cy.wait(5000);
    cy.wait(2000);
    cy.get('[name="companyName"]').scrollIntoView({ force: true });

    cy.get('[name="companyName"]').then(function ($EleData) {
      const Data = $EleData.text();
      cy.log(Data);
    });

    cy.get('[name="companyName"]').should(
      "have.text",
      this.ContactData.CompanyName
    );
  });
});
