import LoginPage from "../PageObject/LoginPage";
import SanityLoginPage from "../PageObject/SanityLoginPage";

describe("Validation of Details View tabs test case", function () {
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

    // //Created kit type existance assertion
    cy.contains("Url: https://detailsview.com ").should("be.visible");
    cy.wait(2000);
    cy.contains(" Url: https://detailsview.com ").click({ force: true });

    cy.log(this.DataType2.Url+":"+" "+this.DetailViewData.UrlData)

    // cy.contains(
    //   this.DataType2.Url + ":" + " " + this.DetailViewData.UrlData
    // ).should("exist");
    // cy.log("Created New Kit Item has been Exist");
    // //Click on created kit item
    // cy.contains(
    //   this.DataType2.Url + ":" + " " + this.DetailViewData.UrlData
    // ).click({ force: true });
    cy.wait(5000);
  });

  it.only("Common Plan Validation", function () {
    //Click on common Plan tab
    cy.contains(" Common Plans ").click({ force: true });
    cy.wait(2000);
    //Created common plan assertion
    cy.get(".space-planner-card--name").should(
      "have.text",
      this.DetailViewData.CommonPlanName
    );
    cy.log("Created Common Plan existing");
  });

  it.only("Group tab data Validation in details view", function () {
    //Click on group
    cy.contains("Groups").click({ force: true });
    cy.wait(3000);
    //Group assertion
    cy.contains(this.DetailViewData.AddGroup).should("be.visible");
    cy.log("Added group exist");
    cy.wait(2000);
  });

  it.only("Comments tab data Validation in details view", function () {
    cy.contains("Comments").click({ force: true });
    cy.wait(3000);
    //Created comment assertion
    cy.contains(this.DetailViewData.AddComments).should("be.visible");
    cy.log("Created comments exist");
    cy.wait(2000);
  });

  it.only("Time Entries tab data Validation in details view", function () {
    cy.contains("Time Entries").click({ force: true });
    //Created Time Entried assertions
    cy.contains(this.DetailViewData.TimeEntryConnection).should("be.visible");
    cy.wait(2000);
    cy.contains(this.DetailViewData.TotalHours + " h").should("be.visible");
    cy.wait(2000);
    cy.contains(this.DetailViewData.AddDescription).should("be.visible");
    cy.wait(3000);
  });

  it.only("Contributors tab data Validation in details view", function () {
    cy.contains("Contributors").click({ force: true });
    cy.wait(3000);
    //Contributors assertion
    cy.contains(this.DetailViewData.ContributorsName).should("be.visible");
    cy.log("Added Contributors exist");
    cy.wait(3000);
  });

  it.only("Files tab data Validation in details view", function () {
    cy.contains("Files").click({ force: true });
    cy.wait(2000);
    //uploaded file assertion
    cy.contains(this.DetailViewData.DetailViewFileName).should("be.visible");
    cy.log("Uploaded files exist");
  });
});
