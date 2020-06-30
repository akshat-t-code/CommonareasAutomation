
import '@percy/cypress';
import 'cypress-file-upload';
import '@applitools/eyes-cypress/commands';
import '@4tw/cypress-drag-drop';
import 'cypress-iframe';



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



//Create Admin User =>Add User(https://starksolutions.ca-test.com/ClientAdmin/Index/#/)

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



//Kit Builder Commands
//Creating a new kit type

Cypress.Commands.add("KitLabel",(KitLabel)=>{
    cy.get('#app > div.v-dialog__content.v-dialog__content--active > div > div > div.container > div > div > form > div:nth-child(1) > div.pa-0.pr-2.col.col-6 > div > div > div.v-input__slot > div').click({force:true}).type(KitLabel)
})

Cypress.Commands.add("KitName",(KitName)=>{
    cy.get('#app > div.v-dialog__content.v-dialog__content--active > div > div > div.container > div > div > form > div:nth-child(1) > div:nth-child(2) > div > div > div.v-input__slot > div').click({force:true}).type(KitName)
})

Cypress.Commands.add("KitDescription",(KitDescription)=>{
    cy.get('#app > div.v-dialog__content.v-dialog__content--active > div > div > div.container > div > div > form > div:nth-child(2) > div > div > div > div.v-input__slot > div')
    .click({force:true}).type(KitDescription)
})

Cypress.Commands.add("KitIcon",()=>{

    cy.get('#app > div.v-dialog__content.v-dialog__content--active > div > div > div.container > div > div > form > div:nth-child(3) > div > div > div > div.v-input__slot > div.v-select__slot > div > div').click({force:true})
    cy.get('.v-list-item:nth-child(1) .v-list-item__title').click({force:true})
})

Cypress.Commands.add("CreateKit",()=>{
    //Create btn
    cy.get('.ca-button-green > .v-btn__content').click();
    //Assertion msg close
    cy.get('.v-btn__content > .theme--dark').click();
})

Cypress.Commands.add("CreateKitType",()=>{
    //Create btn
    cy.get('.ca-button-green > .v-btn__content').click();
    
})



//New View Form Detalis
Cypress.Commands.add("NewViewLabel",(NewViewLabel)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(3) > div > div > div > div.container > div > div > form > div:nth-child(1) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div')
    .click({force:true}).type(NewViewLabel)
})

Cypress.Commands.add("NewViewIcon",()=>{

    cy.get('#tab-ui-configuration > div > div:nth-child(3) > div > div > div > div.container > div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div.v-select__slot > div > div')
    .click({force:true})
    cy.get('.v-list-item:nth-child(1) .v-list-item__title').click({force:true})
})


Cypress.Commands.add("NewViewDescription",(NewViewDescription)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(3) > div > div > div > div.container > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div')
    .click({force:true}).type(NewViewDescription)
    
})

Cypress.Commands.add("SaveNewForm",()=>{
    //Click on Save btn
    cy.get('.ca-button-green:nth-child(2) > .v-btn__content').click();
    //Click on Assertion to close msg
    cy.get(".v-btn__content > .theme--dark").click();
})


//Edit View Form
Cypress.Commands.add("EditViewLabel",(EditViewLabel)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(1) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div')
    .click({force:true}).type(EditViewLabel)
})

Cypress.Commands.add("EditViewIcon",()=>{

    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div.v-select__slot > div > div')
    .click({force:true})
    cy.get('.v-list-item:nth-child(1) .v-list-item__title')
    .click({force:true})
})


Cypress.Commands.add("EditViewDescription",(EditViewDescription)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div')
    .click({force:true}).type(EditViewDescription)
    
})

Cypress.Commands.add("SaveEditForm",()=>{
    //Click on Save btn
    cy.get('.ca-button-green:nth-child(2) > .v-btn__content').click();
    //Click on Assertion to close msg
    cy.get('.v-btn__content > .theme--dark').click();

})

//Shared View Form
Cypress.Commands.add("SharedViewLabel",(SharedViewLabel)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(1) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div')
    .click({force:true}).type(SharedViewLabel)
})

Cypress.Commands.add("SharedViewIcon",()=>{

    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div.v-select__slot > div > div')
    .click({force:true})
    cy.get('.v-list-item:nth-child(1) .v-list-item__title')
    .click({force:true})
})


Cypress.Commands.add("SharedViewDescription",(SharedViewDescription)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div')
    .click({force:true}).type(SharedViewDescription)
    
})

Cypress.Commands.add("SaveSharedForm",()=>{
    //Click on Save btn
    cy.get('.ca-button-green:nth-child(2) > .v-btn__content').click();
    //Click on Assertion to close msg
    cy.get('.v-btn__content > .theme--dark').click();

})

