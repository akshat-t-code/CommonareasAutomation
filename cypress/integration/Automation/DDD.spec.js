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

  it.only("New View Form", function () {
    cy.wait(10000);
    const kb = new KitBuilderPage();
    cy.wait(5000);
    cy.title().should("eq", "Common Areas");
    cy.wait(5000);
    cy.visit(
      "http://serviceproviders.ca-build.com/ClientAdmin/KitBuilder/?localdev=true#/"
    );
    // kb.AdminUrl();
    cy.wait(5000);
    //kb.ClickOnKitBuilder();
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
    const getIframeDocument = () => {
        return cy.get(".gjs-frame").its("0.contentDocument").should("exist");
      };
  
      const getIframeBody = () => {
        // get the document
        return (
          getIframeDocument()
            // automatically retries until body is loaded
            .its("body")
            .should("not.be.undefined")
            // wraps "body" DOM element to allow
            // chaining more Cypress commands, like ".find(...)"
            .then(cy.wrap)
        );
      };

      getIframeBody().find("#wrapper").as("Target");
      cy.get('[title="Url"]').drag("@Target");
 

//       const dataTransfer = new DataTransfer;

//   cy.get('[title="Url"]')
//     .trigger('dragstart', { dataTransfer });

//     getIframeBody().find("#wrapper").click()
//     .trigger('drop', { dataTransfer });

//   cy.get('[title="Url"]')
//     .trigger('dragend');  

//       cy.get('[title="Url"]')
// .trigger("mousedown", { button: 0 }, { force: true })
// .trigger("mousemove", 200, -200, { force: true })
// getIframeBody().find("#wrapper").click()
// .trigger("mouseup", { force: true });


// cy.get('[title="Url"]')
//     .trigger("mousedown", { which: 1 })


//     getIframeBody().find("#wrapper")
//     .trigger("mousemove")
//     .trigger("mouseup")
    
    // cy.get('[title="Url"]').then(el => {
    //   const draggable = el[0];
    //    getIframeBody('.gjs-frame').find('#wrapper').then(el => {
    //     const droppable = el[0];
    //     const coords = droppable.getBoundingClientRect();
    //     draggable.dispatchEvent(new MouseEvent('mousemove'));
    //     draggable.dispatchEvent(new MouseEvent('mousedown'));
    //     draggable.dispatchEvent(new MouseEvent('mousemove', {clientX: 10, clientY: 0}));
    //     draggable.dispatchEvent(new MouseEvent('mousemove', {clientX: 226, clientY: 35}));
    //     draggable.dispatchEvent(new MouseEvent('mouseup'));
        
    //   });
    // })


    // const getIframeDocument = () => {
    //   return cy.get(".gjs-frame").its("0.contentDocument").should("exist");
    // };

    // const getIframeBody = () => {
    //   // get the document
    //   return (
    //     getIframeDocument()
    //       // automatically retries until body is loaded
    //       .its("body")
    //       .should("not.be.undefined")
    //       // wraps "body" DOM element to allow
    //       // chaining more Cypress commands, like ".find(...)"
    //       .then(cy.wrap)
    //   );
    // };

     getIframeBody().find("#wrapper").as("Target");
     cy.get('[title="Url"]').drag("@Target");

   

    






    
  });
});
