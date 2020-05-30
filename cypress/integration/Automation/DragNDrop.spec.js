
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
})