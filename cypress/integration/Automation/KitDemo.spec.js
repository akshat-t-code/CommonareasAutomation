

import LoginPage from '../PageObject/LoginPage'


describe('Basic Test Case', function(){


    this.beforeEach(function() {

        const lp=new LoginPage()
lp.visit("https://serviceproviders.ca-test.com/?localdev=true")
lp.EnterEmail('kstanley@commonareas.work.dev')
lp.EnterPassword('1234567Aa')
lp.Submit()

        cy.fixture('KitName').then(function(data){
    
            this.data=data

         })
         
    })



it.only('KitItem Form', function(){


//cy.wait(5000)

//Assert
cy.title().should('eq','Common Areas')

//+ Icon
cy.get('.fill-height > .plus-button > .v-btn__content > .icon > .inline-svg').click()

cy.get('[placeholder="Search Item"]').type(this.data.KitName)
//cy.get('.v-btn__content > .menu-items-icon').click({force:true})
//cy.contains("Work Request").click()


 cy.get('.v-btn__content > .menu-items-icon')
 .each(function($el, index, $listofEle){
    debugger
    cy.log($listofEle.text())  //return all element text
    cy.log($listofEle.length)     
   if($el.text=='Work Request'){
         $el.click()
      }
      else(index==4)
      {
          $el.click()
      }

      debugger;

 })

})

})