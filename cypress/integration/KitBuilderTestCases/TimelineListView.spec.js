import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Adding Results and Filters Element to Timeline List View", function () {
  this.beforeAll(function () {
    const lp = new LoginPage();
    lp.visitServiceBuild();
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

    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (
      KitTypeFormViewsNames
    ) {
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

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType2 = NewDataForElements;
    });
  });

  it("Navigating to List Views of Created Kit Type", function () {
    const kb = new KitBuilderPage();
    const lp = new LoginPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    lp.visitKitBuilderServiceBuild();
    cy.wait(3000);
    //Enter created kit type name into search box
    // kb.KBSearchBox(this.KitName.KitName);
    kb.KBSearchBox(this.TimelineListKitName.TLListKitName);

    cy.wait(5000);
    //Open created kit type for adding List view elements
    //cy.contains(this.KitName.KitName3).click({ force: true });
    //Click to open kit type for adding List view elements
    cy.contains(this.TimelineListKitName.TLListKitName).click({ force: true });
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains("List Views").click({ force: true });
    cy.wait(5000);
  });

  it("Adding Results Element to Timeline List View", function () {
    //Page object
    const kb = new KitBuilderPage();

    //View Name coming form json file
    cy.contains(this.data.TimelineView).click({ force: true });
    cy.log(this.data.TimelineView + " Has been Opened");
    cy.wait(3000);
    //Add List Results
    cy.contains("Add List Results").click({ force: true });
    cy.wait(2000);
    //Add List Results Values coming from json file
    cy.contains(this.DataType2.Url).scrollIntoView({ force: true });
    cy.wait(1000);

    cy.contains(this.DataType2.Url).click({ force: true });
    cy.contains(this.DataType2.Text).click({ force: true });
    cy.contains(this.DataType2.File).click({ force: true });
    cy.contains(this.DataType2.Telephone).click({ force: true });
    cy.contains(this.DataType2.TextAera).click({ force: true });
    cy.wait(2000);

    cy.contains(this.DataType2.Slider).click({ force: true });
    cy.contains(this.DataType2.Currency).click({ force: true });
    cy.contains(this.DataType2.Measure).click({ force: true });
    cy.contains(this.DataType2.Email).click({ force: true });
    cy.contains(this.DataType2.Address).click({ force: true });

    cy.contains(this.DataType2.Address).scrollIntoView({ force: true });
    cy.wait(2000);

    cy.contains(this.DataType2.Number).click({ force: true });
    cy.contains(this.DataType2.Time).click({ force: true });
    cy.contains(this.DataType2.Date).click({ force: true });
    cy.contains(this.DataType2.Toggle).click({ force: true });
    cy.contains(this.DataType2.SelectList).click({ force: true });

    cy.contains(this.DataType2.SelectList).scrollIntoView({ force: true });
    cy.wait(2000);

    cy.contains(this.DataType2.Assigning).scrollIntoView({ force: true });
    cy.wait(2000);

    cy.contains(this.DataType2.RadioSelect).click({ force: true });
    cy.contains(this.DataType2.CheckboxSelect).click({ force: true });
    cy.contains(this.DataType2.Stepper).click({ force: true });
    cy.contains(this.DataType2.UserSelector).click({ force: true });
    cy.contains(this.DataType2.ContactSelector).click({ force: true });
    cy.wait(2000);

    cy.contains(this.DataType2.Icon).click({ force: true });
    cy.contains(this.DataType2.Inspection).click({ force: true });
    cy.contains(this.DataType2.Assigning).click({ force: true });
    cy.wait(2000);

    cy.contains("Created On").click({ force: true });
    cy.contains("Modified On").click({ force: true });
    cy.contains("Created By").click({ force: true });
    cy.contains("Modified By").click({ force: true });
    cy.contains("ItemId For Account").click({ force: true });

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
    cy.wait(1000);
    //To close the opened Search List
    kb.ClickOnCrossIcon();
    cy.log("Search List has been Closed");
    cy.wait(3000);
  });

  it("Adding Filters Element to Timeline List View", function () {
    //Page object
    const kb = new KitBuilderPage();

    //View Name coming form json file
    cy.contains(this.data.TimelineView).click({ force: true });
    cy.log(this.data.TimelineView + " Has been Opened");
    cy.wait(3000);

    //Add Filters Elements
    cy.contains("Filters").click({ force: true });
    cy.wait(2000);
    //Add List Filters
    cy.contains("Add List Filters").click({ force: true });
    //Add List Filters Values coming from json file
    cy.contains(this.DataType2.Url).scrollIntoView({ force: true });
    cy.wait(1000);

    cy.contains(this.DataType2.Url).click({ force: true });
    cy.contains(this.DataType2.Text).click({ force: true });
    cy.contains(this.DataType2.File).click({ force: true });
    cy.contains(this.DataType2.Telephone).click({ force: true });
    cy.contains(this.DataType2.TextAera).click({ force: true });
    cy.wait(2000);

    cy.contains(this.DataType2.Slider).click({ force: true });
    cy.contains(this.DataType2.Currency).click({ force: true });
    cy.contains(this.DataType2.Measure).click({ force: true });
    cy.contains(this.DataType2.Email).click({ force: true });
    cy.contains(this.DataType2.Address).click({ force: true });

    cy.contains(this.DataType2.Address).scrollIntoView({ force: true });
    cy.wait(2000);

    cy.contains(this.DataType2.Number).click({ force: true });
    cy.contains(this.DataType2.Time).click({ force: true });
    cy.contains(this.DataType2.Date).click({ force: true });
    cy.contains(this.DataType2.Toggle).click({ force: true });
    cy.contains(this.DataType2.SelectList).click({ force: true });

    cy.contains(this.DataType2.SelectList).scrollIntoView({ force: true });
    cy.wait(2000);

    cy.contains(this.DataType2.Assigning).scrollIntoView({ force: true });
    cy.wait(2000);

    cy.contains(this.DataType2.RadioSelect).click({ force: true });
    cy.contains(this.DataType2.CheckboxSelect).click({ force: true });
    cy.contains(this.DataType2.Stepper).click({ force: true });
    cy.contains(this.DataType2.UserSelector).click({ force: true });
    cy.contains(this.DataType2.ContactSelector).click({ force: true });
    cy.wait(2000);

    cy.contains(this.DataType2.Icon).click({ force: true });
    cy.contains(this.DataType2.Inspection).click({ force: true });
    cy.contains(this.DataType2.Assigning).click({ force: true });
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
