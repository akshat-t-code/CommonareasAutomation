import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Copy New Form Elements to the Edit View", function () {
  this.beforeAll(function () {
    const lp = new LoginPage();
    lp.visitServiceBuild();
    //Login Assertions
    cy.get(".page-main-title").should("be.visible");
    //Enter credentials
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.log("User has been Logged In into the application");
    cy.wait(10000);
  });

  this.beforeEach("Fixtures file data", function () {
    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (
      KitTypeFormViewsNames
    ) {
      this.data = KitTypeFormViewsNames;
    });
    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (KitypeName) {
      this.KitTypeName = KittypeName;
    });
    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      datatypes
    ) {
      this.DataType = datatypes;
    });
  });

  it("Navigating to New Form of Created Kit Type", function () {
    const kb = new KitBuilderPage();
    const lp = new LoginPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    lp.visitKitBuilderServiceBuild();
    cy.log("User entered in kit builder");
    //Open Craeted Kit Type
    kb.KBSearchBox(this.KitTypeName.KitName3);
    cy.wait(5000);
    cy.contains(this.KitTypeName.KitName).click({ force: true });
    cy.wait(3000);
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains(this.data.NewView).click({ force: true });
    cy.wait(5000);
  });

  it("Copy the Elements into Edit form", function () {
    //Close the Kit forms
    cy.get(".v-btn--text .v-icon").first().click({ force: true });
    //cy.get('div:nth-child(1) > div > button > span > i').click({force:true})
    cy.wait(4000);
    cy.contains(this.data.EditView).click({ force: true });
    cy.wait(5000);
    //Copy from
    cy.get(".align-content-center > .mr-2").click({ force: true });
    cy.get(
      "#app > div.v-application--wrap > div > div:nth-child(1) > div.v-dialog__container.copy-from-modal > div > div > div > div.container.new-detailview-container > div > div > form > div.row.align-center.justify-center > div:nth-child(8) > div > div > div.col.col-10 > p"
    ).scrollIntoView();

    //Click on New Form to copy
    //cy.get(".col:nth-child(8) .mr-2").click({ force: true });
    cy.get(
      "div.row.align-center.justify-center > div:nth-child(8) > div > div > div.pt-6.col.col-12 > p"
    ).click({ force: true });
    cy.wait(2000);
    cy.log("New Form View Elements has been Copied into Edit Form");

    cy.wait(2000);
    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({ force: true });
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.log("Kit builder(Edit Form) has been Saved");
    //Click on  Publish
    cy.contains("Publish").click({ force: true });
    //cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(Edit Form) has been Published");
    cy.wait(2000);
  });
});
