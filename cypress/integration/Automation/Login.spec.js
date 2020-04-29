

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



it('KitItem Form', function(){

// const lp=new LoginPage()
// lp.visit("https://serviceproviders.ca-test.com/?localdev=true")
// lp.EnterEmail('kstanley@commonareas.work.dev')
// lp.EnterPassword('1234567Aa')
// lp.Submit()

//cy.wait(5000)

//Assert
cy.title().should('eq','Common Areas')

//+ Icon
cy.get('.fill-height > .plus-button > .v-btn__content > .icon > .inline-svg').click()

//cy.get('[placeholder="Search Item"]').type(this.data.KitName)
//cy.get('.v-btn__content > .menu-items-icon').click({force:true})
//cy.contains("Work Request").click()

// cy.get('.v-btn__content > .menu-items-icon').eq(4).click()
// .each(function($el, index, $listofEle){

//     cy.log($el.text())  //return all element text
//     cy.log($listofEle.length)
//      if($el.text=='Work Request'){
//          $el.click()
//      }

// })



//debugger;
//Click on WorkRequest
cy.get('.my-3:nth-child(32) .menu-items-icon').click()
//cy.get('.my-3:nth-child(32) use').click();
//cy.get('.navi-bar--button .inline-svg').click();

//debugger;


//clicked on icon
cy.get('.black--text').click();
cy.get('.thumb-container:nth-child(1) .selected-icon').click({force:true});

cy.get('.button-pop-ups > .v-btn__content').click();
cy.get('[placeholder=Name]').type('Work Request')

//Assigning
 cy.get('.searchSelectNone .v-select__selections').click();
cy.get('.v-list-item:nth-child(1) > .list-item-search').click();
 cy.get('.button-pop-ups--size > .v-btn__content').click();

cy.get('[placeholder="Description"]').type('Testing')

//cy.get('[placeholder="Select Date"]').click()

//cy.get('[placeholder="Select Priority"]').click({force:true}).type('{downarrow}').click({force:true})
//debugger;
//cy.get('#normal-list-item-1618').contains('Normal').click()
//cy.get('[placeholder="Select Priority"]').click({force:true}).contains("Low").click()

//Priorty
cy.get('[placeholder="Select Priority"]').click({force:true})
cy.get('.v-list-item:nth-child(3) > .v-list-item__content:nth-child(1)').click();


//Date
//cy.get('#input-1330').click()
//cy.get(':nth-child(5) > :nth-child(5) > .v-btn > .v-btn__content').click()
//cy.get('.dateActions > :nth-child(1) > .v-btn__content').click()


//cy.contains('Status').click()

//cy.get('.v-input--is-focused .v-select__selections').click();
//cy.get('[placeholder="Select Status"]').click({force:true})
//cy.get('.v-input--is-focused .v-select__selections').eq(3).click();
//cy.get('#list-1579 > .v-list-item:nth-child(4) > .v-list-item__content').click();

//debugger;
cy.get('.dropzone-area-button:nth-child(2)').scrollIntoView().click({force:true});
cy.get('.thumb-container:nth-child(5) .selected-icon').click({force:true});
cy.get('.container-search > .pop-up--header > .pop-up--header--right > .button-pop-ups--size > .v-btn__content').click({force:true})
//cy.get('.button-pop-ups--size > .v-btn__content').click({force:true});
// cy.get('.wrapper-pictures > :nth-child(1)').click({force:true})
// //cy.get('.button-pop-ups--size > .v-btn__content').click();
// cy.get('.container-search > .pop-up--header > .pop-up--header--right').click({force:true});

//Currency
//cy.get('#input-1397').click().type('2324')
//cy.get('#input-1333[placeholder="0"]').type('6767')


//Click on NewItem
cy.get('.ma-2:nth-child(2) > .v-btn__content').click();

cy.get('[placeholder="Enter Name"]').click().type("NewKit")
//debugger

cy.get('[placeholder="Address"]').click().type("USA")
//debugger

cy.get('[placeholder="City"]').click().type('NYY')
debugger
//Save button
cy.get('#inspire > div:nth-child(1) > div > div > div > div:nth-child(2) > div.navi-bar.fill-height.d-flex.px-6.header-box-border.col.col-12 > div.fill-height.d-flex.align-center.justify-end.px-4.col-md-5.col-lg-7.col-xl-4.col-8 > div.navi-bar-dropdown.fill-height.align-center.overflow-max-width.col-md-9.col-lg-8.col-10 > div > div > div.v-input__slot > div.v-select__slot > div.v-select__selections > button > span').click();
//cy.contains('SAVE').eq(1).click()




//KitSavebtn
cy.get('.navi-bar-dropdown:nth-child(2) .v-btn__content').eq(1).click();

cy.wait(10000)
cy.get('.button__reset-filters .inline-svg').click();


})

it.only('Click on New Created kit',function(){

//cy.wait(5000)
cy.contains('Work Request, #1359').scrollIntoView().click({force:true})
//cy.get('[placeholder="Select Date"]').eq(1).click()

cy.get('[placeholder=Name]').then(function($NameText){

    cy.get('[placeholder=Name]').should('have.data','Work Request')
    debugger
    console.log(text)
    const text=$NameText.text()
    console.log(text)
    cy.get('.kitname-account-id').should('have.text','Work Request')

    //debugger;
    
   // console.log(text).debug()
   // debugger;



})


})



})