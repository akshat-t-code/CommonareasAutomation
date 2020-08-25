import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitTypePage from "../PageObject/KitTypePage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Negative Test Case for Elements Is Required Property Validation On UI", function () {
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

    cy.fixture("KitTypeTestData/NewKitItemDataValues").then(function (
      KitDataEle
    ) {
      this.NewKitItemData = KitDataEle;
    });

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
      KitTypeName
    ) {
      this.KitName = KitTypeName;
    });
    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      datatypes
    ) {
      this.DataType2 = datatypes;
    });
  });

  it("Navigating to UI for KitType New Form for Is Required Property(Negative) Validation", function () {
    //cy.wait(5000)
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    //cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    //debugger;
    //Click on To open Kit Type
    KTP.SearchKitType(this.RRProp.IsRequiredKitName2);
    cy.wait(3000);
    //Open Created Kit Type
    //KTP.SearchKitType(this.KitName.KitName3);
    //cy.wait(3000);
    //This is class to open searched kit type by clicking + iocn
    cy.get(".truncate-special").first().click({ force: true });
    //KTP.OpenKitType(this.RRProp.IsRequiredKitName);
    cy.wait(2000);
    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.log("New Item created and Kit Type has been Opened");
    cy.wait(5000);
  });

  it("URL Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Url
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .last()
      .should("not.have.attr", "required");

    cy.log(this.DataType2.Url + " has not IsRequired Property");
  });

  it("Text Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Text
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .last()
      .should("not.have.attr", "required");

    cy.log(this.DataType2.Text + " has not IsRequired Property");
  });

  it("File Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //File
    cy.get("[name" + "=" + this.DataType2.File + "]").should(
      "not.have.attr",
      "required"
    );
    cy.log(this.DataType2.File + " has not IsRequired Property");
  });

  it("Telephone Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Telephone
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .last()
      .should("not.have.attr", "required");

    cy.log(this.DataType2.Telephone + " has not IsRequired Property");
  });

  it("TextAera Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //TextAera
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .last()
      .should("not.have.attr", "required");

    cy.log(this.DataType2.TextAera + " has not IsRequired Property");
  });

  it("Slider Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Slider
    cy.get("[name" + "=" + this.DataType2.Slider + "]").should(
      "not.have.attr",
      "required"
    );

    cy.log(this.DataType2.Slider + " has not IsRequired Property");
  });

  it("Currency Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Currency

    cy.get("[name" + "=" + this.DataType2.Currency + "]").should(
      "not.have.attr",
      "required"
    );
    cy.log(this.DataType2.Currency + " has not IsRequired Property");
  });

  it("Measure Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Measure
    cy.get("[name" + "=" + this.DataType2.Measure + "]").should(
      "not.have.attr",
      "required"
    );
    cy.log(this.DataType2.Measure + " has not IsRequired Property");
  });

  it("Email Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Email
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .last()
      .should("not.have.attr", "required");

    cy.log(this.DataType2.Email + " has not IsRequired Property");
  });

  it("Address Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Address
    cy.get(
      '[placeholder="Street address, bulding, company ... "][name="Address"]'
    ).should("not.have.attr", "required");

    //City
    cy.get('[placeholder="City"]').should("not.have.attr", "required");

    //Zip/Postal Code
    cy.get('[placeholder="Zip/Postal Code"]').should(
      "not.have.attr",
      "required"
    );

    cy.log(this.DataType2.Address + " has not IsRequired Property");
  });

  it("Number Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Number
    cy.get("[name" + "=" + this.DataType2.Number + "]")
      .last()
      .should("not.have.attr", "required");

    cy.log(this.DataType2.Number + " has not IsRequired Property");
  });

  it("Time Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Time
    cy.get('[placeholder="Add Time"][type="text"]').should(
      "not.have.attr",
      "required"
    );

    cy.log(this.DataType2.Time + " has not IsRequired Property");
  });

  it("Date Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Date
    cy.get('[placeholder="Add Date"][type="text"]').should(
      "not.have.attr",
      "required"
    );

    cy.log(this.DataType2.Date + " has not IsRequired Property");
  });

  it("Toggle Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Toggle

    cy.get("[name" + "=" + this.DataType2.Toggle + "]").should(
      "not.have.attr",
      "required"
    );
    cy.log(this.DataType2.Toggle + " has not IsRequired Property");
  });

  it("SelectList Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //SelectList
    cy.get("[name" + "=" + this.DataType2.SelectListName + "]").should(
      "not.have.attr",
      "required"
    );
    cy.log(this.DataType2.SelectListName + " has not IsRequired Property");
  });

  it("RadioSelect Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //RadioSelect
    cy.get("[name" + "=" + this.DataType2.RadioSelectName + "]").should(
      "not.have.attr",
      "required"
    );
    cy.log(this.DataType2.RadioSelectName + " has not IsRequired Property");
  });

  it("CheckboxSelect Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //CheckboxSelect

    cy.get("[name" + "=" + this.DataType2.CheckboxSelectName + "]").should(
      "not.have.attr",
      "required"
    );
    cy.log(this.DataType2.CheckboxSelectName + " has not IsRequired Property");
  });

  it("UserSelector Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //UserSelector
    cy.get('[pickername="Users"]').should("not.have.attr", "required");
    cy.log(this.DataType2.UserSelector + " has not IsRequired Property");
  });

  it("ContactSelector Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //ContactSelector
    cy.get("[name" + "=" + this.DataType2.ContactSelector + "]").should(
      "not.have.attr",
      "required"
    );
    cy.log(this.DataType2.ContactSelector + " has not IsRequired Property");
  });

  it("Assigning Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Assigning
    cy.get("[name" + "=" + this.DataType2.Assigning + "]").should(
      "not.have.attr",
      "required"
    );
    cy.log(this.DataType2.Assigning + " has not IsRequired Property");
  });

  it("Icon Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Icon
    cy.get('[aria-readonly="true"][readonly="readonly"][type="text"]')
      .eq(4)
      .should("not.have.attr", "required");
    cy.log(this.DataType2.Icon + " has not IsRequired Property");
  });

  it("Stepper Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Stepper
    cy.get("[name" + "=" + this.DataType2.StepperName + "]").should(
      "not.have.attr",
      "required"
    );
    cy.log(this.DataType2.StepperName + " has not IsRequired Property");
  });

  it("Inspection Required Property(Negative) Validation on UI", function () {
    cy.wait(1000);
    //Inspection
    cy.get('[placeholder="Please Choose"]').should("not.have.attr", "required");
    cy.log(this.DataType2.InspectionName + " has not IsRequired Property");
  });

  it("Element Is Required Validation(Negative) by saving kitItem", function () {
    cy.wait(2000);
    cy.get(
      "div.navi-bar-dropdown.fill-height.align-center.overflow-max-width.col-md-9.col-lg-8.col-10 > div > div > div.v-input__slot > div.v-select__slot > div.v-select__selections > button"
    ).click({ force: true });
    cy.contains("Form is invalid ").should("not.be.visible");
    cy.log("Kit item should  be saved");
  });
});
