import LoginPage from '../PageObject/LoginPage'



describe('Scrolling demo in cypress', function () {


    it('ScrollIntoView', function () {

        const lp = new LoginPage()
        lp.visit()
        lp.EnterEmail('kstanley@commonareas.work.dev')
        lp.EnterPassword('1234567Aa')
        lp.Submit()
        cy.wait(10000)

     //   cy.xpath('//div[contains(text(),providers)]').click() 
     //not working
     cy.contains('Hanta Virus, #1').click()
     //cy.contains('Hanta Virus2, #3',{timeout:5000}).scrollIntoView().as('HHH')
    // cy.contains('hhh',{timeout:5000}).eq(0).scrollIntoView().as('HHH')
    // cy.get('@HHH').should('be.visible').click({force:true})
     //cy.get('input[name="Name1"]').clear().type('COVID_19')

      // cy.contains('providers',{timeout:5000}).scrollIntoView().as('Ele')

      // cy.get('@Ele').should('be.visible').click({force:true})    //worked
      // cy.get('input[placeholder="Enter Name"]').should('be.visible').clear()
      // .type("hi")     //worked 


       // cy.get('@Ele').click({force:true})
       // cy.get('@Ele').should('be.visible')
        
       //cy.contains('Worksheet, #1').should('be.visible').click()

        //cy.get('span').contains('Worksheet, #1').should('be.visible').click()
        //not working

    })

})