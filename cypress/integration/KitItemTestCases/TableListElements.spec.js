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
    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
      KitTypeData
    ) {
      this.KitTypeData = KitTypeData;
    });

    cy.fixture("KitTypeTestData/KitItemDataValues").then(function (KitDataEle) {
      this.KitItemData = KitDataEle;
    });

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (KitName) {
      this.KitName = KitName;
    });

    cy.fixture("KitBuilderTestData/ListViewElementsData").then(function (
      ListViews
    ) {
      this.ListView = ListViews;
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
    cy.wait(10000)
  });

  it('Validate the Filter Elements',function(){
    
    //Page Object
    const lp = new LoginPage();
    lp.FilterIcon()

    //Validation for Elements
    cy.get('[name="Url"]').should('be.visible')
    cy.wait(2000)

    //Validation for Elements
    cy.get('[name="Text"]').should('be.visible')
    cy.wait(2000)

    //Validation for Elements
    cy.get('[name="Telephone"]').should('be.visible')
    cy.wait(2000)

    cy.get('[name="TextAera"]').should('be.visible')
    cy.wait(2000)

    cy.get('[name="Email"]').should('be.visible')
    cy.wait(2000)

    cy.get('[name="Address"]').should('be.visible')
    cy.wait(2000)

    // cy.get('[]').should('be.visible')

    // cy.get('[]').should('be.visible')

    // cy.get('[]').should('be.visible')

    // cy.get('[]').should('be.visible')




  })






});
