/// <reference types="cypress" />

describe('Hooks demo', function () {


    before(function() {
        cy.log('I will run  once before all tests in the block')
        cy.log('we can do any kind of setup in this before start any test suit')
      })
    
      after(function() {
        cy.log('I will run once after all tests in the block')
        cy.log('we can write tear down method')


      })
    
      beforeEach(function() {
        cy.log('I will before each test in the block')
        cy.log('we can write login or navigate to url')

      })
    
      afterEach(function() {
        cy.log('I will run after each test in the block')
        cy.log('we can logout here')

      })


    it('Searching ', () => {

     cy.log("******************this is search test****************")

    })

    it('Advance Searching ', () => {

        cy.log("******************this is Advance search test****************")


    })

    it('listing products ', () => {

        cy.log("******************this is listing the product test****************")


    })




})