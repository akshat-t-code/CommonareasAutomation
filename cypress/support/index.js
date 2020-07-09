

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

//import '@applitools/eyes-cypress/commands'


// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath')
import 'cypress-xpath'

// cypress/support/index.js
//This custome command is for to get into the iframe of canvas of kit builder
Cypress.Commands.add('getIframeBody', () => {
    return cy
    .get('.gjs-frame')
    .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.wrap)
  })


