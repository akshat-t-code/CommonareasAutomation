import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitTypePage from "../PageObject/KitTypePage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";
import RandomString from "../PageObject/RandomString";

describe("KitBuilder's Element Is Required Property Validation", function () {
  this.beforeAll(function () {
    //Page Object
    const lp = new LoginPage();
    // cy.visit("http://serviceproviders.ca-build.com/Public/Login?ReturnUrl=%2F");
    lp.visitServiceBuild();
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.wait(10000);
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

  it.only("Navigating to Created KitType New Form", function () {
    const kb = new KitBuilderPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    kb.KitBuilderUrl();
    cy.wait(3000);
    //Open Craeted Kit Type
    cy.contains(this.RRProp.KitName).click({ force: true });
    cy.wait(3000);
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains(this.Data.NewView).click({ force: true });
    cy.wait(5000);
  });

  it("Url Data Type Is Required Prop Validation", function () {
    //Click on Url
    cy.getIframeBody().find('[placeholder="Url"]').click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for Url(Assertion Passed)");
    cy.wait(2000);
  });

  it("Text Data Type Is Required Prop Validation", function () {
    //Click on  Text
    cy.getIframeBody().find('[placeholder="Text"]').click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for Text(Assertion Passed)");
    cy.wait(2000);
  });

  it("File Data Type Is Required Prop Validation", function () {
    //Click on File
    cy.getIframeBody()
      .find('[placeholder="Tooltip for File"]')
      .click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for File(Assertion Passed)");
    cy.wait(2000);
  });

  it("Telephone Data Type Is Required Prop Validation", function () {
    //Click on Telephone
    cy.getIframeBody().find('[placeholder="Telephone"]').click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for Telephone(Assertion Passed)");
    cy.wait(2000);
  });

  it("TextAera Data Type Is Required Prop Validation", function () {
    //Click on TextAera
    cy.getIframeBody().contains(this.DataType.TextAera).click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for TextAera(Assertion Passed)");
    cy.wait(2000);
  });

  it("Slider Data Type Is Required Prop Validation", function () {
    //Click on Slider
    cy.getIframeBody().contains("Slider").click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for Slider(Assertion Passed)");
    cy.wait(2000);
  });

  it("Currency Data Type Is Required Prop Validation", function () {
    //Click on Currency
    cy.getIframeBody().find('[placeholder="Currency"]').click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for Currency(Assertion Passed)");
    cy.wait(2000);
  });

  it("Measure Data Type Is Required Prop Validation", function () {
    //Click on Measure
    cy.getIframeBody().find('[placeholder="Measure"]').click({ force: true });
    cy.wait(3000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for Measure(Assertion Passed)");
    cy.wait(2000);
  });

  it("Email Data Type Is Required Prop Validation", function () {
    //Click on Email
    cy.getIframeBody().find('[placeholder="Email"]').click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for Email(Assertion Passed)");
    cy.wait(2000);
  });

  it("Address Data Type Is Required Prop Validation", function () {
    //Click on Address
    cy.getIframeBody().find('[placeholder="Address"]').click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for Address(Assertion Passed)");
    cy.wait(2000);
  });

  it("Number Data Type Is Required Prop Validation", function () {
    //Click on Number
    cy.getIframeBody().find('[placeholder="Number"]').click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for Number(Assertion Passed)");
    cy.wait(2000);
  });

  it("Time Data Type Is Required Prop Validation", function () {
    //Click on Time
    cy.getIframeBody().find('[placeholder="Time"]').click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for Time(Assertion Passed)");
    cy.wait(2000);
  });

  it("Date Data Type Is Required Prop Validation", function () {
    //Click on Add Date
    cy.getIframeBody().find('[placeholder="Date"]').click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for Date(Assertion Passed)");
    cy.wait(2000);
  });

  it("Toggle Data Type Is Required Prop Validation", function () {
    //Click on Add Toggle
    cy.getIframeBody().contains("Toggle").click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for Toggle(Assertion Passed)");
    cy.wait(2000);
  });

  it("SelectList Data Type Is Required Prop Validation", function () {
    //Click on Add SelectList
    cy.getIframeBody()
      .contains(this.DataType.SelectList)
      .click({ force: true });
    cy.wait(3000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for SelectList(Assertion Passed)");
    cy.wait(2000);
  });

  it("RadioSelect Data Type Is Required Prop Validation", function () {
    //Click on Add RadioSelect
    cy.getIframeBody()
      .contains(this.DataType.RadioSelect)
      .click({ force: true });
    cy.wait(3000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for RadioSelect(Assertion Passed)");
    cy.wait(2000);
  });

  it("CheckboxSelect Data Type Is Required Prop Validation", function () {
    //Click on Add Checkbox
    cy.getIframeBody()
      .contains(this.DataType.CheckboxSelect)
      .click({ force: true });
    cy.wait(3000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for CheckboxSelect(Assertion Passed)");
    cy.wait(2000);
  });

  it.only("OneToMany Data Type Is Required Prop Validation", function () {
    //Click on Add Stepper
    cy.getIframeBody()
      .contains(this.DataType.OneToManyRelation)
      .click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log(
      "IsRequired Has been Checked for OneToManyRelation(Assertion Passed)"
    );
    cy.wait(2000);
  });

  it.only("Stepper Data Type Is Required Prop Validation", function () {
    //Click on Add Stepper
    cy.getIframeBody()
      .find('[data-gjs-type="control-stepper"]')
      .click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for Stepper(Assertion Passed)");
    cy.wait(2000);
  });

  it.only("UserSelector Data Type Is Required Prop Validation", function () {
    //Click on UserSelector
    cy.getIframeBody()
      .contains(this.DataType.UserSelector)
      .click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for UserSelector(Assertion Passed)");
    cy.wait(2000);

  });

  it.only("OneToOne Data Type Is Required Prop Validation", function () {
    //Click on Add Stepper
    cy.getIframeBody()
      .contains(this.DataType.OneToOneRelation)
      .click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for OneToOne(Assertion Passed)");
    cy.wait(2000);
  });

  it.only("ContactSelector Data Type Is Required Prop Validation", function () {

    //Click on ContactSelector
    cy.getIframeBody()
      .contains(this.DataType.ContactSelector)
      .click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for ContactSelector(Assertion Passed)");
    cy.wait(2000);

  });

  it.only("SquareCard Data Type Is Required Prop Validation", function () {
    //Click on Add Stepper
    cy.getIframeBody()
      .contains(this.DataType.SquareCardName)
      .click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for SquareCard(Assertion Passed)");
    cy.wait(2000);
  });

  it.only("Icon Data Type Is Required Prop Validation", function () {
    //Click on Icon
    cy.getIframeBody().contains(this.DataType.Icon).click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for Icon(Assertion Passed)");
    cy.wait(2000);
  });

  it.only("Inspection Data Type Is Required Prop Validation", function () {
    //Click on Inspection
    cy.getIframeBody()
      .contains(this.DataType.Inspection)
      .click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for Inspection(Assertion Passed)");
    cy.wait(2000);
  });

  it.only("Assigning Data Type Is Required Prop Validation", function () {
    //Click on Assigning
    cy.getIframeBody().contains(this.DataType.Assigning).click({ force: true });
    cy.wait(2000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked for Assigning(Assertion Passed)");
    cy.wait(2000);
  });

  it.only("Kit Builder Save and Publish", function () {
    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click();
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(New Form) has been Saved");
    //Click on  Publish
    cy.contains("Publish").click({ force: true });
    //cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(New Form) has been Published");
    cy.wait(2000);
  });
});

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
  });



});
