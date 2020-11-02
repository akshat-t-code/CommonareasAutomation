import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";
import SanityLoginPage from "../PageObject/SanityLoginPage";

describe("New kit item Map tab", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    const slp = new SanityLoginPage();
    slp.visitServiceBuild();

    //Handling Alert
    cy.on("window:confirm", () => {
      cy.log("Alert has been Handled");
    });

    //Login Assertions
    cy.contains(" Log In ").should("be.visible");
    //Enter credentials
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.log("User has been Logged In into the application");

    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.wait(10000);
  });

  this.beforeEach("KitType Data", function () {
    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
      KittypeName
    ) {
      this.KitTypeName = KittypeName;
    });

    cy.fixture("KitTypeTestData/NewKitItemDataValues").then(function (
      KitDataEle
    ) {
      this.NewKitItemData = KitDataEle;
    });

    cy.fixture("SanityPackTestData/NewKitItemTabsData").then(function (
      SanityTCData
    ) {
      this.SData = SanityTCData;
    });

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType2 = NewDataForElements;
    });

    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (
      KitTypeFormViewsNames
    ) {
      this.ViewName = KitTypeFormViewsNames;
    });
  });

  it.only("Navigating to created Kit type ", function () {
    cy.wait(10000);
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    //debugger;
    //Click on To open Kit Type
    KTP.SearchKitType(this.NewKitItemData.KitName);
    cy.wait(3000);
    //This is class to open searched kit type by clicking + iocn
    cy.get(".truncate-special").first().click({ force: true });
    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.log("New Item created and Kit Type has been Opened");
  });

  it("Add a pin on Map", function () {
    //Map Tab
    cy.contains(" Map ").click({ force: true });
    cy.wait(4000);
    //Click on Map
    cy.get(
      ".vue-map-container:nth-child(2) .gm-style > div:nth-child(1) > div:nth-child(3)"
    ).click({ force: true });
    cy.contains("Add a Pin").click({ force: true });
    cy.contains(" Location created ").should("be.visible");
    cy.wait(3000);
    //Click on save
    cy.get(
      ".v-dialog__content:nth-child(1) .fill-height:nth-child(3) .v-btn__content:nth-child(1)"
    ).click();
    cy.contains(this.NewKitItemData.KitName + " has been saved").should(
      "be.visible"
    );
    cy.wait(5000);
  });

  it('Set to "Address" control on Map', function () {
    cy.contains(" Map ").click({ force: true });
    cy.wait(2000);
    //Click on Map
    cy.get(
      ".vue-map-container:nth-child(2) .gm-style > div:nth-child(1) > div:nth-child(3)"
    ).click({ force: true });
    cy.wait(5000);
    cy.contains('Set to "Address" control').click({ force: true });
    //Pop up assertion
    cy.contains(
      'Would you like to set the "Address" to selected location'
    ).should("be.visible");
    cy.wait(2000);
    cy.get(".mb-4:nth-child(1) .v-btn__content").click({ force: true });

    //Click on save
    cy.get(".v-select__selections .v-btn__content").click({ force: true });
    cy.contains(this.NewKitItemData.KitName + " has been saved").should(
      "be.visible"
    );
    cy.wait(5000);
  });

  it.only("Link Existing Relation On Map", function () {
    //Click on Map tab
    cy.contains(" Map ").click({ force: true });
    cy.wait(2000);
    //Click on Map
    cy.get(
      ".vue-map-container:nth-child(2) .gm-style > div:nth-child(1) > div:nth-child(3)"
    ).click({ force: true });
    cy.wait(5000);
    //Related Kit type
    cy.contains("Link Existing " + this.DataType2.OneToManyRelation).click({
      force: true,
    });
    cy.wait(3000);
    //Search List view pop up assertion
    cy.contains(this.ViewName.SearchView).should("be.visible");
    //Selct the to be linked kit item
    cy.get(".thumb-selected-icon").eq(0).click();
    cy.get(".thumb-selected-icon").eq(1).click();
    cy.get(".thumb-selected-icon").eq(2).click();
    cy.get(".thumb-selected-icon").eq(3).click();
    cy.wait(2000);
    //Click on select btn
    cy.get(".button-pop-ups > .v-btn__content").click({ force: true });
    cy.contains(
      " Relation on " +
        this.DataType2.OneToManyRelation +
        " for Validation linked "
    ).should("be.visible");
    //Click on save
    cy.get(".v-select__selections .v-btn__content").click({ force: true });
    cy.contains(this.NewKitItemData.KitName + " has been saved").should(
      "be.visible"
    );
    cy.wait(5000);
  });

  it("Add Relation On Map", function () {
    //Click on Map tab
    // cy.contains(" Map ").click({ force: true });
    // cy.wait(2000);

    //Click on Map
    cy.get(
      ".vue-map-container:nth-child(2) .gm-style > div:nth-child(1) > div:nth-child(3)"
    ).click({ force: true });
    cy.wait(5000);

    ////Add Relation
    cy.contains("Add " + this.DataType2.OneToManyRelation).click({
      force: true,
    });

    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.wait(1000);
    //Related New Kit Item assertion
    cy.contains(this.DataType2.KitToBeRelated).should("be.visible");
    cy.wait(3000);
    //Url
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .eq(1)
      .type(this.NewKitItemData.Url);
    cy.wait(1000);

    //Text
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .eq(1)
      .type(this.NewKitItemData.Text);
    cy.wait(1000);

    //File
    cy.get(".link-icon--green > path").eq(0).click({ force: true });
    cy.wait(3000);
    cy.get(".thumb-container:nth-child(5) .selected-icon").click({
      force: true,
    });
    //Click on save
    cy.get(
      ".container-search > .pop-up--header > .pop-up--header--right > .button-pop-ups--size > .v-btn__content"
    ).click({ force: true });
    cy.contains("File saved").should("be.visible");
    cy.log("File Saved");
    cy.wait(1000);

    //Telephone
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .eq(1)
      .type(this.NewKitItemData.Telephone);
    cy.wait(1000);

    //TextAera
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .eq(1)
      .type(this.NewKitItemData.TextAera);
    cy.wait(1000);

    // Currency;
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-currency.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-currency--right.ma-0.pa-0.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(this.NewKitItemData.Currency);

    //Measure

    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-measure.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-measure--left.ma-0.pa-0.pr-2.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(this.NewKitItemData.Measure);

    //Email;
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .eq(1)
      .type(this.NewKitItemData.Email);
    cy.wait(1000);

    //Click on save
    cy.get(
      ".v-dialog__content:nth-child(1) .fill-height:nth-child(3) .v-btn__content:nth-child(1)"
    ).click();

    //Related kit item on map Save Assertion
    cy.contains(this.DataType2.KitToBeRelated + " has been saved").should(
      "be.visible"
    );
    //Related kit item created assertion
    cy.contains(
      " Relation on " +
        this.DataType2.OneToManyRelation +
        " for Validation created"
    ).should("be.visible");
    //Parent kit type save assertion
    cy.contains(this.NewKitItemData.KitName + " has been saved").should(
      "be.visible"
    );
  });
});
