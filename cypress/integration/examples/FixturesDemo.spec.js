
/// <reference types="cypress" />

 //var file=require('../../fixtures/TestData/example1.json')
describe('Fixtures Example for reading the data', function(){

    this.beforeEach(function() {

        cy.visit('/')
        cy.fixture('example').then(function(data){
    
            this.data=data

         })
         
    })



    it.only('Reading the data from json file', function(){
      //  cy.visit('/')
      
        cy.get('#UserName').click()
        cy.get('#UserName').type(this.data.email)
        cy.get('#Password').type(this.data.Password)
        cy.get('#login_button').click()
        cy.log('Login successfully')

    })


    it('Readin the data in another test', function(){
       // cy.visit('/')
        cy.get('#UserName').type(this.data.email)
        cy.get('#Password').type(this.data.Password)
        cy.get('#login_button').click()
        cy.log('Login successfully')
      

    })

})