import LoginPage from '../PageObject/LoginPage'


describe('Visual testing with Applitools', function(){


  this.beforeAll(function() {

    cy.eyesOpen({
      appName: 'Common Aera',
      testName: 'My first Applitool Demo, Visual Testing',
     // browser: { width: 800, height: 600 },
    })
  
    const lp=new LoginPage()
lp.visit("https://serviceproviders.ca-test.com/?localdev=true")
 lp.EnterEmail('kstanley@commonareas.work.dev')
 lp.EnterPassword('1234567Aa')

 cy.eyesCheckWindow('Getting un and pwd for login')

 lp.Submit()

 Cypress.Cookies.preserveOnce('.AspNet.ApplicationCookie','ASP.NET_SessionId','ca-cf-auth','kit-detail-selected-tab','jwt')
 
 cy.wait(3000)
 cy.eyesCheckWindow('login to the application')


})

    it.only('Visual Testing Demo ',function(){

      cy.wait(5000)
  
      //+ Icon
      cy.get('.fill-height > .plus-button > .v-btn__content > .icon > .inline-svg').click()
      cy.wait(5000)
      cy.eyesCheckWindow('+icon clicked')
      //Click on Test KitType
     // cy.get('.my-3:nth-child(29) use').click()
      cy.wait(5000)
      cy.eyesCheckWindow('1st TC kitype open')
      
      cy.wait(3000)


      //Cross btn
      //cy.get('div:nth-child(2) > .navi-bar path').click();

   
  })

  it('Visual Testing Demo 2',function(){

    //cy.clearCookie()
    cy.wait(5000)

    //+ Icon
    cy.get('.fill-height > .plus-button > .v-btn__content > .icon > .inline-svg').click()
    cy.wait(5000)
    cy.eyesCheckWindow('+ icon clicked')

    cy.wait(5000)

    debugger
    //Click on Test KitType
    cy.get('.my-3:nth-child(29) use').click()
    cy.wait(5000)
    cy.eyesCheckWindow('Second TC KitType open')


   
})

this.afterAll(function(){
  cy.eyesClose()
})


  
})