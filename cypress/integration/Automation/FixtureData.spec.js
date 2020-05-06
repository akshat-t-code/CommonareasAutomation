

import LoginPage from '../PageObject/LoginPage'


describe('Basic Test Case for accessing the data from json file', function(){


    this.beforeAll(function() {

        const lp=new LoginPage()
    lp.visit("https://serviceproviders.ca-test.com/?localdev=true")
     lp.EnterEmail('kstanley@commonareas.work.dev')
     lp.EnterPassword('1234567Aa')
     lp.Submit()

Cypress.Cookies.preserveOnce('.AspNet.ApplicationCookie','ASP.NET_SessionId','ca-cf-auth','kit-detail-selected-tab','jwt')


        cy.fixture('KitFormData').then(function(data){
    
            this.data=data

         })
         
    })


    it('Reading the data form fixtures file in Test kitType',function(){

        cy.wait(10000)
    
        //+ Icon
        cy.get('.fill-height > .plus-button > .v-btn__content > .icon > .inline-svg').click()
    
        cy.wait(10000)
        //Click on Test KitType
        cy.get('.my-3:nth-child(29) use').click();
    
        cy.get('[placeholder="name "]').type(this.data.TestName)
        cy.get('[placeholder="Status"]').type(this.data.TestStatus)
        cy.get('[placeholder="Please Enter Email"]').type(this.data.Email)
    
        //Click on save
        cy.get('.v-select__selections > .v-btn').click();
        //Refresh
        cy.get('#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div.base-layout-second-header.header-box-border.col.col-12 > div > div > div.fill-height.col.col-md-5.col-lg-4.col-xl-3 > div > div > div > div > div.d-flex.align-center.justify-end.col.app-secondary-header-left--buttons.fill-height.gray-divider > button')
        .click({force:true})
        cy.wait(5000)
    
        cy.get('#action_items_list > div.fill-height.col > div > div > div.fill-height > div:nth-child(1)').click({force:true})
     
        cy.get('.kitname-account-id').should('have.text',this.data.TestName)

        cy.wait(10000)
    
 
    
    })




it('Reading the data form fixtures file in WorkRequest kitType', function(){


cy.wait(10000)

//Assert
cy.title().should('eq','Common Areas')

//+ Icon
cy.get('.fill-height > .plus-button > .v-btn__content > .icon > .inline-svg').click()
debugger;

//Search input box
//cy.get('[placeholder="Search Item"]').type(this.data.KitName)




//click on work request
cy.get('.my-3:nth-child(31) .menu-items-icon').click();

//cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div.kits-type-wrapper.col.col-12 > div > div > div > div.truncate-special.col')
//.click({force:true})
//cy.contains("Work Request").click()

//cy.wait(5000)

//debugger;


//clicked on icon
cy.get('.black--text').click();
cy.get('.thumb-container:nth-child(1) .selected-icon').click({force:true});

cy.get('.button-pop-ups > .v-btn__content').click();
//cy.get('[placeholder=Name]').type('Tiger And Lion')
cy.get('[placeholder=Name]').type(this.data.Name)


//status
cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div:nth-child(5) > div > div > div.v-input__slot').click({force:true})
cy.get('.v-list-item:nth-child(4) > .v-list-item__content:nth-child(1)').click({force:true});

//Assigning
 cy.get('.searchSelectNone .v-select__selections').click();
cy.get('.v-list-item:nth-child(1) > .list-item-search').click();
 cy.get('.button-pop-ups--size > .v-btn__content').click();

cy.get('[placeholder="Description"]').type(this.data.Description)



//debugger;
//file
cy.get('.dropzone-area-button:nth-child(2)').scrollIntoView().click({force:true});
cy.get('.thumb-container:nth-child(4) .selected-icon').click({force:true});
cy.get('.container-search > .pop-up--header > .pop-up--header--right > .button-pop-ups--size > .v-btn__content').click({force:true})

//currency
cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-currency.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-currency--right.ma-0.pa-0.col > div > div > div.v-input__slot > div').click({force:true})
.type(this.data.Currency)




//Click on NewItem
cy.get('.ma-2:nth-child(2) > .v-btn__content').click();
//debugger
cy.get('[placeholder="Enter Name"]').click().type(this.data.LocationName)
//debugger



cy.get('[placeholder="Address"]').click().type(this.data.Address)
//debugger

cy.get('[placeholder="City"]').click().type(this.data.City)

//ZipCode
cy.get('[name="Zip/Postal Code"]').type(this.data.ZipCode)
//debugger
//Save button
cy.get('#inspire > div:nth-child(1) > div > div > div > div:nth-child(2) > div.navi-bar.fill-height.d-flex.px-6.header-box-border.col.col-12 > div.fill-height.d-flex.align-center.justify-end.px-4.col-md-5.col-lg-7.col-xl-4.col-8 > div.navi-bar-dropdown.fill-height.align-center.overflow-max-width.col-md-9.col-lg-8.col-10 > div > div > div.v-input__slot > div.v-select__slot > div.v-select__selections > button > span').click();




//Work Request Savebtn
//cy.get('.navi-bar-dropdown:nth-child(2) .v-btn__content').eq(1).click();
cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.navi-bar.fill-height.d-flex.px-6.header-box-border.col.col-12 > div.fill-height.d-flex.align-center.justify-end.px-4.col-md-5.col-lg-7.col-xl-4.col-8 > div.navi-bar-dropdown.fill-height.align-center.overflow-max-width.col-md-9.col-lg-8.col-10 > div > div > div.v-input__slot > div.v-select__slot > div.v-select__selections > button')
.click({force:true})

cy.wait(5000)
//refresh button
//cy.get('.button__reset-filters .inline-svg').click();

//refresh button
cy.get('#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div.base-layout-second-header.header-box-border.col.col-12 > div > div > div.fill-height.col.col-md-5.col-lg-4.col-xl-3 > div > div > div > div > div.d-flex.align-center.justify-end.col.app-secondary-header-left--buttons.fill-height.gray-divider > button').click({force:true})


cy.wait(10000)



//debugger
//KitInbox click on 1st kittype
cy.get('#action_items_list > div.fill-height.col > div > div > div.fill-height > div:nth-child(1)').click({force:true})
 
    cy.get('.kitname-account-id').should('have.text',this.data.Name)

})



})



