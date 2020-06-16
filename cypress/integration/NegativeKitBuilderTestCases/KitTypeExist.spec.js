import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";

describe("KitTypeName already exists.", function () {
  this.beforeAll(function () {
    const lp = new LoginPage();
    cy.visit("http://serviceproviders.ca-build.com/Public/Login?ReturnUrl=%2F");
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.wait(10000);
  });


  this.beforeEach("Fixtures file data for kit type", function () {
   
    cy.fixture("NegativeKitBuilderTestData/KitTypeExist").then(function (KitType) {
      this.KT = KitType;
    });

  });

  it("Kit Type Already Exist", function () {
    const kb = new KitBuilderPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    kb.AdminUrl();
    cy.wait(5000);
    kb.ClickOnKitBuilder();
    cy.log('Here we are on Kit Builder')
    kb.ClickOnCreateNewKit();
    cy.wait(5000);
    //For Creating New Kit type commands coming form Command.js
    cy.KitLabel(this.KT.KitLabel);
    cy.KitName(this.KT.KitName);
    cy.KitDescription(this.KT.KitDescription);
    cy.KitIcon();
    cy.CreateKitType();
    cy.contains('Unable to create kit type').should('be.visible') 
    cy.log('KitTypeName already exists.Can not create Kit Type')
    //Assertion msg close
    cy.wait(5000)
    cy.get('.v-btn__content > .theme--dark').click();
    
  });

})