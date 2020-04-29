


require('dotenv').config()

describe('Filtering todo items', function () {

    beforeEach(()=>{
        cy.eyesOpen({
            appName: 'My Todos',
            testName: 'My first Applitool Demo',
            browser: { width: 800, height: 600 },
          })
    })

  
    
    it('adds a todo items', function () {


        // cy.eyesOpen({
        //     appName: 'Hello World!',
        //     testName: 'My first JavaScript test!',
        //     //browser: { width: 800, height: 600 },
        //   })
       cy.visit('http://todomvc-app-for-testing.surge.sh/')
       cy.get('.new-todo').type('sorry{enter}')

      cy.eyesCheckWindow()
      
          

    })

    // afterEach(()=> 
    // {
    //   cy.eyesClose()

    // })

    

})