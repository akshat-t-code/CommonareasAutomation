
class SignUpPage{

    visit() {

        cy.visit('https://app.ca-test.com/Public/Login?ReturnUrl=%2F')
    }

    SignUpbtn(){

        const sb=cy.get('.button-sign-up > a')
        sb.click()

    }

    //
    mailinatorSite(){

        cy.visit('https://www.mailinator.com/')
    }

    
    EnterMailinatorEmail(value) {

        const field = cy.get('[placeholder="Enter Public Mailinator Inbox"]')
        field.type(value)
        return this

    }

    ActiveAccount(){
        
    }




}

export default SignUpPage
