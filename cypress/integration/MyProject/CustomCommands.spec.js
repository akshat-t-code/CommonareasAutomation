

describe('Customn Commands demo and write in commands.js folder under support', function () {


    it.only('Login to an application', function () {

       // we can use it as data driven test alos

       //valid login
       cy.login('admin@yourstore.com','admin')
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')


       //invalid login
       cy.login('admin@yourstore.com','admin123')
        cy.title().should('not.be.equal', 'Dashboard / nopCommerce administration')
        cy.contains('Login was unsuccessful. Please correct the errors and try again.').and('be.visible')


      /*  cy.visit("https://admin-demo.nopcommerce.com/login")

        cy.get('#Email').type("admin@yourstore.com")
        cy.get('#Password').type("admin")
        cy.get('[type=submit]').click()

      */
    })


    it('Adding a new Customer', function () {


        cy.login('admin@yourstore.com','admin')

       /* cy.visit("https://admin-demo.nopcommerce.com/login")

        cy.get('#Email').type("admin@yourstore.com")
        cy.get('#Password').type("admin")
        cy.get('[type=submit]').click()

        //scrit for Adding a new Customer
        cy.log('Adding a new Customer')
       */

    })


    it('Edit customer', function () {


        cy.login('admin@yourstore.com','admin')

      /*  cy.visit("https://admin-demo.nopcommerce.com/login")

        cy.get('#Email').type("admin@yourstore.com")
        cy.get('#Password').type("admin")
        cy.get('[type=submit]').click()

      */

        //Edit customer
        cy.log('Edit customer')


    })





})