
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
        cy.get('[href="https://u6809986.ct.sendgrid.net/ls/click?upn=QPjBTE7cfluK55SOawZKBt0Fw7gAf9qrenWHGsEGzW0O5SvwE7PU6H-2FhlRT-2Br5NbhjesmCLAwXb8lqqXTbWIx9o5YS8qwDhZ6iz5YKvzyPwFACQpG6vvEcAxU8asp5snvkiusImedmemzy6F4I-2Fn6w-3D-3D_vOq_Hvm8aG6JfqLrI3pctDLK996Bn5JMmhz7ghWKpPNTczcGcgA6WfeII8oOYJXAWy42WtSmbkIBKLUaCbL5N3IRc-2BAj3RMoxCYKHQmL1MX2s2ftX00eHeygkLRYNUGGOE4MICJxxc-2B-2Ff5HCufOEc3I92UIVjq4KNF89mIg9lG9FUaI6fJKc3K7q4r6vAWwazobH04CwEHa0jq9e2wSutS3kNZRJXWbc0M2nelgey8sSe2F6Dm4BpcqZ-2BU2DCq3vNbldmCl2WjLuG8DhUqMumJp2teEQS-2BnUMsQplwZ-2FEIPJYztxRyGNzMNrIP8SYr0kZ8XC"]').contains('Activate Account')
        .click()
    }




}

export default SignUpPage
