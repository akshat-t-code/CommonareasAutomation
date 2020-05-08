import LoginPage from '../PageObject/LoginPage'


describe('Interaction with Common area Data Types', function(){


  this.beforeAll(function() {

    const lp=new LoginPage()
lp.visit("https://serviceproviders.ca-test.com/?localdev=true")
 lp.EnterEmail('kstanley@commonareas.work.dev')
 lp.EnterPassword('1234567Aa')
 lp.Submit()

   
cy.wait(3000)

})

it('Locating the different Data types of New kittype',function(){


    cy.wait(3000)
  
      //+ Icon
      cy.get('.fill-height > .plus-button > .v-btn__content > .icon > .inline-svg').click()
  
      cy.wait(3000)


      //Click on Test KitType
    cy.get('.my-3:nth-child(38) .menu-items-icon').click();


    //Checkbox
   // cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-radio-select.col.col-sm-12.col-md-6.mb-4.px-3 > div > div > div.v-input__slot > div > div:nth-child(1) > div > i')
   cy.get('.v-input--radio-group__input > :nth-child(2) > .v-label')
   //cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-radio-select.col.col-sm-12.col-md-6.mb-4.px-3 > div > div > div.v-input__slot > div > div.v-radio.theme--light.v-item--active > label')
    .click({force:true})
    //.check({force:true}).should('be.checked')

    //Toggle
    cy.get('.sync-switch .v-input--selection-controls__ripple').click()
    //Checkboxes
    cy.get('.col:nth-child(1) > .v-input .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();


    //DD
    //cy.get('.row-component > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon')
    //.click({force:true})

    //cy.get('[aria-labelledby="pending-list-item-1287"] > .v-list-item__content').click({force:true})
    //NewForm Save btn
    //cy.get('.v-select__selections .v-btn__content').click();

    //DD
    cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.row-component.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner')
    .click({force:true})
    //cy.get('#list-1384 > div:nth-child(3)').click({force:true})
   // cy.get('[aria-labelledby="hold-list-item-1287"] > .v-list-item__content').click({force:true})
   //cy.get('[aria-labelledby="hold-list-item-1317"] > .v-list-item__content').click({force:true})
   cy.contains('Hold').click()

    cy.get('.col:nth-child(2) > .v-input--checkbox .v-input--selection-controls__ripple').click();
cy.get('.col:nth-child(3) .v-input--selection-controls__ripple').click();
//cy.get('.v-slider__thumb').click().trigger('mousemove',  50, 10).click({left})

//Date
debugger
cy.get('.kit-control-date-picker > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot')
.click({force:true})
cy.wait(5000)

//cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-date-picker.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div.v-input.no-bottom.date-picker-text-field.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder > div.v-input__control > div.v-input__slot > div.v-text-field__slot')
//.click({force:true})
//cy.get('tr:nth-child(2) > td:nth-child(4) .v-btn__content').click();
//cy.get('.btnBorder:nth-child(1) > .v-btn__content').click();

//Time
debugger
cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-component--preappend-icon.kit-control-time-picker.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div.v-input.time-picker-text-field.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder > div.v-input__control > div.v-input__slot > div.v-text-field__slot')
.click({force:true})
//cy.get('#inspire > div:nth-child(2) > div > div > div.v-picker__body.theme--light > div > div.v-time-picker-clock.v-time-picker-clock--indeterminate.theme--light > div > span:nth-child(4)')
//.click({force:true})
//cy.get('#inspire > div:nth-child(2) > div > div > div.v-picker__body.theme--light > div > div.v-time-picker-clock.v-time-picker-clock--indeterminate.theme--light > div > span:nth-child(13)')
//.click({force:true})
//cy.get('.timeActions > .btnBorder:nth-child(1) > .v-btn__content').click();
//cy.get('.timeActions > :nth-child(1)').click()
cy.wait(5000)

})



})