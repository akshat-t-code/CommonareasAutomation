describe('Navigating to Common Aera', function(){

it('Verifying the login functionality',function(){

    cy.visit('/')
    cy.get('#UserName').click()
    cy.get('#UserName').type('kstanley@commonareas.work.dev')
    cy.get('#Password').type('1234567Aa')
    cy.get('#login_button').click()

    cy.wait(25000)

    cy.get('.fill-height > .plus-button .inline-svg').click()
cy.get('.my-3:nth-child(16) .menu-items-icon').click()

})









})