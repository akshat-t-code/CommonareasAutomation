

class LoginPage {

    visit() {
        cy.visit('https://serviceproviders.ca-test.com/')
    }

    EnterEmail(value) {

        const field = cy.get('#UserName')
        field.clear()
        field.type(value)
        return this

    }

    EnterPassword(value) {

        const field = cy.get('#Password')
        field.clear()
        field.type(value)
        return this

    }

    Submit() {

        const button = cy.get('#login_button')
        button.click()

    }

}

export default LoginPage

