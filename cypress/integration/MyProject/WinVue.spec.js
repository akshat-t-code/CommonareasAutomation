

//import LoginPage from '../PageObject/LoginPage'


describe('Window object', function(){

it('DOM element', function(){

//const lp=new LoginPage()
cy.visit('https://serviceproviders.ca-test.com/?localdev=true')
//debugger
cy.get('#UserName').type('kstanley@commonareas.work.dev')
        cy.get('#Password').type('1234567Aa')
        cy.get('#login_button').click()

        //cy.wait(10000)


        cy.url().should('include', 'serviceproviders.ca-test').then(async () => {
            const window = await cy.window();
            console.log("this is window objetc we are getting "+window);

            //cy.get('#3414ac2b-b497-4c50-a1a6-6d3a1970686e').click({force:true})

           // cy.get(EL.__vue__).should('be.visible')
            //cy.get(window).its('$0.__vue__').should('be.exist')
            debugger
          //  cy.debug()
            //cy.window({timeout:5000}).should('have.prop','EL.__vue__')
            //cy.get(EL.__vue__)
        });

        //cy.get(window).its('$0.__vue__').should('be.exist')

        cy.document().then(function(doc){

          console.log(doc)

          //cy.get('#action_items_list').should('be.visible')

        // cy.document().as('Doc').then(function(){

        //   cy.get('@Doc').its('this.props')

        // })
        debugger
        cy.document().as('Doc')
         cy.get('@Doc').within(function(){
                
                //cy.document().as('Doc')
                cy.get('#3414ac2b-b497-4c50-a1a6-6d3a1970686e').click({force:true})

           cy.get('@Doc').its("EL.__vue__").should('be.visible')


         })



        //  doc1.getElementById('action_items_list')
                 // cy.get('#d2bcd59f-04cb-4f32-9deb-614ccb304b16').click()


          

         // cy.get('@doc').should('have.id','action_items_list')

        })


//EL.__vue__

        cy.window().then((win) => {
            debugger;
            console.log(win)
          
            //cy.get(win).should('have.class','tenant-theme-green').should('be.visible')


          })

//         cy.window().find('underfined-0000')


// cy.window().then(function(win){

//     cy.get(win).should('have.attr','vue')






})



})