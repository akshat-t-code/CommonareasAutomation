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

    cy.fixture("KitBuilderTestData/ListViewElementsData").then(function (ListViews) {
      this.ListView = ListViews;
    });

  });

  it.only("Navigating to New Form of Created Kit Type", function () {
    const kb = new KitBuilderPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    kb.KitBuilderUrl();
    // kb.AdminUrl();
    // cy.wait(5000);
    // kb.ClickOnKitBuilder();
    cy.wait(3000);
    cy.contains(this.data1.KitName).click({ force: true });
    cy.wait(3000);
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains("List Views").click({ force: true });
    cy.wait(5000);

  });

  it.only("Table List", function () {

    //View Name coming form json file
    cy.contains(this.data.TableView).click({ force: true });
    cy.wait(3000);

    //Add List Results
    cy.contains("Add List Results").click({ force: true });
    cy.wait(2000);
    //Add List Results Values coming from json file
    cy.contains(this.ListView.AddTableListResults_1).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_2).click({ force: true });
    cy.contains(this.ListView.AddTableListResults_3).click({ force: true });
    // cy.contains(this.ListView.AddTableListResults_4).click({ force: true });
    // cy.contains(this.ListView.AddTableListResults_5).click({ force: true });
    cy.wait(2000);
    //Click on Add Select
    cy.contains("Add Selected").click({ force: true });
    //Click on Save
    cy.wait(2000);
    cy.get(".mr-2 > .v-btn__content").click();
    cy.log('Table List "s Element has been saved')
    //Assertion close
    cy.get(".closeBtn .v-icon").click();


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

    cy.contains('Assigning').scrollIntoView({force:true})
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

    //Click on Save Selected
    cy.contains("Save Selected").click({ force: true });
    //Click on Save
    cy.wait(2000);
    cy.get(".mr-2 > .v-btn__content").click();
    cy.log('Table List Filter"s Element has been saved')
    //Assertion close
    cy.get(".closeBtn .v-icon").click();
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
    cy.wait(2000);
    //Add List Results Values coming from json file
    cy.contains(this.ListView.AddSearchListResults_1).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_2).click({ force: true });
    cy.contains(this.ListView.AddSearchListResults_3).click({ force: true });
    // cy.contains(this.ListView.AddSearchListResults_4).click({ force: true });
    // cy.contains(this.ListView.AddSearchListResults_5).click({ force: true });
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
    // cy.contains(this.ListView.AddSearchListFilters_4).click({ force: true });
    // cy.contains(this.ListView.AddSearchListFilters_5).click({ force: true });
    cy.wait(2000);

    //Click on Save Selected
    cy.contains("Save Selected").click({ force: true });
    //Click on Save
    cy.wait(2000);
    cy.get(".mr-2 > .v-btn__content").click();
    //Assertion close
    cy.get(".closeBtn .v-icon").click();

    
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
