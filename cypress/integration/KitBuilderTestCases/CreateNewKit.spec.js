import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes"

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
    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (data1) {
      this.data1 = data1;
    });

    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (datatypes) {
      this.DataType = datatypes;
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

  it.only("New View Form", function () {
    cy.wait(10000);
    const kb = new KitBuilderPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    // cy.visit(
    //   "http://serviceproviders.ca-build.com/ClientAdmin/KitBuilder/?localdev=true#/"
    // );
     kb.AdminUrl();
    cy.wait(5000);
    kb.ClickOnKitBuilder();
    cy.wait(5000);

    cy.contains(this.data1.KitName).click({ force: true });
    cy.wait(3000);

    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);

    // //Click On New Form
    // kb.ClickOnNewForm();
    // //New Form View Detalis commands coming form command.js
    // cy.NewViewLabel(this.data.NewView);
    // cy.NewViewIcon();
    // cy.NewViewDescription(this.data.NewView);
    // cy.SaveNewForm();

    cy.wait(3000);
    cy.contains("NewView").click({ force: true });
    cy.wait(5000);

    //Elements
    cy.contains("Inputs").click({ force: true });
    cy.wait(2000);
   const DataType=new KitBuilderDataTypes()
   DataType.Url(this.DataType.Url)

  
    //Drag n Drop
    // cy.getIframeBody().find("#wrapper").click().as("Target");
    // cy.get('[title="Url"]').drag("@Target");

    

    //  getIframeBody().find('#wrapper')
    //  .as('Target')

    //   //cy.get('.control-text > img').drag('@Target')
    //    //getIframeBody().find('#v-mount').as('Target')

    //  // getIframeBody().get('[title="Url"]').drag('[data-gjs-type="wrapper"]')
    //   cy.wait(5000)
    //     cy.get('[title="Text"]')
    //     .drag('@Target')
    //cy.get('.control-text > img').drag('@Target')

    //getIframeBody().find('.layout ').should('exist')
    //getIframeBody().find('#v-mount').should('exist')
    // getIframeBody().find('.v-application--wrap').should('exist')
    // getIframeBody().find('[data-gjs-type="wrapper"]').should('exist')
    // getIframeBody().find('#v-app').should('exist')
    //getIframeBody().find('[title="Url"]').should('exist')

    






    //   //Click on Text DT
    
    // cy.getIframeBody().find('[placeholder="Number"]').click({force:true})
    // cy.wait(3000)
    // cy.getIframeBody().find('[placeholder="Address"]').click({force:true})
    // cy.wait(3000)

    // cy.getIframeBody().find('[placeholder="Email"]').click({force:true})
    // cy.wait(3000)

    // cy.getIframeBody().find('[placeholder="Measure"]').click({force:true})
    // cy.wait(3000)

    // cy.getIframeBody().find('[placeholder="Currency"]').click({force:true})
    // cy.wait(3000)

    // cy.getIframeBody().contains('Slider').click({force:true})
    //    cy.wait(3000)

    // cy.getIframeBody().contains('Text Area').click({force:true})
    //    cy.wait(3000)

    //   cy.getIframeBody().find('[placeholder="Text"]').click({force:true})
    //    cy.wait(3000)
    //    cy.getIframeBody().find('[placeholder="Url"]').click({force:true})
    //    cy.wait(3000)
    //    cy.getIframeBody().find('[placeholder="Telephone"]').click({force:true})
    //    cy.wait(3000)
    //    cy.getIframeBody().find('[placeholder="Tooltip for File"]').click({force:true})




    // cy.getIframeBody().find('[placeholder="Url"]').click({force:true})
    //   //Click on Lable
    //   cy.get('.gjs-trt-trait__wrp:nth-child(1) input').click().type('Text')
    //   //Click on Name
    //    cy.get('.gjs-trt-trait__wrp:nth-child(2) input').click();
    //   //Select a Value
    //    cy.get('.gjs-trt-trait__wrp:nth-child(3) select').select('Select a value')
    //   //Select New Kit Element
    //   cy.get('.gjs-trt-trait__wrp:nth-child(3) select').select('New Kit Element');

    // cy.contains('Element Label').click({force:true})

    // cy.contains('Element Name').click({force:true})

    // cy.get('#gjs-editor_557fb96f-febb-416c-a0ab-1492c8d11be8 > div.v-dialog__container.new-element-header > div > div > div.container.new-element-body > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot')
    // .click({force:true}).type('Text')

    //cy.contains('Element Friendly Description').click({force:true}).type('Text')
    //Click on Save
    //cy.get('.v-btn--text:nth-child(2)').click();
  });
});
