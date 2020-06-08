import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes"

describe("Create New Kit type", function () {
  this.beforeAll(function () {
    const lp = new LoginPage();
    cy.visit("http://serviceproviders.ca-build.com/Public/Login?ReturnUrl=%2F");
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.wait(10000);
  });

  this.beforeEach("Fixtures file data", function () {

    cy.fixture("KitBuilderTestData/CreateNewKitData").then(function (data) {
      this.data = data;
    });

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (data1) {
      this.data1 = data1;
    });

    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (datatypes) {
      this.DataType = datatypes;
    });

  });

  it("Create A New Kit Type", function () {
    const kb = new KitBuilderPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);

    kb.AdminUrl();
    cy.wait(5000);
    kb.ClickOnKitBuilder();
    kb.ClickOnCreateNewKit();
    cy.wait(5000);
    //For Creating New Kit type commands coming form Command.js
    cy.KitLabel(this.data1.KitLabel);
    cy.KitName(this.data1.KitName);
    cy.KitDescription(this.data1.KitDescription);
    cy.KitIcon();
    cy.CreateKit();
  });

  it.only("New View Form", function () {
    cy.wait(10000);
    const kb = new KitBuilderPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    // cy.visit(
    //   "http://serviceproviders.ca-build.com/ClientAdmin/KitBuilder/?localdev=true#/"
    // );
     kb.AdminUrl();
    cy.wait(5000);
    kb.ClickOnKitBuilder();
    cy.wait(5000);

    cy.contains(this.data1.KitName).click({ force: true });
    cy.wait(3000);

    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);

    // //Click On New Form
    // kb.ClickOnNewForm();
    // //New Form View Detalis commands coming form command.js
    // cy.NewViewLabel(this.data.NewView);
    // cy.NewViewIcon();
    // cy.NewViewDescription(this.data.NewView);
    // cy.SaveNewForm();

    cy.wait(3000);
    cy.contains("NewView").click({ force: true });
    cy.wait(5000);

    //Elements
    //cy.contains("Inputs").click({ force: true });
    //cy.contains('Date & Time').click({ force: true });
    //cy.wait(2000);
    //cy.contains('Choice Pickers').click({ force: true });
    cy.contains('Content').click({ force: true });
     cy.wait(2000)

    

   //kitBuilder Data Type 
   const DataType=new KitBuilderDataTypes()
  

  //  DataType.TextAera(this.DataType.TextAera)
  //  cy.wait(5000)

  //  DataType.Slider(this.DataType.Slider)
  //  cy.wait(5000)

  //  DataType.Currency(this.DataType.Currency)
  //  cy.wait(5000)

  //  DataType.Measure(this.DataType.Measure)
  //  cy.wait(5000)

  //  DataType.Email(this.DataType.Email)
  //  cy.wait(5000)

  //  DataType.Address(this.DataType.Address)
  //  cy.wait(5000)

  //  DataType.Number(this.DataType.Number)
  //  cy.wait(5000)

  

  //  DataType.Time(this.DataType.Time)
  //  cy.wait(5000)

  //  DataType.Date(this.DataType.Date)
  //  cy.wait(5000)

  // DataType.Toggle(this.DataType.Toggle)
  // cy.wait(5000)

  //  DataType.SelectList(this.DataType.SelectList,
  //   this.DataType.SelectListName,
  //   this.DataType.SelectListValue1,
  //   this.DataType.SelectListValue2,
  //   this.DataType.SelectListValue3,
  //   this.DataType.SelectListValue4,
  //   this.DataType.SelectListValue5)
  //   cy.wait(5000)

  // DataType.RadioSelect(this.DataType.RadioSelect,
  //   this.DataType.RadioSelectName,
  //   this.DataType.RadioSelectValue1,
  //   this.DataType.RadioSelectValue2,
  //   this.DataType.RadioSelectValue3,
  //   this.DataType.RadioSelectValue4,
  //   this.DataType.RadioSelectValue5)
  //   cy.wait(5000)

  //   DataType.CheckboxSelect(this.DataType.CheckboxSelect,
  //   this.DataType.CheckboxSelectName,
  //   this.DataType.CheckboxSelectValue1,
  //   this.DataType.CheckboxSelectValue2,
  //   this.DataType.CheckboxSelectValue3,
  //   this.DataType.CheckboxSelectValue4,
  //   this.DataType.CheckboxSelectValue5)
  //   cy.wait(5000)

    // DataType.UserSelector(this.DataType.UserSelector)
    // cy.wait(5000)

    // DataType.ContactSelector(this.DataType.ContactSelector)
    // cy.wait(5000)

    // DataType.Assigning(this.DataType.Assigning)
    // cy.wait(5000)

      // DataType.Stepper(this.DataType.Stepper,
      // this.DataType.StepperName,
      // this.DataType.StepperValue1,
      // this.DataType.StepperValue2,
      // this.DataType.StepperValue3,
      // this.DataType.StepperValue4,
      // this.DataType.StepperValue5)
      // cy.wait(5000)

    //  DataType.Icon(this.DataType.Icon)
    //  cy.wait(5000)

      // DataType.Inspection(this.DataType.Inspection,
      // this.DataType.InspectionName,
      // this.DataType.InspectionValue1,
      // this.DataType.InspectionValue2,
      // this.DataType.InspectionValue3,
      // this.DataType.InspectionValue4,
      // this.DataType.InspectionValue5)
      //cy.wait(5000)

      //Kit Builder Save
      // cy.get('.ca-button-green:nth-child(1)').click();
      // cy.get('.v-btn__content > .theme--dark').click();
      // //Click on  Publish
      // cy.contains('Publish').click({force:true})
      // cy.get('.v-btn__content > .theme--dark').click();



    //  DataType.OneToOneRelation(this.DataType.OneToOneRelation,
    //   this.DataType.KitToBeRelate)
    // cy.wait(5000)

    // DataType.OneToManyRelation(this.DataType.OneToManyRelation,
    //   this.DataType.KitToBeRelated)

    // DataType.SquareCard(this.DataType.SquareCardName,
    // this.DataType.CardKitToBeRelated)
   
           
  });
});