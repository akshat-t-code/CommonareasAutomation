import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Adding Results and Filters Element to Timeline List View", function () {
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

    cy.fixture("KitBuilderTestData/ListViewElementsData").then(function (
      ListViews
    ) {
      this.ListView = ListViews;
    });
  });

  it("Navigating to List Views of Created Kit Type", function () {
    const kb = new KitBuilderPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    kb.KitBuilderUrl();
    // kb.AdminUrl();
    // cy.wait(5000);
    // kb.ClickOnKitBuilder();
    cy.wait(3000);
    //Enter created kit type name into search box
    kb.KBSearchBox(this.data1.ListKitName);
    cy.wait(5000);
    //Open created kit type for adding List view elements
    //cy.contains(this.data1.KitName).click({ force: true });
    //Click to open kit type for adding List view elements
    cy.contains(this.data1.ListKitName).click({ force: true });
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains("List Views").click({ force: true });
    cy.wait(5000);
  });

  it("Adding Results and Filters Element to Timeline List View", function () {
    //Page object
    const kb = new KitBuilderPage();
    //Click on Forms Drop down
    // cy.get(
    //   "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    // ).click({ force: true });
    //kb.ClickOnCrossIcon();
    //View Name coming form json file
    cy.contains(this.data.TimelineView).click({ force: true });
    cy.wait(3000);
    //Add List Results
    cy.contains("Add List Results").click({ force: true });
    cy.wait(2000);
    //Add List Results Values coming from json file
    cy.contains(this.ListView.AddTimelineListResults_1).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_2).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_3).click({ force: true });
    // cy.contains(this.ListView.AddTimelineListResults_4).click({ force: true });
    // cy.contains(this.ListView.AddTimelineListResults_5).click({ force: true });
    cy.wait(2000);
    //Click on Add Select
    cy.contains("Add Selected").click({ force: true });
    //Click on Save
    cy.wait(2000);
    cy.get(".mr-2 > .v-btn__content").click();
    //Assertion close
    cy.get(".closeBtn .v-icon").click();

    cy.contains("Filters").click({ force: true });
    cy.wait(2000);
    //Add List Filters
    cy.contains("Add List Filters").click({ force: true });
    //Add List Filters Values coming from json file
    cy.contains(this.ListView.AddTimelineListFilters_1).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_2).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_3).click({ force: true });
    // cy.contains(this.ListView.AddTimelineListFilters_4).click({ force: true });
    // cy.contains(this.ListView.AddTimelineListFilters_5).click({ force: true });
    cy.wait(2000);
    //Click on Save Selected
    cy.contains("Save Selected").click({ force: true });
    //Click on Save
    cy.wait(2000);
    cy.get(".mr-2 > .v-btn__content").click();
    //Assertion close
    cy.get(".closeBtn .v-icon").click();
  });
});
