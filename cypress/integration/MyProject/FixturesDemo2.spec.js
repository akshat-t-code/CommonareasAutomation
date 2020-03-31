
/// <reference types="cypress" />

var file = require('../../fixtures/TestData/example1')
describe('Fixtures Example for reading the data', function () {

    this.beforeEach(function () {

        cy.visit('/')
        /*  cy.fixture('example').then(function(data){
      
              this.data=data
  
           })
           */
    })



    it('Reading the data from json file', function () {
      
        cy.fixture('example1').then(function (data) {
            this.data1 = data
            cy.get('#UserName').click()
            cy.get('#UserName').type(this.data1.email)
            cy.get('#Password').type(this.data1.Password)
            cy.get('#login_button').click()
            cy.log('Login successfully')

        })


    })




})