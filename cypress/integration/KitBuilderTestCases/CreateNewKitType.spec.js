import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";

describe("Create New Kit type ", function () {
  this.beforeAll(function () {
    //Page Object
    const lp = new LoginPage();
    lp.visitCityComTest();
    //cy.visit('https://tm.commonareas.io/Public/Login?ReturnUrl=%2F')
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
    cy.wait(50000);
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

    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (
      KitTypeFormViewsNames
    ) {
      this.data = KitTypeFormViewsNames;
    });
    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
      KittypeName
    ) {
      this.KitTypeName = KittypeName;
    });
  });

  it("Create A New Kit Type", function () {
    const kb = new KitBuilderPage();
    const lp = new LoginPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    lp.visitCityComTestKitBuilder();
    //cy.visit('https://tm.commonareas.io/ClientAdmin/KitBuilder#/')
    cy.log("User in Kit Builder");
    kb.ClickOnCreateNewKit();
    //Create Kit type Pop Up Window Assertion
    cy.contains("Create New Kit").should("be.visible");
    cy.wait(5000);
    //For Creating New Kit type commands coming form Command.js
    cy.KitLabel(this.KitTypeName.KitLabel3);
    cy.KitName(this.KitTypeName.KitName3);
    cy.KitDescription(this.KitTypeName.KitDescription3);
    cy.ApiName(this.KitTypeName.APIName3);
    cy.KitIcon();
    cy.CreateKit();
    //Create Kit type Assertion
    cy.contains("Kit Type Saved Successfully").should("be.visible");
    cy.log("New Kit Type has been Created");
  });

  it("New View Form", function () {
    cy.wait(5000);
    const kb = new KitBuilderPage();
    cy.contains(this.KitTypeName.KitName3).click({ force: true });
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
    cy.log("New View Form has been Created");
    cy.wait(3000);
  });

  it("Edit View Form", function () {
    cy.wait(3000);
    const kb = new KitBuilderPage();
    //Click On Edit Form
    kb.ClickOnEditForm();
    //Edit Form View Detalis commands coming form command.js
    cy.EditViewLabel(this.data.EditView);
    cy.EditViewIcon();
    cy.EditViewDescription(this.data.EditView);
    cy.SaveEditForm();
    cy.log("Edit View Form has been Created");
  });

  it("Shared View Form", function () {
    cy.wait(3000);
    const kb = new KitBuilderPage();
    //Click On Shared Form
    kb.ClickOnSharedForm();
    //Shared Form View Detalis commands coming form command.js
    cy.SharedViewLabel(this.data.SharedView);
    cy.SharedViewIcon();
    cy.SharedViewDescription(this.data.SharedView);
    cy.SaveSharedForm();
    cy.log("Shared View Form has been Created");
  });

  it("Email View Form", function () {
    cy.wait(3000);
    const kb = new KitBuilderPage();
    //Click On Email Form
    kb.ClickOnEmailForm();
    //Email Form View Detalis commands coming form command.js
    cy.EmailViewLabel(this.data.EmailView);
    cy.EmailViewIcon();
    cy.EmailViewDescription(this.data.EmailView);
    cy.SaveEmailForm();
    cy.log("Email View Form has been Created");
  });

  it("Map View Form", function () {
    cy.wait(3000);
    const kb = new KitBuilderPage();
    //Click On Map Form
    kb.ClickOnScheduleForm();
    //Map Form View Detalis commands coming form command.js
    cy.MapViewLabel(this.data.MapView);
    cy.MapViewIcon();
    cy.MapViewDescription(this.data.MapView);
    cy.SaveMapForm();
    cy.log("Map View Form has been Created");
  });

  it("Schedule View Form", function () {
    cy.wait(3000);
    const kb = new KitBuilderPage();
    //Click On Schedule Form
    kb.ClickOnScheduleForm();
    //Schedule Form View Detalis commands coming form command.js
    cy.ScheduleViewLabel(this.data.ScheduleView);
    cy.ScheduleViewIcon();
    cy.ScheduleViewDescription(this.data.ScheduleView);
    cy.SaveScheduleForm();
    cy.log("Schedule View Form has been Created");
  });

  it("CommonPlan View Form", function () {
    cy.wait(3000);
    const kb = new KitBuilderPage();
    //Click On CommonPlan Form
    kb.ClickOnCommonPlanForm();
    //CommonPlan Form View Detalis commands coming form command.js
    cy.CommonPlanViewLabel(this.data.CommonPlanView);
    cy.CommonPlanViewIcon();
    cy.CommonPlanViewDescription(this.data.CommonPlanView);
    cy.SaveCommonPlanForm();
    cy.log("CommonPlan View Form has been Created");
  });

  it("RelatedNew View Form", function () {
    cy.wait(3000);
    const kb = new KitBuilderPage();
    //Click On RelatedNew Form
    kb.ClickOnRelatedNewForm();
    //RelatedNew Form View Detalis commands coming form command.js
    cy.RelatedNewViewLabel(this.data.RelatedNewView);
    cy.RelatedNewViewIcon();
    cy.RelatedNewViewDescription(this.data.RelatedNewView);
    cy.SaveRelatedNewForm();
    cy.log("RelatedNew View Form has been Created");
  });

  it("RelatedEdit View Form", function () {
    cy.wait(3000);
    const kb = new KitBuilderPage();
    //Click On RelatedEdit Form
    kb.ClickOnRelatedEditForm();
    //RelatedEdit Form View Detalis commands coming form command.js
    cy.RelatedEditViewLabel(this.data.RelatedEditView);
    cy.RelatedEditViewIcon();
    cy.RelatedEditViewDescription(this.data.RelatedEditView);
    cy.SaveRelatedEditForm();
    cy.log("RelatedEdit View Form has been Created");
    cy.contains("RelatedEditView").scrollIntoView({ force: true });
  });

  it("List Views(TableList,SearchList,TimelineList)", function () {
    const kb = new KitBuilderPage();
    // cy.title().should("eq", "Common Areas");
    // cy.wait(5000);
    // kb.AdminUrl();
    // cy.wait(5000);
    // kb.ClickOnKitBuilder();
    // cy.wait(5000);

    // cy.contains(this.data.KitName).click({ force: true });
    cy.wait(3000);

    // cy.contains("Form Views").click({ force: true });
    // cy.wait(3000);

    cy.contains("List Views").click({ force: true });
    cy.wait(3000);

    //const kb = new KitBuilderPage();

    //Table List View Detalis commands coming form command.js
    kb.ClickOnTableList();
    cy.TableListViewLabel(this.data.TableView);
    cy.TableListViewDescription(this.data.TableView);
    cy.TableListViewIcon();
    cy.SaveTableList();
    cy.log("Table List View has been Created");
    cy.wait(5000);

    //Search ListView Detalis commands coming form command.js
    kb.ClickOnSearchList();
    cy.SearchListViewLabel(this.data.SearchView);
    cy.SearchListViewDescription(this.data.SearchView);
    cy.SearchListViewIcon();
    cy.SaveSearchList();
    cy.log("Search List View has been Created");
    cy.wait(5000);

    //Timeline ListView Detalis commands coming form command.js
    kb.ClickOnTimelineList();
    cy.TimelineListViewLabel(this.data.TimelineView);
    cy.TimelineListViewDescription(this.data.TimelineView);
    cy.TimelineListViewIcon();
    cy.SaveTimelineList();
    cy.log("Timeline List View has been Created");
    cy.wait(3000);
    cy.contains("TimelineView").scrollIntoView({ force: true });
  });
});
