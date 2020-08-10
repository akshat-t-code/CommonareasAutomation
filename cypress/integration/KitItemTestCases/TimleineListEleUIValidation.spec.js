import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";

describe("Validate Timeline List's Filters Element for Created Kit Type on Scheduler(UI)", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    lp.visitServiceBuild();
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();

    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt"
    );
  });

  this.beforeEach("KitType Data", function () {
    cy.fixture("KitTypeTestData/KitItemDataValues").then(function (KitDataEle) {
      this.KitItemData = KitDataEle;
    });

    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      DataEleValues
    ) {
      this.KitData = DataEleValues;
    });

    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      datatypes
    ) {
      this.DataEleName = datatypes;
    });

    cy.fixture(
      "KitBuilderValidationTestData/TimelineListFilterValidation"
    ).then(function (KitName) {
      this.KitName = KitName;
    });
  });

  it("Open Created Kit type form left Panel", function () {
    //Page Object
    const lp = new LoginPage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    cy.wait(10000);
    //Click on Hamburger Icon
    lp.HMBIcon();
    cy.contains(this.KitName.TimelineListEleValidation).scrollIntoView({
      force: true,
    });
    cy.wait(5000);
    cy.contains(this.KitName.TimelineListEleValidation).click({
      force: true,
    });
    cy.wait(5000);
  });

  it("Open Scheduler Tab in Edit View", function () {
    //Click on First kit item of kit type to open edit view
    cy.get(
      "#action_items_list > div.fill-height.col > div > div > div.left-panel-top-panel-menu > div:nth-child(3) > div:nth-child(1) > div > div.d-flex.kit-item-list.list-item-col-right.col.row-list-item-details"
    ).click({ force: true });
    cy.wait(3000);
    //Click on Scheduler Tab
    cy.contains("Scheduler").click({ force: true });
    cy.wait(1000);
    //Click on Filters Icon
    cy.get(".px-0 #Layer_1").click({ force: true });
  });

  it("Validate the Filter Url Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Url"][label="Url"]').scrollIntoView({ force: true });
    cy.get('[name="Url"][label="Url"]').should("exist");
    cy.log(this.DataEleName.Url + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Text Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Text"]').eq(1).scrollIntoView({ force: true });
    cy.get('[name="Text"]').eq(1).should("exist");
    cy.log(this.DataEleName.Text + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Telephone Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Telephone"]').eq(1).scrollIntoView({ force: true });
    cy.get('[name="Telephone"]').eq(1).should("exist");
    cy.log(
      this.DataEleName.Telephone + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter TextAera Element", function () {
    //Validation for Filer Elements
    cy.get('[name="TextAera"]').eq(1).scrollIntoView({ force: true });
    cy.get('[name="TextAera"]').eq(1).should("exist");
    cy.log(
      this.DataEleName.TextAera + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter Slider, Currency, Measure and Number Element", function () {
    //Validation for Filer Elements
    //For Slider ,Currency,Measure and Number
    cy.get(".kit-form__control-label").eq(0).should("exist");
    cy.get(".kit-form__control-label").eq(1).should("exist");
    cy.get(".kit-form__control-label").eq(2).should("exist");
    cy.get(".kit-form__control-label").eq(3).should("exist");

    cy.log(
      "This class is Validate Slider, Currency, Measure and Number Data Elements in Filters"
    );
  });

  it("Validate the Filter Email Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Email"]').eq(1).scrollIntoView({ force: true });
    cy.get('[name="Email"]').eq(1).should("exist");
    cy.log(this.DataEleName.Email + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Address Element", function () {
    cy.get('[name="Address"]').eq(1).scrollIntoView({ force: true });
    cy.get('[name="Address"]').eq(1).should("exist");
    cy.log(
      this.DataEleName.Address + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter Time Element", function () {
    //Validation for Filer Elements
    cy.get('[placeholder="Add Time"][type="text"]').scrollIntoView({
      force: true,
    });
    cy.wait(2000);
    cy.get('[placeholder="Add Time"][type="text"]').should("exist");
    cy.log(this.DataEleName.Time + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Date Element", function () {
    //Validation for Filer Elements
    cy.get('[placeholder="Add Date"][type="text"]').scrollIntoView({
      force: true,
    });
    cy.get('[placeholder="Add Date"][type="text"]').should("exist");
    cy.log(this.DataEleName.Date + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter SelectList Element", function () {
    //Validation for Filer Elements
    cy.contains(this.DataEleName.SelectList).should("exist");
    cy.log(
      this.DataEleName.SelectList + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter RadioSelect Element", function () {
    //Validation for Filer Elements
    cy.contains(this.DataEleName.RadioSelect).scrollIntoView({ force: true });
    cy.contains(this.DataEleName.RadioSelect).should("exist");
    cy.log(
      this.DataEleName.RadioSelec + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter CheckboxSelect Element", function () {
    //Validation for Filer Elements
    cy.contains(this.DataEleName.CheckboxSelect).should("exist");
    cy.log(
      this.DataEleName.CheckboxSelect +
        " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter Stepper Element", function () {
    //Validation for Filer Elements
    cy.contains(this.DataEleName.Stepper).should("exist");
    cy.log(
      this.DataEleName.Stepper + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter UserSelector Element", function () {
    //Validation for Filer Elements
    cy.contains(this.DataEleName.UserSelector).scrollIntoView({ force: true });
    cy.contains(this.DataEleName.UserSelector).should("exist");
    cy.log(
      this.DataEleName.UserSelector + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter ContactSelector Element", function () {
    //Validation for Filer Elements
    cy.contains(this.DataEleName.ContactSelector).should("exist");
    cy.log(
      this.DataEleName.ContactSelector +
        " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter Inspection Element", function () {
    //Validation for Filer Elements
    cy.contains(this.DataEleName.Inspection)
      .first()
      .scrollIntoView({ force: true });
    cy.contains(this.DataEleName.Inspection).first().should("exist");
    cy.get('[name="Inspection"][label="Inspection"]').should("exist");
    cy.log(
      this.DataEleName.Inspection + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter Assigning Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Assigning"]').should("exist");
    //cy.contains(this.DataEleName.Assigning).should("exist");
    cy.log(
      this.DataEleName.Assigning + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Default filter Created On", function () {
    cy.get('[placeholder="Created On"][type="text"]').should("exist");
    cy.log("Created On Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it("Default filter Created By", function () {
    cy.get('[placeholder="Created By"][type="text"]').should("exist");
    cy.log("Created By Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it("Default filter Modified On", function () {
    cy.get('[placeholder="Modified On"][type="text"]').should("exist");
    cy.log("Modified By Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it("Default filter Modified By", function () {
    cy.get('[placeholder="Modified By"][type="text"]').eq(1).scrollIntoView({
      force: true,
    });
    cy.get('[placeholder="Modified By"][type="text"]').eq(1).should("exist");
    cy.log("Modified By Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it("Default filter Item Id", function () {
    cy.get('[placeholder="Item Id"]').last().scrollIntoView({ force: true });
    cy.get('[placeholder="Item Id"]').last().should("exist");
    cy.log("Default filter Item Id has been exist in Filters");
    cy.wait(2000);
  });

  it("Default filter Distance", function () {
    cy.get('[name="Location(GPS)"][placeholder="Distance"]').should("exist");
    cy.log("Default filter Distance has been exist in Filters");
    cy.wait(2000);
  });
});
