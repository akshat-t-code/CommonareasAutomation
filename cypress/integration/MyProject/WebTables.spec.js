

describe('Handling webtables', function () {


    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/tables')
    })

    it('geting whole table data', function () {

        //getting rows
        cy.get('#table1>tbody>tr').should('have.length', 4)
        //get column of a row
        cy.get('#table1>tbody>tr:eq(0)>td').should('have.length', 6)

        //getting data 
        cy.get('#table1>tbody>tr')
            .each(function ($row, index, $rows) {

                cy.wrap($row).within(function () {

                    // cy.get('td').click()  another each will use coz 6 elemets are here again
                    cy.get('td')
                        .each(function ($cellData, index, $columns) {
                            cy.log($cellData.text())
                            //cy.log($columns.text())

                        })
                })


            })


    })



    it('getting single row data', function () {

        cy.get('#table1>tbody>tr').eq(2)
            .within(function () {
                cy.get('td').eq(1).should('contain.text', 'Jason')
            })





        /*  cy.get('#table1>tbody>tr').first()
          .within(function(){
              cy.get('td').eq(1).should('contain.text','John')
            // cy.get('td').then(function($CellData){
                // cy.log($CellData.text())
             //})
             cy.get('td')
             .each(function($1cellData, index, $FirstColumn){
                 cy.log($FirstColumn.text())
             })
          })*/

    })

    it.only('get specific cell value based on another cell value', function(){

        cy.get('#table1').contains('Conway').parent()
        .within(function(){

            cy.get('td').eq(4).then(function($websiteLink){
                const data=$websiteLink.text()
                cy.log(data)
            })
        })
    })



})