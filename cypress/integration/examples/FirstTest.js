describe('My first suite', function(){

    it('Verifying title of the page-Positive',function(){

        cy.visit('https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Write-your-first-test')
        cy.title().should('eq','Writing Your First Test | Cypress Documentation')
        //cy.screenshot()
    })

    it('Verifying title of the page-Negative',function(){

        cy.visit('https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Write-your-first-test')
        cy.title().should('eq','Your First Test | Cypress Documentation')
       // cy.screenshot()
    })
    


})

