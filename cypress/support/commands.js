
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



//Create Admin User =>Add User


Cypress.Commands.add("ClickOnAddUser",()=>{
    cy.get('li:nth-child(2) li:nth-child(2) > .nav__link').click()
})


Cypress.Commands.add("UserFirstName",(FirstName)=>{
    cy.get('[name="AccountUser.UserContact.FirstName"]').type(FirstName)
})

Cypress.Commands.add("UserLastName",(LastName)=>{
    cy.get('[name="AccountUser.UserContact.LastName"]').type(LastName)
})

Cypress.Commands.add("Tittle",(Tittle)=>{
    cy.get('[name="AccountUser.UserContact.JobTitle"]').type(Tittle)
})


Cypress.Commands.add("UserEmail",(Email)=>{
    cy.get('[name="AccountUser.UserContact.Email"]').type(Email)
})


Cypress.Commands.add("UserPassword",(Password)=>{
    cy.get('[name="AccountUserPassword.Password"]').type(Password)
})


Cypress.Commands.add("UserConfirmPassword",(ConfirmPassword)=>{
    cy.get('[name="AccountUserPassword.ConfirmPassword"]').type(ConfirmPassword)
})

Cypress.Commands.add("UserTelephone",(UserTelephone)=>{
    cy.get('[name="AccountUser.UserContact.Telephone"]').type(UserTelephone)
})

Cypress.Commands.add("UserMobilePhone",(UserMobilePhone)=>{
    cy.get('[name="AccountUser.UserContact.MobilePhone"]').type(UserMobilePhone)
})

Cypress.Commands.add("UserAddress1",(UserAddress1)=>{
    cy.get('[name="AccountUser.UserContact.Address1"]').type(UserAddress1)
})

Cypress.Commands.add("UserAddress2",(UserAddress2)=>{
    cy.get('[name="AccountUser.UserContact.Address2"]').type(UserAddress2)
})

Cypress.Commands.add("UserZipCode",(UserZipCode)=>{
    cy.get('[name="AccountUser.UserContact.ZipCode"]').type(UserZipCode)
})

Cypress.Commands.add("UserCity",(UserCity)=>{
    cy.get('[name="AccountUser.UserContact.City"]').type(UserCity)
})

Cypress.Commands.add("UserState",(UserState)=>{
    cy.get('[name="AccountUser.UserContact.State"]').click()
})

Cypress.Commands.add("UserCountry",()=>{
    cy.get('[name="AccountUser.UserContact.Country"]').click()
})

Cypress.Commands.add("AddUser",()=>{
    cy.get('#AddUser').submit()

})

Cypress.Commands.add("SaveUserDetails",()=>{
    cy.get('.btnSaveDetails').click()

})































