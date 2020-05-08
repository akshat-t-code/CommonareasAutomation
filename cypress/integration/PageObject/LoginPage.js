

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

    PlusIcon(){

        const btn=cy.get('.fill-height > .plus-button > .v-btn__content > .icon > .inline-svg')
        btn.click()

    }

    ConnectionIcon(){
        const btn=cy.get('.new-contact #Layer_1')
        btn.click();

    }

}

export default LoginPage

