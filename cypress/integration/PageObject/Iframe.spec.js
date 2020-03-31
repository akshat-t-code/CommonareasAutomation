
describe('Handling iframes in cypress', function(){


beforeEach(function(){
    cy.visit('https://the-internet.herokuapp.com/iframe')
})

it('Ifrmaes', function(){
    cy.log("Hi")
    //cy.get('tinymce').type('Helloooo')

    //mce_0_ifr frame id
    cy.get('#mce_0_ifr').then(function($iFrameEle){

        const IfrmaesContents=$iFrameEle.contents().find('body')  //both methods are important to intreact with iframes
          cy.wrap(IfrmaesContents)    //wrap to use to convert jq ele IfrmaesContents into cypress useable command

          .click().clear()
          .type("This is me")
          
    })
})




})