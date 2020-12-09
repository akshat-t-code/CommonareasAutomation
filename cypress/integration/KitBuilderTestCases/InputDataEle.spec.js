import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Input Section Data Elements Configuration", function () {
  this.beforeAll(function () {
    //Page Object
    const lp = new LoginPage();
    //lp.visitCityComTest();
    cy.visit('https://tm.ca-build.com:57084/')
    //Login Assertions
    cy.contains(" Log In ").should("be.visible")
    //Enter credentials
    lp.EnterEmail("hgriffin@commonareas.work.dev");
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

    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (
      KitTypeFormViewsNames
    ) {
      this.data = KitTypeFormViewsNames;
    });
    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
      KittypeName
    ) {
      this.KitTypeName = KittypeName;
    });
    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      datatypes
    ) {
      this.DataType = datatypes;
    });

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType2 = NewDataForElements;
    });
  });

  it("Navigating to New Form of Created Kit Type", function () {
    const kb = new KitBuilderPage();
    const lp = new LoginPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    //lp.visitCityComTestKitBuilder();
    cy.visit('https://tm.ca-build.com:57084/ClientAdmin/KitBuilder')
    cy.log("User entered in kit builder");
    cy.wait(3000);
    //Open Craeted Kit Type
    kb.KBSearchBox(this.KitTypeName.KitName3);
    cy.wait(5000);
    cy.contains(this.KitTypeName.KitName3).click({ force: true });
    cy.wait(3000);
    cy.log("Created Kit type has been opened");
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains(this.data.NewView).click({ force: true });
    cy.wait(5000);
  });

  it("Input Section Data Elements", function () {
    cy.contains("Inputs").click({ force: true });
    cy.wait(2000);
  });

  it("Url Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Url"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.Url(this.DataType2.Url);
    cy.wait(5000);
  });

  it("Text Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Text"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.Text(this.DataType2.Text);
    cy.wait(5000);
  });

  it("File Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="File"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.File(this.DataType2.File);
    cy.wait(5000);
  });

  it("Telephone Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Telephone"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Telephone(this.DataType2.Telephone);
    cy.wait(5000);
  });

  it("TextAera Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Text Area"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.TextAera(this.DataType2.TextAera);
    cy.wait(5000);
  });

  it("Slider Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Slider"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Slider(this.DataType2.Slider);
    cy.wait(5000);
  });

  it("Currency Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Currency"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Currency(this.DataType2.Currency);
    cy.wait(5000);
  });

  it("Measure Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Measure"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Measure(this.DataType2.Measure);
    cy.wait(5000);
  });

  it("Email Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Email"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Email(this.DataType2.Email);
    cy.wait(5000);
  });

  it("Address Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Address"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Address(this.DataType2.Address);
    cy.wait(5000);
  });

  it("Section Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Section"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Section(this.DataType2.Section);
    cy.wait(5000);
  });

  it("Number Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Number"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Number(this.DataType2.Number);
    cy.wait(5000);
  });

  it("Kit Builder Save and Publish", function () {
    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({ force: true });
    //save assertion closed
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
    //Click on  Publish
    cy.contains("Publish").click({ force: true });
    //cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(New Form) has been Published");
    cy.wait(2000);
  });

  it("Time Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Time"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Time(this.DataType2.Time);
    cy.wait(5000);
  });

  it("Date Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Add Date"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Date(this.DataType2.Date);
    cy.wait(5000);
  });

  it("Reminder Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Reminder"]').dblclick({ force: true });
    cy.wait(1000);
    const DataType = new KitBuilderDataTypes();
    DataType.Reminder(this.DataType2.ReminderName);
  });

  it("Kit Builder Save and Publish", function () {
    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({ force: true });
    //save assertion closed
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
    //Click on  Publish
    cy.contains("Publish").click({ force: true });
    //cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(New Form) has been Published");
    cy.wait(2000);
  });

  it("Toggle Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Toggle"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Toggle(this.DataType2.Toggle);
    cy.wait(5000);
  });

  it("SelectList Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Select List"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.SelectList(
      this.DataType2.SelectList,
      this.DataType2.SelectListName,
      this.DataType2.SelectListValue1,
      this.DataType2.SelectListValue2,
      this.DataType2.SelectListValue3,
      this.DataType2.SelectListValue4,
      this.DataType2.SelectListValue5
    );
    cy.wait(5000);
  });

  it("RadioSelect Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Radio Select"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.RadioSelect(
      this.DataType2.RadioSelect,
      this.DataType2.RadioSelectName,
      this.DataType2.RadioSelectValue1,
      this.DataType2.RadioSelectValue2,
      this.DataType2.RadioSelectValue3,
      this.DataType2.RadioSelectValue4,
      this.DataType2.RadioSelectValue5
    );
    cy.wait(5000);
  });

  it("CheckboxSelect Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Checkbox Select"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.CheckboxSelect(
      this.DataType2.CheckboxSelect,
      this.DataType2.CheckboxSelectName,
      this.DataType2.CheckboxSelectValue1,
      this.DataType2.CheckboxSelectValue2,
      this.DataType2.CheckboxSelectValue3,
      this.DataType2.CheckboxSelectValue4,
      this.DataType2.CheckboxSelectValue5
    );
    cy.wait(5000);
  });

  

  it("Kit Builder Save and Publish", function () {
    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({ force: true });
    //save assertion closed
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
    //Click on  Publish
    cy.contains("Publish").click({ force: true });
    //cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(New Form) has been Published");
    cy.wait(2000);
  });
});
