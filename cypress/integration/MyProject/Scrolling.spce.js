
import LoginPage from '../PageObject/LoginPage'



describe('Scrolling demo in cypress', function () {


    it('ScrollIntoView', function () {

        const lp = new LoginPage()
        lp.visit()
        lp.EnterEmail('kstanley@commonareas.work.dev')
        lp.EnterPassword('1234567Aa')
        lp.Submit()
        cy.wait(10000)


        cy.get('.row:nth-child(15) .row:nth-child(5) > .col:nth-child(1)', { timeout: 5000 }).scrollIntoView()
            .as('WorkOrderKit')

            
            //cy.get('.row:nth-child(15) .row:nth-child(5) > .col:nth-child(1)').click();
            

        cy.get('@WorkOrderKit').click({ force: true })

       // cy.get('.navi-bar--button .inline-svg').click()
       // cy.get('.row-list-item-details--content pa-4 justify-center col col-12 truncate-wrapper:eq(12)').should('be.visible').click()

      //cy.get('.row:nth-child(10) .col:nth-child(2) > div > .v-list-item__subtitle').click()
        //cy.get('#action_items_list > div.fill-height.col > div > div > div.fill-height > div.row.list-item-wrapper.kit-item.collaboration-inbox.kit-collaboration-inbox.selected > div > div > div',{timeout:3000}).click({force:true})
        //never found

        //cy.get('#\34 a3ef3e7-3573-4cd9-a4eb-d32e911de8d2').click()
        //cy.get('#a3ef3e7-3573-4cd9-a4eb-d32e911de8d2').type('hi')


        /* cy.get('.d-flex active-class col col-12:eq(2)').within(function(){
        
             cy.get('#action_items_list > div.fill-height.col > div > div > div.fill-height > div.row.list-item-wrapper.kit-item.collaboration-inbox.kit-collaboration-inbox.selected > div > div > div > div > div.v-list-item__subtitle.truncate > span')
     
             .then(function($text){
                 const t=$text.text()
                 cy.log(t)
             })
     */




        

    })



})




