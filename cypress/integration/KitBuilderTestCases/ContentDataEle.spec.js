import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Kit Builder Data Types Details", function () {
  this.beforeAll(function () {
    //Page Object
    const lp = new LoginPage();
    lp.visitServiceBuild();
    //Login Assertions
    cy.contains(" Log In ").should("be.visible")
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

    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (
      KitTypeFormViewsNames
    ) {
      this.data = KitTypeFormViewsNames;
    });

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
      KitTypeName
    ) {
      this.KitTypeName = KitTypeName;
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
    lp.visitKitBuilderServiceBuild();
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

  it("Content Section Data Elements", function () {
    cy.contains("Content").click({ force: true });
    cy.wait(2000);
  });

  it("OneToManyRelation Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Relation 1-N"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.OneToManyRelation(
      this.DataType2.OneToManyRelation,
      this.DataType2.KitToBeRelated,
      this.DataType2.RelatedTableView,
      this.DataType2.RelatedEle_1,
      this.DataType2.RelatedEle_2,
      this.DataType2.RelatedEle_3,
      this.DataType2.RelatedEle_4,
      this.DataType2.RelatedEle_5,
      this.DataType2.OneToManyRelatedNew,
      this.DataType2.OneToManyRelatedEdit,
      this.DataType2.OneToManyMapView,
      this.DataType2.OneToManySearchView
    );

    cy.wait(5000);
  });

  it("Stepper Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Stepper"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Stepper(
      this.DataType2.Stepper,
      this.DataType2.StepperName,
      this.DataType2.StepperValue1,
      this.DataType2.StepperValue2,
      this.DataType2.StepperValue3,
      this.DataType2.StepperValue4,
      this.DataType2.StepperValue5
    );
    cy.wait(5000);
  });

  it("UserSelector Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="User Selector"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.UserSelector(this.DataType2.UserSelector);
    cy.wait(5000);
  });

  it("OneToOneRelation Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Relation 1-1"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.OneToOneRelation(
      this.DataType2.OneToOneRelation,
      this.DataType2.KitToBeRelate,
      this.DataType2.ElementToBeRelate,
      this.DataType2.OneToOneRelatedNew,
      this.DataType2.OneToOneRelatedEdit,
      this.DataType2.OneToOneMapView,
      this.DataType2.OneToOneSearchView
    );
    cy.wait(5000);
  });

  it("ContactSelector Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Contact Selector"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.ContactSelector(this.DataType2.ContactSelector);
    cy.wait(5000);
  });

  it("SquareCard Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="SquareCard"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.SquareCard(
      this.DataType2.SquareCardName,
      this.DataType2.CardKitToBeRelated,
      this.DataType2.SquareCardTableView,
      this.DataType2.RelateEle_1,
      this.DataType2.RelateEle_2,
      this.DataType2.RelateEle_3,
      this.DataType2.RelateEle_4,
      this.DataType2.RelateEle_5,
      this.DataType2.CardRelatedNew,
      this.DataType2.CardRelatedEdit,
      this.DataType2.CardMapView,
      this.DataType2.CardSearchView
    );

    cy.wait(5000);
  });

  it("Icon Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Icon"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Icon(this.DataType2.Icon);
    cy.wait(5000);
  });

  it("Inspection Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Inspection"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Inspection(
      this.DataType2.Inspection,
      this.DataType2.InspectionName,
      this.DataType2.InspectionValue1,
      this.DataType2.InspectionValue2,
      this.DataType2.InspectionValue3,
      this.DataType2.InspectionValue4,
      this.DataType2.InspectionValue5
    );
    cy.wait(5000);
  });

  it("Assigning Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Assigning"]').dblclick({ force: true });
    cy.log(this.DataType2.Assigning);
    cy.log(this.DataType2.TextBlockName);
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Assigning(this.DataType2.Assigning);
    cy.wait(5000);
  });

  it("TextBlock Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.contains("Text Block").dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.TextBlock(
      this.DataType2.TextBlockName,
      this.DataType2.TextBlockData
    );
    cy.wait(5000);
  });

  it("Button Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[data-component="control-button"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Button(this.DataType2.Button);
    cy.wait(5000);
  });

  it("Link Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[data-component="control-link"]').dblclick({ force: true });
    cy.wait(1000);
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Link(this.DataType2.LinkName, this.DataType2.EnterUrl);
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
