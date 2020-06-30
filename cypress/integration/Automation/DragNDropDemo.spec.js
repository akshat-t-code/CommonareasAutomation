import LoginPage from "../PageObject/LoginPage";
import KitBuilderPage from "../PageObject/KitBuilderPage";
import KitBuilderDataTypes from "../PageObject/KitBuilderDataTypes";

describe("Copy New Form Elements to the Edit View", function () {
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
    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      datatypes
    ) {
      this.DataType = datatypes;
    });
  });

  it.only("Navigating to New Form of Created Kit Type", function () {
    const kb = new KitBuilderPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    cy.visit('http://serviceproviders.ca-build.com/ClientAdmin/KitBuilder/?localdev=true')
   // kb.AdminUrl();
    cy.wait(5000);
    //kb.ClickOnKitBuilder();
    cy.wait(3000);
    cy.contains(this.data1.KitName).click({ force: true });
    cy.wait(3000);
    cy.contains("Form Views").click({ force: true });
    cy.wait(3000);
    cy.contains(this.data.NewView).click({ force: true });
    cy.wait(5000);
  });

  it.only("Input Section Data Elements", function () {
    cy.contains("Inputs").click({ force: true });
    cy.wait(2000);
  });

  it.only("Url Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Url"]').dblclick({force:true})
    //Page Object
    const DataType = new KitBuilderDataTypes();

    DataType.Url(this.DataType.Url);
    cy.wait(5000);
  });

  it.only("Section Data Type", function () {
    //Double click on Data Element to drag it on Canvas
    cy.get('[title="Section"]').dblclick({force:true})
    //Page Object
    const DataType = new KitBuilderDataTypes();
    DataType.Section(this.DataType.Section);
    cy.wait(5000);
  });

  it("Drag n Drop Demo", function () {
    //Drag n Drop
    cy.contains('Inputs').click({force:true})
    // cy.wait(2000)
    // cy.getIframeBody().find("#wrapper").should('exist')
    // cy.wait(2000)
    // cy.getIframeBody().find("#wrapper").click().as("Target");
    // cy.get('[title="Url"]').drag("@Target");
    // cy.get('[title="Url"]').dblclick({force:true})

    cy.wait(2000)

    
    cy.get('[title="Text"]').dblclick({force:true})

    cy.wait(2000)

    
    cy.get('[title="File"]').dblclick({force:true})

    cy.wait(2000)

    
    cy.get('[title="Telephone"]').dblclick({force:true})


    cy.wait(2000)

    
    cy.get('[title="Text Area"]').dblclick({force:true})


    cy.wait(2000)

    
    cy.get('[title="Slider"]').dblclick({force:true})


    cy.wait(2000)

    
    cy.get('[title="Currency"]').dblclick({force:true})



    cy.wait(2000)

    
    cy.get('[title="Email"]').dblclick({force:true})


    cy.wait(2000)

    
    cy.get('[title="Measure"]').dblclick({force:true})

    cy.wait(2000)

    
    cy.get('[title="Address"]').dblclick({force:true})


    cy.wait(2000)

    
    cy.get('[title="Number"]').dblclick({force:true})

    cy.contains('Date & Time').click({ force: true });

    cy.wait(2000)

    cy.get('[title="Time"]').dblclick({force:true})

    cy.wait(2000)

    cy.get('[title="Add Date"]').dblclick({force:true})

    cy.wait(2000)


    cy.get('[title="Reminder"]').dblclick({force:true})

    cy.wait(2000)


    cy.contains('Choice Pickers').click({ force: true });

    cy.get('[title="Toggle"]').dblclick({force:true})

    cy.wait(2000)

    cy.get('[title="Select List"]').dblclick({force:true})

    cy.wait(2000)


    cy.get('[title="Radio Select"]').dblclick({force:true})

    cy.wait(2000)


    cy.get('[title="Checkbox Select"]').dblclick({force:true})

    cy.wait(2000)


    cy.contains('Dynamic Controls').click({ force: true });
    cy.wait(2000)

    cy.get('[title="Reactive Variable"]').dblclick({force:true})

    cy.wait(2000)

    cy.get('[title="Reactive Control"]').dblclick({force:true})

    cy.wait(2000)



    cy.contains('Content').click({ force: true });
    cy.wait(2000)

    cy.get('[title="Relation 1-N"]').dblclick({force:true})

    cy.wait(2000)

    cy.get('[title="Stepper"]').dblclick({force:true})

    cy.wait(2000)

    cy.get('[title="Contact Selector"]').dblclick({force:true})

    cy.wait(2000)


    cy.get('[title="User Selector"]').dblclick({force:true})

    cy.wait(2000)

    cy.get('[title="Relation 1-1"]').dblclick({force:true})

    cy.wait(2000)

    cy.get('[title="SquareCard"]').dblclick({force:true})

    cy.wait(2000)


    cy.get('[title="Icon"]').dblclick({force:true})

    cy.wait(2000)


    cy.get('[title="Inspection"]').dblclick({force:true})

    cy.wait(2000)


    cy.get('[title="Assigning"]').dblclick({force:true})

    cy.wait(2000)

   





    //cy.get('.control-text > img').drag('@Target')
    //getIframeBody().find('.layout ').should('exist')
    //getIframeBody().find('#v-mount').should('exist')
    // getIframeBody().find('.v-application--wrap').should('exist')
    // getIframeBody().find('[data-gjs-type="wrapper"]').should('exist')
    // getIframeBody().find('#v-app').should('exist')
    //getIframeBody().find('[title="Url"]').should('exist')
  });
});
