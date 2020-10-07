import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";

describe("Validate TableList's Results Element for Created Kit Type on UI", function () {
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

    // cy.fixture("KitTypeTestData/KitItemDataValues").then(function (KitDataEle) {
    //   this.KitItemData = KitDataEle;
    // });

    cy.fixture("KitTypeTestData/NewKitItemDataValues").then(function (
      KitDataEle
    ) {
      this.KitItemData = KitDataEle;
    });

    cy.fixture("KitBuilderValidationTestData/TableListFilterValidation").then(
      function (KitName) {
        this.KitName = KitName;
      }
    );

    // cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
    //   DataEleValues
    // ) {
    //   this.KitData = DataEleValues;
    // });

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.KitData = NewDataForElements;
    });
  });

  it.only("Open Created Kit type As List View for Validate TableList Result Elements", function () {
    //Page Object
    const lp = new LoginPage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    cy.wait(10000);
    //Click on Hamburger Icon
    lp.HMBIcon();
    cy.contains(this.KitName.TableListResultEleValidation2).scrollIntoView({
      force: true,
    });
    cy.wait(5000);
    //Open KitType from left paneal
    cy.contains(this.KitName.TableListResultEleValidation2).click({
      force: true,
    });
    cy.wait(10000);
  });

  it("Validate TableList View Result URL Element", function () {
    cy.wait(3000);
    cy.contains(this.KitData.Url + ":" + " " + this.KitItemData.Url).should(
      "exist"
    );
    cy.log(this.KitData.Url + " has been Validate for kitItem Result Element");
    cy.wait(2000);
  });

  it("Validate TableList View Result Text Element", function () {
    cy.contains(this.KitData.Text + ":" + " " + this.KitItemData.Text).should(
      "exist"
    );
    cy.log(this.KitData.Text + " has been Validate for kitItem Result Element");
    cy.wait(2000);
  });

  it("Validate TableList View Result File Element", function () {
    cy.contains(
      this.KitData.File + ":" + " " + this.KitItemData.FileValue
    ).should("exist");
    cy.log(this.KitData.File + " has been Validate for kitItem Result Element");
    cy.wait(2000);
  });

  it("Validate TableList View Result Telephone Element", function () {
    cy.contains(
      this.KitData.Telephone + ":" + " " + this.KitItemData.Telephone
    ).should("exist");
    cy.log(
      this.KitData.Telephone + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result TextAera Element", function () {
    cy.contains(
      this.KitData.TextAera + ":" + " " + this.KitItemData.TextAera
    ).should("exist");
    cy.log(this.KitData.Text + " has been Validate for kitItem Result Element");
    cy.wait(2000);
  });

  it("Validate TableList View Result Slider Element", function () {
    cy.contains(
      this.KitData.Slider + ":" + " " + this.KitItemData.SliderValue
    ).should("exist");
    cy.log(
      this.KitData.Slider + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Currency Element", function () {
    cy.contains(
      this.KitData.Currency + ":" + " " + this.KitItemData.Currency
    ).should("exist");
    cy.log(
      this.KitData.Currency + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Measure Element", function () {
    cy.contains(
      this.KitData.Measure + ":" + " " + this.KitItemData.Measure
    ).should("exist");
    cy.log(
      this.KitData.Measure + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Email Element", function () {
    cy.contains(this.KitData.Email + ":" + " " + this.KitItemData.Email).should(
      "exist"
    );

    cy.log(
      this.KitData.Email + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Address Element", function () {
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
      this.KitData.Address + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Number Element", function () {
    cy.contains(
      this.KitData.Number + ":" + " " + this.KitItemData.Number
    ).should("exist");
    cy.log(
      this.KitData.Number + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Time Element", function () {
    cy.contains(
      this.KitData.Time + ":" + " " + this.KitItemData.TimeValue
    ).should("exist");
    cy.log(this.KitData.Time + " has been Validate for kitItem Result Element");
    cy.wait(2000);
  });

  it("Validate TableList View Result Date Element", function () {
    cy.contains(
      this.KitData.Date + ":" + " " + this.KitItemData.DateValue
    ).should("exist");
    cy.log(this.KitData.Date + " has been Validate for kitItem Result Element");
    cy.wait(2000);
  });

  it("Validate TableList View Result Toggle Element", function () {
    cy.contains(
      this.KitData.Toggle + ":" + " " + this.KitItemData.ToggleStatus
    ).should("exist");
    cy.log(
      this.KitData.Toggle + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result SelectList Element", function () {
    cy.contains(
      this.KitData.SelectList + ":" + " " + this.KitItemData.SelectListValue
    ).should("exist");
    cy.log(
      this.KitData.SelectList + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it.only("Validate TableList View Result RadioSelect Element", function () {
    cy.contains(
      this.KitData.RadioSelect + ":" + " " + this.KitItemData.RadioSelectValue
    ).should("exist");
    cy.log(
      this.KitData.RadioSelect + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it.only("Validate TableList View Result CheckboxSelect Element", function () {
    //coz checkbox can have multiple values so modify accordingly
    //and we can verify only first inserted value

    cy.contains(
      this.KitData.CheckboxSelect +
        ":" +
        " " +
        this.KitItemData.CheckboxSelectValue3
    ).should("exist");
    // cy.contains(
    //   this.KitData.CheckboxSelect +
    //     ":" +
    //     " " +
    //     this.KitItemData.CheckboxSelectValue1
    // ).should("exist");
    // cy.contains(
    //   this.KitData.CheckboxSelect +
    //     ":" +
    //     " " +
    //     this.KitItemData.CheckboxSelectValue2
    // ).should("exist");
    cy.log(
      this.KitData.CheckboxSelect +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Stepper Element", function () {
    cy.contains(
      this.KitData.Stepper + ":" + " " + this.KitItemData.StepperValue
    ).should("exist");
    cy.log(
      this.KitData.Stepper + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result UserSelector Element", function () {
    cy.contains(
      this.KitData.UserSelector + ":" + " " + this.KitItemData.UserSelectorName
    ).should("exist");
    cy.log(
      this.KitData.UserSelector +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result ContactSelector Element", function () {
    cy.contains(
      this.KitData.ContactSelector +
        ":" +
        " " +
        this.KitItemData.ContactSelectorName
    ).should("exist");
    cy.log(
      this.KitData.ContactSelector +
        " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it("Validate TableList View Result Icon Element", function () {
    cy.contains(this.KitItemData.IconLabel).first().should("be.visible");

    cy.log(this.KitData.Icon + " has been Validate for kitItem Result Element");
    cy.wait(2000);
  });

  it.only("Validate TableList View Result Inspection Element", function () {
    cy.contains(
      this.KitData.Inspection + ":" + " " + this.KitItemData.InspectionName
    ).should("exist");
    cy.log(
      this.KitData.Inspection + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });

  it.only("Validate TableList View Result Assigning Element", function () {
    cy.contains(
      this.KitData.Assigning + ":" + " " + this.KitItemData.AssigningName
    ).should("exist");
    cy.log(
      this.KitData.Assigning + " has been Validate for kitItem Result Element"
    );
    cy.wait(2000);
  });
});
