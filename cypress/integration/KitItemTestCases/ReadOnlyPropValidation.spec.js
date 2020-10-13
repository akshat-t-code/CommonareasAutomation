import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitTypePage from "../PageObject/KitTypePage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("KitBuilder's Element ReadOnly Property Validation on Kit Builder", function () {
  this.beforeAll(function () {
    //Page Object
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
    // cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
    //   datatypes
    // ) {
    //   this.DataType = datatypes;
    // });

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType = NewDataForElements;
    });
  });

  it.only("Navigating to Created KitType New Form", function () {
    const kb = new KitBuilderPage();
    const lp = new LoginPage();
    cy.wait(5000);
    //cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    lp.visitKitBuilderServiceBuild();
    cy.wait(10000);
    cy.log("User entered in kit builder");
    //Open Craeted Kit Type
    kb.KBSearchBox(this.RRProp.ReadOnlyKitName);
    cy.wait(5000);
    cy.contains(this.RRProp.ReadOnlyKitName).click({ force: true });
    cy.wait(3000);
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains(this.Data.NewView).click({ force: true });
    cy.wait(5000);
  });

  it("Url Data Type Read Prop Validation", function () {
    //Click on Url
    // cy.getIframeBody().find('[placeholder="Url"]').click({ force: true });
    cy.getIframeBody().contains(this.DataType.Url).click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Url(Assertion Passed)");
    cy.wait(1000);
  });

  it("Text Data Type Read Prop Validation", function () {
    //Click on  Text
    // cy.getIframeBody().find('[placeholder="Text"]').click({ force: true });
    cy.getIframeBody().contains(this.DataType.Text).click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Text(Assertion Passed)");
    cy.wait(1000);
  });

  it("File Data Type Read Prop Validation", function () {
    //Click on File
    // cy.getIframeBody()
    //   .find('[placeholder="Tooltip for File"]')
    //   .click({ force: true });
    cy.getIframeBody().contains(this.DataType.File).click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for File(Assertion Passed)");
    cy.wait(1000);
  });

  it("Telephone Data Type Read Prop Validation", function () {
    //Click on Telephone
    // cy.getIframeBody().find('[placeholder="Telephone"]').click({ force: true });
    cy.getIframeBody().contains(this.DataType.Telephone).click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Telephone(Assertion Passed)");
    cy.wait(1000);
  });

  it("TextAera Data Type Read Prop Validation", function () {
    //Click on TextAera
    cy.getIframeBody().contains(this.DataType.TextAera).click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for TextAera(Assertion Passed)");
    cy.wait(1000);
  });

  it("Slider Data Type Read Prop Validation", function () {
    //Click on Slider
    cy.getIframeBody().contains(this.DataType.Slider).click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Slider(Assertion Passed)");
    cy.wait(1000);
  });

  it("Currency Data Type Read Prop Validation", function () {
    //Click on Currency
    // cy.getIframeBody().find('[placeholder="Currency"]').click({ force: true });
    cy.getIframeBody().contains(this.DataType.Currency).click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Currency(Assertion Passed)");
    cy.wait(1000);
  });

  it("Measure Data Type Read Prop Validation", function () {
    //Click on Measure
    // cy.getIframeBody().find('[placeholder="Measure"]').click({ force: true });
    cy.getIframeBody().contains(this.DataType.Measure).click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Measure(Assertion Passed)");
    cy.wait(1000);
  });

  it("Email Data Type Read Prop Validation", function () {
    //Click on Email
    //cy.getIframeBody().find('[placeholder="Email"]').click({ force: true });
    cy.getIframeBody().contains(this.DataType.Email).click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Email(Assertion Passed)");
    cy.wait(1000);
  });

  it("Address Data Type Read Prop Validation", function () {
    //Click on Address
    //cy.getIframeBody().find('[placeholder="Address"]').click({ force: true });
    cy.getIframeBody().contains(this.DataType.Address).click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Address(Assertion Passed)");
    cy.wait(1000);
  });

  it("Number Data Type Read Prop Validation", function () {
    //Click on Number
    // cy.getIframeBody().find('[placeholder="Number"]').click({ force: true });
    cy.getIframeBody().contains(this.DataType.Number).click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Number(Assertion Passed)");
    cy.wait(1000);
  });

  it("Time Data Type Read Prop Validation", function () {
    //Click on Time
    //cy.getIframeBody().find('[placeholder="Time"]').click({ force: true });
    cy.getIframeBody().contains(this.DataType.Time).click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Time(Assertion Passed)");
    cy.wait(1000);
  });

  it("Date Data Type Read Prop Validation", function () {
    //Click on Add Date
    //cy.getIframeBody().find('[placeholder="Date"]').click({ force: true });
    cy.getIframeBody().contains(this.DataType.Date).click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Date(Assertion Passed)");
    cy.wait(1000);
  });

  it("Toggle Data Type Read Prop Validation", function () {
    //Click on Add Toggle
    cy.getIframeBody().contains(this.DataType.Toggle).click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Toggle(Assertion Passed)");
    cy.wait(1000);
  });

  it("SelectList Data Type Read Prop Validation", function () {
    //Click on Add SelectList
    cy.getIframeBody()
      .contains(this.DataType.SelectList)
      .click({ force: true });
    cy.wait(3000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for SelectList(Assertion Passed)");
    cy.wait(1000);
  });

  it("RadioSelect Data Type Read Prop Validation", function () {
    //Click on Add RadioSelect
    cy.getIframeBody()
      .contains(this.DataType.RadioSelect)
      .click({ force: true });
    cy.wait(3000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for RadioSelect(Assertion Passed)");
    cy.wait(1000);
  });

  it("CheckboxSelect Data Type Read Prop Validation", function () {
    //Click on Add Checkbox
    cy.getIframeBody()
      .contains(this.DataType.CheckboxSelect)
      .click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for CheckboxSelect(Assertion Passed)");
    cy.wait(1000);
  });

  it("Stepper Data Type Read Prop Validation", function () {
    //Click on Add Stepper
    cy.getIframeBody()
      .find('[data-gjs-type="control-stepper"]')
      .click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Stepper(Assertion Passed)");
    cy.wait(1000);
  });

  it("UserSelector Data Type Read Prop Validation", function () {
    //Click on UserSelector
    cy.getIframeBody()
      .contains(this.DataType.UserSelector)
      .click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for UserSelector(Assertion Passed)");
    cy.wait(1000);
  });

  it("ContactSelector Data Type Read Prop Validation", function () {
    //Click on ContactSelector
    cy.getIframeBody()
      .contains(this.DataType.ContactSelector)
      .click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for ContactSelector(Assertion Passed)");
    cy.wait(1000);
  });

  it("Icon Data Type Read Prop Validation", function () {
    //Click on Icon
    cy.getIframeBody().contains(this.DataType.Icon).click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Icon(Assertion Passed)");
    cy.wait(1000);
  });

  it("Inspection Data Type Read Prop Validation", function () {
    //Click on Inspection
    cy.getIframeBody()
      .contains(this.DataType.Inspection)
      .click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Inspection(Assertion Passed)");
    cy.wait(1000);
  });

  it("Assigning Data Type Read Prop Validation", function () {
    //Click on Assigning
    cy.getIframeBody().contains(this.DataType.Assigning).click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Assigning(Assertion Passed)");
    cy.wait(1000);
  });

  it.only("Kit Builder Save and Publish", function () {
    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({force:true});
    cy.get(".v-btn__content > .theme--dark").click({force:true});
    cy.log("Kit builder(New Form) has been Saved");
    //Click on  Publish
    cy.contains("Publish").click({ force: true });
    cy.get(".v-btn__content > .theme--dark").click({force:true});
    cy.log("Kit builder(New Form) has been Published");
    cy.wait(2000);
  });
});

