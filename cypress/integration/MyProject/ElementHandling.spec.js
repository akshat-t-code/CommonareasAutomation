import LoginPage from '../PageObject/LoginPage'



describe('Element Handling', function () {


    it('Getting POM elements', function () {

        const lp = new LoginPage()
        lp.visit()
       // cy.visit('https://serviceproviders.ca-test.com/Public/Login?ReturnUrl=%2F/')
        lp.EnterEmail('kstanley@commonareas.work.dev')
        lp.EnterPassword('1234567Aa')
        lp.Submit()
        cy.wait(10000)
        cy.contains('Meerut, Meerut, United States').click()
      cy.get('[placeholder="State"]').click({force:true})
      cy.contains('Alabama',{timeout:3000}).click({force:true})
      cy.contains('LINK ITEM').scrollIntoView({force:true})
      cy.wait(5000)
      cy.get('input[placeholder="Add Date"]').scrollIntoView({force:true}).as('Date')
      //cy.get('input[placeholder="Add Date"]').scrollTo('bottom')
      cy.get('@Date').click({force:true})
      cy.contains('24').click()
      cy.get('.btnBorder:nth-child(1) > .v-btn__content').click()



      //cy.get('.v-list-item__content .v-list-item__title').eq(1).contains('Alabama').click({force:true})
      //cy.get('#alaska-list-item-1351').contains('Alaska').click({force:true})
      //cy.get('.kit-control-text .v-select__selections').click()
     // cy.get('#list-1174 > .v-list-item:nth-child(4)').click()
      
        

    })
})