
describe('Zoho',function(){

it('Login',function(){

    cy.visit('https://accounts.zoho.com/signin?')

    cy.get('[placeholder="Email address or mobile number"]').type('vivek.mahajan@etelligens.in')
    cy.wait(1000)
    cy.get("#nextbtn").click({force:true})
    cy.get("#password").type('try1234567Aa')
    cy.get('#nextbtn').click({force:true})

})




})