//Email View Form
Cypress.Commands.add("EmailViewLabel",(EmailViewLabel)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(1) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div')
    .click({force:true}).type(EmailViewLabel)
})

Cypress.Commands.add("EmailViewIcon",()=>{

    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div.v-select__slot > div > div')
    .click({force:true})
    cy.get('.v-list-item:nth-child(1) .v-list-item__title')
    .click({force:true})
})


Cypress.Commands.add("EmailViewDescription",(EmailViewDescription)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div')
    .click({force:true}).type(EmailViewDescription)
    
})

Cypress.Commands.add("SaveEmailForm",()=>{
    //Click on Save btn
    cy.get('.ca-button-green:nth-child(2) > .v-btn__content').click();
    //Click on Assertion to close msg
    cy.get('.v-btn__content > .theme--dark').click();

})


//Map View Form
Cypress.Commands.add("MapViewLabel",(MapViewLabel)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(1) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div')
    .click({force:true}).type(MapViewLabel)
})

Cypress.Commands.add("MapViewIcon",()=>{

    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div.v-select__slot > div > div')
    .click({force:true})
    cy.get('.v-list-item:nth-child(1) .v-list-item__title')
    .click({force:true})
})


Cypress.Commands.add("MapViewDescription",(MapViewDescription)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div')
    .click({force:true}).type(MapViewDescription)
    
})

Cypress.Commands.add("SaveMapForm",()=>{
    //Click on Save btn
    cy.get('.ca-button-green:nth-child(2) > .v-btn__content').click();
    //Click on Assertion to close msg
    cy.get('.v-btn__content > .theme--dark').click();

})


//Schedule View Form
Cypress.Commands.add("ScheduleViewLabel",(ScheduleViewLabel)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(1) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div')
    .click({force:true}).type(ScheduleViewLabel)
})

Cypress.Commands.add("ScheduleViewIcon",()=>{

    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div.v-select__slot > div > div')
    .click({force:true})
    cy.get('.v-list-item:nth-child(1) .v-list-item__title')
    .click({force:true})
})


Cypress.Commands.add("ScheduleViewDescription",(ScheduleViewDescription)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div')
    .click({force:true}).type(ScheduleViewDescription)
    
})

Cypress.Commands.add("SaveScheduleForm",()=>{
    //Click on Save btn
    cy.get('.ca-button-green:nth-child(2) > .v-btn__content').click();
    //Click on Assertion to close msg
    cy.get('.v-btn__content > .theme--dark').click();

})


//CommonPlan View Form
Cypress.Commands.add("CommonPlanViewLabel",(CommonPlanViewLabel)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(1) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div')
    .click({force:true}).type(CommonPlanViewLabel)
})

Cypress.Commands.add("CommonPlanViewIcon",()=>{

    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div.v-select__slot > div > div')
    .click({force:true})
    cy.get('.v-list-item:nth-child(1) .v-list-item__title')
    .click({force:true})
})


Cypress.Commands.add("CommonPlanViewDescription",(CommonPlanViewDescription)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div')
    .click({force:true}).type(CommonPlanViewDescription)
    
})

Cypress.Commands.add("SaveCommonPlanForm",()=>{
    //Click on Save btn
    cy.get('.ca-button-green:nth-child(2) > .v-btn__content').click();
    //Click on Assertion to close msg
    cy.get('.v-btn__content > .theme--dark').click();

})


//RelatedNew View Form
Cypress.Commands.add("RelatedNewViewLabel",(RelatedNewViewLabel)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(1) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div')
    .click({force:true}).type(RelatedNewViewLabel)
})

Cypress.Commands.add("RelatedNewViewIcon",()=>{

    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div.v-select__slot > div > div')
    .click({force:true})
    cy.get('.v-list-item:nth-child(1) .v-list-item__title')
    .click({force:true})
})


Cypress.Commands.add("RelatedNewViewDescription",(RelatedNewViewDescription)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div')
    .click({force:true}).type(RelatedNewViewDescription)
    
})

Cypress.Commands.add("SaveRelatedNewForm",()=>{
    //Click on Save btn
    cy.get('.ca-button-green:nth-child(2) > .v-btn__content').click();
    //Click on Assertion to close msg
    cy.get('.v-btn__content > .theme--dark').click();

})


//RelatedEdit View Form
Cypress.Commands.add("RelatedEditViewLabel",(RelatedEditViewLabel)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(1) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div')
    .click({force:true}).type(RelatedEditViewLabel)
})

