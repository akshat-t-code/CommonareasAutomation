import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Adding Results and Filters Element to List Views", function () {
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

  it.only("Navigating to List Views of Created Kit Type", function () {
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

  it.only("Adding Results and Filters Element to Table List View", function () {
    //View Name coming form json file
    cy.contains(this.data.TableView).click({ force: true });
    cy.wait(3000);
    cy.log(this.data.TableView + " has been Opened");

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
    cy.contains("Assigning").scrollIntoView({ force: true });
    cy.wait(2000);
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

    cy.contains("Assigning").scrollIntoView({ force: true });
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

  it.only("Adding Results and Filters Element to Search List View", function () {
    //Page object
    const kb = new KitBuilderPage();
    cy.wait(3000);
    //Click on Forms Drop down
    // cy.get(
    //   "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    // ).click({ force: true });

    kb.ClickOnCrossIcon();
    cy.wait(2000);
    cy.log("Table List View Has been Close");
    //View Name coming form json file
    cy.contains(this.data.SearchView).click({ force: true });
    cy.wait(3000);
    cy.log(this.data.SearchView + " has been Opened");

    ///*

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
    cy.log("Search List View Results Element has been Checked");
    //Click on Add Select
    cy.contains("Add Selected").click({ force: true });
    cy.log("Search List View Results Element has been Selected");

    //*/

    //Click on Checkbox to make Elements Enabled Sort and Default sort for Results Elements of Search View
    //NOTE-Even number(index)(0,2,4,6,8.....46) for make element Enabled Sort
    //NOTE-odd number(index)(1,3,5,7.......46) for make element Default sort
    //add eq(index) as per requirement to make Elements Enabled Sort and Default sort
    cy.get('[role="checkbox"][type="checkbox"]').eq(0).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(1).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(2).click({ force: true });
    cy.get('[role="checkbox"][type="checkbox"]').eq(4).click({ force: true });
    cy.wait(1000);
    cy.log(
      "Elements has been made Enabled Sort and Default sort for Results Elements of Search View"
    );

    //Click on Save
    cy.wait(2000);
    cy.get(".mr-2 > .v-btn__content").click();
    cy.log("Search List View's Results Element has been saved");
    //Assertion close
    cy.get(".closeBtn .v-icon").click();
    cy.wait(1000);
    cy.log("Assertion closed");

    ///*

    //add Filter Elements
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
    cy.log("Search List View Filters Element has been Checked");
    //Click on Save Selected
    cy.contains("Save Selected").click({ force: true });
    cy.log("Search List View Filters Element has been Selected");

    //*/

    //Click on Save
    cy.wait(2000);
    cy.get(".mr-2 > .v-btn__content").click();
    cy.log("Search List View  Filter's Element has been saved");
    //Assertion close
    cy.get(".closeBtn .v-icon").click();
    cy.wait(3000);
    cy.log("Assertion closed");
  });

  it("Adding Results and Filters Element to Timeline List View", function () {
    //Page object
    const kb = new KitBuilderPage();
    cy.wait(3000);
    //Click on Forms Drop down
    // cy.get(
    //   "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    // ).click({ force: true });
    kb.ClickOnCrossIcon();
    cy.wait(3000);

    //View Name coming form json file
    cy.contains(this.data.TimelineView).click({ force: true });
    cy.log(this.data.TimelineView + " Has been Opened");
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
    cy.log("Assertion closed");

    //Add Filters Elements
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
    cy.log("Assertion closed");
  });
});
