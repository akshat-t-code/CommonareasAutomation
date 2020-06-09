import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("List Views Elements", function () {
  this.beforeAll(function () {
    const lp = new LoginPage();
    cy.visit("http://serviceproviders.ca-build.com/Public/Login?ReturnUrl=%2F");
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.wait(10000);
  });

  this.beforeEach("Fixtures file data", function () {
    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (data) {
      this.data = data;
    });
    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (data1) {
      this.data1 = data1;
    });
    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      datatypes
    ) {
      this.DataType = datatypes;
    });
  });

  it("Navigating to New Form of Created Kit Type", function () {
    const kb = new KitBuilderPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    kb.AdminUrl();
    cy.wait(5000);
    kb.ClickOnKitBuilder();
    cy.wait(3000);
    cy.contains(this.data1.KitName).click({ force: true });
    cy.wait(3000);
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains("List Views").click({ force: true });
    cy.wait(5000);
  });

  it("Table List", function () {
    //View Name coming form json file
    cy.contains(this.data.TableView).click({ force: true });
    cy.wait(3000);

    //Add List Results
    cy.contains("Add List Results").click({ force: true });
    cy.wait(2000);
    //Close it
    cy.get(".grey--text .v-icon").click();

    cy.contains("Filters").click({ force: true });
    cy.wait(2000);
    cy.contains("Add List Filters").click({ force: true });
    //Close it
    cy.get(".grey--text .v-icon").click();
  });

  it("Search List", function () {
    cy.wait(5000);
    //Click on Forms Drop down
    cy.get(
      "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    ).click({ force: true });
    cy.wait(2000);
    //View Name coming form json file
    cy.contains(this.data.SearchView).click({ force: true });
    cy.wait(3000);

    //Add List Results
    cy.contains("Add List Results").click({ force: true });
    //Close it
    cy.get(".grey--text .v-icon").click();

    cy.contains("Filters").click({ force: true });
    cy.wait(2000);
    cy.contains("Add List Filters").click({ force: true });
    //Close it
    cy.get(".grey--text .v-icon").click();
  });

  it("Timeline List", function () {
    cy.wait(5000);
    //Click on Forms Drop down
    cy.get(
      "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    ).click({ force: true });
    cy.wait(2000);
    //View Name coming form json file
    cy.contains(this.data.TimelineView).click({ force: true });
    cy.wait(3000);

    //Add List Results
    cy.contains("Add List Results").click({ force: true });
    //Close it
    cy.get(".grey--text .v-icon").click();
    cy.contains("Filters").click({ force: true });
    cy.wait(2000);
    cy.contains("Add List Filters").click({ force: true });
    //Close it
    cy.get(".grey--text .v-icon").click();
  });
});