Cypress.Commands.add("RelatedEditViewIcon",()=>{

    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(2) > div:nth-child(2) > div > div > div.v-input__slot > div.v-select__slot > div > div')
    .click({force:true})
    cy.get('.v-list-item:nth-child(1) .v-list-item__title')
    .click({force:true})
})


Cypress.Commands.add("RelatedEditViewDescription",(RelatedEditViewDescription)=>{
    cy.get('#tab-ui-configuration > div > div:nth-child(6) > div > div > div > div.container > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div')
    .click({force:true}).type(RelatedEditViewDescription)
    
})

Cypress.Commands.add("SaveRelatedEditForm",()=>{
    //Click on Save btn
    cy.get('.ca-button-green:nth-child(2) > .v-btn__content').click();
    //Click on Assertion to close msg
    cy.get('.v-btn__content > .theme--dark').click();

})




//List View details Commands
//TableList View details Commands
Cypress.Commands.add("TableListViewLabel",(TableListViewLabel)=>{
    cy.get('#tab-list-views > div > div:nth-child(3) > div > div > div > div.container > div > div > form > div:nth-child(1) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div')
    .click({force:true}).type(TableListViewLabel)
})

Cypress.Commands.add("TableListViewDescription",(TableListViewDescription)=>{
    cy.get('#tab-list-views > div > div:nth-child(3) > div > div > div > div.container > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div')
    .click({force:true}).type(TableListViewDescription)
})

Cypress.Commands.add("TableListViewIcon",()=>{

    cy.get('#tab-list-views > div > div:nth-child(3) > div > div > div > div.container > div > div > form > div:nth-child(4) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div.v-select__slot > div > div')
    .click({force:true})
    cy.get('.v-list-item:nth-child(1) .v-list-item__title').click({force:true})

})

Cypress.Commands.add("SaveTableList",()=>{ 
    //Click on Checkbox
    cy.contains('Default View for Kit').click({force:true})
    //Click on Save
   cy.get('.ca-button-green:nth-child(2) > .v-btn__content').click();
   //Click on Assertion msg for save
   cy.get('.v-btn__content > .theme--dark').click();

})


//SearchList View details Commands
Cypress.Commands.add("SearchListViewLabel",(SearchListViewLabel)=>{
    cy.get('#tab-list-views > div > div:nth-child(5) > div > div > div > div.container > div > div > form > div:nth-child(1) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div')
    .click({force:true}).type(SearchListViewLabel)
})

Cypress.Commands.add("SearchListViewDescription",(SearchListViewDescription)=>{
    cy.get('#tab-list-views > div > div:nth-child(5) > div > div > div > div.container > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div')
    .click({force:true}).type(SearchListViewDescription)
})

Cypress.Commands.add("SearchListViewIcon",()=>{

    cy.get('#tab-list-views > div > div:nth-child(5) > div > div > div > div.container > div > div > form > div:nth-child(4) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div.v-select__slot > div > div')
    .click({force:true})
    cy.get('.v-list-item:nth-child(1) .v-list-item__title').click({force:true})

})

Cypress.Commands.add("SaveSearchList",()=>{ 
    //Click on Checkbox
    cy.contains('Search View popup').click({force:true})
    //Click on Save
   cy.get('.ca-button-green:nth-child(2) > .v-btn__content').click();
   //Click on Assertion msg for save
   cy.get('.v-btn__content > .theme--dark').click();

})



//TimelineList View details Commands
Cypress.Commands.add("TimelineListViewLabel",(TimelineListViewLabel)=>{
    cy.get('#tab-list-views > div > div:nth-child(5) > div > div > div > div.container > div > div > form > div:nth-child(1) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div')
    .click({force:true}).type(TimelineListViewLabel)
})

Cypress.Commands.add("TimelineListViewDescription",(TimelineListViewDescription)=>{
    cy.get('#tab-list-views > div > div:nth-child(5) > div > div > div > div.container > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div')
    .click({force:true}).type(TimelineListViewDescription)
})

Cypress.Commands.add("TimelineListViewIcon",()=>{

    cy.get('#tab-list-views > div > div:nth-child(5) > div > div > div > div.container > div > div > form > div:nth-child(4) > div.pr-4.pa-0.col.col-6 > div > div > div.v-input__slot > div.v-select__slot > div > div')
    .click({force:true})
    cy.get('.v-list-item:nth-child(1) .v-list-item__title').click({force:true})

})

Cypress.Commands.add("SaveTimelineList",()=>{ 
    //Click on Checkbox
    cy.contains('Default View for Kit').click({force:true})
    //Click on Save
   cy.get('.ca-button-green:nth-child(2) > .v-btn__content').click();
   //Click on Assertion msg for save
   cy.get('.v-btn__content > .theme--dark').click();

})


































