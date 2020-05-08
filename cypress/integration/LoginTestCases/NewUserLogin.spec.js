import SignUpPage from '../PageObject/SignUpPage'
import LoginPage from '../PageObject/LoginPage'


describe('Login into the application for a new User ', function(){


    this.beforeEach(function(){

        cy.fixture('SignUpPageData').then(function(data){
    
            this.data=data

         })


    })

    it('Sign Up for a new User',function(){

        const sp=new SignUpPage()
        sp.visit()
        cy.wait(3000)

        cy.url().should('include','app.ca-test.com/Public/Login?ReturnUrl=%2F')
        sp.SignUpbtn()
        cy.url().should('include','Register/Create')

        //Sign Up detalis data coming from command.js
        cy.SignUpUserFirstName(this.data.FirstName)

        cy.SignUpUserLastName(this.data.LastName)

        cy.SignUpUserEmail(this.data.UserEmail)

        cy.ConfirmEmailAddress(this.data.UserEmail)

       cy.SignUpUserPassword(this.data.Password)

        cy.ConfirmPassword(this.data.Password)

        cy.get('[name="ContactInformation.CompanyType"]').scrollIntoView({force:true})

        cy.wait(5000)
        cy.get('[name="ContactInformation.CompanyType"]').select('Facility Management')

        cy.get('.icon:nth-child(1)').click();

        cy.wait(5000)

        cy.get('.login-message')
        .should('have.text','An email has been sent to you to verify the email address you provided with a link to activate your account.')

        cy.wait(5000)
        cy.get('.icon').click();
        cy.url().should('include','/Public/Login')


    })

   
    

    it.only('First time Login into the appLication for New User',function(){

        const sp=new SignUpPage()
        const lp=new LoginPage()

        sp.visit()
        lp.EnterEmail(this.data.UserEmail)
        lp.EnterPassword(this.data.Password)
        lp.Submit()
        cy.get('#readTerms').click()
        cy.wait(10000)

        cy.get('#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div > div.px-4.col.col-12 > div').then(function($WelEle){

            const WelcomeTxt=$WelEle.text()
            cy.log(WelcomeTxt)

            const username=this.data.FirstName
            cy.log(username)
            expect(WelcomeTxt).eq('Welcome, '+username+'!Here is an overview of your workspace')
            cy.wait(3000)
            
        })


    })


    


    
   

})
