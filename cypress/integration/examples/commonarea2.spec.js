/// <reference types="cypress" />

describe('Navigating to Common Aera', function () {

    it('Verifying the login functionality', function () {

        cy.visit('/')
        cy.get('#UserName').click()
        cy.get('#UserName').type('kstanley@commonareas.work.dev')
        cy.get('#Password').type('1234567Aa')
        cy.get('#login_button').click()

        cy.wait(25000)

        cy.get('.v-btn__content > .theme--dark').click()
        cy.wait(5000)
        cy.get('.v-list-item:nth-child(1) > .v-list-item__content').click()

        cy.get('.v-btn__content > .theme--dark').click()
        cy.wait(5000)
        cy.get('.v-list-item:nth-child(4) > .v-list-item__content > .v-list-item__title').click()

        cy.wait(5000)
        cy.get('.row:nth-child(1) .truncate:nth-child(2)').click()
        cy.wait(5000)
        cy.get('.tab_container__tabs:nth-child(1) .v-tab:nth-child(3)').click()
        cy.wait(5000)
        cy.get('.v-btn--flat:nth-child(1) > .v-btn__content > .inline-svg > path').click()
        cy.wait(5000)
        cy.get('.row:nth-child(1) .truncate:nth-child(2)').click()
        cy.wait(3000)
        debugger
        cy.get('.mb-2:nth-child(1) .v-radio:nth-child(2) .v-input--selection-controls__ripple').click()
        // .then(($ele)=>{

        //     debugger;
        // })
        
       // .debug()
        //debugger;
        cy.wait(5000)
        cy.get('.ca-button-green:nth-child(2) > .v-btn__content').click()



    })

})