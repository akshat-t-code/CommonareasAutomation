import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Input Section Data Elements Configuration", function () {
  this.beforeAll(function () {
    const lp = new LoginPage();
    cy.visit("http://serviceproviders.ca-build.com/Public/Login?ReturnUrl=%2F");
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.wait(10000);
  });

  this.beforeEach("Fixtures file data", function () {
    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (data) {
      this.data = data;
    });
    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (data1) {
      this.data1 = data1;
    });
    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      datatypes
    ) {
      this.DataType = datatypes;
    });
  });

  it.only("Navigating to New Form of Created Kit Type", function () {
    const kb = new KitBuilderPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    kb.KitBuilderUrl();
    // kb.AdminUrl();
    // cy.wait(5000);
    // kb.ClickOnKitBuilder();
    cy.wait(3000);
    //Open Craeted Kit Type
    //cy.contains(this.data1.KitName).click({ force: true });
    cy.contains('AksahtValidationKit').click({ force: true });
    cy.wait(3000);
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains(this.data.NewView).click({ force: true });
    cy.wait(5000);
  });

  it.only("Input Section Data Elements", function () {
    cy.contains("Inputs").click({ force: true });
    cy.wait(2000);
  });

  it("Url Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Url"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.Url(this.DataType.Url);
    cy.wait(5000);
  });

  it("Text Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Text"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.Text(this.DataType.Text);
    cy.wait(5000);
  });

  it("File Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="File"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.File(this.DataType.File);
    cy.wait(5000);
  });

  it("Telephone Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Telephone"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Telephone(this.DataType.Telephone);
    cy.wait(5000);
  });

  it("TextAera Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Text Area"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.TextAera(this.DataType.TextAera);
    cy.wait(5000);
  });

  it("Slider Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Slider"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Slider(this.DataType.Slider);
    cy.wait(5000);
  });

  it("Currency Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Currency"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Currency(this.DataType.Currency);
    cy.wait(5000);
  });

  it("Measure Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Measure"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Measure(this.DataType.Measure);
    cy.wait(5000);
  });

  it("Email Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Email"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Email(this.DataType.Email);
    cy.wait(5000);
  });

  it.only("Address Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Address"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Address(this.DataType.Address);
    cy.wait(5000);
  });

  it.only("Section Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Section"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Section(this.DataType.Section);
    cy.wait(5000);
  });

  it.only("Number Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Number"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Number(this.DataType.Number);
    cy.wait(5000);
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
