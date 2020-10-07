import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";

describe("Validate Timeline List's Results Element for Created Kit Type on Scheduler(UI)", function () {
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

  this.beforeEach("KitType Data", function () {
    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.fixture("KitTypeTestData/KitItemDataValues").then(function (KitDataEle) {
      this.KitItemData = KitDataEle;
    });

    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      datatypes
    ) {
      this.EleDataName = datatypes;
    });

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType2 = NewDataForElements;
    });

    cy.fixture("KitTypeTestData/NewKitItemDataValues").then(function (
      NewDataForElements
    ) {
      this.KitItemData = NewDataForElements;
    });

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType2 = NewDataForElements;
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
    cy.log("Edit View has been opened of created Kit type");
    cy.wait(3000);
    //Click on Scheduler Tab
    cy.contains("Scheduler").click({ force: true });
    cy.log("Scheduler tab Opened");
    cy.wait(2000);
  });

  it("Validate TableList View Result URL Element", function () {
    cy.wait(3000);
    cy.contains(this.DataType2.Url + ":" + " " + this.KitItemData.Url).should(
      "exist"
    );
    cy.log(
      this.DataType2.Url + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Text Element", function () {
    cy.contains(this.DataType2.Text + ":" + " " + this.KitItemData.Text).should(
      "exist"
    );
    cy.log(
      this.DataType2.Text + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result File Element", function () {
    cy.contains(
      this.DataType2.File +
        ":" +
        " " +
        this.KitItemData.TimelineListFileEleValue
    ).should("exist");
    cy.log(
      this.DataType2.File + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Telephone Element", function () {
    cy.contains(
      this.DataType2.Telephone + ":" + " " + this.KitItemData.Telephone
    ).should("exist");
    cy.log(
      this.DataType2.Telephone + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result TextAera Element", function () {
    cy.contains(
      this.DataType2.TextAera + ":" + " " + this.KitItemData.TextAera
    ).should("exist");
    cy.log(
      this.DataType2.Text + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Slider Element", function () {
    cy.contains(
      this.DataType2.Slider +
        ":" +
        " " +
        this.KitItemData.TimelineListSliderValue
    ).should("exist");
    cy.log(
      this.DataType2.Slider + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Currency Element", function () {
    cy.contains(
      this.DataType2.Currency + ":" + " " + this.KitItemData.Currency
    ).should("exist");
    cy.log(
      this.DataType2.Currency + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Measure Element", function () {
    cy.contains(
      this.DataType2.Measure + ":" + " " + this.KitItemData.Measure
    ).should("exist");
    cy.log(
      this.DataType2.Measure + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Email Element", function () {
    cy.contains(
      this.DataType2.Email + ":" + " " + this.KitItemData.Email
    ).should("exist");

    cy.log(
      this.DataType2.Email + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Address Element", function () {
    cy.contains(
      this.DataType2.Address +
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
      this.DataType2.Address + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Number Element", function () {
    cy.contains(
      this.DataType2.Number + ":" + " " + this.KitItemData.Number
    ).should("exist");
    cy.log(
      this.DataType2.Number + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Time Element", function () {
    cy.contains(
      this.DataType2.Time + ":" + " " + this.KitItemData.TimelineListTimeValue
    ).should("exist");
    cy.log(
      this.DataType2.Time + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Date Element", function () {
    cy.contains(
      this.DataType2.Date + ":" + " " + this.KitItemData.TimelineListDateValue
    ).should("exist");
    cy.log(
      this.DataType2.Date + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Toggle Element", function () {
    cy.contains(
      this.DataType2.Toggle +
        ":" +
        " " +
        this.KitItemData.TimelineListToggleStatus
    ).should("exist");
    cy.log(
      this.DataType2.Toggle + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result SelectList Element", function () {
    cy.contains(
      this.DataType2.SelectList + ":" + " " + this.KitItemData.SelectListValue
    ).should("exist");
    cy.log(
      this.DataType2.SelectList +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result RadioSelect Element", function () {
    cy.contains(
      this.DataType2.RadioSelect + ":" + " " + this.KitItemData.RadioSelectValue
    ).should("exist");
    cy.log(
      this.DataType2.RadioSelect +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result CheckboxSelect Element", function () {
    //coz checkbox can have multiple values so modify accordingly
    //and we can verify only first inserted value

    cy.contains(
      this.DataType2.CheckboxSelect +
        ":" +
        " " +
        this.KitItemData.CheckboxSelectValue3
    ).should("exist");
    // cy.contains(
    //   this.DataType2.CheckboxSelect +
    //     ":" +
    //     " " +
    //     this.KitItemData.CheckboxSelectValue1
    // ).should("exist");
    // cy.contains(
    //   this.DataType2.CheckboxSelect +
    //     ":" +
    //     " " +
    //     this.KitItemData.CheckboxSelectValue2
    // ).should("exist");
    cy.log(
      this.DataType2.CheckboxSelect +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Stepper Element", function () {
    cy.contains(
      this.DataType2.Stepper + ":" + " " + this.KitItemData.StepperValue
    ).should("exist");
    cy.log(
      this.DataType2.Stepper + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result UserSelector Element", function () {
    cy.contains(
      this.DataType2.UserSelector +
        ":" +
        " " +
        this.KitItemData.TimelineListUserSelector
    ).should("exist");
    cy.log(
      this.DataType2.UserSelector +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result ContactSelector Element", function () {
    cy.contains(
      this.DataType2.ContactSelector +
        ":" +
        " " +
        this.KitItemData.TimelineListContactSelector
    ).should("exist");
    cy.log(
      this.DataType2.ContactSelector +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Inspection Element", function () {
    cy.contains(
      this.DataType2.Inspection + ":" + " " + this.KitItemData.InspectionName
    ).should("exist");
    cy.log(
      this.DataType2.Inspection +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it.only("Validate TableList View Result Assigning Element", function () {
    cy.contains(
      this.DataType2.Assigning +
        ":" +
        " " +
        this.KitItemData.TimelineListAssigningName
    ).should("exist");
    cy.log(
      this.DataType2.Assigning + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it.only("Validate TableList View Result Icon Element", function () {
    cy.contains(this.KitItemData.IconLabel).first().should("be.visible");

    cy.log(
      this.DataType2.Icon + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });
});
