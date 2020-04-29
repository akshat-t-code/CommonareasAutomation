

describe('Dubugging todo items', function () {


    
    it('adds a todo items', function () {

       cy.visit('http://todomvc-app-for-testing.surge.sh/')
       //debugger;
       cy.title().should('eq','TodoMVC')

       cy.get('.new-todo').type('sorry{enter}')
       .type('Helloo{enter}')
       .type('New{enter}')
       debugger

       cy.get('.new-todo').then(function(){
        // alert("Hello")

        
        cy.get('.new-todo').type('Bye{enter}')
        debugger
        cy.get('.todo-list li:nth-child(1)').should('have.text','New').then(()=>{
         debugger;
        })
        
        cy.get('.todo-list li').should('have.length',8)
   
       // cy.get('.new-todo').type('Bye{enter}')
       // debugger

       
       })
       


     //debugger;
    //  cy.get('.todo-list li:nth-child(1)').should('have.text','New')
    //  cy.get('.todo-list li').should('have.length',8)

    //  cy.get('.new-todo').type('Bye{enter}')
      
     //  cy.get('label').debug()
       //.should('have.text','New')

      

    })
  

})