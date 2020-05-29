import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";

describe("Create New Kit type", function () {
  this.beforeAll(function () {
    const lp = new LoginPage();
    cy.visit("http://serviceproviders.ca-build.com/Public/Login?ReturnUrl=%2F");
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.wait(10000);
  });

  this.beforeEach("Fixtures file data", function () {
    cy.fixture("KitBuilderTestData/CreateNewKitData").then(function (data) {
      this.data = data;
    });
  });

  it("Create A New Kit Type", function () {
    const kb = new KitBuilderPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    kb.AdminUrl();
    cy.wait(5000);
    kb.ClickOnKitBuilder();

    kb.ClickOnCreateNewKit();
    cy.wait(5000);
    //For Creating New Kit commands coming form Command.js
    cy.KitLabel(this.data.KitLabel);
    cy.KitName(this.data.KitName);
    cy.KitDescription(this.data.KitDescription);
    cy.KitIcon();
    cy.CreateKit();
  });

  it.only("New View Form", function () {
    cy.wait(10000);
    const kb = new KitBuilderPage();
    //cy.wait(5000)
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    kb.AdminUrl();
    cy.wait(5000);
    kb.ClickOnKitBuilder();
    cy.wait(5000);

    cy.contains(this.data.KitName).click({ force: true });
    cy.wait(3000);

    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains("List Views").click({ force: true });
    cy.wait(3000);

    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    //Click On New Form
    kb.ClickOnNewForm();
    //New Form View Detalis commands coming form command.js
    cy.NewViewLabel(this.data.NewView);
    cy.NewViewIcon();
    cy.NewViewDescription(this.data.NewView);
    cy.SaveNewForm();
    //Click on Assertion to close msg
    cy.get(".v-btn__content > .theme--dark").click();
    cy.wait(10000);
    cy.contains("NewView").click({ force: true });
    cy.wait(5000);

    //Elements
    cy.contains("Inputs").click({ force: true });
    cy.wait(2000)
    cy.contains("Inputs").click({ force: true });
    cy.wait(2000)

    
    // cy.contains('Date & Time').click({ force: true });
    // cy.wait(2000)
    // cy.contains('Date & Time').click({ force: true });
    // cy.wait(2000)
    // cy.contains('Choice Pickers').click({ force: true });
    // cy.wait(2000)
    // cy.contains('Choice Pickers').click({ force: true });
    // cy.wait(2000)
    // cy.contains('Content').click({ force: true });
    // cy.wait(2000)
    // cy.contains('Content').click({ force: true });
    
  });

  it("Table List", function () {
    cy.contains("List Views").click({ force: true });
    cy.wait(3000);

    const kb = new KitBuilderPage();
    //Click On Edit Form
    kb.ClickOnTableList();
    //Table List View Detalis commands coming form command.js
    cy.TableListViewLabel(this.data.TableView);
    cy.TableListViewDescription(this.data.TableView);
    cy.TableListViewIcon();
    cy.SaveTableList();
  });

  it("Edit View Form", function () {
    const kb = new KitBuilderPage();
    //Click On Edit Form
    kb.ClickOnEditForm();
    //Edit Form View Detalis commands coming form command.js
    cy.EditViewLabel(this.data.EditView);
    cy.EditViewIcon();
    cy.EditViewDescription(this.data.EditView);
    cy.SaveEditForm();
  });
});
