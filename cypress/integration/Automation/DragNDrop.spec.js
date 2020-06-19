
describe('Trying to Implement drag and drop in cypress',function(){


    it('Drag and Drop Demo',function(){

        cy.visit('https://www.seleniumeasy.com/test/drag-and-drop-demo.html')
        cy.get('#todrag>span:nth-child(2)').drag('#mydropzone')
        cy.wait(3000)
        cy.get('#todrag>span:nth-child(3)').drag('#mydropzone')
        cy.wait(3000)
        cy.get('#todrag>span:nth-child(4)').drag('#mydropzone')
        cy.wait(3000)
        cy.get('#todrag>span:nth-child(5)').drag('#mydropzone')
        cy.wait(3000)
        

    })

    it.only('Double click',function(){
        cy.visit('http://demo.automationtesting.in/WebTable.html')
        cy.get('[ng-dblclick="grid.appScope.start($event)"]').dblclick({multiple:true})


    })
})


// cy.get('[title="Url"]').drag('.grapes-vue-editor');

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