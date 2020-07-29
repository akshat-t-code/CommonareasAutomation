import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitTypePage from "../PageObject/KitTypePage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";
import RandomString from "../PageObject/RandomString";

describe("Validation On UI for Element's Is Required Property", function () {
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

    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (
      FormViewsNames
    ) {
      this.Data = FormViewsNames;
    });

    cy.fixture("KitTypeTestData/KitItemDataValues").then(function (KitDataEle) {
      this.KitItemData = KitDataEle;
    });

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
      KitTypeName
    ) {
      this.data1 = KitTypeName;
    });
    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      datatypes
    ) {
      this.DataType = datatypes;
    });
  });

  it.only("Navigating to UI for KitType New Form for Is Required Property Validation", function () {
    //cy.wait(5000)
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    //debugger;
    //Click on To open Kit Type
    KTP.SearchKitType(this.RRProp.KitName);
    KTP.OpenKitType(this.RRProp.KitName);
    cy.wait(2000);
    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.log("New Item created and Kit Type has been Opened");
    cy.wait(5000)
  });

  it("URL Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //Url
    cy.get('[name="Url"]').last().should("have.attr", "readonly");

    cy.get('[name="Url"]')
      .last()
      .then(($el) => {
        expect($el.attr("readonly")).to.equal("readonly");
      });
    cy.log("URL Is Required Property Validated on UI");
  });

  it("Text Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //Text
    cy.get('[name="Text"]').last().should("have.attr", "readonly");

    cy.get('[name="Text"]')
      .last()
      .then(($el) => {
        expect($el.attr("readonly")).to.equal("readonly");
      });
    cy.log("Text Is Required Property Validated on UI");
  });

  it("File Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //File
    cy.get('[type="text"]').eq(3).should("have.attr", "readonly");

    cy.get('[type="text"]')
      .eq(3)
      .then(($el) => {
        expect($el.attr("readonly")).to.equal("readonly");
      });
    cy.log("File Is Required Property Validated on UI");
  });

  it("Telephone Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //Telephone
    cy.get('[name="Telephone"]').last().should("have.attr", "readonly");

    cy.get('[name="Telephone"]')
      .last()
      .then(($el) => {
        expect($el.attr("readonly")).to.equal("readonly");
      });
    cy.log("Telephone Is Required Property Validated on UI");
  });

  it("TextAera Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //TextAera
    cy.get('[name="TextAera"]').last().should("have.attr", "readonly");

    cy.get('[name="TextAera"]')
      .last()
      .then(($el) => {
        expect($el.attr("readonly")).to.equal("readonly");
      });
    cy.log("TextAera Is Required Property Validated on UI");
  });

  it.only("Currency Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //Currency
    cy.get('[type="text"]').eq(5).should("have.attr", "readonly");

    cy.get('[type="text"]')
      .eq(5)
      .then(($el) => {
        expect($el.attr("readonly")).to.equal("readonly");
      });
    cy.log("Currency Is Required Property Validated on UI");
  });

  it.only("Measure Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //Measure
    cy.get('[type="number"]').eq(3).should("have.attr", "readonly");

    cy.get('[type="number"]')
      .eq(3)
      .then(($el) => {
        expect($el.attr("readonly")).to.equal("readonly");
      });
    cy.log("Measure Is Required Property Validated on UI");
  });

  it("Email Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //Email
    cy.get('[name="Email"]').last().should("have.attr", "readonly");

    cy.get('[name="Email"]')
      .last()
      .then(($el) => {
        expect($el.attr("readonly")).to.equal("readonly");
      });
    cy.log("Email Is Required Property Validated on UI");
  });

  it("Address Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //Address
    cy.get(
      '[placeholder="Street address, bulding, company ... "][name="Address"]'
    ).should("have.attr", "readonly");

    cy.get(
      '[placeholder="Street address, bulding, company ... "][name="Address"]'
    ).then(($el) => {
      expect($el.attr("readonly")).to.equal("readonly");
    });
    cy.log("Address Is Required Property Validated on UI");
  });

  it("Number Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //Number
    cy.get('[name="Number"]').last().should("have.attr", "readonly");

    cy.get('[name="Number"]')
      .last()
      .then(($el) => {
        expect($el.attr("readonly")).to.equal("readonly");
      });
    cy.log("Number Is Required Property Validated on UI");
  });

  it("Time Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //Time
    cy.get('[placeholder="Add Time"][type="text"]').should(
      "have.attr",
      "readonly"
    );

    cy.get('[placeholder="Add Time"][type="text"]').then(($el) => {
      expect($el.attr("readonly")).to.equal("readonly");
    });
    cy.log("Time Is Required Property Validated on UI");
  });

  it("Date Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //Date
    cy.get('[placeholder="Add Date"][type="text"]').should(
      "have.attr",
      "readonly"
    );

    cy.get('[placeholder="Add Date"][type="text"]').then(($el) => {
      expect($el.attr("readonly")).to.equal("readonly");
    });
    cy.log("Date Is Required Property Validated on UI");
  });

  it("Toggle Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //Toggle
    //cy.get('[disabled="disabled"]').eq(3).should("have.attr", "disabled");

    cy.get('[name="Toggle"]').should("have.attr", "readonly");
    cy.log("Toggle Is Required Property Validated on UI");
  });

  it("SelectList Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //SelectList
    //cy.get('[disabled="disabled"]').eq(4).should("have.attr", "disabled");

    cy.get('[name="SelectList"]').should("have.attr", "readonly");
    cy.log("SelectList Is Required Property Validated on UI");
  });

  it("RadioSelect Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //RadioSelect
    cy.get('[name="RadioSelect"]').should("have.attr", "readonly");
    cy.log("RadioSelect Is Required Property Validated on UI");
  });

  it("CheckboxSelect Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //CheckboxSelect
    //cy.get('[disabled="disabled"]').eq(5).should("have.attr", "disabled");
    cy.get('[name="CheckboxSelect"]').should("have.attr", "readonly");
    cy.log("CheckboxSelect Is Required Property Validated on UI");
  });

  it.only("UserSelector Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //UserSelector
    cy.get('.v-select__selections').eq(5)
    .should("have.attr", "readonly");
    cy.log("UserSelector Is Required Property Validated on UI");
  });

  it.only("ContactSelector Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //ContactSelector
    cy.get('.v-select__selections').eq(6)
    .should("have.attr", "readonly");
    cy.log("ContactSelector Is Required Property Validated on UI");
  });
  it.only("Assigning Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //Assigning
    cy.get('.v-select__selections').eq(8)
    .should("have.attr", "readonly");
    cy.log("Assigning Is Required Property Validated on UI");
  });

  it("Icon Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //Icon
    cy.get('[placeholder="Label"]')
    .should("have.attr", "readonly");
    cy.log("Icon Is Required Property Validated on UI");
  });

  it("Stepper Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //Stepper
    cy.get('[name="Stepper"]')
    .should("have.attr", "readonly");
    cy.log("Stepper Is Required Property Validated on UI");
  });

  it.only("Inspection Is Required Property Validation on UI", function () {
    cy.wait(1000);
    //Inspection
    cy.get('.v-select__selections').eq(8)
    .should("have.attr", "readonly");
    cy.log("Inspection Is Required Property Validated on UI");
  });
 
});
