import LoginPage from "../PageObject/LoginPage";

describe("CommonPlan Test Case", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    lp.visitServiceBuild();
    lp.EnterEmail("dzhao@commonareas.work.dev");
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
    cy.fixture("KitTypeTestData/CommonPlanKitType").then(function (KitName) {
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
    cy.contains(this.KitName.CommonPlanKitName).scrollIntoView({
      force: true,
    });
    cy.wait(5000);
    //Open KitType from left paneal
    cy.contains(this.KitName.CommonPlanKitName).click({
      force: true,
    });
    cy.log("Kit Type has been OPened");
    cy.wait(5000);
  });

  it("CommonPlan Tab", function () {
    //Click on First kit item of kit type to open edit view
    cy.get(
      "#action_items_list > div.fill-height.col > div > div > div.left-panel-top-panel-menu > div:nth-child(3) > div:nth-child(1) > div > div.d-flex.kit-item-list.list-item-col-right.col.row-list-item-details"
    ).click({ force: true });
    cy.log("Kit Item Detail View has been Opened");
    cy.wait(3000);
    //Click on Common Plan Tab
    cy.contains("Common Plans").click({ force: true });
    cy.wait(1000);

    /*
    //Click on Add Icon
    cy.get(".ml-4").click({ force: true });
    cy.log("Common Plan Board has been Opened");
    cy.wait(2000);

    //Creating Plan
    cy.get('[placeholder="Plan Name"]').type(this.KitName.CommonPlanName);
    //Click on save btn to create common plan
    cy.get(".new-kit-space-planner-wrapper__save > .v-btn__content").click({
      force: true,
    });
    cy.log("Common Plan created and Saved");
    cy.contains("Plan created").should("be.visible");
    cy.wait(2000);
    //Exit the Plan
    cy.get(".new-kit-space-planner-wrapper__exit path").click({ force: true });
    cy.log("Taken Exit form Layout Mode");
    cy.wait(2000);

    */

    //To click on Created CommonPlan(CP)
    //NOte-Indexes use for if there are more than one common plan---for 1st CP index is 0,for 2nd it would be 1 ,and so on
    cy.get(".space-planner-card--name").eq(0).click({ force: true });
    cy.wait(2000);
    //Click on Layout
    cy.get('[value="EDIT"]').click({ force: true });
    cy.log("Common Plan has Opened in LayOut Mode");
    cy.wait(2000);
    // cy.get(".group:nth-child(1) > .group-label").click({ force: true });
    // cy.wait(2000);
    // //DoubleClick on the related Item
    // cy.get('[data-tooltip="99Acres"]').dblclick({
    //   force: true,
    // });
  });

  it("Open Related KitItem in CommonPlan(LayOut) ", function () {
    //Click to expend Related Kit Items
    //cy.get(".group:nth-child(1) > .group-label").click({ force: true });
    // cy.get('[data-name="propertyrelation"]').click({ force: true });
    // cy.wait(3000);
    // cy.get('[data-name="propertyrealtioncard"]').click({ force: true });
    // cy.wait(3000);
    // cy.get('[data-name="onetooneproject"]').click({ force: true });
    // cy.wait(3000);

    cy.get(".group:nth-child(1) > .group-label").click();
    cy.wait(2000);
    cy.get(".group:nth-child(1) > .group-label").click();
    cy.wait(2000);
    cy.get(".group:nth-child(3) > .group-label").click();
    cy.wait(2000);
    cy.get(".group:nth-child(3) > .group-label").click();
    cy.wait(2000);
    cy.get(".group:nth-child(5) > .group-label").click();
    cy.wait(2000);
    cy.get(".group:nth-child(5) > .group-label").click();
    cy.wait(2000);

    //Double Click on Kit Item
    // cy.get('[data-type="kit.InteractiveShape"]').eq(0).dblclick({force:true})
    //  cy.get('[data-tooltip="NotificationsTest 134534534"]').dblclick({
    //   force: true,
    // });
    cy.get(".group:nth-child(1) > .group-label").click();
    cy.wait(2000);
    cy.get('[data-tooltip="99Acres"]').dblclick({
      force: true,
    });
  });

  it.only("Draging KitItem on Layout", function () {
    //Click on First kit item of kit type to open edit view
    cy.get(
      "#action_items_list > div.fill-height.col > div > div > div.left-panel-top-panel-menu > div:nth-child(3) > div:nth-child(1) > div > div.d-flex.kit-item-list.list-item-col-right.col.row-list-item-details"
    ).click({ force: true });
    cy.log("Kit Item Detail View has been Opened");
    cy.wait(3000);
    //Click on Common Plan Tab
    cy.contains("Common Plans").click({ force: true });
    cy.wait(1000);

    /*
    //Click on Add Icon
    cy.get(".ml-4").click({ force: true });
    cy.log("Common Plan Board has been Opened");
    cy.wait(2000);

    //Creating Plan
    cy.get('[placeholder="Plan Name"]').type(this.KitName.CommonPlanName);
    //Click on save btn to create common plan
    cy.get(".new-kit-space-planner-wrapper__save > .v-btn__content").click({
      force: true,
    });
    cy.log("Common Plan created and Saved");
    cy.contains("Plan created").should("be.visible");
    cy.wait(2000);
    //Exit the Plan
    cy.get(".new-kit-space-planner-wrapper__exit path").click({ force: true });
    cy.log("Taken Exit form Layout Mode");
    cy.wait(2000);

    */

    //To click on Created CommonPlan(CP)
    //NOte-Indexes use for if there are more than one common plan---for 1st CP index is 0,for 2nd it would be 1 ,and so on
    cy.get(".space-planner-card--name").eq(0).click({ force: true });
    cy.wait(2000);
    //Click on Layout
    cy.get('[value="EDIT"]').click({ force: true });
    cy.log("Common Plan has Opened in LayOut Mode");
    cy.wait(2000);

    //Click to 1st expend Related Kit Items
    cy.get(".group:nth-child(1) > .group-label").click({ force: true });
    cy.wait(3000);

    //Dragging KitItem on LayOut
    cy.get('[data-tooltip="99Acres"]').drag(".center-column");
    cy.log("Kit Item dragged on Layout");

    cy.wait(3000);

    //Click to expend 2nd Related Kit Items
    cy.get(".group:nth-child(3) > .group-label").click({ force: true });
    //Dragging KitItem on LayOut
    cy.get('[data-tooltip="CommonPlan"]').drag(".center-column");
    cy.log("Kit Item dragged on Layout");

    //Save LayOut
    cy.get(".new-kit-space-planner-wrapper__save > .v-btn__content").click({
      force: true,
    });
    cy.log("Common Plan Saved");
  });
});
