import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitTypePage from "../PageObject/KitTypePage";

describe("Negative Test Case for Validation On UI for Element's Read Property", function () {
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

  it("Navigating to UI for KitType New Form for ReadOnly Property(Negative) Validation", function () {
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

  it("URL Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Url
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .last()
      .should("not.have.attr", "readonly");

    cy.log(this.DataType2.Url + " has not ReadOnly Property");
  });

  it("Text Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Text
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .last()
      .should("not.have.attr", "readonly");

    cy.log(this.DataType2.Text + " has not ReadOnly Property");
  });

  it("File Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //File
    cy.get("[name" + "=" + this.DataType2.File + "]").should(
      "not.have.attr",
      "readonly"
    );
    cy.log(this.DataType2.File + " has not ReadOnly Property");
  });

  it("Telephone Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Telephone
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .last()
      .should("not.have.attr", "readonly");

    cy.log(this.DataType2.Telephone + " has not ReadOnly Property");
  });

  it("TextAera Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //TextAera
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .last()
      .should("not.have.attr", "readonly");

    cy.log(this.DataType2.TextAera + " has not ReadOnly Property");
  });

  it("Slider Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Slider
    cy.get("[name" + "=" + this.DataType2.Slider + "]").should(
      "not.have.attr",
      "readonly"
    );

    cy.log(this.DataType2.Slider + " has not ReadOnly Property");
  });

  it("Currency Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Currency
    cy.get("[name" + "=" + this.DataType2.Currency + "]").should(
      "not.have.attr",
      "readonly"
    );
    cy.log(this.DataType2.Currency + " has not ReadOnly Property");
  });

  it("Measure Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Measure
    cy.get("[name" + "=" + this.DataType2.Measure + "]").should(
      "not.have.attr",
      "readonly"
    );
    cy.log(this.DataType2.Measure + " has not ReadOnly Property");
  });

  it("Email Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Email
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .last()
      .should("not.have.attr", "readonly");

    cy.log(this.DataType2.Email + " has not ReadOnly Property");
  });

  it("Address Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Address
    cy.get(
      '[placeholder="Street address, bulding, company ... "][name="Address"]'
    ).should("not.have.attr", "readonly");

    //Address line 2.
    cy.get('[name="Address line 2."]').should("not.have.attr", "readonly");

    //City
    cy.get('[placeholder="City"]').should("not.have.attr", "readonly");

    //Zip/Postal Code
    cy.get('[placeholder="Zip/Postal Code"]').should(
      "not.have.attr",
      "readonly"
    );

    cy.log(this.DataType2.Address + " has not ReadOnly Property");
  });

  it("Number Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Number
    cy.get("[name" + "=" + this.DataType2.Number + "]")
      .last()
      .should("not.have.attr", "readonly");

    cy.log(this.DataType2.Number + " has not ReadOnly Property");
  });

  it("Time Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Time
    cy.get('[placeholder="Add Time"][type="text"]').should(
      "not.have.attr",
      "readonly"
    );

    cy.log(this.DataType2.Time + " has not ReadOnly Property");
  });

  it("Date Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Date
    cy.get('[placeholder="Add Date"][type="text"]').should(
      "not.have.attr",
      "readonly"
    );

    cy.log(this.DataType2.Date + " has not ReadOnly Property");
  });

  it("Toggle Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Toggle
    cy.get("[name" + "=" + this.DataType2.Toggle + "]").should(
      "not.have.attr",
      "readonly"
    );
    cy.log(this.DataType2.Toggle + " has not ReadOnly Property");
  });

  it("SelectList Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //SelectList
    cy.get("[name" + "=" + this.DataType2.SelectListName + "]").should(
      "not.have.attr",
      "readonly"
    );
    cy.log(this.DataType2.SelectListName + " has not ReadOnly Property");
  });

  it("RadioSelect Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //RadioSelect
    cy.get("[name" + "=" + this.DataType2.RadioSelectName + "]").should(
      "not.have.attr",
      "readonly"
    );
    cy.log(this.DataType2.RadioSelectName + " has not ReadOnly Property");
  });

  it("CheckboxSelect Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //CheckboxSelect

    cy.get("[name" + "=" + this.DataType2.CheckboxSelectName + "]").should(
      "not.have.attr",
      "readonly"
    );
    cy.log(this.DataType2.CheckboxSelectName + " has not ReadOnly Property");
  });

  it("UserSelector Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //UserSelector
    cy.get('[pickername="Users"]').should("not.have.attr", "readonly");
    cy.log(this.DataType2.UserSelector + " has not ReadOnly Property");
  });

  it("ContactSelector Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //ContactSelector
    cy.get("[name" + "=" + this.DataType2.ContactSelector + "]").should(
      "not.have.attr",
      "readonly"
    );
    cy.log(this.DataType2.ContactSelector + " has not ReadOnly Property");
  });

  it("Assigning Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Assigning
    cy.get("[name" + "=" + this.DataType2.Assigning + "]").should(
      "not.have.attr",
      "readonly"
    );
    cy.log(this.DataType2.Assigning + " has not ReadOnly Property");
  });

  it("Icon Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Icon
    cy.get('[placeholder="Label"]').should("not.have.attr", "readonly");
    cy.log(this.DataType2.Icon + " has not ReadOnly Property");
  });

  it("Stepper Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Stepper
    cy.get("[name" + "=" + this.DataType2.StepperName + "]").should(
      "not.have.attr",
      "readonly"
    );
    cy.log(this.DataType2.StepperName + " has not ReadOnly Property");
  });

  it("Inspection Read only Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Inspection
    cy.get('[placeholder="Please Choose"]').should("not.have.attr", "readonly");
    cy.log(this.DataType2.InspectionName + " has not ReadOnly Property");
  });
});
