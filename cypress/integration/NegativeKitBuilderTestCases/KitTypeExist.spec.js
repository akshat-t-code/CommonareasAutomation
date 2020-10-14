import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";

describe("KitTypeName already exists.", function () {
  this.beforeAll(function () {
    const lp = new LoginPage();
    lp.visitServiceBuild();
    //Login Assertions
    cy.get(".page-main-title").should("be.visible");
    //Enter credentials
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();

    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.log("User has been Logged In into the application");
    cy.wait(10000);
  });

  this.beforeEach("Fixtures file data for kit type", function () {
    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.fixture("NegativeKitBuilderTestData/KitTypeExist").then(function (
      KitType
    ) {
      this.KT = KitType;
    });
  });

  it("Kit Type Already Exist", function () {
    const kb = new KitBuilderPage();
    const lp = new LoginPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    lp.visitKitBuilderServiceBuild();
    cy.log("User entered in kit builder");
    kb.ClickOnCreateNewKit();
    cy.wait(50000);
    //For Creating New Kit type commands coming form Command.js
    cy.KitLabel(this.KT.KitLabel);
    cy.KitName(this.KT.KitName);
    cy.KitDescription(this.KT.KitDescription);
    cy.ApiName(this.KT.APIName);
    cy.KitIcon();
    cy.CreateKitType();
    //Assertion for Existing Kit type with same Name in Kit Builder
    cy.contains("Unable to create kit type").should("be.visible");
    cy.log("KitTypeName already exists.Can not create Kit Type");
    //Assertion msg close
    cy.wait(5000);
    cy.get(".v-btn__content > .theme--dark").click();
  });
});
