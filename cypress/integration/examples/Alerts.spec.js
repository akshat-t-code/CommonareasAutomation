

describe('Handling alert in cypress', function () {

    beforeEach(function () {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })


    it("Js Alert type", function () {


        cy.on('window:alert', function (alertText) {
            expect(alertText).eq('I am a JS Alert')
        })

        cy.contains('Click for JS Alert').click()

    })

    it('Confirmation Alert-type', function () {

        cy.on('window:confirm', function (ConfirmationText) {
            return false
        })

        cy.contains('Click for JS Confirm').click()
    })

    it.only('Promot type Alert', function(){

     cy.window().then(function($win){
         cy.stub($win, 'prompt').returns('Hello is the password')
         cy.contains('Click for JS Prompt').click()

     })

     


    })


})





