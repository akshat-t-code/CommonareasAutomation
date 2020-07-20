import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";

describe("Validate TableList's Results Element for Created Kit Type on UI", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    lp.visit();
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

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (KitName) {
      this.KitName = KitName;
    });
  });

  it.only("Open Created Kit type As List View", function () {
    //Page Object
    const lp = new LoginPage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    cy.wait(10000);
    //Click on Hamburger Icon
    lp.HMBIcon();
    cy.contains(this.KitName.KitName).scrollIntoView({ force: true });
    cy.wait(5000);
    cy.contains(this.KitName.KitName).click({ force: true });
    cy.wait(10000);
  });

  it.only("Validate table View Result URL Elements", function () {
    cy.wait(3000);
    cy.contains(this.KitData.Url + ":" + " " + this.KitItemData.Url).should(
      "be.visible"
    );
    cy.log(this.KitData.Url + "has been Validate for kitItem Results Elements");
    cy.wait(2000);
  });

  it("Validate table View Result Text Elements", function () {
    cy.contains(this.KitData.Text + ":" + " " + this.KitItemData.Text).should(
      "be.visible"
    );
    cy.log(
      this.KitData.Text + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it.only("Validate table View Result Telephone Elements", function () {
    cy.contains(
      this.KitData.Telephone + ":" + " " + this.KitItemData.Telphone
    ).should("be.visible");
    cy.log(
      this.KitData.Telephone + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result TextAera Elements", function () {
    cy.contains(
      this.KitData.TextAera + ":" + " " + this.KitItemData.TextAera
    ).should("be.visible");
    cy.log(
      this.KitData.Text + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Currency Elements", function () {
    cy.contains(
      this.KitData.Currency + ":" + " " + this.KitItemData.Currency
    ).should("be.visible");
    cy.log(
      this.KitData.Currency + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Measure Elements", function () {
    cy.contains(
      this.KitData.Measure + ":" + " " + this.KitItemData.Measure
    ).should("be.visible");
    cy.log(
      this.KitData.Measure + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Email Elements", function () {
    cy.contains(this.KitData.Email + ":" + " " + this.KitItemData.Email).should(
      "be.visible"
    );

    cy.log(
      this.KitData.Email + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it.only("Validate table View Result Address Elements", function () {


    cy.contains(
      this.KitData.Address +
        ":" +
        " " +
        this.KitItemData.Addressline1 +
        "," +
        " " +
        this.KitItemData.Addressline2 +
        "," +
        " " +
        this.KitItemData.City +
        "," +
        " " +
        this.KitItemData.State +
        "," +
        " " +
        this.KitItemData.ZipCode +
        "," +
        " " +
        this.KitItemData.Country
    ).should("exist");

    cy.log(
      this.KitData.Address + " has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Number Elements", function () {
    cy.contains(
      this.KitData.Number + ":" + " " + this.KitItemData.Number
    ).should("be.visible");
    cy.log(
      this.KitData.Number + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result SelectList Elements", function () {
    cy.contains(
      this.KitData.SelectList + ":" + " " + this.KitItemData.SelectListValue
    ).should("be.visible");
    cy.log(
      this.KitData.SelectList + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result RadioSelect Elements", function () {
    cy.contains(
      this.KitData.RadioSelect + ":" + " " + this.KitItemData.RadioSelect
    ).should("be.visible");
    cy.log(
      this.KitData.RadioSelect +
        "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result CheckboxSelect Elements", function () {
    //coz checkbox can have multiple values so modify accordingly

    cy.contains(
      this.KitData.CheckboxSelect +
        ":" +
        " " +
        this.KitItemData.CheckboxSelectValue2
    ).should("be.visible");
    cy.log(
      this.KitData.CheckboxSelect +
        "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result UserSelector Elements", function () {
    cy.contains(
      this.KitData.UserSelector + ":" + " " + this.KitItemData.UserSelectorName
    ).should("be.visible");
    cy.log(
      this.KitData.UserSelector +
        "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result ContactSelector Elements", function () {
    cy.contains(
      this.KitData.ContactSelector +
        ":" +
        " " +
        this.KitItemData.ContactSelectorName
    ).should("be.visible");
    cy.log(
      this.KitData.ContactSelector +
        "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  
  it("Validate table View Result Inspection Elements", function () {
    cy.contains(
      this.KitData.Inspection + ":" + " " + this.KitItemData.InspectionValue
    ).should("be.visible");
    cy.log(
      this.KitData.Inspection + "has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Stepper Elements", function () {
    cy.contains(
      this.KitData.Stepper + ":" + " " + this.KitItemData.StepperValue
    ).should("be.visible");
    cy.log(
      this.KitData.Stepper + " has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Assigning Elements", function () {
    cy.contains(
      this.KitData.Assigning + ":" + " " + this.KitItemData.AssigningName
    ).should("be.visible");
    cy.log(
      this.KitData.Assigning + " has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Time Elements", function () {
    cy.contains(
      this.KitData.Time + ":" + " " + this.KitItemData.TimeValue
    ).should("be.visible");
    cy.log(
      this.KitData.Time + " has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Date Elements", function () {
    cy.contains(
      this.KitData.Date + ":" + " " + this.KitItemData.DateValue
    ).should("be.visible");
    cy.log(
      this.KitData.Date + " has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Toggle Elements", function () {
    cy.contains(
      this.KitData.Toggle + ":" + " " + this.KitItemData.ToggleStatus
    ).should("be.visible");
    cy.log(
      this.KitData.Toggle + " has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result File Elements", function () {
    cy.contains(
      this.KitData.File + ":" + " " + this.KitItemData.FileValue
    ).should("be.visible");
    cy.log(
      this.KitData.File + " has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Slider Elements", function () {
    cy.contains(
      this.KitData.Slider + ":" + " " + this.KitItemData.SliderValue
    ).should("be.visible");
    cy.log(
      this.KitData.Slider + " has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

  it("Validate table View Result Icon Elements", function () {
    cy.contains(this.KitData.Icon).should("be.visible");

    cy.contains(
      '"' +
        this.KitData.IconLabel +
        '"' +
        ":" +
        "" +
        '"' +
        this.KitItemData.IconLabel +
        '"'
    ).should("be.visible");

    cy.contains(
      '"' +
        this.KitData.IconSize +
        '"' +
        ":" +
        "" +
        '"' +
        this.KitItemData.IconSize +
        '"'
    ).should("be.visible");

    cy.contains(
      '"' +
        this.KitData.Icontitle +
        '"' +
        ":" +
        "" +
        '"' +
        this.KitItemData.IconTittle +
        '"'
    ).should("be.visible");

    cy.log(
      this.KitData.Icon + " has been Validate for kitItem Results Elements"
    );
    cy.wait(2000);
  });

});
