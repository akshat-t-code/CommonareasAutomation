import LoginPage from "../PageObject/LoginPage";

describe("CommonPlan Test Case for Related KitItem", function () {
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
    cy.fixture("KitTypeTestData/CommonPlanRelKitItemData").then(function (
      CommonPlanRelatedKitItemData
    ) {
      this.CPRelKitItemData = CommonPlanRelatedKitItemData;
    });

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType2 = NewDataForElements;
    });

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

  it.only("CommonPlan Tab", function () {
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

    cy.get(".group:nth-child(1) > .group-label").click({ force: true });
    cy.wait(2000);
    //DoubleClick on the related Item
    cy.get('[data-tooltip="99Acres"]').dblclick({ force: true });
    cy.wait(3000);
    // cy.get("[name" + "=" + this.DataType2.Url + "]")
    //   .eq(1).clear()
    //   .type(this.CPRelKitItemData.Url);
    // cy.wait(1000);
  });

  it("Open Related KitItem in CommonPlan(LayOut) ", function () {
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

    cy.get(".group:nth-child(1) > .group-label").click({ force: true });
    cy.wait(2000);
    //DoubleClick on the related Item
    cy.get('[data-tooltip="99Acres"]').dblclick({ force: true });
  });

  it.only("Details View Form Edit", function () {
    //Url
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .eq(1)
      .clear()
      .type(this.CPRelKitItemData.Url);
    cy.wait(1000);

    //Text
    cy.get("[name" + "=" + this.DataType2.Text + "]")

      .eq(1)
      .clear()
      .type(this.CPRelKitItemData.Text);
    cy.wait(1000);

    //File
    //Click on cross
    cy.get(".v-icon--link:nth-child(2)").click();
    cy.wait(1000);
    cy.contains(" Discard ").click();
    cy.wait(1000);

    // cy.get(".link-icon--green > path").first().click({ force: true });
    // cy.wait(3000);
    // cy.get(".thumb-container:nth-child(5) .selected-icon").click({
    //   force: true,
    // });
    // cy.get(
    //   ".container-search > .pop-up--header > .pop-up--header--right > .button-pop-ups--size > .v-btn__content"
    // ).click({ force: true });
    // cy.wait(1000);

    //Telephone
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")

      .eq(1)
      .clear()
      .type(this.CPRelKitItemData.Telephone);
    cy.wait(1000);

    //TextAera
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")

      .eq(1)
      .clear()
      .type(this.CPRelKitItemData.TextAera);
    cy.wait(1000);

    //Slider;

    // Currency;
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-currency.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-currency--right.ma-0.pa-0.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .clear()
      .type(this.CPRelKitItemData.Currency);

    //Measure

    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-measure.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-measure--left.ma-0.pa-0.pr-2.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .clear()
      .type(this.CPRelKitItemData.Measure);

    //Email;
    cy.get("[name" + "=" + this.DataType2.Email + "]")

      .eq(1)
      .clear()
      .type(this.CPRelKitItemData.Email);
    cy.wait(1000);
  });
});
