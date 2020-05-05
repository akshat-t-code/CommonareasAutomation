import LoginPage from '../PageObject/LoginPage'


describe('Error finding', function(){


  this.beforeAll(function() {

    const lp=new LoginPage()
lp.visit("https://serviceproviders.ca-test.com/?localdev=true")
 lp.EnterEmail('kstanley@commonareas.work.dev')
 lp.EnterPassword('1234567Aa')
 lp.Submit()

 Cypress.Cookies.preserveOnce('.AspNet.ApplicationCookie','ASP.NET_SessionId','ca-cf-auth','kit-detail-selected-tab','jwt')
   
})

    it('First Test case for Test KitType',function(){

      cy.wait(10000)
  
      //+ Icon
      cy.get('.fill-height > .plus-button > .v-btn__content > .icon > .inline-svg').click()
  
      cy.wait(2000)
      //Click on Test KitType
      cy.get('.my-3:nth-child(29) use').click(); 
      cy.wait(10000)


      //Cross btn
      cy.get('div:nth-child(2) > .navi-bar path').click();

   
  })

  it('Second Test case for Test KitType',function(){

    //cy.clearCookie()
    cy.wait(10000)

    //+ Icon
    cy.get('.fill-height > .plus-button > .v-btn__content > .icon > .inline-svg').click()

    cy.wait(10000)
    debugger
    //Click on Test KitType
    cy.get('.my-3:nth-child(29) use').click(); 

   
})




  
})