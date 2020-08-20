import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitTypePage from "../PageObject/KitTypePage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Validation On UI for Element's Read Property", function () {
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
    cy.fixture("KitBuilderValidationTestData/Read&RequiredValidation").then(
      function (Validationdata) {
        this.RRProp = Validationdata;
      }
    );

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
      KitTypeName
    ) {
      this.KitName = KitTypeName;
    });

    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (
      FormViewsNames
    ) {
      this.Data = FormViewsNames;
    });

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      datatypes
    ) {
      this.DataType2 = datatypes;
    });
  });

  it("Navigating to UI for KitType New Form for Read Property Validation", function () {
    //cy.wait(5000)
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    cy.wait(3000);
    //debugger;
    //Click on To open Kit Type
    KTP.SearchKitType(this.RRProp.ReadOnlyKitName2);
    cy.wait(3000);
    //Open Created Kit Type
    //KTP.SearchKitType(this.KitName.KitName3);
    //cy.wait(3000);
    //This is class to open searched kit type by clicking + iocn
    cy.get(".truncate-special").first().click({ force: true });
    //KTP.OpenKitType(this.RRProp.ReadOnlyKitName2);
    cy.wait(2000);
    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.log("New Item created and Kit Type has been Opened");
  });

  it("URL Read only Property Validation on UI", function () {
    cy.wait(1000);
    //Url
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .last()
      .should("have.attr", "readonly");

    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .last()
      .then(($el) => {
        expect($el.attr("readonly")).to.equal("readonly");
      });
    cy.log(this.DataType2.Url + " Read only Property Validated on UI");
  });

  it("Text Read only Property Validation on UI", function () {
    cy.wait(1000);
    //Text
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .last()
      .should("have.attr", "readonly");

    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .last()
      .then(($el) => {
        expect($el.attr("readonly")).to.equal("readonly");
      });
    cy.log(this.DataType2.Text + " Read only Property Validated on UI");
  });

  it("File Read only Property Validation on UI", function () {
    cy.wait(1000);
    //File
    cy.get("[name" + "=" + this.DataType2.File + "]").should(
      "have.attr",
      "readonly"
    );
    cy.log(this.DataType2.File + " Read only Property Validated on UI");
  });

  it("Telephone Read only Property Validation on UI", function () {
    cy.wait(1000);
    //Telephone
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .last()
      .should("have.attr", "readonly");

    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .last()
      .then(($el) => {
        expect($el.attr("readonly")).to.equal("readonly");
      });
    cy.log(this.DataType2.Telephone + " Read only Property Validated on UI");
  });

  it("TextAera Read only Property Validation on UI", function () {
    cy.wait(1000);
    //TextAera
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .last()
      .should("have.attr", "readonly");

    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .last()
      .then(($el) => {
        expect($el.attr("readonly")).to.equal("readonly");
      });
    cy.log(this.DataType2.TextAera + " Read only Property Validated on UI");
  });

  it("Slider Read only Property Validation on UI", function () {
    cy.wait(1000);
    //Slider
    cy.get("[name" + "=" + this.DataType2.Slider + "]").should(
      "have.attr",
      "readonly"
    );

    cy.get("[name" + "=" + this.DataType2.Slider + "]").then(($el) => {
      expect($el.attr("readonly")).to.equal("readonly");
    });
    cy.log(this.DataType2.Slider + " Read only Property Validated on UI");
  });

  it("Currency Read only Property Validation on UI", function () {
    cy.wait(1000);
    //Currency
    cy.get("[name" + "=" + this.DataType2.Currency + "]").should(
      "have.attr",
      "readonly"
    );
    cy.log(this.DataType2.Currency + " Read only Property Validated on UI");
  });

  it("Measure Read only Property Validation on UI", function () {
    cy.wait(1000);
    //Measure
    cy.get("[name" + "=" + this.DataType2.Measure + "]").should(
      "have.attr",
      "readonly"
    );
    cy.log(this.DataType2.Measure + " Read only Property Validated on UI");
  });

  it("Email Read only Property Validation on UI", function () {
    cy.wait(1000);
    //Email
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .last()
      .should("have.attr", "readonly");

    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .last()
      .then(($el) => {
        expect($el.attr("readonly")).to.equal("readonly");
      });
    cy.log(this.DataType2.Email + " Read only Property Validated on UI");
  });

  it("Address Read only Property Validation on UI", function () {
    cy.wait(1000);
    //Address
    cy.get(
      '[placeholder="Street address, bulding, company ... "][name="Address"]'
    ).should("have.attr", "readonly");

    //Address line 2.
    cy.get('[name="Address line 2."]').should("have.attr", "readonly");

    //City
    cy.get('[placeholder="City"]').should("have.attr", "readonly");

    //Zip/Postal Code
    cy.get('[placeholder="Zip/Postal Code"]').should("have.attr", "readonly");

    cy.log(this.DataType2.Address + " Read only Property Validated on UI");
  });

  it("Number Read only Property Validation on UI", function () {
    cy.wait(1000);
    //Number
    cy.get("[name" + "=" + this.DataType2.Number + "]")
      .last()
      .should("have.attr", "readonly");

    cy.get("[name" + "=" + this.DataType2.Number + "]")
      .last()
      .then(($el) => {
        expect($el.attr("readonly")).to.equal("readonly");
      });
    cy.log(this.DataType2.Number + " Read only Property Validated on UI");
  });

  it("Time Read only Property Validation on UI", function () {
    cy.wait(1000);
    //Time
    cy.get('[placeholder="Add Time"][type="text"]').should(
      "have.attr",
      "readonly"
    );

    cy.get('[placeholder="Add Time"][type="text"]').then(($el) => {
      expect($el.attr("readonly")).to.equal("readonly");
    });
    cy.log(this.DataType2.Time + " Read only Property Validated on UI");
  });

  it("Date Read only Property Validation on UI", function () {
    cy.wait(1000);
    //Date
    cy.get('[placeholder="Add Date"][type="text"]').should(
      "have.attr",
      "readonly"
    );

    cy.get('[placeholder="Add Date"][type="text"]').then(($el) => {
      expect($el.attr("readonly")).to.equal("readonly");
    });
    cy.log(this.DataType2.Date + " Read only Property Validated on UI");
  });

  it("Toggle Read only Property Validation on UI", function () {
    cy.wait(1000);
    //Toggle
    cy.get("[name" + "=" + this.DataType2.Toggle + "]").should(
      "have.attr",
      "readonly"
    );
    cy.log(this.DataType2.Toggle + " Read only Property Validated on UI");
  });

  it("SelectList Read only Property Validation on UI", function () {
    cy.wait(1000);
    //SelectList
    cy.get("[name" + "=" + this.DataType2.SelectListName + "]").should(
      "have.attr",
      "readonly"
    );
    cy.log(
      this.DataType2.SelectListName + " Read only Property Validated on UI"
    );
  });

  it("RadioSelect Read only Property Validation on UI", function () {
    cy.wait(1000);
    //RadioSelect
    cy.get("[name" + "=" + this.DataType2.RadioSelectName + "]").should(
      "have.attr",
      "readonly"
    );
    cy.log(
      this.DataType2.RadioSelectName + " Read only Property Validated on UI"
    );
  });

  it("CheckboxSelect Read only Property Validation on UI", function () {
    cy.wait(1000);
    //CheckboxSelect

    cy.get("[name" + "=" + this.DataType2.CheckboxSelectName + "]").should(
      "have.attr",
      "readonly"
    );
    cy.log(
      this.DataType2.CheckboxSelectName + " Read only Property Validated on UI"
    );
  });

  it("UserSelector Read only Property Validation on UI", function () {
    cy.wait(1000);
    //UserSelector
    cy.get('[pickername="Users"]').should("have.attr", "readonly");
    cy.log(this.DataType2.UserSelector + " Read only Property Validated on UI");
  });

  it("ContactSelector Read only Property Validation on UI", function () {
    cy.wait(1000);
    //ContactSelector
    cy.get("[name" + "=" + this.DataType2.ContactSelector + "]").should(
      "have.attr",
      "readonly"
    );
    cy.log(
      this.DataType2.ContactSelector + " Read only Property Validated on UI"
    );
  });

  it("Assigning Read only Property Validation on UI", function () {
    cy.wait(1000);
    //Assigning
    cy.get("[name" + "=" + this.DataType2.Assigning + "]").should(
      "have.attr",
      "readonly"
    );
    cy.log(this.DataType2.Assigning + " Read only Property Validated on UI");
  });

  it("Icon Read only Property Validation on UI", function () {
    cy.wait(1000);
    //Icon
    cy.get('[placeholder="Label"]').should("have.attr", "readonly");
    cy.log(this.DataType2.Icon + " Read only Property Validated on UI");
  });

  it("Stepper Read only Property Validation on UI", function () {
    cy.wait(1000);
    //Stepper
    cy.get("[name" + "=" + this.DataType2.StepperName + "]").should(
      "have.attr",
      "readonly"
    );
    cy.log(this.DataType2.StepperName + " Read only Property Validated on UI");
  });

  it("Inspection Read only Property Validation on UI", function () {
    cy.wait(1000);
    //Inspection
    cy.get('[placeholder="Please Choose"]').should("have.attr", "readonly");
    cy.log(
      this.DataType2.InspectionName + " Read only Property Validated on UI"
    );
  });
});
