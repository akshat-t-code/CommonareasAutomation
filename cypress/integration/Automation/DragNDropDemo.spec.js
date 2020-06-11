import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Copy New Form Elements to the Edit View", function () {
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

  it("Navigating to New Form of Created Kit Type", function () {
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
    cy.contains(this.data.NewView).click({ force: true });
    cy.wait(5000);
  });

  it("Drag n Drop Demo", function () {
    //Drag n Drop
    cy.contains('Inputs').click({force:true})
    cy.wait(2000)
    cy.getIframeBody().find("#wrapper").should('exist')
    cy.wait(2000)
    cy.getIframeBody().find("#wrapper").click().as("Target");
    cy.get('[title="Url"]').drag("@Target");
    



    //cy.get('.control-text > img').drag('@Target')
    //getIframeBody().find('.layout ').should('exist')
    //getIframeBody().find('#v-mount').should('exist')
    // getIframeBody().find('.v-application--wrap').should('exist')
    // getIframeBody().find('[data-gjs-type="wrapper"]').should('exist')
    // getIframeBody().find('#v-app').should('exist')
    //getIframeBody().find('[title="Url"]').should('exist')
  });
});
