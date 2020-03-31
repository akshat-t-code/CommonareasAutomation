
describe('Web interaction', function () {

    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/dropdown')

    })


    it('Something important methods', function () {

        //cy.visit('https://the-internet.herokuapp.com/')
        cy.get('h1').then(function ($gettingText) {
            var getText = $gettingText.text()
            cy.log(getText)
            Console.log('I am inside')
        })


    })

    it.only('Dropdown', function(){
        cy.get('#dropdown').select('Option 1')
        cy.get('#dropdown').children().first().then(function($dropdownEle){
            cy.log($dropdownEle.text())
        })
    })

  //  cy.get('[type=checkbox]:eq(1)').check().should('be.checked')
    //eq(1) using index if there is two matched ====demo


})