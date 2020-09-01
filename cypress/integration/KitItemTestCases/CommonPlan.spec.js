import LoginPage from "../PageObject/LoginPage";

describe("CommonPlan Test Case", function () {
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
    cy.fixture(
      "KitTypeTestData/CommonPlanKitType"
    ).then(function (KitName) {
      this.KitName = KitName;
    });
  });

  it.only("Open Created Kit type form left Panel", function () {
    //Page Object
    const lp = new LoginPage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    cy.wait(10000);
    //Click on Hamburger Icon
    lp.HMBIcon();
    cy.contains(this.KitName.KitName).scrollIntoView({
      force: true,
    });
    cy.wait(5000);
    //Open KitType from left paneal
    cy.contains(this.KitName.KitName).click({
      force: true,
    });
    cy.wait(5000);
  });

  it.only("CommonPlan Tab", function () {
    //Click on First kit item of kit type to open edit view
    cy.get(
      "#action_items_list > div.fill-height.col > div > div > div.left-panel-top-panel-menu > div:nth-child(3) > div:nth-child(1) > div > div.d-flex.kit-item-list.list-item-col-right.col.row-list-item-details"
    ).click({ force: true });
    cy.wait(3000);
    //Click on Common Plan Tab
    cy.contains("Common Plans").click({ force: true });
    cy.wait(1000);
    //Click on Add Icon
    cy.get(".ml-4").click({ force: true });
    cy.wait(2000);
    cy.get('[placeholder="Plan Name"]').type(this.KitName.CommonPlanName)
    cy.get(".new-kit-space-planner-wrapper__save > .v-btn__content")
    .click({ force: true });
    cy.contains('Plan created').should('be.visible')
  });

  it("Open Related KitItem in CommonPlan(LayOut) ", function () {
    //Click to expend Related Kit Items
    cy.get(".group:nth-child(1) > .group-label").click({ force: true });
    cy.wait(3000);

    //Double Click on Kit Item
    // cy.get('[data-type="kit.InteractiveShape"]').eq(0).dblclick({force:true})
    cy.get('[data-tooltip="NotificationsTest 134534534"]').dblclick({
      force: true,
    });
  });

  it.only("Draging KitItem", function () {
    //Click to expend Related Kit Items
    cy.get(".group:nth-child(1) > .group-label").click({ force: true });
    cy.wait(3000);

    //Dragging KitItem on LayOut
    cy.get('[data-tooltip="NotificationsTest 134534534"]').drag(
      ".center-column"
    );

    //Save LayOut
    //cy.get(' button.new-kit-space-planner-wrapper__save.ca-button-green.v-btn.v-btn--depressed.v-btn--flat.v-btn--outlined.v-btn--text.theme--light.v-size--default.visible')
    cy.get(".new-kit-space-planner-wrapper__save > .v-btn__content")
    .click({ force: true });
  });
});
