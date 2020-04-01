
/// <reference types="cypress" />

//var file = require('../../fixtures/TestData/example1')

describe('Fixtures Example for reading the data inside a test data folder', function () {

    this.beforeEach(function () {

        cy.visit('/')
        cy.fixture('/TestData/example1.json').then(function (data) {

            this.data = data

        })

    })

    it('Reading the data from json file for positive TC', function () {

        //  cy.fixture('example1').then(function (data) {
        //  this.data1 = data
        cy.get('#UserName').click()
        cy.get('#UserName').type(this.data.email)
        cy.get('#Password').type(this.data.Password)
        cy.get('#login_button').click()
       //debugger;
        cy.title().should('eq', 'Common Areas')
        cy.log('Login successfully')
        cy.wait(10000)


    })


    it('Reading the data from json file for Negative TC', function () {

        //  cy.fixture('example1').then(function (data) {
        //  this.data1 = data
        cy.get('#UserName').click()
        cy.get('#UserName').type(this.data.email1)
        cy.get('#Password').type(this.data.Password1)
        cy.get('#login_button').click()
        cy.get('.field-validation-error')
            .contains('Invalid username or password.', { timeout: 5000 })
            .should('be.visible')

    })





})




