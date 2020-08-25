import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitTypePage from "../PageObject/KitTypePage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Negative Test Case for Search ListView Filters Element Validation On UI", function () {
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

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType2 = NewDataForElements;
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
    KTP.SearchKitType(this.KitName.SearchListEleValidation2);
    cy.wait(3000);
    //This is class to open searched kit type after clicking + iocn and type kit name in search
    cy.get(".truncate-special").first().click({ force: true });
    //KTP.OpenKitType(this.KitName.SearchListEleValidation);
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

  it("Validate the Filter Url Element(Negative)", function () {
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .last()
      .should("not.be.visible");
    cy.log(this.DataType2.Url + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Text Element(Negative)", function () {
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .last()
      .should("not.be.visible");
    cy.log(this.DataType2.Text + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Telephone Element(Negative)", function () {
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .last()
      .should("not.be.visible");
    cy.log(this.DataType2.Telephone + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter TextAera Element(Negative)", function () {
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .last()
      .should("not.be.visible");
    cy.log(this.DataType2.TextAera + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Slider, Currency, Measure and Number Element(Negative)", function () {
    //Validation for Filer Elements
    //For Slider ,Currency,Measure and Number
    cy.get(".kit-form__control-label").should("not.exist");
    cy.log(
      this.DataType2.Slider +
        " " +
        this.DataType2.Currency +
        " " +
        this.DataType2.Measure +
        " " +
        this.DataType2.Number +
        " not exist in DOM"
    );
  });

  it("Validate the Filter Email Element(Negative)", function () {
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .last()
      .should("not.be.visible");
    cy.log(this.DataType2.Email + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Address Element(Negative)", function () {
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .last()
      .should("not.be.visible");
    cy.log(this.DataType2.Address + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Time Element(Negative)", function () {
    //Validation for Filer Elements
    cy.get('[placeholder="Add Time"][type="text"]').should("not.be.visible");
    cy.log(this.DataType2.Time + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Date Element(Negative)", function () {
    //Validation for Filer Elements
    cy.get('[placeholder="Add Date"][type="text"]').should("not.be.visible");
    cy.log(this.DataType2.Date + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Toggle Element(Negative)", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.Toggle).should("not.exist");
    cy.log(this.DataType2.Toggle + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter SelectList Element(Negative)", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.SelectList).should("not.exist");
    cy.log(this.DataType2.SelectList + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter RadioSelect Element(Negative)", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.RadioSelect).should("not.exist");
    cy.log(this.DataType2.RadioSelec + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter CheckboxSelect Element(Negative)", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.CheckboxSelect).should("not.exist");
    cy.log(
      this.DataType2.CheckboxSelect + " Data Element not exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter Stepper Element(Negative)", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.Stepper).should("not.exist");
    cy.log(this.DataType2.Stepper + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter UserSelector Element(Negative)", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.UserSelector).scrollIntoView({ force: true });
    cy.contains(this.DataType2.UserSelector).should("not.exist");
    cy.log(this.DataType2.UserSelector + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter ContactSelector Element(Negative)", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.ContactSelector).should("not.exist");
    cy.log(
      this.DataType2.ContactSelector + " Data Element not exist in Filters"
    );
    cy.wait(2000);
  });

  it("Validate the Filter Assigning Element(Negative)", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.Assigning).should("not.exist");
    cy.log(this.DataType2.Assigning + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Inspection Element(Negative)", function () {
    //Validation for Filer Elements

    cy.get("[name" + "=" + this.DataType2.Inspection + "]")
      .first()
      .scrollIntoView({ force: true });

    cy.get("[name" + "=" + this.DataType2.Inspection + "]")
      .first()
      .should("not.exist");
    //cy.contains(this.DataType2.Inspection).last().should("exist");
    cy.log(this.DataType2.Inspection + " Data Element not exist in Filters");
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

  it("Default filter Modified By", function () {
    cy.get('[placeholder="Modified By"][type="text"]').scrollIntoView({
      force: true,
    });
    cy.get('[placeholder="Modified By"][type="text"]').should("exist");
    cy.log("Modified By Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it("Default filter Modified On", function () {
    cy.get('[placeholder="Modified On"][type="text"]').should("exist");
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
