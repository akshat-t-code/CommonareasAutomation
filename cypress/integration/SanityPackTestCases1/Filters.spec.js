import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";
import SanityLoginPage from "../PageObject/SanityLoginPage";

describe("TableList KitItem Filter", function () {
  this.beforeAll(function () {
    /// cy.viewport(1280, 720);
    const lp = new LoginPage();
    const slp = new SanityLoginPage();
    slp.visitCityComTest();
    //cy.visit("https://tm.commonareas.io/Public/Login?ReturnUrl=%2F");

    //Handling Alert
    cy.on("window:confirm", () => {
      cy.log("Alert has been Handled");
    });

    //Login Assertions
    cy.contains(" Log In ").should("be.visible");
    //Enter credentials
    lp.EnterEmail("citycom@commonareas.work.dev");
    //lp.EnterEmail("sam@armyspy.com");
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

    cy.fixture("SanityPackTestData/FiltersKitItemData").then(function (
      KitDataEle
    ) {
      this.NewKitItemData = KitDataEle;
    });

    // cy.fixture("SanityPackTestData(Prod)/NewKitItemDataValue(Prod)").then(
    //   function (KitDataEle) {
    //     this.NewKitItemData = KitDataEle;
    //   }
    // );

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType2 = NewDataForElements;
    });

    // cy.fixture("SanityPackTestData(Prod)/KitBuilderDataTypes2(Prod)").then(
    //   function (NewDataForElements) {
    //     this.DataType2 = NewDataForElements;
    //   }
    // );

    //////////////////////////////////////////////////////////////////////////////////

    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (
      KitTypeFormViewsNames
    ) {
      this.ViewName = KitTypeFormViewsNames;
    });

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
      KittypeName
    ) {
      this.KitTypeName = KittypeName;
    });
  });

  it.only("Open Created Kit type As ListView KitItem", function () {
    //Page Object
    const lp = new LoginPage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    cy.wait(10000);
    //Click on Hamburger Icon
    lp.HMBIcon();
    cy.contains(this.NewKitItemData.KitName).scrollIntoView({
      force: true,
    });
    cy.wait(5000);
    //Open KitType from left paneal
    cy.contains(this.NewKitItemData.KitName).click({ force: true });
    cy.log("Kit type opened from left pannel");
    cy.wait(10000);
  });

  it("Filter Url Element", function () {
    //Page Object
    const lp = new LoginPage();
    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.wait(2000);
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .last()
      .type(this.NewKitItemData.Url);
    cy.wait(1000);
    cy.contains("Apply Filters").click({ force: true });
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);
    //Assertion
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).should("be.visible");
    cy.wait(2000);
    //Click on created kit item
    cy.get(".list-item--title").click({ force: true });
    cy.wait(3000);

    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filter
    cy.get(".inline-svg:nth-child(3) > path").click({ force: true });
    cy.wait(5000);
  });

  it("Filter Text Element", function () {
    //Page Object
    const lp = new LoginPage();
    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .last()
      .type(this.NewKitItemData.Text);
    cy.wait(1000);
    cy.contains("Apply Filters").click({ force: true });
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);

    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".inline-svg:nth-child(3) > path").click({ force: true });
    cy.wait(5000);
  });

  it("Filter Telephone Element", function () {
    //Page Object
    const lp = new LoginPage();
    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .last()
      .type(this.NewKitItemData.Telephone);
    cy.wait(1000);
    cy.contains("Apply Filters").click({ force: true });
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);

    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".inline-svg:nth-child(3) > path").click({ force: true });
    cy.wait(5000);
  });

  it("Filter TextAera Element", function () {
    //Page Object
    const lp = new LoginPage();
    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .last()
      .type(this.NewKitItemData.TextAera);
    cy.wait(1000);
    cy.contains("Apply Filters").click({ force: true });
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);

    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".inline-svg:nth-child(3) > path").click({ force: true });
    cy.wait(5000);
  });

  it("Validate the Filter Email Element", function () {
    //Page Object
    const lp = new LoginPage();
    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .last()
      .type(this.NewKitItemData.Email);
    cy.wait(1000);
    cy.contains("Apply Filters").click({ force: true });
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);

    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".inline-svg:nth-child(3) > path").click({ force: true });
    cy.wait(5000);
  });

  it("Validate the Filter Address Element", function () {
    //Page Object
    const lp = new LoginPage();
    //Filter Address by Addressline1
    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .last()
      .type(this.NewKitItemData.Addressline1);

    cy.wait(1000);
    cy.contains("Apply Filters").click({ force: true });
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);

    cy.get(
      '[placeholder="Street address, bulding, company ... "]'
    ).scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".inline-svg:nth-child(3) > path").click({ force: true });
    cy.wait(5000);
  });

  it("Validate the Filter for Addressline2 Element", function () {
    //Page Object
    const lp = new LoginPage();
    //Filter Address by Addressline2
    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .last()
      .type(this.NewKitItemData.Addressline2);

    cy.wait(1000);
    cy.contains("Apply Filters").click({ force: true });
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);

    cy.get(
      '[placeholder="Street address, bulding, company ... "]'
    ).scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".inline-svg:nth-child(3) > path").click({ force: true });
    cy.wait(5000);
  });

  it("Validate the Filter for City Element", function () {
    //Page Object
    const lp = new LoginPage();
    //Filter Address by City
    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .last()
      .type(this.NewKitItemData.City);

    cy.wait(1000);
    cy.contains("Apply Filters").click({ force: true });
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);

    cy.get(
      '[placeholder="Street address, bulding, company ... "]'
    ).scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".inline-svg:nth-child(3) > path").click({ force: true });
    cy.wait(5000);
  });

  it("Validate the Filter for State Element", function () {
    //Page Object
    const lp = new LoginPage();
    //Filter Address by State
    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .last()
      .type(this.NewKitItemData.State);

    cy.wait(1000);
    cy.contains("Apply Filters").click({ force: true });
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);

    cy.get(
      '[placeholder="Street address, bulding, company ... "]'
    ).scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".inline-svg:nth-child(3) > path").click({ force: true });
    cy.wait(5000);
  });

  it("Validate the Filter for ZipCode Element", function () {
    //Page Object
    const lp = new LoginPage();
    //Filter Address by ZipCode
    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .last()
      .type(this.NewKitItemData.ZipCode);

    cy.wait(1000);
    cy.contains("Apply Filters").click({ force: true });
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);

    cy.get(
      '[placeholder="Street address, bulding, company ... "]'
    ).scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".inline-svg:nth-child(3) > path").click({ force: true });
    cy.wait(5000);
  });

  it("Validate the Filter for Country Element", function () {
    //Page Object
    const lp = new LoginPage();
    //Filter Address by Country
    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .last()
      .scrollIntoView({ force: true });
    cy.get("[name" + "=" + this.DataType2.Address + "]")
      .last()
      .type(this.NewKitItemData.Country);

    cy.wait(1000);
    cy.contains("Apply Filters").click({ force: true });
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);

    cy.get(
      '[placeholder="Street address, bulding, company ... "]'
    ).scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".inline-svg:nth-child(3) > path").click({ force: true });
    cy.wait(5000);
  });

  it("Validate the Filter Time Element", function () {
    //Page Object
    const lp = new LoginPage();
    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get('[placeholder="Add Time"][type="text"]').scrollIntoView({
      force: true,
    });
    cy.wait(2000);
    cy.get('[placeholder="Add Time"][type="text"]').click({ force: true });
    cy.wait(1000);

    //Select hour value
    cy.xpath(
      "//div[contains(@class,'v-dialog v-dialog--active')]//span[5]"
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
    cy.wait(2000);

    cy.contains("Apply Filters").click({ force: true });
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);

    cy.get('[placeholder="Zip/Postal Code"]').scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".inline-svg:nth-child(3) > path").click({ force: true });
    cy.wait(5000);
  });

  it("Validate the Filter Date Element", function () {
    //Page Object
    const lp = new LoginPage();

    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get('[placeholder="Add Date"][type="text"]').scrollIntoView({
      force: true,
    });
    cy.wait(2000);
    cy.get('[placeholder="Add Date"][type="text"]').click({ force: true });
    //Select Date
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'30')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    //Click on OK to save Date
    cy.xpath("//span[contains(text(),'OK')]").first().click({ force: true });
    cy.wait(2000);

    cy.contains("Apply Filters").click({ force: true });
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);

    cy.get('[placeholder="Zip/Postal Code"]').scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".inline-svg:nth-child(3) > path").click({ force: true });
    cy.wait(5000);
  });

  it("Validate the Filter Toggle(True) Element", function () {
    //Page Object
    const lp = new LoginPage();

    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get('[placeholder="Add Date"][type="text"]').scrollIntoView({
      force: true,
    });
    cy.wait(1000);
    //Click on toggle dropdown
    cy.get(
      " div.v-input.kit-control-select-list.layout-alignment.v-input--is-label-active.v-input--is-dirty.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select div.v-input__control div.v-input__slot > div.v-select__slot:nth-child(2)"
    ).click({ force: true });
    cy.wait(2000);
    //Toggle filter for true
    cy.contains(" true ").click({ force: true });

    cy.wait(2000);

    cy.contains("Apply Filters").click({ force: true });
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);

    cy.get('[placeholder="Zip/Postal Code"]').scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".inline-svg:nth-child(3) > path").click({ force: true });
    cy.wait(5000);
  });

  it("Validate the Filter Toggle(False) Element", function () {
    //Page Object
    const lp = new LoginPage();

    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get('[placeholder="Add Date"][type="text"]').scrollIntoView({
      force: true,
    });
    cy.wait(1000);
    //Click on toggle dropdown
    cy.get(
      " div.v-input.kit-control-select-list.layout-alignment.v-input--is-label-active.v-input--is-dirty.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select div.v-input__control div.v-input__slot > div.v-select__slot:nth-child(2)"
    ).click({ force: true });
    cy.wait(2000);
    //Toggle for false
    cy.get(".v-list-item:nth-child(3) .v-list-item__subtitle").click({
      force: true,
    });

    //cy.contains("  false  ").click({ force: true });

    cy.wait(2000);

    cy.contains("Apply Filters").click({ force: true });
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.get(".list-item--title").first().click({ force: true });
    cy.wait(5000);
    cy.get('[placeholder="Zip/Postal Code"]').scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".inline-svg:nth-child(3) > path").click({ force: true });
    cy.wait(5000);
  });

  it("Validate the Filter SelectList Element", function () {
    //Page Object
    const lp = new LoginPage();

    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get('[placeholder="Add Date"][type="text"]').scrollIntoView({
      force: true,
    });
    cy.wait(1000);
    //Click on SelectList dropdown
    cy.get(
      " div.v-input.kit-control-select-list.layout-alignment.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select.v-select--is-multi div.v-input__control div.v-input__slot > div.v-select__slot:nth-child(2)"
    )
      .eq(0)
      .click({ force: true });
    cy.wait(2000);
    //SelectList filter value
    cy.contains(this.NewKitItemData.SelectListValue).click({ force: true });

    cy.wait(2000);

    //Click on Apply filters dropdown
    cy.get(
      "div.d-flex.align-center.justify-end.col.app-secondary-header-left--buttons.fill-height.gray-divider div.row.left_panel_menu.filter.row.button-left--border.second-header-left--buton.button-left--border div.sticky-dropdown div.wrapper-content.col:nth-child(2) div.row.full-width.fill-height div.form.tools-padding.left_panel_body.col.left_column.col div.row.flex-nowrap.flex-column.fill-height div.buttons.col.pl-4 div.apply-clear-wrapper.navi-bar div.navi-bar-dropdown.navi-bar__actions.navi-bar-action-dropdown.col div.v-input.ca-button-green.v-input--hide-details.v-input--is-label-active.v-input--is-dirty.theme--light.v-text-field.v-text-field--single-line.v-text-field--is-booted.v-select.v-autocomplete.v-overflow-btn.v-overflow-btn--segmented div.v-input__control div.v-input__slot div.v-select__slot div.v-input__append-inner:nth-child(2) > div.v-input__icon.v-input__icon--append"
    ).click({
      force: true,
    });
    cy.wait(2000);
    //Click on apply filters text in dropdown
    cy.get(
      " div.v-menu__content.theme--light.v-menu__content--fixed.menuable__content__active.v-autocomplete__content.navi-bar-dropdown-menu.kit-item-filter-actions-dropdown:nth-child(2) div.v-select-list.v-card.theme--light div.v-list.v-sheet.v-sheet--tile.theme--light div.v-list-item.primary--text.v-list-item--active.v-list-item--link.theme--light:nth-child(1) > div.v-list-item__content"
    ).click({ force: true });
    cy.wait(2000);

    cy.contains("Apply Filters").click({ force: true });
    cy.wait(5000);
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.get(".list-item--title").first().click({ force: true });
    cy.wait(5000);
    cy.get('[placeholder="Zip/Postal Code"]').scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".filter-tag-content path").click({ force: true });
    cy.wait(5000);
  });

  it("Validate the Filter RadioSelect Element", function () {
    //Page Object
    const lp = new LoginPage();

    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get('[placeholder="Add Date"][type="text"]').scrollIntoView({
      force: true,
    });
    cy.wait(1000);
    //Click on RadioSelect dropdown
    cy.get(
      " div.v-input.kit-control-select-list.layout-alignment.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select.v-select--is-multi div.v-input__control div.v-input__slot > div.v-select__slot:nth-child(2)"
    )
      .eq(1)
      .click({ force: true });
    cy.wait(2000);
    //RadioSelect filter value
    cy.contains(this.NewKitItemData.RadioSelectValue).click({ force: true });

    cy.wait(2000);
    //Click on Apply filters dropdown
    cy.get(
      "div.d-flex.align-center.justify-end.col.app-secondary-header-left--buttons.fill-height.gray-divider div.row.left_panel_menu.filter.row.button-left--border.second-header-left--buton.button-left--border div.sticky-dropdown div.wrapper-content.col:nth-child(2) div.row.full-width.fill-height div.form.tools-padding.left_panel_body.col.left_column.col div.row.flex-nowrap.flex-column.fill-height div.buttons.col.pl-4 div.apply-clear-wrapper.navi-bar div.navi-bar-dropdown.navi-bar__actions.navi-bar-action-dropdown.col div.v-input.ca-button-green.v-input--hide-details.v-input--is-label-active.v-input--is-dirty.theme--light.v-text-field.v-text-field--single-line.v-text-field--is-booted.v-select.v-autocomplete.v-overflow-btn.v-overflow-btn--segmented div.v-input__control div.v-input__slot div.v-select__slot div.v-input__append-inner:nth-child(2) > div.v-input__icon.v-input__icon--append"
    ).click({
      force: true,
    });
    cy.wait(2000);
    //Click on apply filters text in dropdown
    cy.get(
      " div.v-menu__content.theme--light.v-menu__content--fixed.menuable__content__active.v-autocomplete__content.navi-bar-dropdown-menu.kit-item-filter-actions-dropdown:nth-child(2) div.v-select-list.v-card.theme--light div.v-list.v-sheet.v-sheet--tile.theme--light div.v-list-item.primary--text.v-list-item--active.v-list-item--link.theme--light:nth-child(1) > div.v-list-item__content"
    ).click({ force: true });
    cy.wait(2000);

    cy.contains("Apply Filters").click({ force: true });
    cy.wait(5000);
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.get(".list-item--title").first().click({ force: true });
    cy.wait(5000);
    cy.get('[placeholder="Zip/Postal Code"]').scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".filter-tag-content path").click({ force: true });
    cy.wait(5000);
  });

  it("Validate the Filter CheckboxSelect Element", function () {
    //Page Object
    const lp = new LoginPage();

    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get('[placeholder="Add Date"][type="text"]').scrollIntoView({
      force: true,
    });
    cy.wait(1000);
    //Click on Checkbox dropdown
    cy.get(
      "div.d-flex.align-center.justify-end.col.app-secondary-header-left--buttons.fill-height.gray-divider div.row.left_panel_menu.filter.row.button-left--border.second-header-left--buton.button-left--border div.sticky-dropdown div.wrapper-content.col:nth-child(2) div.row.full-width.fill-height div.form.tools-padding.left_panel_body.col.left_column.col div.row.flex-nowrap.flex-column.fill-height div.filter-wrapper.col div.container.kit-filter-wrapper.fill-height div.row.kit-filter-container.fill-height div.px-3.pt-4.col.col-12 div.row.fill-height div.wrapper-scroll.col div.container.details-wrapper.fill-height.kit-wrapper-search.col div.row.kit-related-form.pa-6 div.kit-control-component.row-component.px-3.col:nth-child(16) div.v-input.kit-control-select-list.layout-alignment.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select.v-select--is-multi div.v-input__control div.v-input__slot > div.v-select__slot:nth-child(2)"
    ).click({ force: true });
    cy.wait(2000);
    //CheckboxSelect filter value(Values coming form KitItemValues Json File)
    cy.contains(this.NewKitItemData.CheckboxSelectValue1).click({
      force: true,
    });

    cy.wait(2000);
    //Click on Apply filters dropdown
    cy.get(
      "div.d-flex.align-center.justify-end.col.app-secondary-header-left--buttons.fill-height.gray-divider div.row.left_panel_menu.filter.row.button-left--border.second-header-left--buton.button-left--border div.sticky-dropdown div.wrapper-content.col:nth-child(2) div.row.full-width.fill-height div.form.tools-padding.left_panel_body.col.left_column.col div.row.flex-nowrap.flex-column.fill-height div.buttons.col.pl-4 div.apply-clear-wrapper.navi-bar div.navi-bar-dropdown.navi-bar__actions.navi-bar-action-dropdown.col div.v-input.ca-button-green.v-input--hide-details.v-input--is-label-active.v-input--is-dirty.theme--light.v-text-field.v-text-field--single-line.v-text-field--is-booted.v-select.v-autocomplete.v-overflow-btn.v-overflow-btn--segmented div.v-input__control div.v-input__slot div.v-select__slot div.v-input__append-inner:nth-child(2) > div.v-input__icon.v-input__icon--append"
    ).click({
      force: true,
    });
    cy.wait(2000);
    //Click on apply filters text in dropdown
    cy.get(
      " div.v-menu__content.theme--light.v-menu__content--fixed.menuable__content__active.v-autocomplete__content.navi-bar-dropdown-menu.kit-item-filter-actions-dropdown:nth-child(2) div.v-select-list.v-card.theme--light div.v-list.v-sheet.v-sheet--tile.theme--light div.v-list-item.primary--text.v-list-item--active.v-list-item--link.theme--light:nth-child(1) > div.v-list-item__content"
    ).click({ force: true });
    cy.wait(2000);

    cy.contains("Apply Filters").click({ force: true });
    cy.wait(5000);
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.get(".list-item--title").first().click({ force: true });
    cy.wait(5000);
    cy.get('[placeholder="Zip/Postal Code"]').scrollIntoView({ force: true });
    cy.wait(3000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".filter-tag-content path").click({ force: true });
    cy.wait(5000);
  });

  it.only("Validate the Filter Stepper Element", function () {
    //Page Object
    const lp = new LoginPage();

    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.contains(this.DataType2.Stepper).scrollIntoView({
      force: true,
    });
    cy.wait(3000);
    //Click on Stepper dropdown
    cy.get(
      " div.v-input.kit-control-select-list.layout-alignment.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select.v-select--is-multi div.v-input__control div.v-input__slot > div.v-select__slot:nth-child(2)"
    )
      .eq(3)
      .click({ force: true });
    cy.wait(2000);
    //Stepper filter value
    cy.contains(this.NewKitItemData.StepperValue1).click({ force: true });

    cy.wait(2000);
    //Click on Apply filters dropdown
    // cy.get(
    //   "div.d-flex.align-center.justify-end.col.app-secondary-header-left--buttons.fill-height.gray-divider div.row.left_panel_menu.filter.row.button-left--border.second-header-left--buton.button-left--border div.sticky-dropdown div.wrapper-content.col:nth-child(2) div.row.full-width.fill-height div.form.tools-padding.left_panel_body.col.left_column.col div.row.flex-nowrap.flex-column.fill-height div.buttons.col.pl-4 div.apply-clear-wrapper.navi-bar div.navi-bar-dropdown.navi-bar__actions.navi-bar-action-dropdown.col div.v-input.ca-button-green.v-input--hide-details.v-input--is-label-active.v-input--is-dirty.theme--light.v-text-field.v-text-field--single-line.v-text-field--is-booted.v-select.v-autocomplete.v-overflow-btn.v-overflow-btn--segmented div.v-input__control div.v-input__slot div.v-select__slot div.v-input__append-inner:nth-child(2) > div.v-input__icon.v-input__icon--append"
    // ).click({
    //   force: true,
    // });
    // cy.wait(2000);
    // //Click on apply filters text in dropdown
    // cy.get(
    //   " div.v-menu__content.theme--light.v-menu__content--fixed.menuable__content__active.v-autocomplete__content.navi-bar-dropdown-menu.kit-item-filter-actions-dropdown:nth-child(2) div.v-select-list.v-card.theme--light div.v-list.v-sheet.v-sheet--tile.theme--light div.v-list-item.primary--text.v-list-item--active.v-list-item--link.theme--light:nth-child(1) > div.v-list-item__content"
    // ).click({ force: true });
    cy.wait(2000);

    cy.contains("Apply Filters").click({ force: true });
    cy.wait(5000);
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);
    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(3000);
    //Scroll to stepper
    cy.get(".ca-item").eq(0).scrollIntoView({ force: true });
    cy.wait(5000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".filter-tag-content path").click({ force: true });
    cy.wait(5000);
  });

  it.only("Validate the Filter Inspection Element", function () {
    //Page Object
    const lp = new LoginPage();

    lp.FilterIcon();
    cy.log("Kit type filters has been opened");
    cy.wait(3000);
    //Validation for Filer Elements
    cy.get('[placeholder="Created On"][type="text"]').scrollIntoView({
      force: true,
    });
    cy.wait(3000);
    //Click on Inspection dropdown
    cy.get(
      " div.v-input.kit-control-select-list.layout-alignment.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select.v-select--is-multi div.v-input__control div.v-input__slot > div.v-select__slot:nth-child(2)"
    )
      .eq(4)
      .click({ force: true });
    cy.wait(2000);
    //Inpection filter value(need to be set in json)
    cy.contains(this.NewKitItemData.InspectionFilterValue).click({
      force: true,
    });

    cy.wait(2000);
    //Click on Apply filters dropdown
    // cy.get(
    //   "div.d-flex.align-center.justify-end.col.app-secondary-header-left--buttons.fill-height.gray-divider div.row.left_panel_menu.filter.row.button-left--border.second-header-left--buton.button-left--border div.sticky-dropdown div.wrapper-content.col:nth-child(2) div.row.full-width.fill-height div.form.tools-padding.left_panel_body.col.left_column.col div.row.flex-nowrap.flex-column.fill-height div.buttons.col.pl-4 div.apply-clear-wrapper.navi-bar div.navi-bar-dropdown.navi-bar__actions.navi-bar-action-dropdown.col div.v-input.ca-button-green.v-input--hide-details.v-input--is-label-active.v-input--is-dirty.theme--light.v-text-field.v-text-field--single-line.v-text-field--is-booted.v-select.v-autocomplete.v-overflow-btn.v-overflow-btn--segmented div.v-input__control div.v-input__slot div.v-select__slot div.v-input__append-inner:nth-child(2) > div.v-input__icon.v-input__icon--append"
    // ).click({
    //   force: true,
    // });
    // cy.wait(2000);
    // //Click on apply filters text in dropdown
    // cy.get(
    //   " div.v-menu__content.theme--light.v-menu__content--fixed.menuable__content__active.v-autocomplete__content.navi-bar-dropdown-menu.kit-item-filter-actions-dropdown:nth-child(2) div.v-select-list.v-card.theme--light div.v-list.v-sheet.v-sheet--tile.theme--light div.v-list-item.primary--text.v-list-item--active.v-list-item--link.theme--light:nth-child(1) > div.v-list-item__content"
    // ).click({ force: true });
    cy.wait(2000);

    cy.contains("Apply Filters").click({ force: true });
    cy.wait(5000);
    cy.get(".filter-tag").should("be.visible");
    cy.wait(10000);

    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);
    //Scroll to Inspection
    cy.get(".v-btn:nth-child(1) .v-badge > .inline-svg").scrollIntoView({
      force: true,
    });
    cy.wait(5000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Click on cross icon to remove filer
    cy.get(".filter-tag-content path").click({ force: true });
    cy.wait(5000);
  });
});