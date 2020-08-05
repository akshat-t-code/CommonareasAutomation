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
  });

  it("Adding Results and Filters Element to Search List View", function () {
    //Page object
    const kb = new KitBuilderPage();
    cy.wait(5000);
    //Click on Forms Drop down

    // cy.get(
    //   "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    // ).click({ force: true });

    //Click on cross icon
    //kb.ClickOnCrossIcon();

    //View Name coming form json file
    cy.contains(this.data.SearchView).click({ force: true });
    cy.wait(3000);

    //Add List Results
    cy.contains("Add List Results").click({ force: true });
    cy.wait(2000);
    //Add List Results Values coming from json file
    cy.contains(this.ListView.AddSearchListResults_1).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_2).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_3).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_4).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_5).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddSearchListResults_6).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_7).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_8).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_9).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_10).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddSearchListResults_11).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_12).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_13).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_14).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_15).click({ force: true });
    cy.wait(2000);

    cy.contains("Assigning").scrollIntoView({ force: true });

    cy.contains(this.ListView.AddSearchListResults_16).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_17).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_18).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_19).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_20).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddSearchListResults_21).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_22).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_23).click({ force: true });
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
    cy.contains(this.ListView.AddSearchListFilters_1).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_2).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_3).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_4).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_5).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddSearchListFilters_6).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_7).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_8).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_9).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_10).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddSearchListFilters_11).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_12).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_13).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_14).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_15).click({ force: true });
    cy.wait(2000);

    cy.contains("Assigning").scrollIntoView({ force: true });

    cy.contains(this.ListView.AddSearchListFilters_16).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_17).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_18).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_19).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_20).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddSearchListFilters_21).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_22).click({ force: true });
    cy.contains(this.ListView.AddSearchListFilters_23).click({ force: true });
    cy.wait(2000);

    //Click on Save Selected
    cy.contains("Save Selected").click({ force: true });
    //Click on Save
    cy.wait(2000);
    cy.get(".mr-2 > .v-btn__content").click();
    //Assertion close
    cy.get(".closeBtn .v-icon").click();
    cy.wait(3000);
  });

  
});
