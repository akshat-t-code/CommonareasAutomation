import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";

describe("Validate Timeline List's Results Element for Created Kit Type on Scheduler(UI)", function () {
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
      datatypes
    ) {
      this.EleDataName = datatypes;
    });

    cy.fixture(
      "KitBuilderValidationTestData/TimelineListFilterValidation"
    ).then(function (KitName) {
      this.KitName = KitName;
    });
  });

  it.only("Open Created Kit type form left Panel", function () {
    //Page Object
    const lp = new LoginPage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    cy.wait(10000);
    //Click on Hamburger Icon
    lp.HMBIcon();
    cy.contains(this.KitName.TimelineListResultsEleValidation).scrollIntoView({
      force: true,
    });
    cy.wait(5000);
    //Open KitType from left paneal
    cy.contains(this.KitName.TimelineListResultsEleValidation).click({
      force: true,
    });
    cy.wait(5000);
  });

  it.only("Open Scheduler Tab in Edit View to Validate TimelineList View Result Elements", function () {
    //Click on First kit item of kit type to open edit view
    cy.get(
      "#action_items_list > div.fill-height.col > div > div > div.left-panel-top-panel-menu > div:nth-child(3) > div:nth-child(1) > div > div.d-flex.kit-item-list.list-item-col-right.col.row-list-item-details"
    ).click({ force: true });
    cy.wait(3000);
    //Click on Scheduler Tab
    cy.contains("Scheduler").click({ force: true });
    cy.wait(2000);
  });

  it("Validate TimelineList View Result URL Element", function () {
    cy.wait(3000);
    cy.contains(this.EleDataName.Url + ":" + " " + this.KitItemData.Url).should(
      "exist"
    );
    cy.log(
      this.EleDataName.Url + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result Text Elements", function () {
    cy.contains(
      this.EleDataName.Text + ":" + " " + this.KitItemData.Text
    ).should("exist");
    cy.log(
      this.EleDataName.Text + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result File Element", function () {
    cy.contains(
      this.EleDataName.File +
        ":" +
        " " +
        this.KitItemData.TimelineListFileEleValue
    ).should("exist");
    cy.log(
      this.EleDataName.File + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result Telephone Element", function () {
    cy.contains(
      this.EleDataName.Telephone + ":" + " " + this.KitItemData.Telphone
    ).should("exist");
    cy.log(
      this.EleDataName.Telephone +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result TextAera Element", function () {
    cy.contains(
      this.EleDataName.TextAera + ":" + " " + this.KitItemData.TextAera
    ).should("exist");
    cy.log(
      this.EleDataName.TextAera +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result Slider Element", function () {
    cy.contains(
      this.EleDataName.Slider +
        ":" +
        " " +
        this.KitItemData.TimelineListSliderValue
    ).should("exist");
    cy.log(
      this.EleDataName.Slider + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result Currency Element", function () {
    cy.contains(
      this.EleDataName.Currency + ":" + " " + this.KitItemData.Currency
    ).should("exist");
    cy.log(
      this.EleDataName.Currency +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result Measure Element", function () {
    cy.contains(
      this.EleDataName.Measure + ":" + " " + this.KitItemData.Measure
    ).should("exist");
    cy.log(
      this.EleDataName.Measure + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result Email Element", function () {
    cy.contains(
      this.EleDataName.Email + ":" + " " + this.KitItemData.Email
    ).should("exist");

    cy.log(
      this.EleDataName.Email + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result Address Element", function () {
    cy.contains(
      this.EleDataName.Address +
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
      this.EleDataName.Address + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result Number Element", function () {
    cy.contains(
      this.EleDataName.Number + ":" + " " + this.KitItemData.Number
    ).should("exist");
    cy.log(
      this.EleDataName.Number + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result Time Element", function () {
    cy.contains(
      this.EleDataName.Time + ":" + " " + this.KitItemData.TimelineListTimeValue
    ).should("exist");
    cy.log(
      this.EleDataName.Time + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result Date Element", function () {
    cy.contains(
      this.EleDataName.Date + ":" + " " + this.KitItemData.TimelineListDateValue
    ).should("exist");
    cy.log(
      this.EleDataName.Date + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result Toggle Element", function () {
    cy.contains(
      this.EleDataName.Toggle + ":" + " " + this.KitItemData.ToggleStatus
    ).should("exist");
    cy.log(
      this.EleDataName.Toggle + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result SelectList Element", function () {
    cy.contains(
      this.EleDataName.SelectList + ":" + " " + this.KitItemData.SelectListValue
    ).should("exist");
    cy.log(
      this.EleDataName.SelectList +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result RadioSelect Element", function () {
    cy.contains(
      this.EleDataName.RadioSelect + ":" + " " + this.KitItemData.RadioSelect
    ).should("exist");
    cy.log(
      this.EleDataName.RadioSelect +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result CheckboxSelect Element", function () {
    //coz checkbox can have multiple values so modify accordingly

    cy.contains(
      this.EleDataName.CheckboxSelect +
        ":" +
        " " +
        this.KitItemData.CheckboxSelectValue1
    ).should("exist");
    cy.log(
      this.EleDataName.CheckboxSelect +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result Stepper Element", function () {
    cy.contains(
      this.EleDataName.Stepper + ":" + " " + this.KitItemData.StepperValue
    ).should("exist");
    cy.log(
      this.EleDataName.Stepper + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result UserSelector Element", function () {
    //Add ',' after First Name of UserSelector
    // cy.contains(this.EleDataName.UserSelector + ":" + " Deanne, Howell").should(
    //   "exist"
    // );

    cy.contains(
      this.EleDataName.UserSelector +
        ":" +
        " " +
        this.KitItemData.TimelineListUserSelector
    ).should("exist");
    cy.log(
      this.EleDataName.UserSelector +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result ContactSelector Element", function () {
    // Add ',' after First Name of ContactSelector
    // cy.contains(
    //   this.EleDataName.ContactSelector + ":" + " Vivek, Mahajan"
    // ).should("exist");

    cy.contains(
      this.EleDataName.ContactSelector +
        ":" +
        " " +
        this.KitItemData.TimelineListContactSelector
    ).should("exist");
    cy.log(
      this.EleDataName.ContactSelector +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it.only("Validate TimelineList View Result Icon Element", function () {


    cy.contains("2 wheeled Trolly_solo").should("exist");

    cy.contains(this.KitItemData.TimelineListIconTittle +"_solo").should(
      "exist"
    );
    cy.log(this.KitItemData.TimelineListIconTittle + "_solo");

    cy.log(
      this.EleDataName.Icon + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result Inspection Element", function () {
    cy.contains(
      this.EleDataName.Inspection + ":" + " " + this.KitItemData.InspectionValue
    ).should("exist");
    cy.log(
      this.EleDataName.Inspection +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TimelineList View Result Assigning Element", function () {
    cy.contains(
      this.EleDataName.Assigning +
        ":" +
        " " +
        this.KitItemData.TimelineListAssigningName
    ).should("exist");
    cy.log(
      this.EleDataName.Assigning +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });
});
