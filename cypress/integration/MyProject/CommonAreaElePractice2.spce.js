import LoginPage from '../PageObject/LoginPage'



describe('Scrolling and POM on common area appn in cypress', function () {


    it('Getting POM elements', function () {

        const lp = new LoginPage()
        lp.visit()
       // cy.visit('https://serviceproviders.ca-test.com/Public/Login?ReturnUrl=%2F/')
        lp.EnterEmail('kstanley@commonareas.work.dev')
        lp.EnterPassword('1234567Aa')
        lp.Submit()
        cy.wait(10000)

        cy.get('.fill-height > .v-btn .btn-nav > #Layer_1').click();
        cy.get('.vue-check-box').contains('Creator').click()
        cy.contains('Coordinator').click()
        cy.contains('Contributor').click()

        cy.contains('Assignee').click()

        cy.get('.vue-check-box').eq('5').click()
        cy.get('[placeholder="Created By"]').click()
        cy.contains('Corona Virus',{timeout:3000}).click()
        cy.get('.close-btn > .v-btn__content > .inline-svg').click({force:true})



       // cy.get('.flex collaboration-inbox__caption').contains('Parental, #3').click()
       cy.window().as('win')
       cy.get('@win').scrollTo('bottom')
      cy.contains('Parental, #3').scrollIntoView().as('Parental')
       cy.get('@Parental').click({force:true})
       cy.get('#9cb320ed-5914-4702-a5ff-d178879c3e6f').clear().type('Hi')
       cy.get('input[placeholder="Add Date"]').click()

       cy.get('tr:nth-child(4) > td:nth-child(6) .v-btn__content').click()
        cy.get('.btnBorder:nth-child(1) > .v-btn__content').click()
        



     //  cy.get('#\39 cb320ed-5914-4702-a5ff-d178879c3e6f').type('Namedfs');

    })
})