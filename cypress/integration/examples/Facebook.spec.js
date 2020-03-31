/// <reference types="cypress" />

describe('Navigating to facebook sign up page', function(){

    it('Creating new user of facebook',function(){
    
        cy.visit('https://www.facebook.com/')
        cy.get('#u_0_m').click()
cy.get('#u_0_m').type('sddf')
cy.get('#u_0_o').click()
cy.get('#u_0_o').type('sdfd')
cy.get('#u_0_r').click()
cy.get('#u_0_r').type('76876577557')
cy.get('#u_0_w').click()
cy.get('#u_0_w').type('Akshat@72363534')
cy.get('#u_0_a').click()
cy.get('[data-testid=royal_email]').click()
cy.get('[data-testid=royal_email]').type('akshar@etelligens.com')
cy.get('[data-testid=royal_pass]').click()
cy.get('[data-testid=royal_pass]').type('mujeniptabhai')
cy.get('[data-testid=royal_login_button]').click()
cy.get('#login_form').submit()





        




    })

})