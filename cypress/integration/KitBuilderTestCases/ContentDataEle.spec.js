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
    kb.KitBuilderUrl();
    // kb.AdminUrl();
    // cy.wait(5000);
    // kb.ClickOnKitBuilder();
    cy.wait(3000);
    cy.contains(this.data1.KitName).click({ force: true });
    cy.wait(3000);
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains(this.data.NewView).click({ force: true });
    cy.wait(5000);
  });

  it("Content Section Data Elements", function () {
    cy.contains("Content").click({ force: true });
    cy.wait(2000);
  });

  it("UserSelector Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="User Selector"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.UserSelector(this.DataType.UserSelector);
    cy.wait(5000);
  });

  it("ContactSelector Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Contact Selector"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.ContactSelector(this.DataType.ContactSelector);
    cy.wait(5000);
  });

  it("Assigning Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Assigning"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Assigning(this.DataType.Assigning);
    cy.wait(5000);
  });

  it("Stepper Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Stepper"]').dblclick({ force: true });
    cy.wait(1000);
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
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Icon"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Icon(this.DataType.Icon);
    cy.wait(5000);
  });

  it("Inspection Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Inspection"]').dblclick({ force: true });
    cy.wait(1000);
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

  it("OneToOneRelation Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Relation 1-1"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.OneToOneRelation(
      this.DataType.OneToOneRelation,
      this.DataType.KitToBeRelate,
      this.DataType.ElementToBeRelate,
      this.DataType.OneToOneRelatedNew,
      this.DataType.OneToOneRelatedEdit,
      this.DataType.OneToOneMapView,
      this.DataType.OneToOneSearchView
    );
    cy.wait(5000);

    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click();
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
    //Click on  Publish
    cy.contains("Publish").click({ force: true });
    //cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(New Form) has been Published");
    cy.wait(2000);
  });

  it.only("OneToManyRelation Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Relation 1-N"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.OneToManyRelation(
      this.DataType.OneToManyRelation,
      this.DataType.KitToBeRelated,
      this.DataType.RelatedTableView,
      this.DataType.RelatedEle_1,
      this.DataType.RelatedEle_2,
      this.DataType.RelatedEle_3,
      this.DataType.RelatedEle_4,
      this.DataType.RelatedEle_5,
      this.DataType.OneToManyRelatedNew,
      this.DataType.OneToManyRelatedEdit,
      this.DataType.OneToManyMapView,
      this.DataType.OneToManySearchView
    );

    cy.wait(5000);
  });

  it("SquareCard Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="SquareCard"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.SquareCard(
      this.DataType.SquareCardName,
      this.DataType.CardKitToBeRelated,
      this.DataType.SquareCardTableView,
      this.DataType.RelateEle_1,
      this.DataType.RelateEle_2,
      this.DataType.RelateEle_3,
      this.DataType.RelateEle_4,
      this.DataType.RelateEle_5,
      this.DataType.CardRelatedNew,
      this.DataType.CardRelatedEdit,
      this.DataType.CardMapView,
      this.DataType.CardSearchView
    );
    cy.wait(5000);
  });

  it("Kit Builder Save and Publish", function () {
    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click();
    cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(New Form) has been Saved");
    cy.wait(3000);
    //Click on  Publish
    cy.contains("Publish").click({ force: true });
    //cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(New Form) has been Published");
    cy.wait(2000);
  });
});
