

context('Navigation to google', () => {
        it('Go to google home page', () => {
      cy.visit('https://google.com/')
      cy.xpath('//input[@name=q]').click().type("Google")
      
      
    })
})