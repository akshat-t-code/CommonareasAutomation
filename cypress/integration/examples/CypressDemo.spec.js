/// <reference types="cypress" />

describe('Automation Demo', function(){

/*it('Uploading the file form local',function(){

    cy.visit('https://the-internet.herokuapp.com/upload')
    const fileName = 'example.json'

    cy.fixture(fileName).then(function(fileContent){ 
        cy.get('#file-upload').upload({ fileContent, fileName, mimeType: 'application/json' })
        cy.get('#file-submit').click()
        cy.contains('File Uploaded!')
    })
   

})*/




it('Enter the data in text input boxes',function(){

    cy.visit('http://demo.automationtesting.in/Register.html')

    cy.xpath('//input[@placeholder="First Name"]').click().type("Aakash")

    //cy.get('#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input').click().type("Mack")
    cy.get('#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input').click().type("Jhon")
    cy.get('#basicBootstrapForm > div:nth-child(2) > div > textarea').click().type("USA")
    cy.get('#eid > input').click().type("tyagi487@gmail.com")
    cy.get('#basicBootstrapForm > div:nth-child(4) > div > input').click().type("7865453234")
    cy.get('#basicBootstrapForm > div:nth-child(5) > div > label:nth-child(2) > input').click()
    cy.log('you have filled all the information correctly')

})


    it('Checking the check boxes and validating data init',function(){
    

    cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
    cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')

    cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

   

    })


    it('Unchecking the check box',function(){

        cy.get('#checkbox1').uncheck().should('not.be.checked')
    cy.get('#checkbox2').uncheck().should('not.be.checked')

    cy.get('#checkbox3').uncheck().should('not.be.checked')
    })

    it('checking multiple check boxes at once ',function(){

        cy.get('[type=checkbox]').check(['Cricket','Hockey'])
    })





    it('Handling drop downs',function(){

      cy.get('#Skills').select('APIs').should('have.value','APIs')
    })




    it.only('Handling dynamic or multi select drop downs',function(){
        cy.visit('http://demo.automationtesting.in/Register.html')

        cy.get('#msdd').click()
       cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Arabic').click()

      })

      it.only('Handling searchable drop downs',function(){
        cy.visit('http://demo.automationtesting.in/Register.html')

       cy.get('[role=combobox]').click({force:true})
       
       cy.get('.select2-search__field').type('in')
       cy.get('.select2-search__field').type('{enter}')

      })


})