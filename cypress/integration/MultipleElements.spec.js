

describe('Multiple Elements', function () {

    it('Commands in cypress also', function () {


        cy.visit('https://www.saucedemo.com/index.html')
        cy.get('#user-name').type("standard_user")
        cy.get('#password').type("secret_sauce")
        cy.get('.btn_action').click()

        //cy.get('.inventory_item_name').click()
        cy.get('.inventory_item_name').should('have.length', 6)
        cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Backpack')
            .first().click()
            .go(-1)
        cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Onesi')
            // .eq(4).click()

            //important

            .each(function ($el, index, $listofEle) {
               cy.log($el.text())  //return all element text
               cy.log($listofEle.length)

              /*  if (index==5) {
                    $el.click()
                }*/
                if($el.text=='Sauce Labs Backpack'){
                    $el.click()
                }
            })







    })


})