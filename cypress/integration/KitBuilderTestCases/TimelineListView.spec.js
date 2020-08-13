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

    cy.fixture(
      "KitBuilderValidationTestData/TimelineListFilterValidation"
    ).then(function (TLLKitName) {
      this.TimelineListKitName = TLLKitName;
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
   // kb.KBSearchBox(this.KitName.KitName);
    kb.KBSearchBox(this.TimelineListKitName.TLListKitName);
    cy.wait(5000);
    //Open created kit type for adding List view elements
    //cy.contains(this.KitName.KitName).click({ force: true });
    //Click to open kit type for adding List view elements
    cy.contains(this.TimelineListKitName.TLListKitName).click({ force: true });
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains("List Views").click({ force: true });
    cy.wait(5000);
  });

  it("Adding Results and Filters Element to Timeline List View", function () {
    //Page object
    const kb = new KitBuilderPage();
    
    //View Name coming form json file
    cy.contains(this.data.TimelineView).click({ force: true });
    cy.log(this.data.TimelineView+ " Has been Opened")
    cy.wait(3000);
    //Add List Results
    cy.contains("Add List Results").click({ force: true });
    cy.wait(2000);
    //Add List Results Values coming from json file
    cy.contains(this.ListView.AddTimelineListResults_1).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_2).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_3).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_4).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_5).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddTimelineListResults_6).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_7).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_8).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_9).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_10).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddTimelineListResults_11).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_12).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_13).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_14).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_15).click({ force: true });
    cy.wait(2000);

    cy.contains(this.DataType.Assigning).scrollIntoView({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddTimelineListResults_16).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_17).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_18).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_19).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_20).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddTimelineListResults_21).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_22).click({ force: true });
    cy.contains(this.ListView.AddTimelineListResults_23).click({ force: true });
    cy.wait(2000);

    cy.log("Timeline List View Results Element has been Checkted");
    //Click on Add Select
    cy.contains("Add Selected").click({ force: true });
    cy.log("Timeline List View Results Element has been Selected");

    //Click on Checkbox to make Elements Enabled Sort and Default sort for Results Elements of Timeline View
    //NOTE-Even number(index)(0,2,4,6,8.....46) for make element Enabled Sort
    //NOTE-odd number(index)(1,3,5,7.......46) for make element Default sort
    //add eq(index) as per requirement to make Elements Enabled Sort and Default sort
    cy.get('[role="checkbox"][type="checkbox"]').eq(0).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(1).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(2).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(4).click({ force: true });
    cy.wait(1000);
    cy.log(
      "Elements has been made Enabled Sort and Default sort for Results Elements of Timeline View"
    );

    //Click on Save
    cy.wait(2000);
    cy.get(".mr-2 > .v-btn__content").click({ force: true });
    cy.log("Timeline List View's Results Element has been saved");
    //Assertion close
    cy.get(".closeBtn .v-icon").click({ force: true });
    cy.log("Assertion closed")

    //Add Filters Elements
    cy.contains("Filters").click({ force: true });
    cy.wait(2000);
    //Add List Filters
    cy.contains("Add List Filters").click({ force: true });
    //Add List Filters Values coming from json file
    cy.contains(this.ListView.AddTimelineListFilters_1).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_2).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_3).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_4).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_5).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddTimelineListFilters_6).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_7).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_8).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_9).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_10).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddTimelineListFilters_11).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_12).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_13).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_14).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_15).click({ force: true });
    cy.wait(2000);

    cy.contains(this.DataType.Assigning).scrollIntoView({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddTimelineListFilters_16).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_17).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_18).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_19).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_20).click({ force: true });
    cy.wait(2000);

    cy.contains(this.ListView.AddTimelineListFilters_21).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_22).click({ force: true });
    cy.contains(this.ListView.AddTimelineListFilters_23).click({ force: true });
    cy.wait(2000);

    cy.log("Timeline List View Filters Element has been Checked");
    //Click on Save Selected
    cy.contains("Save Selected").click({ force: true });
    cy.log("Timeline List View Filters Element has been Selected");

    //Click on Save
    cy.wait(2000);
    cy.get(".mr-2 > .v-btn__content").click({ force: true });
    cy.log("Timeline List View  Filter's Element has been saved");
    //Assertion close
    cy.get(".closeBtn .v-icon").click({ force: true });
    cy.log("Assertion closed")
  });
});
