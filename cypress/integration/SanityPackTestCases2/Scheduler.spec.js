import LoginPage from "../PageObject/LoginPage";
import SanityLoginPage from "../PageObject/SanityLoginPage";

describe("Create Active schedule for Kit Item through Add button in calendar", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    const slp = new SanityLoginPage();
    //slp.visitCityComTest();
    slp.nvdTest()
    //slp.TmProd();

    //Handling Alert
    cy.on("window:confirm", () => {
      cy.log("Alert has been Handled");
    });

    //Login Assertions
    cy.contains(" Log In ").should("be.visible");

    //Enter credentials
    //lp.EnterEmail("sam@armyspy.com");
    lp.EnterEmail("propertymanagement@commonareas.work.dev");
    //lp.EnterEmail("citycom@commonareas.work.dev");
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

    cy.fixture("SanityPackTestData2/Calendar").then(function (KitDataEle) {
      this.NewKitItemData = KitDataEle;
    });

    // cy.fixture("SanityPackTestData(Prod)/Calendar(Prod)").then(function (
    //   KitDataEle
    // ) {
    //   this.NewKitItemData = KitDataEle;
    // });

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

    cy.fixture("SanityPackTestData2/UpdateCalendar").then(function (
      KitDataEle
    ) {
      this.UpdateCalendar = KitDataEle;
    });

    // cy.fixture("SanityPackTestData(Prod)/UpdateCalendar").then(function (
    //   KitDataEle
    // ) {
    //   this.UpdateCalendar = KitDataEle;
    // });
  });

  it.only("Navigate to kit item list View(Left Panel) to open Calendar", function () {
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
    cy.wait(3000);

    //Click on created kit item
    cy.get(".list-item--title").eq(0).click({ force: true });
    cy.wait(3000);

    cy.contains(' Scheduler ').click({ force: true });
    cy.wait(3000);
    //Scheduler tab assertion
    cy.contains("Today").should("be.visible");
    cy.wait(3000);

    //Click on add
    cy.get(".button-w-new-borders > .v-btn__content").click({ force: true });
    cy.contains(" Schedule ").should("be.visible");
    cy.wait(10000);
  });

})