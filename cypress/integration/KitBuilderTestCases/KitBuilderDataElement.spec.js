import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Kit Builder Data Types Details", function () {
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
    kb.AdminUrl();
    cy.wait(5000);
    kb.ClickOnKitBuilder();
    cy.wait(3000);
    cy.contains(this.data1.KitName).click({ force: true });
    cy.wait(3000);
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains(this.data.NewView).click({ force: true });
    cy.wait(5000);
  });

  it("Building the New Form", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();

    // DataType.Url(this.DataType.Url);
    // cy.wait(5000);

    // DataType.Text(this.DataType.Text);
    // cy.wait(5000);

    // DataType.File(this.DataType.File);
    // cy.wait(5000);

    // DataType.Telephone(this.DataType.Telephone);
    // cy.wait(5000);

    // DataType.TextAera(this.DataType.TextAera);
    // cy.wait(5000);

    // DataType.Slider(this.DataType.Slider);
    // cy.wait(5000);

    // DataType.Currency(this.DataType.Currency);
    // cy.wait(5000);

    // DataType.Measure(this.DataType.Measure);
    // cy.wait(5000);

    // DataType.Email(this.DataType.Email);
    // cy.wait(5000);

    // DataType.Address(this.DataType.Address);
    // cy.wait(5000);

    // DataType.Number(this.DataType.Number);
    // cy.wait(5000);

    // DataType.Time(this.DataType.Time);
    // cy.wait(5000);

    // DataType.Date(this.DataType.Date);
    // cy.wait(5000);

    // DataType.Toggle(this.DataType.Toggle);
    // cy.wait(5000);

    // DataType.SelectList(
    //   this.DataType.SelectList,
    //   this.DataType.SelectListName,
    //   this.DataType.SelectListValue1,
    //   this.DataType.SelectListValue2,
    //   this.DataType.SelectListValue3,
    //   this.DataType.SelectListValue4,
    //   this.DataType.SelectListValue5
    // );
    // cy.wait(5000);

    // DataType.RadioSelect(
    //   this.DataType.RadioSelect,
    //   this.DataType.RadioSelectName,
    //   this.DataType.RadioSelectValue1,
    //   this.DataType.RadioSelectValue2,
    //   this.DataType.RadioSelectValue3,
    //   this.DataType.RadioSelectValue4,
    //   this.DataType.RadioSelectValue5
    // );
    // cy.wait(5000);

    // DataType.CheckboxSelect(
    //   this.DataType.CheckboxSelect,
    //   this.DataType.CheckboxSelectName,
    //   this.DataType.CheckboxSelectValue1,
    //   this.DataType.CheckboxSelectValue2,
    //   this.DataType.CheckboxSelectValue3,
    //   this.DataType.CheckboxSelectValue4,
    //   this.DataType.CheckboxSelectValue5
    // );
    // cy.wait(5000);

    // DataType.UserSelector(this.DataType.UserSelector);
    // cy.wait(5000);

    // DataType.ContactSelector(this.DataType.ContactSelector);
    // cy.wait(5000);

    // DataType.Assigning(this.DataType.Assigning);
    // cy.wait(5000);

    // DataType.Stepper(
    //   this.DataType.Stepper,
    //   this.DataType.StepperName,
    //   this.DataType.StepperValue1,
    //   this.DataType.StepperValue2,
    //   this.DataType.StepperValue3,
    //   this.DataType.StepperValue4,
    //   this.DataType.StepperValue5
    // );
    // cy.wait(5000);

    // DataType.Icon(this.DataType.Icon);
    // cy.wait(5000);

    // DataType.Inspection(
    //   this.DataType.Inspection,
    //   this.DataType.InspectionName,
    //   this.DataType.InspectionValue1,
    //   this.DataType.InspectionValue2,
    //   this.DataType.InspectionValue3,
    //   this.DataType.InspectionValue4,
    //   this.DataType.InspectionValue5
    // );
    // cy.wait(5000);

    // DataType.OneToOneRelation(
    //   this.DataType.OneToOneRelation,
    //   this.DataType.KitToBeRelate
    // );
    // cy.wait(5000);

    // DataType.OneToManyRelation(
    //   this.DataType.OneToManyRelation,
    //   this.DataType.KitToBeRelated
    // );

    // DataType.SquareCard(
    //   this.DataType.SquareCardName,
    //   this.DataType.CardKitToBeRelated
    // );

    //Kit Builder Save
    // cy.get(".ca-button-green:nth-child(1)").click();
    // cy.get(".v-btn__content > .theme--dark").click();
    // cy.log("Kit builder(New Form) has been Saved");
    // //Click on  Publish
    // cy.contains("Publish").click({ force: true });
    // //cy.get(".v-btn__content > .theme--dark").click();
    // cy.log("Kit builder(New Form) has been Published");
    // cy.wait(2000);
  });

  it("Url Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.Url(this.DataType.Url);
    cy.wait(5000);
  });

  it("Text Data Type", function () {

    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.Text(this.DataType.Text);
    cy.wait(5000);
  });

  it("File Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.File(this.DataType.File);
    cy.wait(5000);
  });

  it("Telephone Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Telephone(this.DataType.Telephone);
    cy.wait(5000);
  });

  it("Kit Builder Save and Publish", function () {
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

  it("TextAera Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.TextAera(this.DataType.TextAera);
    cy.wait(5000);
  });

  it("Slider Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Slider(this.DataType.Slider);
    cy.wait(5000);
  });

  it("Currency Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.Currency(this.DataType.Currency);
    cy.wait(5000);
  });

  it("Measure Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Measure(this.DataType.Measure);
    cy.wait(5000);
  });

  it("Email Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Email(this.DataType.Email);
    cy.wait(5000);
  });

  it("Address Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.Address(this.DataType.Address);
    cy.wait(5000);
  });

  it("Kit Builder Save and Publish", function () {
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

  it("Number Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Number(this.DataType.Number);
    cy.wait(5000);
  });

  it("Time Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Time(this.DataType.Time);
    cy.wait(5000);
  });

  it("Date Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Date(this.DataType.Date);
    cy.wait(5000);
  });

  it("Toggle Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Toggle(this.DataType.Toggle);
    cy.wait(5000);
  });

  it("Kit Builder Save and Publish", function () {
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

  it("SelectList Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.SelectList(
      this.DataType.SelectList,
      this.DataType.SelectListName,
      this.DataType.SelectListValue1,
      this.DataType.SelectListValue2,
      this.DataType.SelectListValue3,
      this.DataType.SelectListValue4,
      this.DataType.SelectListValue5
    );
    cy.wait(5000);
  });

  it("RadioSelect Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.RadioSelect(
      this.DataType.RadioSelect,
      this.DataType.RadioSelectName,
      this.DataType.RadioSelectValue1,
      this.DataType.RadioSelectValue2,
      this.DataType.RadioSelectValue3,
      this.DataType.RadioSelectValue4,
      this.DataType.RadioSelectValue5
    );
    cy.wait(5000);
  });

  it("CheckboxSelect Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.CheckboxSelect(
      this.DataType.CheckboxSelect,
      this.DataType.CheckboxSelectName,
      this.DataType.CheckboxSelectValue1,
      this.DataType.CheckboxSelectValue2,
      this.DataType.CheckboxSelectValue3,
      this.DataType.CheckboxSelectValue4,
      this.DataType.CheckboxSelectValue5
    );
    cy.wait(5000);
  });

  it("Kit Builder Save and Publish", function () {
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

  it("UserSelector Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.UserSelector(this.DataType.UserSelector);
    cy.wait(5000);
  });

  it("ContactSelector Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.ContactSelector(this.DataType.ContactSelector);
    cy.wait(5000);
  });

  it("Assigning Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Assigning(this.DataType.Assigning);
    cy.wait(5000);
  });

  it("Kit Builder Save and Publish", function () {
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

  it("Stepper Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Stepper(
      this.DataType.Stepper,
      this.DataType.StepperName,
      this.DataType.StepperValue1,
      this.DataType.StepperValue2,
      this.DataType.StepperValue3,
      this.DataType.StepperValue4,
      this.DataType.StepperValue5
    );
    cy.wait(5000);
  });

  it("Icon Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Icon(this.DataType.Icon);
    cy.wait(5000);
  });

  it("Inspection Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Inspection(
      this.DataType.Inspection,
      this.DataType.InspectionName,
      this.DataType.InspectionValue1,
      this.DataType.InspectionValue2,
      this.DataType.InspectionValue3,
      this.DataType.InspectionValue4,
      this.DataType.InspectionValue5
    );
    cy.wait(5000);
  });

  it("Kit Builder Save and Publish", function () {
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

  it("OneToOneRelation Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.OneToOneRelation(
      this.DataType.OneToOneRelation,
      this.DataType.KitToBeRelate
    );
    cy.wait(5000);

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

  it.only("OneToManyRelation Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.OneToManyRelation(
      this.DataType.OneToManyRelation,
      this.DataType.KitToBeRelated
    );

    //Kit Builder Save
    // cy.get(".ca-button-green:nth-child(1)").click();
    // cy.get(".v-btn__content > .theme--dark").click();
    // cy.log("Kit builder(New Form) has been Saved");
    // //Click on  Publish
    // cy.contains("Publish").click({ force: true });
    // //cy.get(".v-btn__content > .theme--dark").click();
    // cy.log("Kit builder(New Form) has been Published");
    // cy.wait(2000);
  });

  it("SquareCard Data Type", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.SquareCard(
      this.DataType.SquareCardName,
      this.DataType.CardKitToBeRelated
    );
  });

  it("Kit Builder Save and Publish", function () {
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
