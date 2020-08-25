import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";

describe("Negative Test Case for Validate TableList Filters Element on UI", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    lp.visitServiceBuild();
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
    cy.fixture("KitBuilderValidationTestData/TableListFilterValidation").then(
      function (KitName) {
        this.KitName = KitName;
      }
    );

    cy.fixture("KitTypeTestData/KitItemDataValues").then(function (KitDataEle) {
      this.KitItemData = KitDataEle;
    });

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType2 = NewDataForElements;
    });

    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      DataEleValues
    ) {
      this.KitData = DataEleValues;
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
    cy.contains(this.KitName.TableListEleValidation2).scrollIntoView({
      force: true,
    });
    cy.wait(5000);
    //Open KitType from left paneal
    cy.contains(this.KitName.TableListEleValidation2).click({ force: true });
    cy.wait(10000);
  });

  it("Click on Filter btn", function () {
    //Page Object
    const lp = new LoginPage();
    lp.FilterIcon();
    cy.wait(3000);
  });

  it("Validate the Filter Url Element(Negative)", function () {
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .last()
      .should("not.be.visible");
    cy.log(this.KitData.Url + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Text Element(Negative)", function () {
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .last()
      .should("not.be.visible");
    cy.log(this.KitData.Text + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Telephone Element(Negative)", function () {
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .last()
      .should("not.be.visible");
    cy.log(this.KitData.Telephone + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter TextAera Element(Negative)", function () {
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .last()
      .should("not.be.visible");
    cy.log(this.KitData.TextAera + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Slider, Currency, Measure and Number Element(Negative)", function () {
    //Validation for Filer Elements
    //For Slider ,Currency,Measure and Number
    cy.get(".kit-form__control-label").should("not.exist");
    cy.log("not exist in DOM");
  });

  it("Validate the Filter Email Element(Negative)", function () {
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .last()
      .should("not.be.visible");
    cy.log(this.KitData.Email + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Address Element(Negative)", function () {
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .last()
      .should("not.be.visible");
    cy.log(this.KitData.Address + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Time Element(Negative)", function () {
    //Validation for Filer Elements
    cy.get('[placeholder="Add Time"][type="text"]').should("not.be.visible");
    cy.log(this.KitData.Time + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Date Element(Negative)", function () {
    //Validation for Filer Elements
    cy.get('[placeholder="Add Date"][type="text"]').should("not.be.visible");
    cy.log(this.KitData.Date + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Toggle Element(Negative)", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.Toggle).should("not.exist");
    cy.log(this.KitData.Toggle + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter SelectList Element(Negative)", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.SelectList).should("not.exist");
    cy.log(this.KitData.SelectList + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter RadioSelect Element(Negative)", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.RadioSelect).should("not.exist");
    cy.log(this.KitData.RadioSelec + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter CheckboxSelect Element(Negative)", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.CheckboxSelect).should("not.exist");
    cy.log(this.KitData.CheckboxSelect + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Stepper Element(Negative)", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.Stepper).should("not.exist");
    cy.log(this.KitData.Stepper + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter UserSelector Element(Negative)", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.UserSelector).scrollIntoView({ force: true });
    cy.contains(this.DataType2.UserSelector).should("not.exist");
    cy.log(this.KitData.UserSelector + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter ContactSelector Element(Negative)", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.ContactSelector).should("not.exist");
    cy.log(this.KitData.ContactSelector + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Assigning Element(Negative)", function () {
    //Validation for Filer Elements
    cy.contains(this.DataType2.Assigning).should("not.exist");
    cy.log(this.KitData.Assigning + " Data Element not exist in Filters");
    cy.wait(2000);
  });

  it("Validate the Filter Inspection Element(Negative)", function () {
    //Validation for Filer Elements
    //cy.get('[name="Inspection"]').should("be.visible");
    cy.get("[name" + "=" + this.DataType2.Inspection + "]").should(
      "not.be.visible"
    );
    //cy.contains(this.KitData.Inspection).last().should("exist");
    cy.log(this.KitData.Inspection + " Data Element not in Filters");
    cy.wait(2000);
  });

  it("Default filter Created On", function () {
    cy.get('[placeholder="Created On"][type="text"]').should("exist");
    cy.log("Created On Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it("Default filter Created By", function () {
    cy.get('[placeholder="Created By"][type="text"]').should("exist");
    cy.log("Created By Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it("Default filter Modified By", function () {
    cy.get('[placeholder="Modified By"][type="text"]').scrollIntoView({
      force: true,
    });
    cy.get('[placeholder="Modified By"][type="text"]').should("exist");
    cy.log("Modified By Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it("Default filter Modified On", function () {
    cy.get('[placeholder="Modified On"][type="text"]').should("exist");
    cy.log("Modified By Default filter has been exist in Filters");
    cy.wait(2000);
  });

  it("Default filter Item Id", function () {
    cy.get('[placeholder="Item Id"]').last().scrollIntoView({ force: true });
    cy.get('[placeholder="Item Id"]').last().should("exist");
    cy.log("Default filter Item Id has been exist in Filters");
    cy.wait(2000);
  });

  it("Default filter Distance", function () {
    cy.get('[name="Location(GPS)"][placeholder="Distance"]').should("exist");
    cy.log("Default filter Distance has been exist in Filters");
    cy.wait(2000);
  });
});
