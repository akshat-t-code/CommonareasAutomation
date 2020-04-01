import LoginPage from '../PageObject/LoginPage'



describe('Scrolling and POM on common area appn in cypress', function () {


    it('Getting POM elements', function () {

        const lp = new LoginPage()
        lp.visit()
        lp.EnterEmail('kstanley@commonareas.work.dev')
        lp.EnterPassword('1234567Aa')
        lp.Submit()
        cy.wait(10000)

     //   cy.xpath('//div[contains(text(),providers)]').click() 
     //not working
     cy.contains('Hanta Virus, #2').click()
     cy.get('.navi-bar--button .inline-svg').click();

     cy.contains('Hanta Virus, #1').scrollIntoView().as('Hanta Virus, #1')
     cy.get('@Hanta Virus, #1').click({force:true})
     //cy.get('#47d6258b-a039-4208-9b96-81ca1c9526a6').clear().type('19')
     //cy.get('#\34 7d6258b-a039-4208-9b96-81ca1c9526a6')
    cy.get('[name="Name"]').clear().type('19')

    cy.get('.ma-2 .v-btn__content').contains('LINK ITEM').click()
    cy.get('.ma-2 .v-btn__content',{timeout:3000}).contains('NEW ITEM').click()
    cy.wait(6000)
    cy.get('.navi-bar--button .v-icon').click();



    // cy.get('.navi-bar--button .inline-svg').click();
  //   cy.get('.mb-4:nth-child(1) .v-btn__content').click();


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