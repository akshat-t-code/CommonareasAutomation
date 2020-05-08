
import '@percy/cypress';
import 'cypress-file-upload';
import '@applitools/eyes-cypress/commands'

//My customize command for login
Cypress.Commands.add("login", (email, password) => { 

    cy.visit("https://admin-demo.nopcommerce.com/login")

    cy.get('#Email').type(email)
    cy.get('#Password').type(password)
    cy.get('[type=submit]').click()

 })

 //For Creating a new Connection by click on  connection Icon,
 // Fields locators for https://serviceproviders.ca-test.com/

 Cypress.Commands.add("ConnectionFirstName",(FirstName)=>{
    cy.get('[name="firstName"]').type(FirstName)
 })

 Cypress.Commands.add("ConnectionLastName",(lastName)=>{
    cy.get('[name="lastName"]').type(lastName)
 })

 Cypress.Commands.add("ConnectionEmail",(Email)=>{
    cy.get('[name="email"]').type(Email)
 })



//New User Sign Up page fields Locators for https://app.ca-test.com

Cypress.Commands.add("SignUpUserFirstName",(FirstName)=>{
    cy.get('[name="ContactInformation.FirstName"]').type(FirstName)
})

Cypress.Commands.add("SignUpUserLastName",(LastName)=>{
    cy.get('[name="ContactInformation.LastName"]').type(LastName)
})

Cypress.Commands.add("SignUpUserEmail",(Email)=>{
    cy.get('[name="ContactInformation.EmailAddress"]').type(Email)
})

Cypress.Commands.add("ConfirmEmailAddress",(ConfirmEmailAddress)=>{
    cy.get('[name="ContactInformation.ConfirmEmailAddress"]').type(ConfirmEmailAddress)
})

Cypress.Commands.add("SignUpUserPassword",(Password)=>{
    cy.get('[name="ContactInformation.Password"]').type(Password)
})

Cypress.Commands.add("ConfirmPassword",(ConfirmPassword)=>{
    cy.get('[name="ContactInformation.ConfirmPassword"]').type(ConfirmPassword)
})






















