import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";

describe("Basic Test Case for Element interaction for common area DT", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
   // lp.visit();
   cy.visit('https://serviceproviders.ca-test.com/#/')
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
    cy.fixture("KitTypeTestData/CypressAutomation").then(function (data) {
      this.Kit = data;
    });

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (KitTypeData) {
      this.KitTypeData = KitTypeData;
    });

    cy.fixture("KitTypeTestData/KitTtypeDataElements").then(function (
      KitDataEle
    ) {
      this.KitData = KitDataEle;
    });
  });

  it.only("Kit Type Open", function () {
    //cy.wait(5000)
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    //debugger;
    //Click on To open Kit Type
    KTP.SearchKitType(this.Kit.KitName2);
    KTP.OpenKitType(this.Kit.KitName2);

    // KTP.SearchKitType('Work Order');
    // KTP.OpenKitType('Work Order');
    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.log("New Item created and Kit Type has been Opened");
  });

  it.only('Values',function(){

    cy.get('[placeholder="Name"]').type('Tension m');
    cy.wait(5000)
    //save
    cy.get('.v-select__selections .v-btn__content').click({force:true});
    //close 
    cy.wait(5000)
    cy.get('.subheader--button-icon-wrapper .inline-svg').click({force:true});
  })

  it('Work Order Kit TYpe',function(){
      cy.get('[placeholder="Work Order Name"]').type('Work Order Tension main')
      //save
      cy.get('.v-select__selections .v-btn__content').click({force:true});
      //close 
      cy.wait(5000)
      cy.get('.subheader--button-icon-wrapper .inline-svg').click({force:true});
      cy.get('.subheader--button-icon-wrapper .inline-svg').click({force:true});

  })

  it("Kit Item Saved", function () {
    cy.wait(5000)
    //Click on Save
    cy.get(".navi-bar-dropdown:nth-child(2) .v-btn__content").click({force:true});
    cy.log("Kit item has been saved");
    //Click on Close the kit item
    cy.wait(5000)
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({force:true});
    cy.contains('Discard').click({force:true});
  });

})