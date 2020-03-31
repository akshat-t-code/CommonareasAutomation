/// <reference types="cypress" />

describe('Navigating to common area', function () {

    it('Verifying the login functionality', function () {

        cy.visit('/')
        cy.get('#UserName').click()
        cy.get('#UserName').type('kstanley@commonareas.work.dev')
        cy.get('#Password').type('1234567Aa')
        cy.get('#login_button').click()

        cy.wait(25000)
        cy.get('.v-btn__content > .theme--dark').click()
        cy.wait(5000)
        cy.get('.v-list-item:nth-child(17) > .v-list-item__content').click()
        cy.wait(5000)
        cy.get('.row:nth-child(1) .v-list-item__subtitle:nth-child(1)').click()
        cy.wait(10000)

    })

})