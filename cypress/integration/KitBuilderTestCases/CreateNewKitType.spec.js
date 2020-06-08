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
    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (data) {
      this.data = data;
    });
    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (data1) {
      this.data1 = data1;
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
    //For Creating New Kit type commands coming form Command.js
    cy.KitLabel(this.data1.KitLabel);
    cy.KitName(this.data1.KitName);
    cy.KitDescription(this.data1.KitDescription);
    cy.KitIcon();
    cy.CreateKit();
  });

  it("New View Form", function () {
    cy.wait(5000);
    const kb = new KitBuilderPage();
    cy.contains(this.data1.KitName).click({ force: true });
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
     cy.wait(3000);
  });


  it("Edit View Form", function () {
    cy.wait(3000)
    const kb = new KitBuilderPage();
    //Click On Edit Form
    kb.ClickOnEditForm();
    //Edit Form View Detalis commands coming form command.js
    cy.EditViewLabel(this.data.EditView);
    cy.EditViewIcon();
    cy.EditViewDescription(this.data.EditView);
    cy.SaveEditForm();
  });

  it("Shared View Form", function () {
    cy.wait(3000)
    const kb = new KitBuilderPage();
    //Click On Shared Form
    kb.ClickOnSharedForm();
    //Shared Form View Detalis commands coming form command.js
    cy.SharedViewLabel(this.data.SharedView);
    cy.SharedViewIcon();
    cy.SharedViewDescription(this.data.SharedView);
    cy.SaveSharedForm();
  });

  it("Email View Form", function () {
    cy.wait(3000)
    const kb = new KitBuilderPage();
    //Click On Email Form
    kb.ClickOnEmailForm();
    //Email Form View Detalis commands coming form command.js
    cy.EmailViewLabel(this.data.EmailView);
    cy.EmailViewIcon();
    cy.EmailViewDescription(this.data.EmailView);
    cy.SaveEmailForm();
  });

  it("Map View Form", function () {
    cy.wait(3000)
    const kb = new KitBuilderPage();
    //Click On Map Form
    kb.ClickOnScheduleForm();
    //Map Form View Detalis commands coming form command.js
    cy.MapViewLabel(this.data.MapView);
    cy.MapViewIcon();
    cy.MapViewDescription(this.data.MapView);
    cy.SaveMapForm();
  });

  it("Schedule View Form", function () {
    cy.wait(3000)
    const kb = new KitBuilderPage();
    //Click On Schedule Form
    kb.ClickOnScheduleForm();
    //Schedule Form View Detalis commands coming form command.js
    cy.ScheduleViewLabel(this.data.ScheduleView);
    cy.ScheduleViewIcon();
    cy.ScheduleViewDescription(this.data.ScheduleView);
    cy.SaveScheduleForm();
  });

  it("CommonPlan View Form", function () {
    cy.wait(3000)
    const kb = new KitBuilderPage();
    //Click On CommonPlan Form
    kb.ClickOnCommonPlanForm();
    //CommonPlan Form View Detalis commands coming form command.js
    cy.CommonPlanViewLabel(this.data.CommonPlanView);
    cy.CommonPlanViewIcon();
    cy.CommonPlanViewDescription(this.data.CommonPlanView);
    cy.SaveCommonPlanForm();
  });

  it("RelatedNew View Form", function () {
    cy.wait(3000)
    const kb = new KitBuilderPage();
    //Click On RelatedNew Form
    kb.ClickOnCommonPlanForm();
    //RelatedNew Form View Detalis commands coming form command.js
    cy.RelatedNewViewLabel(this.data.RelatedNewView);
    cy.RelatedNewViewIcon();
    cy.RelatedNewViewDescription(this.data.RelatedNewView);
    cy.SaveRelatedNewForm();
  });

  it("RelatedEdit View Form", function () {
    cy.wait(3000)
    const kb = new KitBuilderPage();
    //Click On RelatedEdit Form
    kb.ClickOnCommonPlanForm();
    //RelatedEdit Form View Detalis commands coming form command.js
    cy.RelatedEditViewLabel(this.data.RelatedEditView);
    cy.RelatedEditViewIcon();
    cy.RelatedEditViewDescription(this.data.RelatedEditView);
    cy.SaveRelatedEditForm();
    cy.contains('RelatedEditView').scrollIntoView({force:true})
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
    cy.wait(5000)

    //Search ListView Detalis commands coming form command.js
     kb.ClickOnSearchList()
     cy.SearchListViewLabel(this.data.SearchView)
     cy.SearchListViewDescription(this.data.SearchView)
     cy.SearchListViewIcon()
     cy.SaveSearchList()
     cy.wait(5000)

     //Search ListView Detalis commands coming form command.js
     kb.ClickOnTimelineList()
     cy.TimelineListViewLabel(this.data.TimelineView)
     cy.TimelineListViewDescription(this.data.TimelineView)
     cy.TimelineListViewIcon()
     cy.SaveTimelineList()
     cy.wait(3000)
     cy.contains('TimelineView').scrollIntoView({force:true})

  });


  
});
