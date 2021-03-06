import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Copy New Form Elements to the Shared,Map,CommomPlan, Schedule and Email View Forms", function () {
  this.beforeAll(function () {
    const lp = new LoginPage();
    cy.visit("http://serviceproviders.ca-build.com/Public/Login?ReturnUrl=%2F");
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.wait(10000);
  });

  this.beforeEach("Fixtures file data", function () {
    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (KitTypeFormViewsNames) {
      this.data = KitTypeFormViewsNames;
    });
    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (KittypeName) {
      this.KitTypeName = KittypeName;
    });
    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      datatypes
    ) {
      this.DataType = datatypes;
    });
  });

  it("Navigating to New Form of Created Kit Type", function () {
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
    cy.contains(this.KitTypeName.KitName).click({ force: true });
    cy.wait(3000);
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains(this.data.NewView).click({ force: true });
    cy.wait(5000);
  });

  it("Copy the Elements into Shared View form", function () {
    cy.wait(5000);
    //Click on Forms Drop down
    cy.get(
      "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    ).click({ force: true });
    cy.wait(2000);
    //View Name coming form json file
    cy.contains(this.data.SharedView).click({force:true});
    cy.wait(5000);
    //Copy from
    cy.get(".align-content-center > .mr-2").click({force:true});
    cy.get(
      "#app > div.v-application--wrap > div > div:nth-child(1) > div.v-dialog__container.copy-from-modal > div > div > div > div.container.new-detailview-container > div > div > form > div.row.align-center.justify-center > div:nth-child(8) > div > div > div.col.col-10 > p"
    ).scrollIntoView();

    //Click on New Form to copy
    cy.get(".col:nth-child(8) .mr-2").click({force:true});
    cy.wait(2000);
    cy.log("New Form View Elements has been Copied into Shared View Form");

    cy.wait(2000);
    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({force:true});
    cy.get(".v-btn__content > .theme--dark").click({force:true});
    cy.log("Kit builder(SharedView Form) has been Saved");
    //Click on  Publish
    cy.contains("Publish").click({ force: true });
    //cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(SharedView Form) has been Published");
    cy.wait(5000);
  });

  it("Copy the Elements into MapView form", function () {
    cy.wait(5000);
    //Click on Forms Drop down
    cy.get(
      "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    ).click({ force: true });
    cy.wait(2000);
    //View Name coming form json file
    cy.contains(this.data.MapView).click({force:true});
    cy.wait(5000);
    //Copy from
    cy.get(".align-content-center > .mr-2").click({force:true});
    cy.get(
      "#app > div.v-application--wrap > div > div:nth-child(1) > div.v-dialog__container.copy-from-modal > div > div > div > div.container.new-detailview-container > div > div > form > div.row.align-center.justify-center > div:nth-child(8) > div > div > div.col.col-10 > p"
    ).scrollIntoView();

    //Click on New Form to copy
    cy.get(".col:nth-child(8) .mr-2").click({force:true});
    cy.wait(2000);
    cy.log("New Form View Elements has been Copied into MapView Form");

    cy.wait(2000);
    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({force:true});
    cy.get(".v-btn__content > .theme--dark").click({force:true});
    cy.log("Kit builder(Map View Form) has been Saved");
    //Click on  Publish
    cy.contains("Publish").click({ force: true });
    //cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(Map View Form) has been Published");
    cy.wait(5000);
  });

  it("Copy the Elements into CommonPlanView form", function () {
    cy.wait(5000);
    //Click on Forms Drop down
    cy.get(
      "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    ).click({ force: true });
    cy.wait(2000);
    //View Name coming form json file
    cy.contains(this.data.CommonPlanView).click({force:true});
    cy.wait(5000);
    //Copy from
    cy.get(".align-content-center > .mr-2").click({force:true});
    cy.get(
      "#app > div.v-application--wrap > div > div:nth-child(1) > div.v-dialog__container.copy-from-modal > div > div > div > div.container.new-detailview-container > div > div > form > div.row.align-center.justify-center > div:nth-child(8) > div > div > div.col.col-10 > p"
    ).scrollIntoView();

    //Click on New Form to copy
    cy.get(".col:nth-child(8) .mr-2").click({force:true});
    cy.wait(2000);
    cy.log("New Form View Elements has been Copied into CommonPlan View Form");

    cy.wait(2000);
    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({force:true});
    cy.get(".v-btn__content > .theme--dark").click({force:true});
    cy.log("Kit builder(CommonPlan View Form) has been Saved");
    //Click on  Publish
    cy.contains("Publish").click({ force: true });
   // cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(CommonPlan View Form) has been Published");
    cy.wait(5000);
  });

  it("Copy the Elements into Schedule View form", function () {
    cy.wait(5000);
    //Click on Forms Drop down
    cy.get(
      "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    ).click({ force: true });
    cy.wait(2000);
    //View Name coming form json file
    cy.contains(this.data.ScheduleView).click({force:true});
    cy.wait(5000);
    //Copy from
    cy.get(".align-content-center > .mr-2").click({force:true});
    cy.get(
      "#app > div.v-application--wrap > div > div:nth-child(1) > div.v-dialog__container.copy-from-modal > div > div > div > div.container.new-detailview-container > div > div > form > div.row.align-center.justify-center > div:nth-child(8) > div > div > div.col.col-10 > p"
    ).scrollIntoView();

    //Click on New Form to copy
    cy.get(".col:nth-child(8) .mr-2").click({force:true});
    cy.wait(2000);
    cy.log("New Form View Elements has been Copied into Schedule View Form");

    cy.wait(2000);
    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({force:true});
    cy.get(".v-btn__content > .theme--dark").click({force:true});
    cy.log("Kit builder(Schedule Form) has been Saved");
    //Click on  Publish
    cy.contains("Publish").click({ force: true });
    //cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(ScheduleView Form) has been Published");
    cy.wait(5000);
  });

  it("Copy the Elements into EmailView form", function () {
    cy.wait(5000);
    //Click on Forms Drop down
    cy.get(
      "#app > div > div > div:nth-child(1) > header > div > div:nth-child(3) > div > div > div > div > div.v-select__slot > div > div"
    ).click({ force: true });
    cy.wait(2000);
    //View Name coming form json file
    cy.contains(this.data.EmailView).click({force:true});
    cy.wait(5000);
    //Copy from
    cy.get(".align-content-center > .mr-2").click({force:true});
    cy.get(
      "#app > div.v-application--wrap > div > div:nth-child(1) > div.v-dialog__container.copy-from-modal > div > div > div > div.container.new-detailview-container > div > div > form > div.row.align-center.justify-center > div:nth-child(8) > div > div > div.col.col-10 > p"
    ).scrollIntoView();

    //Click on New Form to copy
    cy.get(".col:nth-child(8) .mr-2").click({force:true});
    cy.wait(2000);
    cy.log("New Form View Elements has been Copied into Email View Form");

    cy.wait(2000);
    //Kit Builder Save
    cy.get(".ca-button-green:nth-child(1)").click({force:true});
    cy.get(".v-btn__content > .theme--dark").click({force:true});
    cy.log("Kit builder(Email View Form) has been Saved");
    //Click on  Publish
    cy.contains("Publish").click({ force: true });
   // cy.get(".v-btn__content > .theme--dark").click();
    cy.log("Kit builder(Email View Form) has been Published");
    cy.wait(5000);
  });

});
