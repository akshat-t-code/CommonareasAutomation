import LoginPage from "../PageObject/LoginPage";
import SanityLoginPage from "../PageObject/SanityLoginPage";

describe("Common Plan New Kit Item test case", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    const slp = new SanityLoginPage();
    slp.visitCityComTest();

    //Handling Alert
    cy.on("window:confirm", () => {
      cy.log("Alert has been Handled");
    });

    //Login Assertions
    cy.contains(" Log In ").should("be.visible");
    //Enter credentials
    lp.EnterEmail("citycom@commonareas.work.dev");
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

  this.beforeEach("Fixtures file data", function () {
    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.fixture("KitTypeTestData/NewKitItemDataValues").then(function (
      KitDataEle
    ) {
      this.NewKitItemData = KitDataEle;
    });

    cy.fixture("SanityPackTestData/CommonPlanTestData").then(function (
      SanityTCData
    ) {
      this.CommonPlanData = SanityTCData;
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

    cy.fixture("SanityPackTestData/DetailViewTestData").then(function (
      SanityTCData
    ) {
      this.DetailViewData = SanityTCData;
    });

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
      KittypeName
    ) {
      this.KitTypeName = KittypeName;
    });
  });

  it.only("Navigating to Kit Item list view", function () {
    const lp = new LoginPage();
    //Click on Hamburger Icon
    lp.HMBIcon();
    cy.wait(2000);
    cy.contains(this.NewKitItemData.KitName).scrollIntoView({
      force: true,
    });
    cy.wait(5000);
    //Open KitType from left paneal
    cy.contains(this.NewKitItemData.KitName).click({
      force: true,
    });
    cy.log("Kit Type has been OPened");
    cy.wait(5000);
    //Click on First kit item of kit type to open edit view
    cy.log("Kit Item Detail View has been Opened");
    cy.wait(3000);
    //Validation assertion for details view
    cy.get(".kits-landing--header-title").should(
      "have.text",
      " Recently Viewed "
    );

    //Created kit type existance assertion
    cy.contains(
      this.DataType2.Url + ":" + " " + this.DetailViewData.UrlData
    ).should("exist");
    cy.log("Created New Kit Item has been Exist");
    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.DetailViewData.UrlData
    ).click({ force: true });
    cy.wait(5000);
  });

  it("Create New Common Plan", function () {
    //Click on common plan tab
    cy.contains(" Common Plans ").click({ force: true });
    cy.wait(5000);

    //Click on Add Icon
    cy.get(
      " div.tab--content.col div.v-window.tab-content-wrapper.v-item-group.theme--light.v-tabs-items div.v-window__container div.v-window-item.v-window-item--active:nth-child(7) div.wrapper-tabs-content.v-card.v-sheet.theme--light div.v-card__text.kit-documents.fill-height div.row.container-details.fluid.fill-height.kit-details-space-planner.pa-8 div.details-wrapper.fill-height.col div.pr-4.col-sm-12.col:nth-child(2) div.fill-height div.container.xs12.mt-2.container--fluid.grid-list-lg div.row.justify-space-between:nth-child(1) div.col-md-5.col-lg-3.col-12 div.space-planner-card--add-new.hidden-sm-and-down.mb-2.v-card.v-sheet.v-sheet--tile.theme--light div.row.space-planner-card-container.pa-2.card-align.align-center div.d-flex.col.col-12 button.button-w-borders.ml-4.addBtn.v-btn.v-btn--flat.v-btn--text.theme--light.v-size--default > span.v-btn__content"
    ).click({ force: true });
    cy.log("Common Plan Board has been Opened");
    cy.wait(3000);
    //Common plan board assertion
    cy.contains(" Layout ").should("be.visible");
    cy.contains(" Schedule ").should("be.visible");
    cy.contains(" View ").should("be.visible");

    //Creating Plan
    cy.get('[placeholder="Plan Name"]').type(
      this.CommonPlanData.CommonPlanName
    );
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
    cy.contains(this.CommonPlanData.CommonPlanName).should("be.visible");
    cy.log("Common Plan Created");
    cy.wait(3000);
  });

  it("Copy and Delete Common Plan", function () {
    cy.wait(3000);

    //Click on copy plan
    cy.get(".space-planner-card--action-icon > .icon").click();
    cy.contains("Plan created").should("be.visible");
    cy.wait(2000);
    cy.contains("Copy of " + this.CommonPlanData.CommonPlanName).should(
      "be.visible"
    );
    cy.contains("Copy of " + this.CommonPlanData.CommonPlanName).click({
      force: true,
    });
    cy.wait(2000);
    //Common plan board assertion
    cy.contains(" Layout ").should("be.visible");
    cy.contains(" Schedule ").should("be.visible");
    cy.contains(" View ").should("be.visible");
    cy.wait(1000);

    cy.contains(" Layout ").click({ force: true });
    cy.wait(4000);
    cy.contains(this.DataType2.OneToManyRelation).click({ force: true });
    cy.wait(2000);
    cy.contains(this.DataType2.SquareCardName).click({ force: true });
    cy.wait(3000);

    //Exit the Plan
    cy.get(".new-kit-space-planner-wrapper__exit path").click({ force: true });
    cy.log("Taken Exit form Layout Mode");
    cy.wait(2000);

    //Click on delete Icon
    cy.get(".space-planner-card--action-icon path")
      .eq(0)
      .click({ force: true });
    cy.wait(2000);
    cy.contains("Are you sure you want to delete this plan?").should(
      "be.visible"
    );
    cy.contains("This action cannot be undone").should("be.visible");
    cy.wait(2000);
    //Click on delete
    cy.get(".mb-4:nth-child(1) .v-btn__content").click({ force: true });
    cy.contains("Plan deleted").should("be.visible");
    cy.contains("Copy of " + this.CommonPlanData.CommonPlanName).should(
      "not.be.visible"
    );
  });

  it.only("Create New Kit Item in Common Plan", function () {
    cy.wait(2000);
    cy.contains(this.CommonPlanData.CommonPlanName).click({ force: true });
    //Common plan board assertion
    cy.contains(" Layout ").should("be.visible");
    cy.contains(" Schedule ").should("be.visible");
    cy.contains(" View ").should("be.visible");
    cy.wait(2000);

    cy.contains(" Layout ").click({ force: true });
    cy.wait(2000);

    cy.contains(this.DataType2.OneToManyRelation).click({ force: true });
    cy.wait(1000);
    cy.get(".group:nth-child(1) > .toggle-menu-btn").click();
    cy.wait(2000);

    cy.contains("add").should("be.visible");
    //cy.contains("Refresh").should("be.visible");
    // cy.contains("Select All").should("be.visible");
    // cy.contains("Unselect All").should("be.visible");

    cy.get('[data-action="add"]').click({ force: true });

    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.wait(10000);

    //Url
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .eq(1)
      .type(this.CommonPlanData.Url);
    cy.wait(1000);

    //Text
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .eq(1)
      .type(this.CommonPlanData.Text);
    cy.wait(1000);

    //File
    cy.get(".link-icon--green > path").first().click({ force: true });
    cy.wait(3000);
    //give file name to select
    cy.contains(this.CommonPlanData.NewFormLibFileName).click({ force: true });
    // cy.get(".thumb-container:nth-child(5) .selected-icon").click({
    //   force: true,
    // });
    //Click on save file
    cy.wait(2000);
    cy.get(
      ".container-search > .pop-up--header > .pop-up--header--right > .button-pop-ups--size > .v-btn__content"
    ).click({ force: true });
    cy.contains("File saved").should("be.visible");
    cy.log("File Saved");
    cy.wait(1000);

    //Telephone
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .eq(1)
      .type(this.CommonPlanData.Telephone);
    cy.wait(1000);

    //TextAera
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .eq(1)
      .type(this.CommonPlanData.TextAera);
    cy.wait(1000);

    //Slider;
    //Firing Alert pop for manual action
    cy.log("User need to do something").then(() => {
      alert("Set Slider value by clicking slider Bar");
    });
    cy.log(
      "Firing Alert pop for manual action to Set Slider value by clicking slider Bar"
    );
    cy.wait(10000);

    // Currency;
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-currency.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-currency--right.ma-0.pa-0.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(this.CommonPlanData.Currency);

    //Measure

    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-measure.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-measure--left.ma-0.pa-0.pr-2.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(this.CommonPlanData.Measure);

    //Email;
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .eq(1)
      .type(this.CommonPlanData.Email);
    cy.wait(1000);

    //Address
    cy.get(
      '[placeholder="Street address, bulding, company ... "][name="Address"]'
    )
      .eq(0)
      .type(this.CommonPlanData.Addressline1);
    //Address line
    cy.get('[name="Address line 2."]')
      .eq(0)
      .type(this.CommonPlanData.Addressline2);

    cy.get('[placeholder="City"]').eq(0).scrollIntoView({ force: true });
    cy.wait(1000);

    //City
    cy.get('[placeholder="City"]').eq(0).type(this.CommonPlanData.City);
    //State
    cy.get(
      "div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    )
      .eq(1)
      .click({ force: true });
    cy.contains(this.CommonPlanData.State).click({ force: true });

    cy.get('[placeholder="Zip/Postal Code"]')
      .eq(0)
      .scrollIntoView({ force: true });
    cy.wait(1000);

    //ZipCode
    cy.get('[placeholder="Zip/Postal Code"]')
      .eq(0)
      .type(this.CommonPlanData.ZipCode);
    cy.wait(1000);

    //Number
    cy.get("[name" + "=" + this.DataType2.Number + "]")
      .eq(0)
      .type(this.CommonPlanData.Number);
    cy.wait(1000);

    //save Kit Item
    cy.get(".v-select__selections .v-btn__content")
      .first()
      .click({ force: true });

    cy.contains(this.DataType2.KitToBeRelated + " has been saved").should(
      "be.visible"
    );

    cy.contains(
      " Relation on " +
        this.DataType2.OneToManyRelation +
        " for " +
        this.NewKitItemData.KitName +
        " created "
    ).should("be.visible");

    cy.contains(this.NewKitItemData.KitName + " has been saved").should(
      "be.visible"
    );
    cy.log(this.NewKitItemData.KitName + "Kit Type has been Saved");
    cy.log("Partially saving Common Plan New form");
    cy.wait(5000);

    //Time Data Element
    //Click on Time to appear time pop up
    cy.get('[placeholder="Add Time"][type="text"]')
      .eq(0)
      .click({ force: true });
    cy.wait(1000);
    //Select hour value
    cy.xpath(
      "//div[contains(@class,'v-dialog v-dialog--active')]//span[2]"
    ).click({ force: true });
    cy.wait(1000);
    //Select Value of miniutes
    cy.xpath("//span[contains(text(),'30')]").first().click({ force: true });
    cy.wait(1000);
    //Click on PM
    cy.xpath("//div[contains(text(),'PM')]").click({ force: true });
    //Click on OK to save date
    cy.xpath(
      "//div[contains(@class,'v-dialog v-dialog--active')]//button[1]"
    ).click({ force: true });

    //Date Data Element
    //Click on Date to appear Date pop up
    cy.get(
      "div.v-input.no-bottom.date-picker-text-field.date-picker-text-field-direct.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder > div > div.v-input__slot > div.v-input__prepend-inner > i"
    )
      .eq(0)
      .click({ force: true });
    //Select Date
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'28')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    //Click on OK to save Date
    cy.xpath("//span[contains(text(),'OK')]").first().click({ force: true });
    cy.wait(2000);

    //Toggle
    cy.get(".sync-switch .v-input--selection-controls__ripple").first().click({
      force: true,
    });

    //Click on DropDown of SelectList
    cy.wait(3000);
    cy.get(
      "div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner"
    )
      .eq(4)
      .click({ force: true });
    cy.wait(2000);
    //SelectList Value(Values coming form KitItemValues Json File)
    cy.contains(this.CommonPlanData.SelectListValue).click({ force: true });
    cy.log("SelectList Value has been set.");

    //RadioSelect
    cy.contains(this.CommonPlanData.RadioSelectValue).click({ force: true });
    cy.log("RadioSelect Value has been set.");

    //CheckboxSelect(Values coming form KitItemValues Json File)
    cy.contains(this.CommonPlanData.CheckboxSelectValue1).click({
      force: true,
    });
    cy.contains(this.CommonPlanData.CheckboxSelectValue2).click({
      force: true,
    });
    cy.contains(this.CommonPlanData.CheckboxSelectValue3).click({
      force: true,
    });
    cy.log("Checkbox Values has been set.");
    cy.wait(2000);

    cy.wait(5000);
    cy.get(".searchIcon").eq(1).scrollIntoView({ force: true });

    //Stepper
    //getting value form different json file
    cy.contains(this.CommonPlanData.StepperValue4).click({ force: true });
    cy.log("Stepper Value has been set.");

    cy.wait(2000);
    //.v-stepper__step:nth-child(1/3/5/7/9)
    // cy.get(".v-stepper__step:nth-child(5) > .v-stepper__step__step").click({
    //   force: true,
    // });

    cy.wait(2000);
    //UserSelector(Values coming form KitItemValues Json File)
    //Click on to open UserSelector Pop up
    cy.get(".searchIcon").eq(0).click({ force: true });
    cy.wait(3000);

    cy.contains(this.CommonPlanData.UserSelectorName).click({ force: true });
    cy.log("UserSelect added");
    cy.wait(3000);

    //ContactSelector(Values coming form KitItemValues Json File)
    //Click on to open ContactSelector Pop up
    cy.get(".searchIcon").eq(1).click({ force: true });

    cy.wait(4000);
    cy.contains(this.CommonPlanData.ContactSelectorName).click({ force: true });
    cy.log("ContactSelecto added");
    cy.wait(4000);

    //getting value form different json file
    cy.wait(2000);
    //Icon
    //Click on + icon of ICON Element
    cy.get(".v-btn--depressed > .v-btn__content > .inline-svg > path")
      .first()
      .click({
        force: true,
      });
    cy.wait(2000);
    //Click on Icon Tittle and  select Icon logo
    //Give numeric no from 1 in child(1,2,3...)
    cy.get(".thumb-container:nth-child(4) .selected-icon").click({
      force: true,
    });
    cy.wait(2000);
    //Icon Save
    cy.get(".button-pop-ups").click({ force: true });
    cy.wait(2000);

    //IcozSize
    cy.get(
      "div.row.wrapper-kit-control.align-center > div > div.fill-height.border-right.col.col-4 > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    )
      .first()
      .click({ force: true });
    cy.contains(this.CommonPlanData.LargeiconSize).click({ force: true });
    cy.wait(2000);
    //IconLable
    cy.get('[placeholder="Label"]').first().type(this.CommonPlanData.IconLabel);

    //Inspection(Values coming form KitItemValues Json File)
    //Inspection
    cy.contains(this.DataType2.Inspection).scrollIntoView({
      force: true,
    });

    cy.wait(3000);
    //child 1 for 1st value &&&& child 2 for 2nd value-child 3 for 3rd value......
    //"These are the index value of div child":"use according to select inspection value",
    cy.get(
      "div.v-slide-group__wrapper > div > span:nth-child(" +
        this.CommonPlanData.InspectionValue2 +
        ") > span"
    )
      .first()
      .click({ force: true });

    cy.wait(3000);
    //Assigning
    //Click on to open Assigning Pop up-Also working
    //cy.get(".searchIcon > .inline-svg > path").last().click({ force: true });

    //Click on to open Assigning Pop up
    cy.get(".searchIcon").eq(2).click({ force: true });
    cy.wait(7000);
    //Click on to select the Assigning
    //cy.get(".list-item-search").first().click({ force: true });
    cy.contains(this.CommonPlanData.AssigningName).click({ force: true });
    cy.wait(3000);
    //Click on to save
    cy.get(".button-pop-ups--size > .v-btn__content").click({ force: true });
    //Assigning creation assertion
    cy.contains("Item shared").should("be.visible");
    cy.log("Assigning added");
    cy.wait(5000);
    cy.get(".action-icon:nth-child(2) path").click();
    cy.wait(2000);
    //OneToOne
    cy.get(
      ".row:nth-child(1) > .d-flex > .list-item-col-left > .v-avatar:nth-child(1) svg"
    ).click({ force: true });
  });
});
