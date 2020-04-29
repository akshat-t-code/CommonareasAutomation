/// <reference types="cypress" />

describe('Automation Demo', function () {


    beforeEach(() => {
       // cy.visit('http://demo.automationtesting.in/Register.html')

        cy.eyesOpen({
            appName: 'AutomationTesting',
            testName: 'Cypress Demo',
            //browser: { width: 800, height: 600 },
        })
    })

    /*it('Uploading the file form local',function(){
    
        cy.visit('https://the-internet.herokuapp.com/upload')
        const fileName = 'example.json'
    
        cy.fixture(fileName).then(function(fileContent){ 
            cy.get('#file-upload').upload({ fileContent, fileName, mimeType: 'application/json' })
            cy.get('#file-submit').click()
            cy.contains('File Uploaded!')
        })
       
    
    })*/




    it('Enter the data in text input boxes', function () {

        cy.visit('http://demo.automationtesting.in/Register.html')

        cy.xpath('//input[@placeholder="First Name"]').click().type("Aakash")

        //cy.get('#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input').click().type("Mack")
        cy.get('#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input').click().type("Jhon")
        cy.get('#basicBootstrapForm > div:nth-child(2) > div > textarea').click().type("USA")
        cy.get('#eid > input').click().type("tyagi487@gmail.com")
        cy.get('#basicBootstrapForm > div:nth-child(4) > div > input').click().type("7865453234")
        cy.get('#basicBootstrapForm > div:nth-child(5) > div > label:nth-child(2) > input').click()
        cy.log('you have filled all the information correctly')
        cy.wait(2000)
        cy.eyesCheckWindow("My inital form filled")


    })


    it('Checking the check boxes and validating data init', function () {


        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies')

        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey')

        cy.eyesCheckWindow("Checking the check boxes")


    })


    it('Unchecking the check box', function () {

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')

        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.eyesCheckWindow("Checking the check boxes")

    })

    it('checking multiple check boxes at once ', function () {

        cy.get('[type=checkbox]').check(['Cricket', 'Hockey'])

        cy.eyesCheckWindow("Checking multiple the check boxes")

    })





    it('Handling drop downs', function () {

        cy.get('#Skills').select('APIs').should('have.value', 'APIs')
        cy.eyesCheckWindow()
    })




    it('Handling dynamic or multi select drop downs', function () {
       // cy.visit('http://demo.automationtesting.in/Register.html')

        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Arabic').click()
        cy.eyesCheckWindow()


    })

    it('Handling searchable drop downs', function () {
       // cy.visit('http://demo.automationtesting.in/Register.html')

        cy.get('[role=combobox]').click({ force: true })

        cy.get('.select2-search__field').type('in')
        cy.get('.select2-search__field').type('{enter}')
        cy.eyesCheckWindow("last test running")

    })

    afterEach(()=> 
    {
      cy.eyesClose()

    })



})