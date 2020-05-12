import SignUpPage from '../PageObject/SignUpPage'
import LoginPage from '../PageObject/LoginPage'


describe('User Login into the application ', function(){


    this.beforeEach(function(){

        cy.fixture('SignUpPageData').then(function(data){
    
            this.data=data

         })


    })

    

    it('Login into appLication',function(){

        const sp=new SignUpPage()
        const lp=new LoginPage()

        sp.visit()
        lp.EnterEmail(this.data.UserEmail)
        lp.EnterPassword(this.data.Password)
        lp.Submit()
        cy.wait(10000)

    


    })

    

})
