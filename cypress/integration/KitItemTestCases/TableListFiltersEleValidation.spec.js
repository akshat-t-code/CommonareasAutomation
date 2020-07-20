import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";

describe("Validate TableList's Filters Element for Created Kit Type on UI", function () {
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

    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      DataEleValues
    ) {
      this.KitData = DataEleValues;
    });

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (KitName) {
      this.KitName = KitName;
    });
  });

  it.only("Open Created Kit type As List View", function () {
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

  
  it.only("Click on Filter btn", function () {
    //Page Object
    const lp = new LoginPage();
    lp.FilterIcon();
    cy.wait(3000);
  });

  it.only("Validate the Filter Url Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Url"]').last().scrollIntoView({ force: true });
    cy.get('[name="Url"]').last().should("be.visible");
    cy.log(this.KitData.Url + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Validate the Filter Text Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Text"]').last().scrollIntoView({ force: true });
    cy.get('[name="Text"]').last().should("be.visible");
    cy.log(this.KitData.Text + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Validate the Filter Telephone Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Telephone"]').last().scrollIntoView({ force: true });
    cy.get('[name="Telephone"]').last().should("be.visible");
    cy.log(this.KitData.Telephone + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Validate the Filter TextAera Element", function () {
    //Validation for Filer Elements
    cy.get('[name="TextAera"]').last().scrollIntoView({ force: true });
    cy.get('[name="TextAera"]').last().should("be.visible");
    cy.log(this.KitData.TextAera + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Validate the Filter Slider, Currency, Measure and Number Element", function () {
    //Validation for Filer Elements
    //For Slider ,Currency,Measure and Number
    cy.get(".kit-form__control-label").should("exist");
    cy.log(
      "This class is Validate Slider, Currency, Measure and Number Data Elements in Filters"
    );
  });

  it.only("Validate the Filter Email Element", function () {
    //Validation for Filer Elements
    cy.get('[name="Email"]').last().scrollIntoView({ force: true });
    cy.get('[name="Email"]').last().should("be.visible");
    cy.log(this.KitData.Email + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Validate the Filter Address Element", function () {
    cy.get('[name="Address"]').last().scrollIntoView({ force: true });
    cy.get('[name="Address"]').last().should("be.visible");
    cy.log(this.KitData.Address + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Validate the Filter Time Element", function () {
    //Validation for Filer Elements
    cy.get('[placeholder="Add Time"][type="text"]').should("be.visible");
    cy.log(this.KitData.Time + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Validate the Filter Date Element", function () {
    //Validation for Filer Elements
    cy.get('[placeholder="Add Date"][type="text"]').should("be.visible");
    cy.log(this.KitData.Date + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Validate the Filter Toggle Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.Toggle).should("exist");
    cy.log(this.KitData.Toggle + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Validate the Filter SelectList Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.SelectList).should("exist");
    cy.log(this.KitData.SelectList + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Validate the Filter RadioSelect Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.RadioSelect).should("exist");
    cy.log(this.KitData.RadioSelec + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Validate the Filter CheckboxSelect Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.CheckboxSelect).should("exist");
    cy.log(
      this.KitData.CheckboxSelect + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it.only("Validate the Filter Stepper Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.Stepper).should("exist");
    cy.log(this.KitData.Stepper + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Validate the Filter UserSelector Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.UserSelector).scrollIntoView({ force: true });
    cy.contains(this.KitData.UserSelector).should("exist");
    cy.log(
      this.KitData.UserSelector + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it.only("Validate the Filter ContactSelector Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.ContactSelector).should("exist");
    cy.log(
      this.KitData.ContactSelector + " Data Element has been exist in Filters"
    );
    cy.wait(2000);
  });

  it.only("Validate the Filter Assigning Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.Assigning).should("exist");
    cy.log(this.KitData.Assigning + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Validate the Filter Inspection Element", function () {
    //Validation for Filer Elements
    cy.contains(this.KitData.Inspection).last().should("exist");
    cy.log(this.KitData.Inspection + " Data Element has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Default filter Created On", function () {
    cy.get('[placeholder="Created On"][type="text"]').should("exist");
    cy.log("Created On Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Default filter Created By", function () {
    cy.get('[placeholder="Created By"][type="text"]').should("exist");
    cy.log("Created By Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Default filter Modified By", function () {
    cy.get('[placeholder="Modified By"][type="text"]').scrollIntoView({
      force: true,
    });
    cy.get('[placeholder="Modified By"][type="text"]').should("exist");
    cy.log("Modified By Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Default filter Modified On", function () {
    cy.get('[placeholder="Modified On"][type="text"]').should("exist");
    cy.log("Modified By Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Default filter Item Id", function () {
    cy.get('[placeholder="Item Id"]').last().scrollIntoView({ force: true });
    cy.get('[placeholder="Item Id"]').last().should("exist");
    cy.log("Default filter Item Id has been exist in Filters");
    cy.wait(2000);
  });

  it.only("Default filter Distance", function () {
    
    cy.get('[name="Location(GPS)"][placeholder="Distance"]').should("exist");
    cy.log("Default filter Distance has been exist in Filters");
    cy.wait(2000);
  });

});
