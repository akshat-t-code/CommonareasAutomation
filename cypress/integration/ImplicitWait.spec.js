


describe('Implicit wait in cypress', function () {


    it('Implicitly wait for element', function () {

        cy.visit('http://www.executeautomation.com/site/')
        cy.get('[aria-label="jump to slide 2"]', { timeout: 40000 }).should('have.class', 'ls-nav-active')
      
    
    })

    it.only('Scrolling with cypress', function(){
        cy.visit('http://www.executeautomation.com/site/')

          cy.get('[aria-label="jump to slide 2"]').scrollIntoView()
        // cy.get('[aria-label="jump to slide 2"]').scrollIntoView({ duration: 10000 })
        //cy.contains('Training across the Globe').scrollIntoView().should('be.visible')
        //cy.scrollTo('bottom')
      // cy.contains('ExecuteAutomation©. All rights reserved').should('be.visible').scrollTo('topRight')
      // cy.scrollTo(0,2000)

    })



})