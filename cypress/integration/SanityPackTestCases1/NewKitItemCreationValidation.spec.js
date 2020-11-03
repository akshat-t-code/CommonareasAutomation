import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";
import SanityLoginPage from "../PageObject/SanityLoginPage";

describe("New created kit item creation Validation test case", function () {
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

    cy.fixture("SanityPackTestData/NewKitItemTabsData").then(function (
      SanityTCData
    ) {
      this.SData = SanityTCData;
    });
  });

  it.only("Click on list view and select kit type to Validate", function () {
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

    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).should("exist");
    cy.log("Created New Kit Item has been Exist");
    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);

    //Url
    //cy.get("[name" + "=" + this.DataType2.Url + "]").should('have.text', this.NewKitItemData.Url)
  });

  it("Group tab data Validation in details view", function () {
    //Click on group
    cy.contains("Groups").click({ force: true });
    cy.wait(3000);
    cy.contains(this.SData.AddGroup).should("be.visible");

    cy.log("Added group exist");
    cy.wait(2000);
  });

  it("Comments tab data Validation in details view", function () {
    cy.contains("Comments").click({ force: true });
    cy.wait(3000);
    cy.contains(this.SData.AddComments).should("be.visible");
    cy.log("Created comments exist");
    cy.wait(2000);
  });

  it("Time Entries tab data Validation in details view", function () {
    cy.contains("Time Entries").click({ force: true });
    // cy.contains(this.SData.TimeEntryConnection).should("be.visible");
    // cy.wait(2000);
    // cy.contains(this.SData.TotalHours + " h").should("be.visible");
    // cy.wait(2000);
    // cy.contains(this.SData.AddDescription).should("be.visible");
    cy.wait(2000);
    cy.get(".time-entry-author__name").should(
      "have.text",
      this.SData.TimeEntryConnection
    );
    cy.get(".time-entry__description").should(
      "have.text",
      this.SData.AddDescription
    );
    cy.get(".time-entry__hours").should(
      "have.text",
      this.SData.TotalHours + " h"
    );
    cy.log("Created Time Entries exist");
    cy.wait(3000);
  });

  it("Contributors tab data Validation in details view", function () {
    cy.contains("Contributors").click({ force: true });
    cy.wait(3000);

    cy.get(".contributor__name")
      .eq(0)
      .should("have.text", this.SData.ContributorsName);
    cy.wait(2000);
    cy.get(".contributor__name")
      .eq(2)
      .should("have.text", this.NewKitItemData.AssigningName);

    // cy.contains(this.SData.ContributorsName).should("be.visible");
    // cy.wait(2000);
    // cy.contains(this.DataType2.AssigningName).should("be.visible");
    // cy.wait(2000);
    cy.log("Added Contributors exist");
    cy.wait(3000);
  });

  it.only("Files tab data Validation in details view", function () {
    cy.contains("Files").click({ force: true });
    cy.wait(2000);
  });
});
