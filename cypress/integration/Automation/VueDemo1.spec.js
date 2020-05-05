//import LoginPage from '../PageObject/LoginPage'


describe('Window object with vue', function(){


    this.beforeEach('before Each hook for login',function(){

         //const lp=new LoginPage()
    cy.visit('https://serviceproviders.ca-test.com/?localdev=true')
    //debugger
    cy.get('#UserName').type('kstanley@commonareas.work.dev')
            cy.get('#Password').type('1234567Aa')
           
            cy.get('#login_button').click()
            cy.wait(10000)

    })


    it('Trying to get vue ele by Window object', function(){
    
   
            let a;
            //cy.wait(10000)
          // debugger;

           /*
           var a=document.querySelector("#action_items_list > div.fill-height.col > div > div > div.fill-height > div:nth-child(1)")
           var b=a.__vue__.props.kitItemId;
           console.log(a)
*/



           const win=cy.window().then(function($win){
            debugger
            console.log($win)
             a=document.querySelector("#action_items_list > div.fill-height.col > div > div > div.fill-height > div:nth-child(1)")

            
           // debugger
            //cy.get('a.__vue__.props.kitItemId').debug().click()
            cy.get(win.__vue__.props.kitItemId).debug().click()

           }) 


    })


    it.only('By Document object',function(){

    

        let b

        cy.document().then(($doc)=>{
        
            debugger;
            console.log($doc)

             b=$doc.querySelector("#action_items_list > div.fill-height.col > div > div > div.fill-height > div:nth-child(1)")
           // cy.get(b.__vue__.props.kitItemId).click()
           console.log(b)
           console.log(b.__vue__.props.kitItemId)
            

           })


           .then(()=>{

               debugger
               console.log(b.__vue__.props.kitItemId)
              // cy.get(b.__vue__.$el).debug().click()

            cy.get('b.__vue__.props.kitItemId').click()



           })

     })

    it('Click method',function(){

        cy.get('#action_items_list > div.fill-height.col > div > div > div.fill-height > div:nth-child(1)').click()
        cy.wait(10000)

        let b

        cy.document().then(($doc)=>{
        
            debugger;
            console.log($doc)

             b=$doc.querySelector("#action_items_list > div.fill-height.col > div > div > div.fill-height > div:nth-child(1)")
            cy.get('b.__vue__.props.kitItemId').click()
          // console.log(b)
          // console.log(b.__vue__.props.kitItemId)
            
           })

           .then(()=>{


            debugger
            console.log(b.__vue__.props.kitItemId)
            cy.get(b.__vue__.$el).debug().click()

         cy.get('b.__vue__.props.kitItemId').click()


        })



    })





})