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
    //Click on cross icon to remove filer
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
    //Click on cross icon to remove filer
    cy.get(".inline-svg:nth-child(3) > path").click({ force: true });
    cy.wait(5000);
  });
});
