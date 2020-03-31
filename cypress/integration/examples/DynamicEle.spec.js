/// <reference types="cypress" />

describe('Dynamic Elements', function () {


    it('Welcome admin', function () {


        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type("Admin")
        cy.get('#txtPassword').type("admin123")
        cy.get('#btnLogin').click()

        cy.get('.panelTrigger').then(function ($welcomeEle) {
            const Weltxt = $welcomeEle.text()
            cy.log(Weltxt)
            const UserName='Admin'
            expect(Weltxt).to.match(/Welcome .*/)
            //expect(Weltxt).eq('Welcome' + UserName)   
            //expect(Weltxt).eq('Welcome Admin')
            cy.contains(/Welcome .+/).click()
            cy.contains('Logout').click()


        })




    })


})
