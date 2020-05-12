import SignUpPage from '../PageObject/SignUpPage'
import LoginPage from '../PageObject/LoginPage'


describe('Creating New Connection Request than new User Sign up and login into the application for accepting the request', function(){


  this.beforeEach(function() {

    cy.fixture('ConnectionsData').then(function(data){
    
            this.data=data

         })
   
        
})


it('Creating a new connection ',function(){

    const lp=new LoginPage()

    lp.visit()
     lp.EnterEmail('kstanley@commonareas.work.dev')
     lp.EnterPassword('1234567Aa')
     lp.Submit()
     cy.wait(5000)

   lp.PlusIcon()
   lp.ConnectionIcon()

   cy.ConnectionFirstName(this.data.ConnectionFirstName)
   cy.ConnectionLastName(this.data.ConnectionLastName)
   cy.ConnectionEmail(this.data.ConnectionEmail)
   //click on DropDown
    cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div.row.position-relative.contact-detail-wrapper.md11.fill-height.new-connection > div.base-layout-main-content.d-flex.pa-0.fill-height.px-8.col > div.row.wrapper-content.px-8.py-4.pb-4 > div > div.v-input.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select.v-select--chips.v-select--is-multi > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div').click({force:true})
    //Select Checkbox out of three listed below
    cy.contains('Meeting').click()
    //cy.contains('02').click()
    //cy.contains('LOL').click()
    //Click on Save btn
    cy.get('.button-pop-ups--size').click();
    cy.wait(10000)

})

it('Sign Up for a new User',function(){

    const sp=new SignUpPage()
    sp.visit()
    cy.wait(3000)

    cy.url().should('include','app.ca-test.com/Public/Login?ReturnUrl=%2F')
    sp.SignUpbtn()
    cy.url().should('include','Register/Create')

    cy.SignUpUserFirstName(this.data.ConnectionFirstName)

    cy.SignUpUserLastName(this.data.ConnectionLastName)

    cy.SignUpUserEmail(this.data.ConnectionEmail)

    cy.ConfirmEmailAddress(this.data.ConnectionEmail)

   cy.SignUpUserPassword(this.data.ConnectionPassword)

    cy.ConfirmPassword(this.data.ConnectionPassword)

    cy.get('[name="ContactInformation.CompanyType"]').scrollIntoView({force:true})

    cy.wait(3000)
    cy.get('[name="ContactInformation.CompanyType"]').select('Facility Management')

    //Click On Save btn
   cy.get('.icon:nth-child(1)').click();

    cy.wait(5000)

    cy.get('.login-message')
    .should('have.text','An email has been sent to you to verify the email address you provided with a link to activate your account.')

    cy.wait(5000)
    cy.get('.icon').click();
    cy.url().should('include','/Public/Login')
    cy.wait(10000)

})


it('Verifying the Email Id for New User on Mailinator site',function(){

    const sp=new SignUpPage()
    sp.mailinatorSite()
    cy.url().should('include','mailinator.com')
    sp.EnterMailinatorEmail(this.data.ConnectionEmail)
    //Click on Go
    cy.get('#go-to-public').click()
    cy.wait(3000)
    cy.contains('Common Areas - Account Activation').click()
    cy.wait(10000)
    
})

it('First time Login into the appLication for New User',function(){

    const sp=new SignUpPage()
    const lp=new LoginPage()

    sp.visit()
    lp.EnterEmail(this.data.ConnectionEmail)
    lp.EnterPassword(this.data.ConnectionPassword)
    lp.Submit()
    cy.get('#readTerms').click()
    cy.wait(20000)

    cy.get('#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div > div.px-4.col.col-12 > div').then(function($WelEle){

        const WelcomeTxt=$WelEle.text()
        cy.log(WelcomeTxt)

        const username=this.data.ConnectionFirstName
        cy.log(username)
       // expect(WelcomeTxt).eq('Welcome, '+username+'!Here is an overview of your workspace')
        expect(username).eq(this.data.ConnectionFirstName)
        cy.wait(3000)  
        
    })


})



it('Login Again to appLication for Accepting the Request',function(){

    const sp=new SignUpPage()
    const lp=new LoginPage()

    sp.visit()
    lp.EnterEmail(this.data.ConnectionEmail)
    lp.EnterPassword(this.data.ConnectionPassword)
    lp.Submit()
    cy.wait(10000)

//Click On Connection Request notification Icon
cy.get('.menu-items-icon:nth-child(2) > path').click()
cy.wait(5000)
//click to Accept the Request
cy.get('.green--text').click()
//cy.get(':nth-child(4) > .v-btn > .v-btn__content > .v-icon').click()

//Click On HMB icon
cy.get('.v-btn__content > .theme--dark').click()
//Click on Connection
cy.get('.v-list-item:nth-child(3) .v-list-item__title').click()

cy.wait(5000)

//Click On Created Connection
//Assertion
cy.get('.company_container:nth-child(1)').should('be.visible').click()


})


})