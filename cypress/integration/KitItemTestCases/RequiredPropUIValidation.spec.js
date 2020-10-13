import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitTypePage from "../PageObject/KitTypePage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Elements Is Required Property Validation On UI", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    lp.visitServiceBuild();

    //Handling Alert
    cy.on("window:confirm", () => {
      cy.log("Alert has been Handled");
    });

    //Login Assertions
    cy.get(".page-main-title").should("be.visible");
    //Enter credentials
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.log("User has been Logged In into the application");

    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.wait(10000);
  });

  this.beforeEach("Fixtures file data", function () {
    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

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

  it("Navigating to UI for KitType New Form for Is Required Property Validation", function () {
    //cy.wait(5000)
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    //cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    //debugger;
    //Click on To open Kit Type
    KTP.SearchKitType(this.RRProp.IsRequiredKitName);
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

  it("URL Required Property Validation on UI", function () {
    cy.wait(1000);
    //Url
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .last()
      .should("have.attr", "required");

    cy.log(this.DataType2.Url + " Required Property Validated on UI");
  });

  it("Text Required Property Validation on UI", function () {
    cy.wait(1000);
    //Text
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .last()
      .should("have.attr", "required");

    cy.log(this.DataType2.Text + " Required Property Validated on UI");
  });

  it("File Required Property Validation on UI", function () {
    cy.wait(1000);
    //File
    cy.get("[name" + "=" + this.DataType2.File + "]").should(
      "have.attr",
      "required"
    );
    cy.log(this.DataType2.File + " Required Property Validated on UI");
  });

  it("Telephone Required Property Validation on UI", function () {
    cy.wait(1000);
    //Telephone
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .last()
      .should("have.attr", "required");

    cy.log(this.DataType2.Telephone + " Required Property Validated on UI");
  });

  it("TextAera Required Property Validation on UI", function () {
    cy.wait(1000);
    //TextAera
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .last()
      .should("have.attr", "required");

    cy.log(this.DataType2.TextAera + " Required Property Validated on UI");
  });

  it("Slider Required Property Validation on UI", function () {
    cy.wait(1000);
    //Slider
    cy.get("[name" + "=" + this.DataType2.Slider + "]").should(
      "have.attr",
      "required"
    );

    cy.log(this.DataType2.Slider + " Required Property Validated on UI");
  });

  it("Currency Required Property Validation on UI", function () {
    cy.wait(1000);
    //Currency

    cy.get("[name" + "=" + this.DataType2.Currency + "]").should(
      "have.attr",
      "required"
    );
    cy.log(this.DataType2.Currency + " Required Property Validated on UI");
  });

  it("Measure Required Property Validation on UI", function () {
    cy.wait(1000);
    //Measure
    cy.get("[name" + "=" + this.DataType2.Measure + "]").should(
      "have.attr",
      "required"
    );
    cy.log(this.DataType2.Measure + " Required Property Validated on UI");
  });

  it("Email Required Property Validation on UI", function () {
    cy.wait(1000);
    //Email
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .last()
      .should("have.attr", "required");

    cy.log(this.DataType2.Email + " Required Property Validated on UI");
  });

  it("Address Required Property Validation on UI", function () {
    cy.wait(1000);
    //Address
    cy.get(
      '[placeholder="Street address, bulding, company ... "][name="Address"]'
    ).should("have.attr", "required");

    //City
    cy.get('[placeholder="City"]').should("have.attr", "required");

    //Zip/Postal Code
    cy.get('[placeholder="Zip/Postal Code"]').should("have.attr", "required");

    cy.log(this.DataType2.Address + " Required Property Validated on UI");
  });

  it("Number Required Property Validation on UI", function () {
    cy.wait(1000);
    //Number
    cy.get("[name" + "=" + this.DataType2.Number + "]")
      .last()
      .should("have.attr", "required");

    cy.log(this.DataType2.Number + " Required Property Validated on UI");
  });

  it("Time Required Property Validation on UI", function () {
    cy.wait(1000);
    //Time
    cy.get('[placeholder="Add Time"][type="text"]').should(
      "have.attr",
      "required"
    );

    cy.log(this.DataType2.Time + " Required Property Validated on UI");
  });

  it("Date Required Property Validation on UI", function () {
    cy.wait(1000);
    //Date
    cy.get('[placeholder="Add Date"][type="text"]').should(
      "have.attr",
      "required"
    );

    cy.log(this.DataType2.Date + " Required Property Validated on UI");
  });

  it("Toggle Required Property Validation on UI", function () {
    cy.wait(1000);
    //Toggle

    cy.get("[name" + "=" + this.DataType2.Toggle + "]").should(
      "have.attr",
      "required"
    );
    cy.log(this.DataType2.Toggle + " Required Property Validated on UI");
  });

  it("SelectList Required Property Validation on UI", function () {
    cy.wait(1000);
    //SelectList
    cy.get("[name" + "=" + this.DataType2.SelectListName + "]").should(
      "have.attr",
      "required"
    );
    cy.log(
      this.DataType2.SelectListName + " Required Property Validated on UI"
    );
  });

  it("RadioSelect Required Property Validation on UI", function () {
    cy.wait(1000);
    //RadioSelect
    cy.get("[name" + "=" + this.DataType2.RadioSelectName + "]").should(
      "have.attr",
      "required"
    );
    cy.log(
      this.DataType2.RadioSelectName + " Required Property Validated on UI"
    );
  });

  it("CheckboxSelect Required Property Validation on UI", function () {
    cy.wait(1000);
    //CheckboxSelect

    cy.get("[name" + "=" + this.DataType2.CheckboxSelectName + "]").should(
      "have.attr",
      "required"
    );
    cy.log(
      this.DataType2.CheckboxSelectName + " Required Property Validated on UI"
    );
  });

  it("UserSelector Required Property Validation on UI", function () {
    cy.wait(1000);
    //UserSelector
    cy.get('[pickername="Users"]').should("have.attr", "required");
    cy.log(this.DataType2.UserSelector + " Required Property Validated on UI");
  });

  it("ContactSelector Required Property Validation on UI", function () {
    cy.wait(1000);
    //ContactSelector
    cy.get("[name" + "=" + this.DataType2.ContactSelector + "]").should(
      "have.attr",
      "required"
    );
    cy.log(
      this.DataType2.ContactSelector + " Required Property Validated on UI"
    );
  });

  it("Assigning Required Property Validation on UI", function () {
    cy.wait(1000);
    //Assigning
    cy.get('[[slot="activator"]]').should("have.attr", "required");

    // cy.get("[name" + "=" + this.DataType2.Assigning + "]").should(
    //   "have.attr",
    //   "required"
    // );
    cy.log(this.DataType2.Assigning + " Required Property Validated on UI");
  });

  it("Icon Required Property Validation on UI", function () {
    cy.wait(1000);
    //Icon
    cy.get('[aria-readonly="true"][readonly="readonly"][type="text"]')
      .eq(4)
      .should("have.attr", "required");
    cy.log(this.DataType2.Icon + " Required Property Validated on UI");
  });

  it("Stepper Required Property Validation on UI", function () {
    cy.wait(1000);
    //Stepper
    cy.get("[name" + "=" + this.DataType2.StepperName + "]").should(
      "have.attr",
      "required"
    );
    cy.log(this.DataType2.StepperName + " Required Property Validated on UI");
  });

  it("Inspection Required Property Validation on UI", function () {
    cy.wait(1000);
    //Inspection
    cy.get('[placeholder="Please Choose"]').should("have.attr", "required");
    cy.log(
      this.DataType2.InspectionName + " Required Property Validated on UI"
    );
  });

  it("Element Is Required Validation by saving kitItem", function () {
    cy.wait(2000);
    cy.get(
      "div.navi-bar-dropdown.fill-height.align-center.overflow-max-width.col-md-9.col-lg-8.col-10 > div > div > div.v-input__slot > div.v-select__slot > div.v-select__selections > button"
    ).click({ force: true });
    cy.contains("Form is invalid ").should("be.visible");
    cy.log("Kit item cannt be save.Element is required to fill");
  });
});
