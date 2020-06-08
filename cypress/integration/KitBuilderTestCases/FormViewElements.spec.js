import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Copy the Kit Elemets into Another all forms", function () {
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
    cy.contains("NewView").click({ force: true });
    cy.wait(5000);
  });

  it.only("Building the New Form", function () {
    //Page Object
    const DataType = new KitBuilderDataTypes();

       DataType.Url(this.DataType.Url)
       cy.wait(5000)

       DataType.Text(this.DataType.Text)
       cy.wait(5000)

       DataType.File(this.DataType.File)
       cy.wait(5000)

       DataType.Telephone(this.DataType.Telephone)
       cy.wait(5000)

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

//      DataType.SelectList(this.DataType.SelectList,
//     this.DataType.SelectListName,
//     this.DataType.SelectListValue1,
//     this.DataType.SelectListValue2,
//     this.DataType.SelectListValue3,
//     this.DataType.SelectListValue4,
//     this.DataType.SelectListValue5)
//     cy.wait(5000)

//    DataType.Time(this.DataType.Time)
//    cy.wait(5000)

//    DataType.Date(this.DataType.Date)
//    cy.wait(5000)


  });

  it.only("Copy the Elements into Edit form", function () {
    cy.wait(5000);
    //Click on Forms Drop down
    cy.get(
      "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    ).click({ force: true });
    //View Name coming form json file
    cy.contains(this.data.EditView).click();
    cy.wait(5000);
    //Copy from
    cy.get(".align-content-center > .mr-2").click();
    cy.get(
      "#app > div.v-application--wrap > div > div:nth-child(1) > div.v-dialog__container.copy-from-modal > div > div > div > div.container.new-detailview-container > div > div > form > div.row.align-center.justify-center > div:nth-child(8) > div > div > div.col.col-10 > p"
    ).scrollIntoView();

    //Click on New Form to copy
    cy.get(".col:nth-child(8) .mr-2").click();
    cy.wait(2000);
    //Save Builder
    cy.get('.ca-button-green:nth-child(1)').click();
    //assertion msg close
    cy.get('.v-btn__content > .theme--dark').click();
    cy.wait(2000);
  });

  it("Copy the Elements into Related New form", function () {
    cy.wait(5000);
    //Click on Forms Drop down
    cy.get(
      "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    ).click({ force: true });
    cy.wait(2000)
    //View Name coming form json file
    cy.contains(this.data.RelatedNewView).click();
    cy.wait(5000);
    //Copy from
    cy.get(".align-content-center > .mr-2").click();
    cy.get(
      "#app > div.v-application--wrap > div > div:nth-child(1) > div.v-dialog__container.copy-from-modal > div > div > div > div.container.new-detailview-container > div > div > form > div.row.align-center.justify-center > div:nth-child(8) > div > div > div.col.col-10 > p"
    ).scrollIntoView();

    //Click on New Form to copy
    cy.get(".col:nth-child(8) .mr-2").click();
    cy.wait(2000);
    //Save Builder
    cy.get('.ca-button-green:nth-child(1)').click();
    //assertion msg close
    cy.get('.v-btn__content > .theme--dark').click();
    cy.wait(2000);
  });

  it("Copy the Elements into Related Edit form", function () {
    cy.wait(5000);
    //Click on Forms Drop down
    cy.get(
      "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    ).click({ force: true });
    cy.wait(2000)
    //View Name coming form json file
    cy.contains(this.data.RelatedEditView).click();
    cy.wait(5000);
    //Copy from
    cy.get(".align-content-center > .mr-2").click();
    cy.get(
      "#app > div.v-application--wrap > div > div:nth-child(1) > div.v-dialog__container.copy-from-modal > div > div > div > div.container.new-detailview-container > div > div > form > div.row.align-center.justify-center > div:nth-child(8) > div > div > div.col.col-10 > p"
    ).scrollIntoView();

    //Click on New Form to copy
    cy.get(".col:nth-child(8) .mr-2").click();
    cy.wait(2000);
    //Save Builder
    cy.get('.ca-button-green:nth-child(1)').click();
    //assertion msg close
    cy.get('.v-btn__content > .theme--dark').click();
    cy.wait(2000);
  });

  it("Copy the Elements into Shared View form", function () {
    cy.wait(5000);
    //Click on Forms Drop down
    cy.get(
      "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    ).click({ force: true });
    cy.wait(2000)
    //View Name coming form json file
    cy.contains(this.data.SharedView).click();
    cy.wait(5000);
    //Copy from
    cy.get(".align-content-center > .mr-2").click();
    cy.get(
      "#app > div.v-application--wrap > div > div:nth-child(1) > div.v-dialog__container.copy-from-modal > div > div > div > div.container.new-detailview-container > div > div > form > div.row.align-center.justify-center > div:nth-child(8) > div > div > div.col.col-10 > p"
    ).scrollIntoView();

    //Click on New Form to copy
    cy.get(".col:nth-child(8) .mr-2").click();
    cy.wait(2000);
    //Save Builder
    cy.get('.ca-button-green:nth-child(1)').click();
    //assertion msg close
    cy.get('.v-btn__content > .theme--dark').click();
    cy.wait(2000);
  });

  it("Copy the Elements into ScheduleView form", function () {
    cy.wait(5000);
    //Click on Forms Drop down
    cy.get(
      "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    ).click({ force: true });
    cy.wait(2000)
    //View Name coming form json file
    cy.contains(this.data.ScheduleView).click();
    cy.wait(5000);
    //Copy from
    cy.get(".align-content-center > .mr-2").click();
    cy.get(
      "#app > div.v-application--wrap > div > div:nth-child(1) > div.v-dialog__container.copy-from-modal > div > div > div > div.container.new-detailview-container > div > div > form > div.row.align-center.justify-center > div:nth-child(8) > div > div > div.col.col-10 > p"
    ).scrollIntoView();

    //Click on New Form to copy
    cy.get(".col:nth-child(8) .mr-2").click();
    cy.wait(2000);
    //Save Builder
    cy.get('.ca-button-green:nth-child(1)').click();
    //assertion msg close
    cy.get('.v-btn__content > .theme--dark').click();
    cy.wait(2000);
  });

  it("Copy the Elements into CommonPlanView form", function () {
    cy.wait(5000);
    //Click on Forms Drop down
    cy.get(
      "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    ).click({ force: true });
    cy.wait(2000)
    //View Name coming form json file
    cy.contains(this.data.CommonPlanView).click();
    cy.wait(5000);
    //Copy from
    cy.get(".align-content-center > .mr-2").click();
    cy.get(
      "#app > div.v-application--wrap > div > div:nth-child(1) > div.v-dialog__container.copy-from-modal > div > div > div > div.container.new-detailview-container > div > div > form > div.row.align-center.justify-center > div:nth-child(8) > div > div > div.col.col-10 > p"
    ).scrollIntoView();
     
    //Click on New Form to copy
    cy.get(".col:nth-child(8) .mr-2").click();
    cy.wait(2000);
    //Save Builder
    cy.get('.ca-button-green:nth-child(1)').click();
    //assertion msg close
    cy.get('.v-btn__content > .theme--dark').click();
    cy.wait(2000);
  });

  it("Copy the Elements into EmailView form", function () {
    cy.wait(5000);
    //Click on Forms Drop down
    cy.get(
      "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    ).click({ force: true });
    cy.wait(2000)
    //View Name coming form json file
    cy.contains(this.data.EmailView).click();
    cy.wait(5000);
    //Copy from
    cy.get(".align-content-center > .mr-2").click();
    cy.get(
      "#app > div.v-application--wrap > div > div:nth-child(1) > div.v-dialog__container.copy-from-modal > div > div > div > div.container.new-detailview-container > div > div > form > div.row.align-center.justify-center > div:nth-child(8) > div > div > div.col.col-10 > p"
    ).scrollIntoView();
     
    //Click on New Form to copy
    cy.get(".col:nth-child(8) .mr-2").click();
    cy.wait(2000);
    //Save Builder
    cy.get('.ca-button-green:nth-child(1)').click();
    //assertion msg close
    cy.get('.v-btn__content > .theme--dark').click();
    cy.wait(2000);
  });

  it("Copy the Elements into MapView form", function () {
    cy.wait(5000);
    //Click on Forms Drop down
    cy.get(
      "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    ).click({ force: true });
    cy.wait(2000)
    //View Name coming form json file
    cy.contains(this.data.MapView).click();
    cy.wait(5000);
    //Copy from
    cy.get(".align-content-center > .mr-2").click();
    cy.get(
      "#app > div.v-application--wrap > div > div:nth-child(1) > div.v-dialog__container.copy-from-modal > div > div > div > div.container.new-detailview-container > div > div > form > div.row.align-center.justify-center > div:nth-child(8) > div > div > div.col.col-10 > p"
    ).scrollIntoView();
     
    //Click on New Form to copy
    cy.get(".col:nth-child(8) .mr-2").click();
    cy.wait(2000);
    //Save Builder
    cy.get('.ca-button-green:nth-child(1)').click();
    //assertion msg close
    cy.get('.v-btn__content > .theme--dark').click();
    cy.wait(2000);
    cy.contains('Publish').click({force:true})
  });


});
