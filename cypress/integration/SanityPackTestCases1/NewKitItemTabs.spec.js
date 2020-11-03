import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";
import SanityLoginPage from "../PageObject/SanityLoginPage";

describe("New kit item all tab details", function () {
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

    cy.fixture("SanityPackTestData/NewKitItemTabsData").then(function (
      SanityTCData
    ) {
      this.SData = SanityTCData;
    });
  });

  it("Navigating to created Kit type ", function () {
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

  it("Time Entry", function () {});

  it("Comments tab", function () {});

  it("Groups Tab", function () {});

  it("", function () {});

  it("New kit item tabs", function () {
    cy.wait(3000);

    //Files Tab
    cy.contains("Files").click({ force: true });
    cy.wait(2000);
    //Click on Library
    cy.contains("Choose From Library").click({ force: true });
    cy.wait(2000);
    //Click on the file
    cy.get(".thumb-container:nth-child(2) .item-check").click({ force: true });
    cy.wait(2000);
    //Click on save file
    cy.get(".button-pop-ups--size > .v-btn__content").click({ force: true });
    //Assertion validation
    cy.contains("File saved").should("be.visible");
    cy.log("File uploaded");
    cy.wait(3000);

    // cy.contains("Upload From Drive").click({ force: true });
    // cy.wait(7000)

    // cy.get(".dropzone-area-button:nth-child(3) > .flex").click({ force: true });

    // cy.wait(4000)

    // cy.get('.dropzone-area-button:nth-child(3) > .wrapper-img').click({ force: true });

    // const fileName = "Fixtures.png";
    // cy.readFile("C:/Users/akash/Desktop/ScreenShots/Fixtures.png").then(
    //   function (fileContent) {
    //     cy.get(".dropzone-area-button:nth-child(3) > .flex").attachFile({
    //       fileContent,
    //       fileName,
    //       mimeType: "image/png",
    //     });
    //     cy.log("File Uploaded!");
    //   }
    // );

    // const imagefile = "Fixtures.png";
    // cy.contains("Upload From Drive").attachFile("Fixtures.png");
    // cy.log("File uploaded");

    ///Map Tab
    cy.contains(" Map ").click({ force: true });
    cy.wait(4000);
    //Click on Map
    cy.get(
      ".vue-map-container:nth-child(2) .gm-style > div:nth-child(1) > div:nth-child(3)"
    ).click({ force: true });
    cy.contains("Add a Pin").click({ force: true });
    cy.contains(" Location created ").should("be.visible");
    cy.wait(3000);

    //Contributors Tab
    cy.contains(" Contributors ").click({ force: true });
    cy.wait(2000);
    //Click on Add for Contributors
    cy.get(".addBtn:nth-child(2) > .v-btn__content").click({ force: true });
    //Assertion validation
    cy.contains(" Connections ").should("be.visible");

    cy.wait(1000);
    cy.contains("Coordinator").click({ force: true });
    cy.wait(1000);
    //Select Name
    cy.contains(this.SData.ContributorsName).click({ force: true });
    //Click on Save
    cy.get(".button-pop-ups--size > .v-btn__content").click({ force: true });
    //creation Assertion validation
    cy.contains("Item shared").should("be.visible");
    cy.log("Contributor added");
    cy.wait(2000);

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
    cy.get('[placeholder="Label"]').eq(0).type(this.SData.AddTimeEntryLable);
    cy.get('[placeholder="Description"]').type(
      this.SData.AddTimeEntryDescription
    );
    //Click on Save
    cy.get(".col-4 .v-btn__content").click({ force: true });
    //Assertion validation
    cy.contains(" New Time Type saved ").should("be.visible");

    //Click on Total hours
    cy.get('[name="totalHours"]').type(this.SData.TotalHours);
    //Click on select date
    cy.get('[name="startdate"]').click({ force: true });
    //Select Date
    cy.xpath("//div[contains(text(),'30')]").eq(0).click({ force: true });
    //Click on OK
    cy.xpath("//span[contains(text(),'OK')]").click({ force: true });
    cy.wait(2000);
    //Click on Time Entry for
    cy.get(
      "div:nth-child(2) > div:nth-child(1) > span > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    ).click({ force: true });
    //Assertion validation
    cy.contains("Connection").should("be.visible");
    cy.contains(this.SData.TimeEntryConnection).click({ force: true });
    cy.wait(1000);
    cy.get('[placeholder="Add a Description"]').type(this.SData.AddDescription);
    //Click on Save
    cy.get(".col-3 > .ca-button-green > .v-btn__content").click({
      force: true,
    });
    //Assertion validation
    cy.contains(" Time Entry details saved ").should("be.visible");
    cy.log("Time Entry details saved");
    cy.wait(2000);

    //Comments Tab
    cy.contains("Comments ").click({ force: true });
    cy.wait(2000);
    cy.get('[name="addComment"]').type(this.SData.AddComments);
    cy.wait(2000);
    cy.contains(" SAVE ").click({ force: true });
    //Assertion validation
    cy.contains(" New Comment added ").should("be.visible");
    cy.log("Comment has been added");
    cy.wait(2000);

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
    cy.contains(this.SData.AddGroup).click({ force: true });
    //Assertion validation
    cy.contains(this.SData.AddGroup).should("be.visible");
  });
});
