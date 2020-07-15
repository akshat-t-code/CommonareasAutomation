import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";

describe("Basic Test Case for Element interaction for common area DT", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    lp.visit();
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();

    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt"
    );
  });

  this.beforeEach("KitType Data", function () {
    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
      KitTypeData
    ) {
      this.KitTypeData = KitTypeData;
    });

    cy.fixture("KitTypeTestData/KitItemDataValues").then(function (KitDataEle) {
      this.KitItemData = KitDataEle;
    });
  });

  it.only("AksahtDemo Kit type", function () {
    //cy.wait(5000)
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    //debugger;
    //Click on To open Kit Type
    KTP.SearchKitType(this.KitItemData.KitName3);
    KTP.OpenKitType(this.KitItemData.KitName3);
    cy.wait(2000);
    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.log("New Item created and Kit Type has been Opened");
  });

  it.only("Element Interation", function () {
    // //Url
    // cy.get('[name="Url"]').type(this.KitItemData.Url);
    // cy.wait(1000);

    //Text
    cy.get('[name="Text"]').type(this.KitItemData.Text);
    cy.wait(1000);

    //Click on New Item Related New Kit Type for Square Card Relation Control
    cy.get(
      ".kit-control-grid:nth-child(25) .ma-2:nth-child(2) > .v-btn__content"
    ).click({ force: true });

    cy.wait(5000);

    //Assertion
    cy.contains("New Item created").should("be.visible");

    //Name
    cy.get('[name="Name"]').type(this.KitItemData.Text);

    //Url
    cy.get('[name="url"]').type(this.KitItemData.Url);

    //Related New Kit Type saved for Square Card Relation Control
    cy.get(
      "#inspire > div:nth-child(1) > div > div > div > div:nth-child(2) > div.navi-bar.fill-height.d-flex.px-6.header-box-border.col.col-12 > div.fill-height.d-flex.align-center.justify-end.px-4.col-md-5.col-lg-7.col-xl-4.col-8 > div.navi-bar-dropdown.fill-height.align-center.overflow-max-width.col-md-9.col-lg-8.col-10 > div > div > div.v-input__slot > div.v-select__slot > div.v-select__selections > button"
    )

    // cy.get(
    //   "#inspire > div:nth-child(2) > div > div > div > div:nth-child(2) > div.navi-bar.fill-height.d-flex.px-6.header-box-border.col.col-12 > div.fill-height.d-flex.col-md-7.col-lg-5.col-xl-8.col-4 > div.subheader--button-icon-wrapper.fill-height.d-flex.align-center.col > div > button > span > svg"
    // )
    .click({ force: true });

    cy.log("Related New Kit Type has been saved for Square Card'");
    cy.wait(5000);
    //Close the kit item for square card
    cy.get(
      "div.navi-bar.fill-height.d-flex.px-6.header-box-border.col.col-12 > div.fill-height.d-flex.col-md-7.col-lg-5.col-xl-8.col-4 > div.subheader--button-icon-wrapper.fill-height.d-flex.align-center.col > div > button"
    ).first()
    .click({ force: true });
    cy.log("Related New Kit item has been Close for Square Card");

    // //File
    // cy.get(".link-icon--green > path").click({ force: true });
    // cy.wait(3000);
    // cy.get(".thumb-container:nth-child(5) .selected-icon").click({
    //   force: true,
    // });
    // cy.get(
    //   ".container-search > .pop-up--header > .pop-up--header--right > .button-pop-ups--size > .v-btn__content"
    // ).click({ force: true });
    // cy.wait(1000);

    // //Telephone
    // cy.get('[name="Telephone"]').type(this.KitItemData.Telphone);
    // cy.wait(1000);

    // //TextAera
    // cy.get('[name="TextAera"]').type(this.KitItemData.TextAera);
    // cy.wait(1000);

    //Slider

    //Currency

    // cy.get(
    //   "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-currency.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-currency--right.ma-0.pa-0.col > div > div > div.v-input__slot > div"
    // )
    //   .click({ force: true })
    //   .type(this.KitItemData.Currency);

    // //Measure

    // cy.get(
    //   "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-measure.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-measure--left.ma-0.pa-0.pr-2.col > div > div > div.v-input__slot > div"
    // )
    //   .click({ force: true })
    //   .type(this.KitItemData.Measure);

    //Email
    //cy.get('[name="Email"]').type(this.KitItemData.Email);

    // //Address
    // cy.get('[placeholder="Address"]').type(this.KitItemData.Address);
    // //Address count
    // cy.get('[name="Address Cont."]').type(this.KitItemData.AddressCount);

    // //City
    // cy.get('[placeholder="City"]').type(this.KitItemData.City);
    // //State
    // cy.get(
    //   "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-check-list.kit-control-address.kit-control--no-fixed-height.pa-3.col.col-12.px-3 > div > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    // ).click({ force: true });
    // cy.contains("Alaska").click({ force: true });
    // //ZipCode
    // cy.get('[placeholder="Zip/Postal Code"]').type(this.KitItemData.ZipCode);
    // cy.wait(1000);

    //Number
    cy.get('[name="Number"]').type(this.KitItemData.Number);
    cy.wait(1000);

    // //Time Data Element
    // cy.get('[placeholder="Add Time"]').first().click({ force: true });
    // //Hour
    // cy.get(
    //   "#inspire > div:nth-child(1) > div > div > div.v-picker__body.theme--light > div > div.v-time-picker-clock.v-time-picker-clock--indeterminate.theme--light > div > span:nth-child(5)"
    // )
    //   .first()
    //   .click({ force: true });

    // cy.wait(5000);
    // //Min
    // cy.get(
    //   "#inspire > div:nth-child(1) > div > div > div.v-picker__body.theme--light > div > div.v-time-picker-clock.v-time-picker-clock--indeterminate.theme--light > div > span:nth-child(5)"
    // )
    //   .last()
    //   .click({ force: true });

    // //Click on OK
    // cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    // //Date Data Element
    // cy.get('[placeholder="Add Date"]').first().click({ force: true });
    // cy.get("tr:nth-child(2) > td:nth-child(5) .v-btn__content").click({
    //   force: true,
    // });
    // cy.get(".dateActions > .btnBorder:nth-child(1) > .v-btn__content").click({
    //   force: true,
    // });

    //----------------------//Reminder One time------------------------------------------------------------

    //Reminder

    /*
    //Click to open Reminder POPUP
    cy.contains("SET REMINDER").click({ force: true });
    cy.log("Reminder Pop Up has been Opened");
    cy.wait(2000);

    //Reminder Tittle
    cy.get('[items="Recurring,One-Time"]').type(this.KitItemData.ReminderTitle);
    cy.wait(1000);
    //Reminder Type-->Click on DropDown
    cy.contains("arrow_drop_down").click({ force: true });

    //Reminder for One-Time
    cy.contains(this.KitItemData.ReminderTypeOneTime)
      .first()
      .click({ force: true });

    //Reminder Start Date
    cy.contains("Reminder Date").click({ force: true });
    cy.get("tr:nth-child(3) > td:nth-child(4) .v-btn__content").click({
      force: true,
    });
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //Reminder Time

    

    cy.get('#inspire > div:nth-child(5) > div > div > div > div.fill-height.pop-up-reminder.v-card.v-sheet.theme--light > div.v-card__text.pop-up-reminder--content > div > div.row.d-flex > div:nth-child(2) > div > div.v-input.px-2.select--medium.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot')
    .click({ force: true });

    //cy.contains('Time').eq(9).click({ force: true });

    cy.contains("access_time").dblclick()
    cy.contains("access_time").click({ force: true });

    cy.get(".accent > span").click({ force: true });
    cy.get(".v-time-picker-clock__item--active > span").click({ force: true });
    cy.get(
      ".v-dialog__content:nth-child(1) .btnBorder:nth-child(1) > .v-btn__content"
    ).click({ force: true });

    //Select Channels
    cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
    cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
    cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder
    cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
      force: true,
    });
     
    */

    //----------------------//Repeats-->RepeatDaily Case In Recurring Type------------------------------------------------------------

    //Click to open Reminder POPUP
    cy.contains("SET REMINDER").click({ force: true });
    cy.log("Reminder has been Opened");
    cy.wait(2000);

    //Reminder Tittle
    // cy.get('[items="Recurring,One-Time"]').type(this.KitItemData.ReminderTitle);
    // cy.wait(1000);
    //Reminder Type-->Click on DropDown
    cy.contains("arrow_drop_down").click({ force: true });

    //Reminder for Recurring
    cy.contains(this.KitItemData.ReminderTypeRecurring)
      .first()
      .click({ force: true });

    //Reminder Start Date
    // cy.contains("Reminder Date").click({ force: true });
    // cy.get("tr:nth-child(3) > td:nth-child(4) .v-btn__content").click({
    //   force: true,
    // });
    // cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    // //Repeats-->RepeatDaily Case In Recurring Type
    // cy.get('[content-class="reminder-menu "]').click({ force: true });
    // cy.wait(2000);
    // cy.contains(this.KitItemData.RepeatDaily).click({ force: true });

    //Time
    cy.get(
      "div.v-input.reminder--time.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot"
    ).click({ force: true });

    //  cy.get('.accent > span').click();
    //  cy.get('.v-time-picker-clock__item--active > span').click();
    //  cy.get('.btnBorder:nth-child(1) > .v-btn__content').click();

    //End Date
    cy.get(
      "div.v-input.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot"
    )
      .last()
      .click({ force: true });

    // cy.contains("End Date").last().click({ force: true });
    // cy.wait(3000);
    cy.get("tr:nth-child(3) > td:nth-child(3) .v-btn__content").click({
      force: true,
    });
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    //cy.contains('Never').click({force:true});

    //Select Channels
    // cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
    // cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
    // cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder for -->RepeatDaily Case In Recurring Type
    // cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
    //   force: true,
    // });

    //----------------------//Repeats-->Repeat Mon-Friday Case In Recurring Type------------------------------------------------------------

    /*

   //Click to open Reminder POPUP
   cy.contains("SET REMINDER").click({ force: true });
   cy.log("Reminder has been Opened");
   cy.wait(2000);

   //Reminder Tittle
   cy.get('[items="Recurring,One-Time"]').type(this.KitItemData.ReminderTitle);
   cy.wait(1000);
   //Reminder Type-->Click on DropDown
   cy.contains("arrow_drop_down").click({ force: true });

   //Reminder for Recurring
   cy.contains(this.KitItemData.ReminderTypeRecurring)
     .first()
     .click({ force: true });

   //Reminder Start Date
   cy.contains("Reminder Date").click({ force: true });
   cy.get("tr:nth-child(3) > td:nth-child(4) .v-btn__content").click({
     force: true,
   });
   cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

   //Repeats-->Repeat Mon-Friday Case In Recurring Type
   cy.get('[content-class="reminder-menu "]').click({ force: true });
   cy.wait(2000);
   cy.contains(this.KitItemData.RepeatMonFriday).click({ force: true });

    //Time
    //  cy.get('#inspire > div:nth-child(4) > div > div > div > div.fill-height.pop-up-reminder.v-card.v-sheet.theme--light > div.v-card__text.pop-up-reminder--content > div > div.row.d-flex.repeat-section > div.d-flex.justify-end.col-sm-12.col-md-6.col > div.v-input.reminder--time.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot')
    //  .click({force:true});
    //  cy.get('.accent > span').click();
    //  cy.get('.v-time-picker-clock__item--active > span').click();
    //  cy.get('.btnBorder:nth-child(1) > .v-btn__content').click();

    //End Date
    cy.contains("End Date").last().click({ force: true });
    cy.get("tr:nth-child(3) > td:nth-child(3) .v-btn__content").click({
      force: true,
    });
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    //cy.contains('Never').click({force:true});

    //Select Channels
    cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
    cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
    cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder for -->RepeatDaily Case In Recurring Type
    cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
      force: true,
    });
    */

    //----------------------//Repeats-->Repeat Weekly Case In Recurring Type------------------------------------------------------------

    /*

    //Click to open Reminder POPUP
    cy.contains("SET REMINDER").click({ force: true });
    cy.log("Reminder has been Opened");
    cy.wait(2000);

    //Reminder Tittle
    cy.get('[items="Recurring,One-Time"]').type(this.KitItemData.ReminderTitle);
    cy.wait(1000);
    //Reminder Type-->Click on DropDown
    cy.contains("arrow_drop_down").click({ force: true });

    //Reminder for Recurring
    cy.contains(this.KitItemData.ReminderTypeRecurring)
      .first()
      .click({ force: true });

    //Reminder Start Date
    cy.contains("Reminder Date").click({ force: true });
    cy.get("tr:nth-child(3) > td:nth-child(4) .v-btn__content").click({
      force: true,
    });
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //Repeats-->Repeat Weekly Case In Recurring Type
    cy.get('[content-class="reminder-menu "]').click({ force: true });
    cy.wait(2000);
    cy.contains(this.KitItemData.RepeatWeekly).click({ force: true });

    cy.wait(2000);
    //Select the Day of Week
    // cy.contains("Sun").click({ force: true });
    // cy.wait(1000);

    cy.contains("Sat").click({ force: true });
    cy.wait(1000);


    // cy.contains("Tue").click({ force: true });
    // cy.wait(1000);

    // cy.contains("Thu").click({ force: true });
    // cy.wait(1000);

    // //Click on Monday
    // cy.get(".mr-2:nth-child(2) .v-input--selection-controls__ripple").click({
    //   force: true,
    // });
    // cy.wait(1000);

    //click on  Web
    cy.get('.v-input:nth-child(4) .v-input--selection-controls__ripple')
    .click({ force: true });
    cy.wait(1000);

    // //Click on Friday
    // cy.get(".v-input:nth-child(6) .v-input--selection-controls__ripple").click({
    //   force: true,
    // });
    // cy.wait(2000);

    //Time
    //  cy.get('#inspire > div:nth-child(4) > div > div > div > div.fill-height.pop-up-reminder.v-card.v-sheet.theme--light > div.v-card__text.pop-up-reminder--content > div > div.row.d-flex.repeat-section > div.d-flex.justify-end.col-sm-12.col-md-6.col > div.v-input.reminder--time.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot')
    //  .click({force:true});
    //  cy.get('.accent > span').click();
    //  cy.get('.v-time-picker-clock__item--active > span').click();
    //  cy.get('.btnBorder:nth-child(1) > .v-btn__content').click();

    //End Date
    cy.contains("End Date").last().click({ force: true });
    cy.get("tr:nth-child(3) > td:nth-child(3) .v-btn__content").click({
      force: true,
    });
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    //cy.contains('Never').click({force:true});

    //Select Channels
    cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
    cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
    cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder for -->Repeat Weekly Case In Recurring Type
    cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
      force: true,
    });

    */

    //----------------------//Repeats-->Repeat Monthly - Day Case In Recurring Type------------------------------------------------------------

    /*
    //Click to open Reminder POPUP
   cy.contains("SET REMINDER").click({ force: true });
   cy.log("Reminder has been Opened");
   cy.wait(2000);

   //Reminder Tittle
   cy.get('[items="Recurring,One-Time"]').type(this.KitItemData.ReminderTitle);
   cy.wait(1000);
   //Reminder Type-->Click on DropDown
   cy.contains("arrow_drop_down").click({ force: true });

   //Reminder for Recurring
   cy.contains(this.KitItemData.ReminderTypeRecurring)
     .first()
     .click({ force: true });

   //Reminder Start Date
   cy.contains("Reminder Date").click({ force: true });
   cy.get("tr:nth-child(3) > td:nth-child(4) .v-btn__content").click({
     force: true,
   });
   cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

   //Repeats-->Repeat Monthly - Day Case In Recurring Type
   cy.get('[content-class="reminder-menu "]').click({ force: true });
   cy.wait(2000);
   cy.contains(this.KitItemData.RepeatMonthlyDay).click({ force: true });

   //Select the Day of the month

   cy.get('.d-flex:nth-child(1) > .d-flex > .v-input .v-select__slot .v-icon')

   .click({force:true})
   cy.wait(3000)
   cy.contains('7').click({force:true})

   cy.wait(4000)
   cy.get('.v-input:nth-child(2) .v-select__slot .v-icon')

   .click({force:true})
   cy.wait(3000)
   cy.contains('3').click({force:true})
  

    //Time
    //  cy.get('#inspire > div:nth-child(4) > div > div > div > div.fill-height.pop-up-reminder.v-card.v-sheet.theme--light > div.v-card__text.pop-up-reminder--content > div > div.row.d-flex.repeat-section > div.d-flex.justify-end.col-sm-12.col-md-6.col > div.v-input.reminder--time.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot')
    //  .click({force:true});
    //  cy.get('.accent > span').click();
    //  cy.get('.v-time-picker-clock__item--active > span').click();
    //  cy.get('.btnBorder:nth-child(1) > .v-btn__content').click();

    //End Date
    cy.contains("End Date").last().click({ force: true });
    cy.get("tr:nth-child(3) > td:nth-child(3) .v-btn__content").click({
      force: true,
    });
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    //cy.contains('Never').click({force:true});

    //Select Channels
    cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
    cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
    cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder for -->Repeat Monthly - Day Case In Recurring Type
    cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
      force: true,
    });

    */

    //----------------------//Repeats-->Repeat Monthly - Of Day Case In Recurring Type------------------------------------------------------------

    /*

    //Click to open Reminder POPUP
    cy.contains("SET REMINDER").click({ force: true });
    cy.log("Reminder has been Opened");
    cy.wait(2000);

    //Reminder Tittle
    cy.get('[items="Recurring,One-Time"]').type(this.KitItemData.ReminderTitle);
    cy.wait(1000);
    //Reminder Type-->Click on DropDown
    cy.contains("arrow_drop_down").click({ force: true });

    //Reminder for Recurring
    cy.contains(this.KitItemData.ReminderTypeRecurring)
      .first()
      .click({ force: true });

    //Reminder Start Date
    cy.contains("Reminder Date").click({ force: true });
    cy.get("tr:nth-child(3) > td:nth-child(4) .v-btn__content").click({
      force: true,
    });
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //Repeats-->Repeat Monthly - Of Day Case In Recurring Type
    cy.get('[content-class="reminder-menu "]').click({ force: true });
    cy.wait(2000);
    cy.contains(this.KitItemData.RepeatMonthlyOfDay).click({ force: true });

    //Select Instance
    cy.get('.d-flex:nth-child(1) > .v-input:nth-child(1) .v-select__slot .v-icon')
    .click({ force: true });
    cy.wait(2000)
    //Chosee One Out of Five

    //cy.contains('First').click({ force: true });
    // cy.contains('Second').click({ force: true });
     cy.contains('Third').click({ force: true });
    // cy.contains('Fourth').click({ force: true });
    // cy.contains('Fifth').click({ force: true });
    cy.wait(2000)

    //Select Day
    cy.get('.d-flex:nth-child(1) > .d-flex:nth-child(2) > .v-input .v-select__slot .v-icon')
    .click({ force: true });

    cy.wait(2000)
    //Chosee One Out of Seven
    // cy.contains('Sunday').click({ force: true });
    // cy.contains('Monday').click({ force: true });
     cy.contains('Tuesday').click({ force: true });
    // cy.contains('Wednesday').click({ force: true });
    // cy.contains('Thursday').click({ force: true });
    // cy.contains('Friday').click({ force: true });
    // cy.contains('Saturday').click({ force: true });

    cy.wait(3000)
    
    //Select Month Number
    cy.get('.v-input:nth-child(2) .v-select__slot .v-icon')
    .click({ force: true });
    cy.wait(2000)
    cy.contains(5).click({ force: true });

    //Time
    //  cy.get('#inspire > div:nth-child(4) > div > div > div > div.fill-height.pop-up-reminder.v-card.v-sheet.theme--light > div.v-card__text.pop-up-reminder--content > div > div.row.d-flex.repeat-section > div.d-flex.justify-end.col-sm-12.col-md-6.col > div.v-input.reminder--time.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot')
    //  .click({force:true});
    //  cy.get('.accent > span').click();
    //  cy.get('.v-time-picker-clock__item--active > span').click();
    //  cy.get('.btnBorder:nth-child(1) > .v-btn__content').click();

    //End Date
    cy.contains("End Date").last().click({ force: true });
    cy.get("tr:nth-child(3) > td:nth-child(3) .v-btn__content").click({
      force: true,
    });
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    //cy.contains('Never').click({force:true});

    //Select Channels
    cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
    cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
    cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder for -->Repeat Monthly - Of Day Case In Recurring Type
    cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
      force: true,
    });
   
    */

    //----------------------//Repeats-->Repeat Annually - Date Case In Recurring Type------------------------------------------------------------

    /*
    //Click to open Reminder POPUP
    cy.contains("SET REMINDER").click({ force: true });
    cy.log("Reminder has been Opened");
    cy.wait(2000);

    //Reminder Tittle
    cy.get('[items="Recurring,One-Time"]').type(this.KitItemData.ReminderTitle);
    cy.wait(1000);
    //Reminder Type-->Click on DropDown
    cy.contains("arrow_drop_down").click({ force: true });

    //Reminder for Recurring
    cy.contains(this.KitItemData.ReminderTypeRecurring)
      .first()
      .click({ force: true });

    //Reminder Start Date
    cy.contains("Reminder Date").click({ force: true });
    cy.get("tr:nth-child(3) > td:nth-child(4) .v-btn__content").click({
      force: true,
    });
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //Repeats-->Repeat Annually - Date Case In Recurring Type
    cy.get('[content-class="reminder-menu "]').click({ force: true });
    cy.wait(2000);
    cy.contains(this.KitItemData.RepeatAnnuallyDate).click({ force: true });
    cy.wait(2000)
    
    //Click on DropDown To Select Month Name
    cy.get('.d-flex:nth-child(1) > .d-flex > .v-input .v-select__slot .v-icon')
    .click({ force: true });
    cy.wait(2000)
    //Select Month Name
    cy.contains('May').click({ force: true });
    cy.wait(2000)

    //Click on DropDown To Select Date
    cy.get('.d-flex:nth-child(1) > .v-input .v-select__slot .v-icon')
    .click({force:true});
    cy.wait(1000)

    //Choose Date Number
    cy.contains('12').click({force:true});

    //Time
    //  cy.get('#inspire > div:nth-child(4) > div > div > div > div.fill-height.pop-up-reminder.v-card.v-sheet.theme--light > div.v-card__text.pop-up-reminder--content > div > div.row.d-flex.repeat-section > div.d-flex.justify-end.col-sm-12.col-md-6.col > div.v-input.reminder--time.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot')
    //  .click({force:true});
    //  cy.get('.accent > span').click();
    //  cy.get('.v-time-picker-clock__item--active > span').click();
    //  cy.get('.btnBorder:nth-child(1) > .v-btn__content').click();

    //End Date
    cy.contains("End Date").last().click({ force: true });
    cy.get("tr:nth-child(3) > td:nth-child(3) .v-btn__content").click({
      force: true,
    });
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    //cy.contains('Never').click({force:true});

    //Select Channels
    cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
    cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
    cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder for -->Repeat Annually - Date Case In Recurring Type
    cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
      force: true,
    });

    */

    //----------------------//Repeats-->Repeat Annually - Of Month Case In Recurring Type------------------------------------------------------------

    /*


    //Click to open Reminder POPUP
    cy.contains("SET REMINDER").click({ force: true });
    cy.log("Reminder has been Opened");
    cy.wait(2000);

    //Reminder Tittle
    cy.get('[items="Recurring,One-Time"]').type(this.KitItemData.ReminderTitle);
    cy.wait(1000);
    //Reminder Type-->Click on DropDown
    cy.contains("arrow_drop_down").click({ force: true });

    //Reminder for Recurring
    cy.contains(this.KitItemData.ReminderTypeRecurring)
      .first()
      .click({ force: true });

    //Reminder Start Date
    cy.contains("Reminder Date").click({ force: true });
    cy.get("tr:nth-child(3) > td:nth-child(4) .v-btn__content").click({
      force: true,
    });
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //Repeats-->Repeat Annually - Of Month Case In Recurring Type
    cy.get('[content-class="reminder-menu "]').click({ force: true });
    cy.wait(2000);
    cy.contains(this.KitItemData.RepeatAnnuallyOfMonth).click({ force: true });
    cy.wait(2000);

    //Select Instance
    cy.get(
      ".d-flex:nth-child(1) > .v-input:nth-child(1) .v-select__slot .v-icon"
    ).click({ force: true });
    cy.wait(2000);
    //Chosee One Out of Five

    //cy.contains('First').click({ force: true });
    cy.contains("Second").click({ force: true });
    //cy.contains('Third').click({ force: true });
    // cy.contains('Fourth').click({ force: true });
    // cy.contains('Fifth').click({ force: true });
    cy.wait(2000);

    //Select Day
    cy.get(".row:nth-child(5) > .d-flex:nth-child(2) .v-icon").click({
      force: true,
    });
    cy.wait(2000);

    //Chosee One Out of Seven Day Name
    // cy.contains('Sunday').click({ force: true });
    // cy.contains('Monday').click({ force: true });
    // cy.contains('Tuesday').click({ force: true });
    cy.contains("Wednesday").click({ force: true });
    // cy.contains('Thursday').click({ force: true });
    // cy.contains('Friday').click({ force: true });
    // cy.contains('Saturday').click({ force: true });

    cy.wait(3000);

    //Select Month Name
    cy.get(".v-input:nth-child(2) .v-select__slot .v-icon").click({
      force: true,
    });
    cy.wait(2000);
    cy.contains("April").click({ force: true });

     //Time
     cy.contains('access_time').first()
     .click({force:true});
     
    //End Date
    cy.contains("End Date").last().click({ force: true });
    cy.get("tr:nth-child(3) > td:nth-child(3) .v-btn__content").click({
      force: true,
    });
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    //cy.contains('Never').click({force:true});

    //Select Channels
    cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
    cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
    cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder for -->Repeat Annually - Of Month Case In Recurring Type
    cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
      force: true,
    });

   */

    // //Scrolling
    // cy.contains("NEW ITEM").first().scrollIntoView({ force: true });

    // //Toggle
    // cy.get(".sync-switch .v-input--selection-controls__ripple").click({
    //   force: true,
    // });

    // //Click on DropDown of SelectList
    // cy.get(
    //   "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div:nth-child(17) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    // ).click({ force: true });

    // //SelectList Value(Values coming form KitItemValues Json File)
    // cy.contains(this.KitItemData.SelectListValue).click({ force: true });

    // //RadioSelect
    // cy.contains("Value22").click({ force: true });

    //   //CheckboxSelect(Values coming form KitItemValues Json File)
    //   cy.contains(this.KitItemData.CheckboxSelectValue1).click({ force: true });
    //   cy.contains(this.KitItemData.CheckboxSelectValue2).click({ force: true });
    //   cy.contains(this.KitItemData.CheckboxSelectValue3).click({ force: true });
    //   cy.contains(this.KitItemData.CheckboxSelectValue4).click({ force: true });

    //   cy.wait(5000);

    //    //One TO Many Realtion Control

    //    //Scrolling
    //    cy.contains("NEW ITEM").first().scrollIntoView({ force: true });
    //    //New Item Kit(Related New Kit Type)
    //    cy.contains("NEW ITEM").first().click({ force: true });
    //   cy.log('One to Many Related New kit type has been Opened')
    //    cy.wait(2000)
    //    //Assertion
    //    cy.contains("New Item created").should("be.visible");

    //    //Related New Form Elements Interaction
    //    //Name
    //    cy.get('[name="Name"]').type(this.KitItemData.Text);

    //    //Url
    //    cy.get('[name="Url"]').first().type(this.KitItemData.Url);

    //    //Related New Kit Type saved for One to many Relation Control
    //     cy.get(
    //      ".v-dialog__content:nth-child(1) .fill-height:nth-child(3) .v-btn__content:nth-child(1)"
    //    ).click({force:true});

    //    cy.log('Related New Kit item has been Close')
    //    cy.wait(5000)

    //    cy.log("Related New Kit Type has been saved");
    //    cy.get(
    //      ".v-dialog__content:nth-child(1) .navi-bar:nth-child(1) .inline-svg:nth-child(1)"
    //    ).click({force:true});

    //  cy.log('Related New Kit item has been Close')
    //    cy.wait(2000)

    //   //Stepper
    //   cy.contains("Stepper").scrollIntoView({ force: true });
    //   cy.wait(2000)
    //   cy.get(".v-stepper__step:nth-child(5) > .v-stepper__step__step").click({
    //     force: true,
    //   });

    //   cy.wait(2000)
    //   //UserSelector(Values coming form KitItemValues Json File)
    //   cy.get(".kit-control-component:nth-child(22) .inline-svg").click({
    //     force: true,
    //   });
    //   cy.wait(2000)
    //   cy.contains(this.KitItemData.UserSelectorName).click({ force: true });
    //   cy.wait(2000)

    //   //ContactSelector(Values coming form KitItemValues Json File)
    //   cy.get(".kit-control-component:nth-child(24) .inline-svg").click({
    //     force: true,
    //   });
    //   cy.wait(2000)
    //   cy.contains(this.KitItemData.ContactSelectorName).click({ force: true });
    //   cy.wait(2000)

    //   //OneToOne Relation
    //   cy.get('.mr-4 > .inline-svg > path').click({ force: true });
    //   cy.log('One to One Related New kit type has been Opened')
    //   cy.wait(2000)
    //   //Assertion
    //   cy.contains("New Item created").should("be.visible");

    //   //Related New Form Elements Interaction
    //   //Name
    //   cy.get('[name="Name"]').type(this.KitItemData.Text);

    //   //Url
    //   cy.get('[name="Url"]').first().type(this.KitItemData.Url);

    //   //Related New Kit Type saved for One TO One Relation Control
    //   cy.get('.v-dialog__content:nth-child(1) .fill-height:nth-child(3) .v-btn__content:nth-child(1)')
    //   .click({ force: true });

    //   cy.wait(5000)
    //   cy.log("Related New Kit Type has been saved for one to one Realtion");

    //  cy.get('#inspire > div:nth-child(1) > div > div > div > div:nth-child(2) > div.navi-bar.fill-height.d-flex.px-6.header-box-border.col.col-12 > div.fill-height.d-flex.col-md-7.col-lg-5.col-xl-8.col-4 > div.subheader--button-icon-wrapper.fill-height.d-flex.align-center.col > div > button')
    //   .click({ force: true });
    //   cy.wait(2000)

    //   cy.log('Related New Kit item has been Close for one to one Realtion')

    //   cy.wait(2000)
    //   //Icon
    //   cy.get(".v-btn--depressed > .v-btn__content > .inline-svg > path").click({
    //     force: true,
    //   });
    //   cy.wait(2000)
    //   cy.get(".thumb-container:nth-child(1) .selected-icon").click({
    //     force: true,
    //   });
    //   cy.wait(2000)
    //   cy.get(".button-pop-ups").click({ force: true });
    //   cy.wait(2000)

    //   //Inspection(Values coming form KitItemValues Json File)
    //   cy.contains(this.KitItemData.InspectionValue).scrollIntoView({force:true})
    //   cy.wait(3000)
    //   cy.contains(this.KitItemData.InspectionValue).click({ force: true });
    //   cy.wait(3000)
    //   //Assigning
    //   cy.get(".searchIcon > .inline-svg > path").click({ force: true });
    //   cy.wait(2000)
    //   cy.get(".list-item-search").click({ force: true });
    //   cy.wait(2000)
    //   cy.get(".button-pop-ups--size > .v-btn__content").click({ force: true });

    //   //Click on New Item Related New Kit Type for Square Card Relation Control

    //   cy.get('.kit-control-grid:nth-child(25) .ma-2:nth-child(2) > .v-btn__content')
    //   .click({force:true});

    //   cy.wait(5000)

    //   //Assertion
    //   cy.contains("New Item created").should("be.visible");

    //   //Name
    //   cy.get('[name="Name"]').type(this.KitItemData.Text);

    //   //Url
    //   cy.get('[name="url"]').type(this.KitItemData.Url);

    //   //Related New Kit Type saved for Square Card Relation Control

    //  cy.get('#inspire > div:nth-child(4) > div > div > div > div:nth-child(2) > div.navi-bar.fill-height.d-flex.px-6.header-box-border.col.col-12 > div.fill-height.d-flex.align-center.justify-end.px-4.col-md-5.col-lg-7.col-xl-4.col-8 > div.navi-bar-dropdown.fill-height.align-center.overflow-max-width.col-md-9.col-lg-8.col-10 > div > div > div.v-input__slot > div.v-select__slot > div.v-select__selections > button')
    //   // cy.get('.v-dialog__content:nth-child(2) .fill-height:nth-child(3) .v-btn__content:nth-child(1)')
    //   .click({force:true});

    //   cy.log("Related New Kit Type has been saved for Square Card'");
    //   cy.wait(5000)
    //   cy.get(
    //     ".v-dialog__content:nth-child(2) .navi-bar:nth-child(1) .inline-svg:nth-child(1)"
    //   ).click({force:true});
    //   cy.log('Related New Kit item has been Close for Square Card')

    // //save AkshatKitDemo Kit Type
    // cy.get(".v-select__selections .v-btn__content")
    // .click({ force: true });
    // cy.log(this.KitItemData.KitName3+"Kit Type has been Saved")
    // //close the Kit Item
    // cy.wait(5000)
    // //Close Kit type
    // cy.get(".subheader--button-icon-wrapper .inline-svg").click({
    //   force: true,
    // });

    // cy.log(this.KitItemData.KitName3+'Kit item has been Close')
  });
});
