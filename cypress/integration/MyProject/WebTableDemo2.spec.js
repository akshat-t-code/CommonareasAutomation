

describe('WebTable Demo 2', function () {


    it('Working with table', function () {

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('table[name="BookTable"]').contains('td', 'Learn Selenium').should('be.visible')

        cy.get('table[name="BookTable"] > tbody > tr:nth-child(2) > td:nth-child(3)')
            .contains('Selenium').should('be.visible')

     /*   cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($ele, index, $list)) => {

            const text = $ele.text()
            cy.log(text)

            if (text.includes("Amod")) {
                cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index), then(function (bname)
                 {

                    const BookName = bname.text()
                    expect(BookName).to.equal('Master In Java')

                })
            })
*/

        })

    
    

})







