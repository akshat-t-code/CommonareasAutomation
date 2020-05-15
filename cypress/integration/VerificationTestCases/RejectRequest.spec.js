import SignUpPage from '../PageObject/SignUpPage'
import LoginPage from '../PageObject/LoginPage'


describe('Login for new User than Create A new Connection and Accept the request ', function(){


    this.beforeEach('Fixtures Dynamic json',function(){
        debugger
       cy.fixture("VerificationTestCasesData/UserData").then(function(JsonData) {
           this.Credintial = JsonData;
           cy.log(JsonData)
           cy.log(this.Credintial.UserEmail)
           cy.log(this.Credintial.Fname)
           cy.log(this.Credintial.Lname)
              
       })

   })

    
    it('First Time Login into the appLication for New User',function(){

        const sp=new SignUpPage()
        const lp=new LoginPage()

        sp.visit()
        lp.EnterEmail(this.Credintial.UserEmail)
        lp.EnterPassword('1234567Aa')
        lp.Submit()
        //First Time login commands
        cy.url().should('include','Public/TermsAndConditions?acceptTerms=True')
       cy.get('#readTerms').click()
        cy.wait(15000)
        
        cy.log("New Users has been logged in first time successfully")

        //Welcome User Assertion
        cy.get('#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div > div.px-4.col.col-12 > div').then(function($WelEle){

            const WelcomeTxt=$WelEle.text()
            cy.log(WelcomeTxt)

            const username=this.Credintial.Fname
            cy.log(username)
            //expect(WelcomeTxt).eq('Welcome, '+username+'!Here is an overview of your workspace')
            expect(username).eq(this.Credintial.Fname)

            cy.wait(3000)
            
        })


    })


    it('Creating a new connection ',function(){

        const lp=new LoginPage()
    
        lp.visit()
         lp.EnterEmail('kstanley@commonareas.work.dev')
         lp.EnterPassword('1234567Aa')
         lp.Submit()
         cy.wait(5000)
         cy.log("Users has been logged in successfully")


       lp.PlusIcon()
       lp.ConnectionIcon()
    
       cy.ConnectionFirstName(this.Credintial.Fname)
       cy.ConnectionLastName(this.Credintial.Lname)
       cy.ConnectionEmail(this.Credintial.UserEmail)
       //click on DropDown
        cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div.row.position-relative.contact-detail-wrapper.md11.fill-height.new-connection > div.base-layout-main-content.d-flex.pa-0.fill-height.px-8.col > div.row.wrapper-content.px-8.py-4.pb-4 > div > div.v-input.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select.v-select--chips.v-select--is-multi > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div').click({force:true})
        cy.contains('Meeting').click()
        //cy.contains('02').click()
        //cy.contains('LOL').click()

        //Click on Save btn
        cy.get('.button-pop-ups--size').click();
        cy.log("Connection Request has been sent successfully")
        cy.wait(10000)
    
    })


    it('Login Again to appLication for Rejecting the Request',function(){

        const sp=new SignUpPage()
        const lp=new LoginPage()
    
        sp.visit()
        lp.EnterEmail(this.Credintial.UserEmail)
        lp.EnterPassword('1234567Aa')
        lp.Submit()
        cy.wait(10000)
    
    //Click On Connection Request notification Icon
    cy.get('.menu-items-icon:nth-child(2) > path').click()
    cy.wait(5000)
    
    //Assertion For getting connection Request
    cy.get(':nth-child(3) > .v-btn > .v-btn__content > .v-icon').should('be.visible')
    cy.wait(5000)
    
    //Reject the Request
    cy.get(':nth-child(3) > .v-btn > .v-btn__content > .v-icon').first().click()
    cy.wait(3000)
    
    cy.reload()
    cy.wait(10000)
    
    //Click on HMB Icon
    cy.get('.v-btn__content > .v-icon').click();
    //Click On Connections
    cy.get('.v-list-item:nth-child(3) .v-list-item__title').click();
    
    //Assertion
    cy.get('#action_items_list > div:nth-child(2) > div > div > span')
    .should('have.text','\n\t\t\t\tNo Results for Current Filter.\n\t\t\t\t\n\t\t\t\tTry Again.\n\t\t\t')
    
    cy.wait(10000)
    
    
    })

    

})
