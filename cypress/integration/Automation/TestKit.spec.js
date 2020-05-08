import LoginPage from '../PageObject/LoginPage'


describe('Interaction with the common area Data Types', function(){


  this.beforeAll(function() {

    const lp=new LoginPage()
lp.visit("https://serviceproviders.ca-test.com/?localdev=true")
 lp.EnterEmail('kstanley@commonareas.work.dev')
 lp.EnterPassword('1234567Aa')
 lp.Submit()


    cy.fixture('KitFormData').then(function(data){

        this.data=data

     })
     
})

    it.only('Test case  for accessing and locating the all DT in Test KitType',function(){

      cy.wait(10000)
  
      //+ Icon
      cy.get('.fill-height > .plus-button > .v-btn__content > .icon > .inline-svg').click()
  
      cy.wait(2000)
      //Click on Test KitType
      cy.get('.my-3:nth-child(29) use').click();
  
      cy.get('[placeholder="name "]').type(this.data.TestName)
      cy.get('[placeholder="Status"]').type(this.data.TestStatus)
      cy.get('[placeholder="Please Enter Email"]').type(this.data.Email)


      //Add Contributor
cy.get('.v-tab:nth-child(5)').click();
cy.get('.addBtn > .v-btn__content').click();
cy.get('.col:nth-child(3) .v-input--selection-controls__ripple').click();
cy.get('.v-list-item:nth-child(2) > .list-item-search > .v-list-item__title').click();
cy.get('.button-pop-ups--size > .v-btn__content').click();


  
      //Click on save
      cy.get('.v-select__selections > .v-btn').click();

      cy.wait(10000)
      
      //Refresh
      cy.get('#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div.base-layout-second-header.header-box-border.col.col-12 > div > div > div.fill-height.col.col-md-5.col-lg-4.col-xl-3 > div > div > div > div > div.d-flex.align-center.justify-end.col.app-secondary-header-left--buttons.fill-height.gray-divider > button')
      .click({force:true})
  
      //KitInbox
      cy.get('#action_items_list > div.fill-height.col > div > div > div.fill-height > div:nth-child(1)').click({force:true})
   
      cy.get('.kitname-account-id').should('have.text',this.data.TestName)

      cy.wait(3000)



      //file
      cy.get('.link-icon--green > path').click();
    cy.get('.thumb-container:nth-child(11) > .thumb-selected-icon').click({force:true});
    cy.get('.button-pop-ups--size > .v-btn__content').click();

    //Location
    cy.get('[placeholder="Enter Location"]').type("Uk")

    //Status
    cy.get('[placeholder="Status"]').clear().type('Pending')

  

    cy.get('[placeholder="Address"]').click().type("USA")
//debugger

//State
//cy.get('.kit-control-text .v-select__selections').click();
//cy.get('#list-3189 > div:nth-child(2)').click({force:true})

cy.get('[placeholder="City"]').click().type('NYY')

//ZipCode
cy.get('[name="Zip/Postal Code"]').type(786775)

//State DD
cy.get('#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div.row.content-wrapper.fill-width.fill-height > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div.row.kit-details-wrapper--content > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-check-list.kit-control-address.kit-control--no-fixed-height.pa-3.col.col-12.px-3 > div > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div')
.click({force:true})
//cy.get('[aria-labelledby="alabama-list-item-2261"] > .v-list-item__content').click({force:true})
cy.contains('Alabama').click()


//country DD
//cy.get('#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div.row.content-wrapper.fill-width.fill-height > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div.row.kit-details-wrapper--content > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-check-list.kit-control-address.kit-control--no-fixed-height.pa-3.col.col-12.px-3 > div > div:nth-child(6) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div')
//.click({force:true})
//cy.get('[aria-labelledby="afghanistan-list-item-2841"] > .v-list-item__content').click({force:true})
cy.contains('Afghanistan').click()


//currency
cy.get('#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div.row.content-wrapper.fill-width.fill-height > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div.row.kit-details-wrapper--content > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-currency.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-currency--right.ma-0.pa-0.col > div > div > div.v-input__slot').type(76788)

//Assigning
cy.get('.searchIcon > .inline-svg > path').click({force:true})
cy.get(':nth-child(1) > .list-item-search > .v-list-item__title').click({force:true})
cy.get('.button-pop-ups--size > .v-btn__content').click()

//builderName
cy.get('[placeholder="BuilderName"]').type('VK singh')

cy.get('[placeholder="Priority"]').type('hold')

cy.get('[placeholder="URL"]').type('https://starksolutions.ca-test.com/#/')

cy.get('[placeholder="Telephone"]').type(8263782927)


//icon
cy.get('#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div.row.content-wrapper.fill-width.fill-height > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div.row.kit-details-wrapper--content > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.row-component.kit-control-icon.px-3.col.col-sm-12.col-md-6.mb-4 > div.row.wrapper-kit-control.align-center > div > div.kit-control-icon__button_wrap.d-flex.border-right.justify-center.col > button')
.click({force:true})
cy.get('.thumb-container:nth-child(3) > .thumb-selected-icon').click({force:true});
cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div.pop-up--header.px-4.col.col-12 > div.pop-up--header--right.d-flex.justify-end.align-center.col.col-4 > button')
.click({force:true});

//CheckList
cy.get('.v-chip:nth-child(2) > .v-chip__content').click({force:true});


//Click on new
cy.get('.kit-control-grid:nth-child(15) .ma-2 > .v-btn__content').click();

//Date
debugger
cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-date-picker.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div.v-input.no-bottom.date-picker-text-field.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder > div.v-input__control > div.v-input__slot')
.click({force:true})

// cy.get('tr:nth-child(2) > td:nth-child(3) .v-btn__content').click();
// cy.get('.btnBorder:nth-child(1) > .v-btn__content').click();

//Time
debugger
cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-component--preappend-icon.kit-control-time-picker.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div.v-input.time-picker-text-field.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder > div.v-input__control > div.v-input__slot > div.v-text-field__slot')
.click({force:true})
// cy.get('.lighten-1 > span').click();
// cy.get('.v-time-picker-clock__item--active > span').click();
// cy.get('.v-picker__title__btn--active:nth-child(1)').click();
// cy.get('.btnBorder:nth-child(1) > .v-btn__content').click();

//NewKit save btn
cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.navi-bar.fill-height.d-flex.px-6.header-box-border.col.col-12 > div.fill-height.d-flex.align-center.justify-end.px-4.col-md-5.col-lg-7.col-xl-4.col-8 > div.navi-bar-dropdown.fill-height.align-center.overflow-max-width.col-md-9.col-lg-8.col-10 > div > div > div.v-input__slot > div.v-select__slot > div.v-select__selections > button')
.click({force:true})

cy.wait(4000)


cy.wait(4000)
//Kit Save btn
//cy.get('.navi-bar-dropdown:nth-child(2) .v-btn__content').eq(1).click();
cy.get('.v-select__selections > .v-btn').click({force:true})


  })


    
})


        
    
