import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";
import RandomString from "../PageObject/RandomString";

describe("KitBuilder's Element Read and Required Property Validation On UI ", function () {
  this.beforeAll(function () {
    //Page Object
    const lp = new LoginPage();
    cy.visit("http://serviceproviders.ca-build.com/Public/Login?ReturnUrl=%2F");
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
    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      datatypes
    ) {
      this.DataType = datatypes;
    });
  });

  it("Navigating to Created KitType New Form", function () {
    const kb = new KitBuilderPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    kb.KitBuilderUrl();
    cy.wait(3000);
    //Open Craeted Kit Type
    cy.contains(this.RRProp.KitName).click({ force: true });
    cy.wait(3000);
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains(this.Data.NewView).click({ force: true });
    cy.wait(5000);
  });

  it("Read and Required Property Vlaidation", function () {
    //Click on Url
    cy.getIframeBody().find('[placeholder="Url"]').click({ force: true });
    cy.wait(2000);
    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(2).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on  Text
    cy.getIframeBody().find('[placeholder="Text"]').click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq().check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(2).should("be.checked");
    cy.log("IsRequired Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on File
    cy.getIframeBody()
      .find('[placeholder="Tooltip for File"]')
      .click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("IsRequired Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on Telephone
    cy.getIframeBody().find('[placeholder="Telephone"]').click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("IsRequired Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on TextAera
    cy.getIframeBody().contains("Text Area").click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("IsRequired Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on Slider
    cy.getIframeBody().contains("Slider").click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("IsRequired Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on Currency
    cy.getIframeBody().find('[placeholder="Currency"]').click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("IsRequired Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on Measure
    cy.getIframeBody().find('[placeholder="Measure"]').click({ force: true });
    cy.wait(3000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked for Measure(Assertion Passed)");
    cy.wait(1000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("IsRequired Has been Checked for Measure(Assertion Passed)");
    cy.wait(2000);

    //Click on Email
    cy.getIframeBody().find('[placeholder="Email"]').click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("IsRequired Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on Address
    cy.getIframeBody().find('[placeholder="Address"]').click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("IsRequired Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on Number
    cy.getIframeBody().find('[placeholder="Number"]').click({ force: true });
    cy.wait(2000);

    //Click on ReadOnly to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("ReadOnly Has been Checked(Assertion Passed)");
    cy.wait(1000);

    //Click on IsRequired to Check
    cy.get('[type="checkbox"]').eq(1).check();
    //Assertion for if it is checked or not
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.log("IsRequired Has been Checked(Assertion Passed)");
    cy.wait(1000);
  });
});
