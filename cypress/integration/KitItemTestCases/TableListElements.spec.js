import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";

describe("Validate TableList Element for Created Kit Type on UI", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    lp.visit();
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();

    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt"
    );
  });

  this.beforeEach("KitType Data", function () {
    

    cy.fixture("KitTypeTestData/KitItemDataValues").then(function (KitDataEle) {
      this.KitItemData = KitDataEle;
    });

    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (DataEleValues) {
      this.KitData = DataEleValues;
    });

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (KitName) {
      this.KitName = KitName;
    });
  });

  it("Open Created Kit type As List View", function () {
    //Page Object
    const lp = new LoginPage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    cy.wait(10000);
    //Click on Hamburger Icon
    lp.HMBIcon();
    cy.contains(this.KitName.KitName).scrollIntoView({ force: true });
    cy.wait(5000);
    cy.contains(this.KitName.KitName).click({ force: true });
    cy.wait(10000);
  });

  it("Validate the Filter Elements", function () {
    //Page Object
    const lp = new LoginPage();
    lp.FilterIcon();

    //Validation for Filer Elements
    cy.get('[name="Url"]').scrollIntoView({ force: true });
    cy.get('[name="Url"]').should("be.visible");
    cy.log(this.KitData.Url+" Data Element has been exist in Filters");
    cy.wait(2000);

    //Validation for Filer Elements
    cy.get('[name="Text"]').scrollIntoView({ force: true });
    cy.get('[name="Text"]').should("be.visible");
    cy.log(this.KitData.Text+" Data Element has been exist in Filters");
    cy.wait(2000);

    //Validation for Filer Elements
    cy.get('[name="Telephone"]').scrollIntoView({ force: true });
    cy.get('[name="Telephone"]').should("be.visible");
    cy.log(this.KitData.Telephone+" Data Element has been exist in Filters");
    cy.wait(2000);

    //Validation for Filer Elements
    cy.get('[name="TextAera"]').scrollIntoView({ force: true });
    cy.get('[name="TextAera"]').should("be.visible");
    cy.log(this.KitData.TextAera+ " Data Element has been exist in Filters");
    cy.wait(2000);

    //Validation for Filer Elements
    //For Slider ,Currency,Measure and Number
    cy.get(".kit-form__control-label").should("exist");
    cy.log(
      "This class is Validate Slider, Currency, Measure and Number Data Elements in Filters"
    );

    //Validation for Filer Elements
    cy.get('[name="Email"]').scrollIntoView({ force: true });
    cy.get('[name="Email"]').should("be.visible");
    cy.log(this.KitData.Email+" Data Element has been exist in Filters");
    cy.wait(2000);

    cy.get('[name="Address"]').scrollIntoView({ force: true });
    cy.get('[name="Address"]').should("be.visible");
    cy.log(this.KitData.Address+" Data Element has been exist in Filters");
    cy.wait(2000);

    //Validation for Filer Elements
    cy.get('[placeholder="Add Time"]').first().should("be.visible");
    cy.log(this.KitData.Time+" Data Element has been exist in Filters");
    cy.wait(2000);

    //Validation for Filer Elements
    cy.get('[placeholder="Add Date"]').first().should("be.visible");
    cy.log(this.KitData.Date+ " Data Element has been exist in Filters");
    cy.wait(2000);

    //Validation for Filer Elements
    cy.contains(this.KitData.Toggle).should("exist");
    cy.log(this.KitData.Toggle+ " Data Element has been exist in Filters");
    cy.wait(2000);

    //Validation for Filer Elements
    cy.contains(this.KitData.SelectList).should("exist");
    cy.log(this.KitData.SelectList+ " Data Element has been exist in Filters");
    cy.wait(2000);

    //Validation for Filer Elements
    cy.contains(this.KitData.RadioSelect).should("exist");
    cy.log(this.KitData.RadioSelec+" Data Element has been exist in Filters");
    cy.wait(2000);

    //Validation for Filer Elements
    cy.contains(this.KitData.CheckboxSelect).should("exist");
    cy.log(this.KitData.CheckboxSelect+ " Data Element has been exist in Filters");
    cy.wait(2000);

    //Validation for Filer Elements
    cy.contains(this.KitData.Stepper).should("exist");
    cy.log(this.KitData.Stepper+" Data Element has been exist in Filters");
    cy.wait(2000);

    //Validation for Filer Elements
    cy.contains(this.KitData.UserSelector).scrollIntoView({ force: true });
    cy.contains(this.KitData.UserSelector).should("exist");
    cy.log(this.KitData.UserSelector+" Data Element has been exist in Filters");
    cy.wait(2000);

    //Validation for Filer Elements
    cy.contains(this.KitData.ContactSelector).should("exist");
    cy.log(this.KitData.ContactSelector+" Data Element has been exist in Filters");
    cy.wait(2000);

    //Validation for Filer Elements
    cy.contains(this.KitData.Assigning).should("exist");
    cy.log(this.KitData.Assigning+ " Data Element has been exist in Filters");
    cy.wait(2000);

    //Validation for Filer Elements
    cy.contains(this.KitData.Inspection).last().should("exist");
    cy.log(this.KitData.Inspection+" Data Element has been exist in Filters");
    cy.wait(2000);
  });
});
