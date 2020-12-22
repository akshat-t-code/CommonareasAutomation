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

  it.only("Filter Url Element", function () {
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

  it.only("Filter Text Element", function () {
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

  it.only("Filter Telephone Element", function () {
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

  it.only("Filter TextAera Element", function () {
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

  it.only("Validate the Filter Email Element", function () {
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

  it.only("Validate the Filter Address Element", function () {
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

  it.only("Validate the Filter for Addressline2 Element", function () {
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

  it.only("Validate the Filter for City Element", function () {
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

  it.only("Validate the Filter for State Element", function () {
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

  it.only("Validate the Filter for ZipCode Element", function () {
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

  it.only("Validate the Filter for Country Element", function () {
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

  it.only("Validate the Filter Time Element", function () {
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

  it.only("Validate the Filter Date Element", function () {
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

  it.only("Validate the Filter Toggle(True) Element", function () {
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
    cy.get(".v-input__icon > .primary--text").click({ force: true });
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

  it.only("Validate the Filter Toggle(False) Element", function () {
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
    cy.get(".v-input__icon > .primary--text").first().click({ force: true });
    cy.wait(2000);
    //Toggle for false
    cy.contains("  false  ").click({ force: true });

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
});
