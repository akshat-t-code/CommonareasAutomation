import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Adding Results and Filters Element to Table List View", function () {
  this.beforeAll(function () {
    const lp = new LoginPage();
    cy.visit("http://serviceproviders.ca-build.com/Public/Login?ReturnUrl=%2F");
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.wait(10000);
  });

  this.beforeEach("Fixtures file data", function () {

    cy.fixture(
      "KitBuilderValidationTestData/TimelineListFilterValidation"
    ).then(function (TLKitName) {
      this.TableListKitName = TLKitName;
    });

    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (KitTypeFormViewsNames) {
      this.data = KitTypeFormViewsNames;
    });
    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (KitName) {
      this.KitName = KitName;
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
    //kb.KBSearchBox(this.KitName.KitName);
    kb.KBSearchBox(this.TableListKitName.TLKitName);
    cy.wait(5000);
    //Open created kit type for adding List view elements
    //cy.contains(this.data1.KitName).click({ force: true });
    //Click to open kit type for adding List view elements
    //cy.contains(this.KitName.KitName).click({ force: true });
    cy.contains(this.TableListKitName.TLKitName).click({ force: true });
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains("List Views").click({ force: true });
    cy.wait(5000);
  });

  it("Adding Results and Filters Element to Table List View", function () {
    //View Name coming form json file
    cy.contains(this.data.TableView).click({ force: true });
    cy.wait(3000);
    cy.log(this.data.TableView + " Table View has been Opened");

    ///*

    //Add List Results Elements
    cy.contains("Add List Results").click({ force: true });
    cy.wait(2000);
    //Add List Results Values coming from json file
    cy.contains(this.ListView.AddTableListResults_1).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_2).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_3).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_4).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_5).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddTableListResults_6).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_7).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_8).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_9).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_10).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddTableListResults_11).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_12).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_13).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_14).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_15).click({ force: true });
    cy.wait(2000);

    cy.contains(this.DataType.Assigning).scrollIntoView({ force: true });
    cy.wait(2000)

    cy.contains(this.ListView.AddTableListResults_16).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_17).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_18).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_19).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_20).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddTableListResults_21).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_22).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_23).click({ force: true });
    cy.wait(2000);
    
    cy.log("Table List Results Element has been Checked");
    //Click on Add Select
    cy.contains("Add Selected").click({ force: true });
    cy.log("Table List Results Element has been Selected");

    //*/

    //Click on Checkbox to make Elements Enabled Sort and Default sort for Results Elements of Table View
    //NOTE-Even number(index)(0,2,4,6,8.....46) for make element Enabled Sort
    //NOTE-odd number(index)(1,3,5,7.......46) for make element Default sort
    //add eq(index) as per requirement to make Elements Enabled Sort and Default sort
    cy.get('[role="checkbox"][type="checkbox"]').eq(0).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(1).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(2).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(4).click({ force: true });
    cy.wait(1000);
    cy.log(
      "Elements has been made Enabled Sort and Default sort for Results Elements of Table View"
    );

    //Click on Save
    cy.wait(2000);
    cy.get(".mr-2 > .v-btn__content").click();
    cy.log("Table List View's Results Element has been saved");
    //Assertion close
    cy.get(".closeBtn .v-icon").click();
    cy.wait(1000);
    cy.log("Assertion closed");

    ///*

    //Add Filters Elements
    cy.contains("Filters").click({ force: true });
    cy.wait(2000);
    //Add List Filters
    cy.contains("Add List Filters").click({ force: true });
    //Add List Filters Values coming from json file
    cy.contains(this.ListView.AddTableListFilters_1).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_2).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_3).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_4).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_5).click({ force: true });

    cy.wait(2000);
    cy.contains(this.ListView.AddTableListFilters_6).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_7).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_8).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_9).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_10).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddTableListFilters_11).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_12).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_13).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_14).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_15).click({ force: true });
    cy.wait(2000);

    cy.contains(this.DataType.Assigning).scrollIntoView({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddTableListFilters_16).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_17).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_18).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_19).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_20).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddTableListFilters_21).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_22).click({ force: true });
    cy.contains(this.ListView.AddTableListFilters_23).click({ force: true });
    cy.wait(2000);
    cy.log("Table List Filters Element has been Checked");
    //Click on Save Selected
    cy.contains("Save Selected").click({ force: true });
    cy.log("Table List Filters Element has been Selected");

    //*/

    //Click on Save
    cy.wait(2000);
    cy.get(".mr-2 > .v-btn__content").click();
    cy.log("Table List View  Filter's Element has been saved");
    //Assertion close
    cy.get(".closeBtn .v-icon").click();
    cy.wait(3000);
    cy.log("Assertion close");
  });
});
