import LoginPage from "../PageObject/LoginPage";
import SanityLoginPage from "../PageObject/SanityLoginPage";

describe("Details View tabs test case", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    const slp = new SanityLoginPage();
    slp.visitServiceTest();

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

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType2 = NewDataForElements;
    });

    cy.fixture("SanityPackTestData/NewKitItemTabsData").then(function (
      SanityTCData
    ) {
      this.SData = SanityTCData;
    });

    cy.fixture("SanityPackTestData/DetailViewTestData").then(function (
      SanityTCData
    ) {
      this.DetailViewData = SanityTCData;
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

  it("File Tab", function () {
    cy.wait(3000);

    //Files Tab
    cy.contains("Files").click({ force: true });
    cy.wait(2000);
    //Click on Library
    cy.contains("Choose From Library").click({ force: true });
    cy.wait(3000);
    //give file name to select
    cy.contains(this.DetailViewData.DetailViewFileName).click({ force: true });
    //cy.get(".thumb-container:nth-child(2) .item-check").click({ force: true });
    cy.wait(2000);
    //Click on save file
    cy.get(".button-pop-ups--size > .v-btn__content")
      .first()
      .click({ force: true });
    //Assertion validation
    cy.contains("File saved").should("be.visible");
    cy.log("File uploaded");
    cy.wait(3000);
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
    cy.contains("Pin has been created successfully.").should("be.visible");
    cy.wait(3000);
  });

  it('Set to "Address" control on Map', function () {
    // cy.contains(" Map ").click({ force: true });
    // cy.wait(2000);
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
    cy.wait(5000);
  });

  it("Link Existing Relation On Map", function () {
    //Click on Map tab
    // cy.contains(" Map ").click({ force: true });
    // cy.wait(2000);
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
    //cy.contains(this.ViewName.SearchView).should("be.visible");
    //Selct the to be linked kit item
    cy.get(".thumb-selected-icon").eq(0).click();
    cy.get(".thumb-selected-icon").eq(1).click();
    // cy.get(".thumb-selected-icon").eq(2).click();
    // cy.get(".thumb-selected-icon").eq(3).click();
    cy.wait(2000);
    //Click on select btn
    cy.get(".button-pop-ups > .v-btn__content").click({ force: true });
    cy.contains(
      " Relation on " +
        this.DataType2.OneToManyRelation +
        " for Validation linked "
    ).should("be.visible");
    cy.contains(this.NewKitItemData.KitName + " has been saved").should(
      "be.visible"
    );
    cy.wait(3000);
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

    cy.wait(2000);
    //Click on Library
    cy.contains("Choose From Library").click({ force: true });
    cy.wait(3000);
    //give file name to select
    cy.contains(this.DetailViewData.DetailViewFileName).click({ force: true });
    //cy.get(".thumb-container:nth-child(2) .item-check").click({ force: true });
    cy.wait(2000);
    //Click on save file
    cy.get(".button-pop-ups--size > .v-btn__content")
      .first()
      .click({ force: true });
    //Assertion validation
    cy.contains("File saved").should("be.visible");
    cy.log("File uploaded");
    cy.wait(3000);

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
    cy.wait(5000);

    //Close the tab
    cy.get(".subheader--button-icon-wrapper .inline-svg").first().click({
      force: true,
    });
    cy.wait(3000);
  });

  it("Contributors Tab", function () {
    //Contributors Tab
    cy.contains(" Contributors ").click({ force: true });
    cy.wait(3000);
    //Click on Add for Contributors
    cy.get(".addBtn:nth-child(2) > .v-btn__content").click({ force: true });
    //Assertion validation
    cy.contains(" Connections ").should("be.visible");

    cy.wait(2000);
    cy.contains("Coordinator").click({ force: true });
    cy.wait(4000);
    //Select Name
    cy.contains(this.DetailViewData.ContributorsName).click({ force: true });
    //Click on Save
    cy.get(".button-pop-ups--size > .v-btn__content")
      .first()
      .click({ force: true });
    //creation Assertion validation
    cy.contains("Item shared").should("be.visible");
    cy.log("Contributor added");
    cy.wait(4000);
  });

  it("Time Entries Tab", function () {
    //Time Entries Tab
    cy.contains(" Time Entries ").click({ force: true });
    cy.wait(2000);
    //Click on Add for Time Entries
    cy.get(".ml-4 > .v-btn__content").click({ force: true });
    //Assertion validation
    cy.contains("Time Entry").should("be.visible");
    //Click on + icon
    cy.get(".add-new--icon").click({ force: true });
    //Assertion validation
    cy.contains(" Add New Time Type ").should("be.visible");
    cy.wait(2000);
    cy.get('[placeholder="Label"]')
      .eq(0)
      .type(this.DetailViewData.AddTimeEntryLable);
    cy.get('[placeholder="Description"]').type(
      this.DetailViewData.AddTimeEntryDescription
    );
    //Click on Save
    cy.get(".col-4 .v-btn__content").first().click({ force: true });
    //Assertion validation
    cy.contains(" New Time Type saved ").should("be.visible");
    cy.wait(2000);
    //Click on Total hours
    cy.get('[name="totalHours"]').type(this.DetailViewData.TotalHours);
    //Click on select date
    cy.get('[name="startdate"]').click({ force: true });
    cy.wait(2000);
    //Select Date
    cy.xpath("//div[contains(text(),'30')]").eq(0).click({ force: true });
    //Click on OK
    cy.wait(1000);
    cy.xpath("//span[contains(text(),'OK')]").first().click({ force: true });
    cy.wait(2000);
    //Click on Time Entry for
    cy.get(
      "div:nth-child(2) > div:nth-child(1) > span > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    ).click({ force: true });
    cy.wait(4000);
    //Assertion validation
    cy.contains("Connection").should("be.visible");
    cy.wait(2000);
    cy.contains(this.DetailViewData.TimeEntryConnection).click({ force: true });
    cy.wait(1000);
    cy.get('[placeholder="Add a Description"]').type(
      this.DetailViewData.AddDescription
    );
    //Click on Save
    cy.get(".col-3 > .ca-button-green > .v-btn__content").click({
      force: true,
    });
    //Assertion validation
    cy.contains(" Time Entry details saved ").should("be.visible");
    cy.log("Time Entry details saved");
    cy.wait(4000);
  });

  it("Comments Tab", function () {
    //Comments Tab
    cy.contains("Comments ").click({ force: true });
    cy.wait(2000);
    cy.get('[name="addComment"]').type(this.DetailViewData.AddComments);
    cy.wait(2000);
    cy.contains(" SAVE ").click({ force: true });
    //Assertion validation
    cy.contains(" New Comment added ").should("be.visible");
    cy.log("Comment has been added");
    cy.wait(4000);
  });

  it("Groups Tab", function () {
    //Groups Tab
    cy.contains(" Groups ").click({ force: true });
    cy.wait(2000);
    //Click on Add for Grops
    cy.get(".details-wrapper > .col > .ml-0 > .v-btn__content").click({
      force: true,
    });
    //Assertion validation
    cy.contains(" Groups ").should("be.visible");
    cy.wait(2000);
    cy.contains(this.DetailViewData.AddGroup).click({ force: true });
    //Assertion validation
    cy.contains(this.DetailViewData.AddGroup).should("be.visible");
    cy.wait(2000);
  });

  it("Common Plan", function () {
    //Click on common plan tab
    cy.contains(" Common Plans ").click({ force: true });

    //Click on Add Icon
    cy.get(".ml-4 > .v-btn__content").click({ force: true });
    cy.log("Common Plan Board has been Opened");
    cy.wait(2000);
    //Common plan board assertion
    cy.contains(" Layout ").should("be.visible");
    cy.contains(" Schedule ").should("be.visible");
    cy.contains(" View ").should("be.visible");

    //Creating Plan
    cy.get('[placeholder="Plan Name"]').type(
      this.DetailViewData.CommonPlanName
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
    cy.get(".space-planner-card--name").should(
      "have.text",
      this.DetailViewData.CommonPlanName
    );
    cy.log("Common Plan Created");
  });

  it.only("Calender Tab(By Add Btn)", function () {
    //Note- Add a text file in parent kit schedule view
    cy.contains(" Calendar ").click({ force: true });
    cy.wait(2000);
    //Click on Add
    cy.get(".button-w-new-borders > .v-btn__content").click({ force: true });
    cy.wait(3000);
    //Scheduler pop assertion
    cy.get(
      "div.kit-details-form-wrapper.fill-height.col div.col.col-12 div.row.container-details div.fill-height.col div.container.details-wrapper.fill-height div.row.kit-related-form.pa-6 div.kit-control-component.row-component.kit-control-text.kit-control-text--number.px-3.col.col-sm-12.col-md-6.mb-4.px-3.col-sm-12.col-md-6.mb-4.px-3 div.v-input.kit-control-text.layout-alignment.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined div.v-input__control div.v-input__slot > div.v-text-field__slot:nth-child(2)"
    ).type(this.DetailViewData.ScheduleName);

    //Clear dates fields

    //End Date
    // cy.get(
    //   ".px-3:nth-child(2) > .row > .pr-3 .v-input__control .v-icon"
    // ).click({ force: true });
    // cy.wait(4000)
    // //Click on date pop up
    // cy.get('[placeholder="Select End Date"]').click({ force: true });
    // cy.wait(3000)
    // //Select Date
    // cy.xpath("//div[contains(text(),'30')]").first().click({ force: true });
    // cy.wait(3000)
    // //Click on Ok
    // cy.xpath("//span[contains(text(),'OK')]").first().click({ force: true });
    // cy.wait(3000);

    //End Time
    cy.get(
      ".px-3:nth-child(2) > .row > .pl-3 .v-input__control .v-icon"
    ).click({ force: true });

    cy.wait(2000);
    cy.get('[placeholder="Select Start Time"]').click({ force: true });

    cy.wait(4000);
    //Select hour value
    cy.xpath(
      "//div[contains(@class,'v-dialog v-dialog--active')]//span[6]"
    ).click({ force: true });
    cy.wait(4000);
    //Select Value of miniutes
    cy.xpath("//span[contains(text(),'25')]").first().click({ force: true });
    cy.wait(2000);
    //Click on PM
    //cy.xpath("//div[contains(text(),'AM')]").click({ force: true });
    //Click on OK to save date
    cy.get(
      "div.timeActions button.btnBorder.v-btn.v-btn--flat.v-btn--text.theme--light.v-size--default.primary--text:nth-child(1) > span.v-btn__content"
    )
      .first()
      .click({ force: true });
    cy.wait(3000);

    //Start Date
    // cy.get(
    //   ".px-3:nth-child(1) > .row > .pr-3 .v-input__control .v-icon"
    // ).click({ force: true });
    // cy.wait(4000)

    // //Click on date pop
    // cy.get('[placeholder="Select Start Date"]').click({ force: true });
    // cy.wait(3000);
    // //Select Date
    // cy.xpath("//div[contains(text(),'30')]").first().click({ force: true });
    // cy.wait(3000);
    // //Click on Ok
    // cy.xpath("//span[contains(text(),'OK')]").first().click({ force: true });
    // cy.wait(3000);

    cy.wait(2000);
    //Start Time
    cy.get(
      ".px-3:nth-child(1) > .row > .pl-3 .v-input__control .v-icon"
    ).click({ force: true });
    cy.wait(1000);
    cy.get('[placeholder="Select Start Time"]').click({ force: true });
    cy.wait(3000);
    //Select hour value
    cy.xpath(
      "//div[contains(@class,'v-dialog v-dialog--active')]//span[5]"
    ).click({ force: true });
    cy.wait(3000);
    //Select Value of miniutes
    cy.xpath("//span[contains(text(),'30')]").first().click({ force: true });
    cy.wait(4000);
    //Click on PM
    // cy.xpath("//div[contains(text(),'PM')]").click({ force: true });
    //Click on OK to save date
    cy.xpath("//span[contains(text(),'OK')]").first().click({ force: true });
    cy.wait(3000);
  });
});
