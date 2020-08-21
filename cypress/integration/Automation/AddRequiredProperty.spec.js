import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";


describe("Set KitBuilder Data Elements Is Required", function () {
  this.beforeAll(function () {
    //Page Object
    const lp = new LoginPage();
    lp.visitServiceBuild();

    //Handling Alert
    cy.on("window:confirm", () => {
      cy.log("Alert has been Handled");
    });

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

  it.only("Navigating to Created KitType New Form to make Element Is Requried", function () {
    const kb = new KitBuilderPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    kb.KitBuilderUrl();
    cy.wait(3000);
    //Open Craeted Kit Type
    cy.contains(this.RRProp.IsRequiredKitName2).click({ force: true });
    cy.wait(3000);
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains(this.Data.NewView).click({ force: true });
    cy.wait(5000);
  });

  it("Set Url Data Type As Required Property", function () {
    //Click on Url
    cy.getIframeBody().contains(this.DataType.Url).click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.Url + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set Text Data Type As Required Property", function () {
    //Click on  Text
    cy.getIframeBody().contains(this.DataType.Text).click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.Text + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set File Data Type As Required Property", function () {
    //Click on File
    cy.getIframeBody().contains(this.DataType.File).click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.File + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set Telephone Data Type As Required Property", function () {
    //Click on Telephone
    cy.getIframeBody().contains(this.DataType.Telephone).click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.Telephone + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set TextAera Data Type As Required Property", function () {
    //Click on TextAera
    cy.getIframeBody().contains(this.DataType.TextAera).click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.TextAera + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set Slider Data Type As Required Property", function () {
    //Click on Slider
    cy.getIframeBody().contains(this.DataType.Slider).click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.Slider + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set Currency Data Type As Required Property", function () {
    //Click on Currency
    cy.getIframeBody().contains(this.DataType.Currency).click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.Currency + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set Measure Data Type As Required Property", function () {
    //Click on Measure
    cy.getIframeBody().contains(this.DataType.Measure).click({ force: true });
    cy.wait(3000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.Measure + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set Email Data Type As Required Property", function () {
    //Click on Email
    cy.getIframeBody().contains(this.DataType.Email).click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.Email + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set Address Data Type As Required Property", function () {
    //Click on Address
    cy.getIframeBody().contains(this.DataType.Address).click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.Address + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set Number Data Type As Required Property", function () {
    //Click on Number
    cy.getIframeBody().contains(this.DataType.Number).click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.Number + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set Time Data Type As Required Property", function () {
    //Click on Time
    cy.getIframeBody().contains(this.DataType.Time).click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.Time + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set Date Data Type As Required Property", function () {
    //Click on Add Date
    cy.getIframeBody().contains(this.DataType.Date).click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.Date + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set Toggle Data Type As Required Property", function () {
    //Click on Add Toggle
    cy.getIframeBody().contains(this.DataType.Toggle).click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.Toggle + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set SelectList Data Type As Required Property", function () {
    //Click on Add SelectList
    cy.getIframeBody()
      .contains(this.DataType.SelectList)
      .click({ force: true });
    cy.wait(3000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(6) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.SelectList + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set RadioSelect Data Type As Required Property", function () {
    //Click on Add RadioSelect
    cy.getIframeBody()
      .contains(this.DataType.RadioSelect)
      .click({ force: true });
    cy.wait(3000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(6) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.RadioSelect + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set CheckboxSelect Data Type As Required Property", function () {
    //Click on Add Checkbox
    cy.getIframeBody()
      .contains(this.DataType.CheckboxSelect)
      .click({ force: true });
    cy.wait(3000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(6) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.CheckboxSelect + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set OneToManyRelation Data Type As Required Property", function () {
    //Click on Add Stepper
    cy.getIframeBody()
      .contains(this.DataType.OneToManyRelation)
      .click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(7) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(
      this.DataType.OneToManyRelation + " has been set as Required Property"
    );
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set Stepper Data Type As Required Property", function () {
    //Click on Add Stepper
    cy.getIframeBody()
      .find('[data-gjs-type="control-stepper"]')
      .click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(6) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.Stepper + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set UserSelector Data Type As Required Property", function () {
    //Click on UserSelector
    cy.getIframeBody()
      .contains(this.DataType.UserSelector)
      .click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.UserSelector + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set OneToOneRelation Data Type As Required Property", function () {
    //Click on Add Stepper
    cy.getIframeBody()
      .contains(this.DataType.OneToOneRelation)
      .click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(7) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(
      this.DataType.OneToOneRelation + " has been set as Required Property"
    );
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set ContactSelector Data Type As Required Property", function () {
    //Click on ContactSelector
    cy.getIframeBody()
      .contains(this.DataType.ContactSelector)
      .click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(
      this.DataType.ContactSelector + " has been set as Required Property"
    );
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set SquareCardName Data Type As Required Property", function () {
    //Click on Add Stepper
    cy.getIframeBody()
      .contains(this.DataType.SquareCardName)
      .click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(7) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.SquareCardName + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set Icon Data Type As Required Property", function () {
    //Click on Icon
    cy.getIframeBody().contains(this.DataType.Icon).click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.Icon + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set Inspection Data Type As Required Property", function () {
    //Click on Inspection
    cy.getIframeBody()
      .contains(this.DataType.Inspection)
      .click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(6) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.Inspection + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
  });

  it("Set Assigning Data Type As Required Property", function () {
    //Click on Assigning
    cy.getIframeBody().contains(this.DataType.Assigning).click({ force: true });
    cy.wait(2000);

    //Click on Edit btn to edit the element
    cy.get(".editKitElementBtn").click({ force: true });
    cy.wait(2000);

    //Click on DropDown for selecting Required Property
    cy.get(
      "div.container.new-element-body > div > div > form > div:nth-child(5) > div > div > div > div > div.v-select__slot > div:nth-child(4) > div"
    ).click({ force: true });
    //Select Required Property
    cy.contains("Required").click({ force: true });
    cy.log("Required Property has been selected for the this element ");

    //Click on Save
    cy.get(".v-btn--text:nth-child(2)").click({ force: true });
    cy.log(this.DataType.Assigning + " has been set as Required Property");
    //Assertion to close
    cy.get(".v-btn__content > .theme--dark").click({ force: true });
    cy.wait(3000);
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
