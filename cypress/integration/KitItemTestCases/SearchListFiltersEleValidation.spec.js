import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitTypePage from "../PageObject/KitTypePage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Search List View Filters Element Validation On UI for created kit type", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    lp.visitServiceBuild();

    //Handling Alert
    cy.on("window:confirm", () => {
      cy.log("Alert has been Handled");
    });

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

  this.beforeEach("Fixtures file data", function () {
    cy.fixture("KitBuilderValidationTestData/SearchListFilterValidation").then(
      function (KitName) {
        this.KitName = KitName;
      }
    );

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
      KitTypeName
    ) {
      this.CreateNewKT = KitTypeName;
    });

    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      datatypes
    ) {
      this.DataEleName = datatypes;
    });
  });

  it("Navigating to UI for KitType's New Form", function () {
    //cy.wait(5000)
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    //debugger;
    //Click on To open Kit Type
    KTP.SearchKitType(this.KitName.SearchListEleValidation);
    KTP.OpenKitType(this.KitName.SearchListEleValidation);
    cy.wait(2000);
    //Assertion
    cy.contains("New Item created").should("exist");
    cy.log("New Item created and Kit Type has been Opened");
    cy.wait(5000);
  });

  it("Open Search View(LINK ITEM) Elements Validation", function () {
    cy.contains("LINK ITEM").first().click({ force: true });
    cy.wait(3000);
  });

  it("Validate the Filter Url Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Url"]').eq(2).scrollIntoView({ force: true });
    cy.get('[name="Url"]').eq(2).should("exist");
    cy.log(this.DataEleName.Url + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Text Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Text"]').eq(2).scrollIntoView({ force: true });
    cy.get('[name="Text"]').eq(2).should("exist");
    cy.log(this.DataEleName.Text + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Telephone Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Telephone"]').eq(2).scrollIntoView({ force: true });
    cy.get('[name="Telephone"]').eq(2).should("exist");
    cy.log(
      this.DataEleName.Telephone + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter TextAera Element", function () {
    //Validation for Filer Elements
    cy.get('[name="TextAera"]').eq(2).scrollIntoView({ force: true });
    cy.get('[name="TextAera"]').eq(2).should("exist");
    cy.log(
      this.DataEleName.TextAera + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter Slider, Currency, Measure and Number Element", function () {
    //Validation for Filer Elements
    //For Slider ,Currency,Measure and Number
    cy.get(".kit-form__control-label").should("exist");
    cy.log(
      "This class is Validate Slider, Currency, Measure and Number Data Elements in Filters"
    );
  });

  it("Validate the Filter Email Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Email"]').eq(2).scrollIntoView({ force: true });
    cy.get('[name="Email"]').eq(2).should("exist");
    cy.log(this.DataEleName.Email + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Address Element", function () {
    cy.get('[name="Address"]').eq(2).scrollIntoView({ force: true });
    cy.get('[name="Address"]').eq(2).should("exist");
    cy.log(
      this.DataEleName.Address + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter Time Element", function () {
    //Validation for Filer Elements
    cy.get('[placeholder="Add Time"][type="text"]')
      .first()
      .scrollIntoView({ force: true });
    cy.wait(2000);
    cy.get('[placeholder="Add Time"][type="text"]').first().should("exist");
    cy.log(this.DataEleName.Time + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Date Element", function () {
    //Validation for Filer Elements
    cy.get('[placeholder="Add Date"][type="text"]')
      .first()
      .scrollIntoView({ force: true });
    cy.get('[placeholder="Add Date"][type="text"]').first().should("exist");
    cy.log(this.DataEleName.Date + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Toggle Element", function () {
    //Validation for Filer Elements
    cy.contains(this.DataEleName.Toggle).should("exist");
    cy.log(this.DataEleName.Toggle + " Data Element has been exist in Filters");
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
    cy.get('[placeholder="Modified By"][type="text"]').scrollIntoView({
      force: true,
    });
    cy.get('[placeholder="Modified By"][type="text"]').should("exist");
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