// describe("Validation On UI for Element's Read Property", function () {
//   this.beforeAll(function () {
//     // cy.viewport(1280, 720);
//     const lp = new LoginPage();
//     lp.visitServiceBuild();

//     //Handling Alert
//     cy.on("window:confirm", () => {
//       cy.log("Alert has been Handled");
//     });

//     //Login Assertions
//     cy.get(".page-main-title").should("be.visible");
//     //Enter credentials
//     lp.EnterEmail("kstanley@commonareas.work.dev");
//     lp.EnterPassword("1234567Aa");
//     lp.Submit();
//     cy.log("User has been Logged In into the application");

//     Cypress.Cookies.preserveOnce(
//       ".AspNet.ApplicationCookie",
//       "ASP.NET_SessionId",
//       "ca-cf-auth",
//       "kit-detail-selected-tab",
//       "jwt"
//     );
//     cy.wait(10000);
//   });

//   this.beforeEach("Fixtures file data", function () {
//     Cypress.Cookies.preserveOnce(
//       ".AspNet.ApplicationCookie",
//       "ASP.NET_SessionId",
//       "ca-cf-auth",
//       "kit-detail-selected-tab",
//       "jwt",
//       "refreshToken",
//       "jwtAccessToken"
//     );

//     cy.fixture("KitBuilderValidationTestData/Read&RequiredValidation").then(
//       function (Validationdata) {
//         this.RRProp = Validationdata;
//       }
//     );

//     cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (
//       FormViewsNames
//     ) {
//       this.Data = FormViewsNames;
//     });

//     cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
//       KitTypeName
//     ) {
//       this.data1 = KitTypeName;
//     });
//     cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
//       datatypes
//     ) {
//       this.DataType = datatypes;
//     });
//   });

//   it("Navigating to UI for KitType New Form for ReadOnly Property Validation", function () {
//     //cy.wait(5000)
//     const lp = new LoginPage();
//     const KTP = new KitTypePage();
//     //Assertion
//     cy.title().should("eq", "Common Areas");
//     lp.PlusIcon();
//     //debugger;
//     //Click on To open Kit Type
//     KTP.SearchKitType(this.RRProp.ReadOnlyKitName);
//     cy.wait(3000);
//     //This is class to open searched kit type by clicking + iocn
//     cy.get(".truncate-special").first().click({ force: true });
//     //KTP.OpenKitType(this.RRProp.ReadOnlyKitName2);
//     cy.wait(2000);
//     //Assertion
//     cy.contains("New Item created").should("be.visible");
//     cy.log("New Item created and Kit Type has been Opened");
//   });
// });
