import LoginPage from '../PageObject/LoginPage'


describe('Create user from admin and login with the new user', function(){


    this.beforeEach(function(){

        cy.fixture('AdminUserdata').then(function(data){
    
            this.data=data
         })
         cy.viewport(1280, 720)
    })

    it('Create user form admin',function(){

      const lp=new LoginPage()
      lp.Adminvisit()
      lp.EnterEmail('starksolutions@commonareas.work.dev')
      lp.EnterPassword('1234567Aa')
      lp.Submit()
      cy.title().should('eq', 'Common Areas')
      cy.wait(10000)
      lp.AdminUrl()
     cy.ClickOnAddUser()
     cy.get('#content > div.right > h2').contains('Add User').should('be.visible')
     cy.wait(20000)

     //Adding user detalis data coming from command.js

     cy.UserFirstName(this.data.UserFirstName)

     cy.UserLastName(this.data.UserLastName)

     cy.Tittle(this.data.Tittle)

     cy.UserEmail(this.data.UserEmail)

     cy.UserPassword(this.data.UserPassword)

     cy.UserConfirmPassword(this.data.UserPassword)

     cy.UserTelephone(this.data.UserTelephone)

     cy.UserMobilePhone(this.data.UserMobilePhone)

     cy.UserAddress1(this.data.UserAddress1)

     cy.UserAddress2(this.data.UserAddress2)

     cy.UserZipCode(this.data.UserZipCode)

     cy.UserCity(this.data.UserCity)
     //Select State
     cy.get('[name="AccountUser.UserContact.Country"]').select('United States')
     //Select State
     cy.get('[name="AccountUser.UserContact.State"]').select('Alabama')

     cy.AddUser()
     cy.log("user has been add successfully")


   
     cy.wait(5000)
     //Assertion
     cy.url().should('include','ClientAdmin/UserDetails/')
    
     cy.SaveUserDetails()
     cy.log("users's Detalis has been saved successfully")

     //Assertion
     cy.get('body > div.ns-box.ns-bar.ns-effect-slidetop.ns-type-success.success.ns-hide > div > p')
     .contains('User details updated successfully.').should('be.visible')

     cy.wait(10000)


    })

    it('First time New Add user login into the appliction',function(){

        const lp=new LoginPage()
        lp.Adminvisit()
        lp.EnterEmail(this.data.UserEmail)
        lp.EnterPassword(this.data.UserPassword)
        lp.Submit()

        cy.wait(3000)

        //First Time login commands
        cy.url().should('include','Public/TermsAndConditions?acceptTerms=True')
        cy.get('#readTerms').click()

        cy.wait(10000)

        cy.title().should('eq', 'Common Areas')

        cy.wait(5000)
        //Profile Assertion
        cy.get('#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div > div.px-4.col.col-12 > div')
        .then(function($WelEle){

            const WelcomeTxt=$WelEle.text()
            cy.log(WelcomeTxt)
    
            const username=this.data.UserFirstName
            cy.log(username)
            //expect(WelcomeTxt).eq('Welcome, '+username+'!Here is an overview of your workspace')
            expect(username).eq(this.data.UserFirstName)
            cy.wait(3000)  

        })


    })

})