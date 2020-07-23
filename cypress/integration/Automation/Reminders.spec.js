import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";

describe("Basic Test Case for Element interaction for common area DT", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    lp.visitServiceBuild();
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

  it.only("Reminders", function () {
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
     //Select date
     cy.get('tr:nth-child(5) > td:nth-child(5) .v-btn__content').click({ force: true });
     //Click on oK to save date
     cy.get('.btnBorder:nth-child(1) > .v-btn__content').click({ force: true });
     
    // //Repeats-->RepeatDaily Case In Recurring Type
     cy.get('[content-class="reminder-menu "]').click({ force: true });
     cy.wait(2000);
     cy.contains(this.KitItemData.RepeatDaily).click({ force: true });

    //Time
     cy.get('div.v-input.reminder--time.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot')
     .click({force:true});


    //  cy.get('.accent > span').click();
    //  cy.get('.v-time-picker-clock__item--active > span').click();
    //  cy.get('.btnBorder:nth-child(1) > .v-btn__content').click();

    //End Date
    cy.get('div.v-input.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot').last()
    .click({ force: true });

    // cy.contains("End Date").last().click({ force: true });
    // cy.wait(3000);
    // cy.get("tr:nth-child(3) > td:nth-child(3) .v-btn__content").click({
    //   force: true,
    // });
    // cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    cy.contains('Never').click({force:true});

    //Select Channels
     cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
     cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
     cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder for -->RepeatDaily Case In Recurring Type
     cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
       force: true,
     });

     */

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
   //Select date
   cy.get('tr:nth-child(5) > td:nth-child(5) .v-btn__content').click({ force: true });
   //Click on oK to save date
   cy.get('.btnBorder:nth-child(1) > .v-btn__content').click({ force: true });

   //Repeats-->Repeat Mon-Friday Case In Recurring Type
   cy.get('[content-class="reminder-menu "]').click({ force: true });
   cy.wait(2000);
   cy.contains(this.KitItemData.RepeatMonFriday).click({ force: true });

   //Time
   cy.get('div.v-input.reminder--time.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot')
   .click({force:true});
    

    //End Date
    // cy.contains("End Date").last().click({ force: true });
    // cy.get("tr:nth-child(3) > td:nth-child(3) .v-btn__content").click({
    //   force: true,
    // });
    // cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    cy.contains('Never').click({force:true});

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
    //Select date
    cy.get("tr:nth-child(5) > td:nth-child(5) .v-btn__content").click({
      force: true,
    });
    //Click on oK to save date
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
    cy.get(".v-input:nth-child(4) .v-input--selection-controls__ripple").click({
      force: true,
    });
    cy.wait(1000);

    // //Click on Friday
    // cy.get(".v-input:nth-child(6) .v-input--selection-controls__ripple").click({
    //   force: true,
    // });
    // cy.wait(2000);

    //Time
    cy.get(
      " div.v-input.px-2.reminder-text-field.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot"
    ).click({ force: true });

    //End Date
    cy.contains("End Date").last().click({ force: true });
    // cy.get("tr:nth-child(3) > td:nth-child(3) .v-btn__content").click({
    //   force: true,
    // });
    // cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    cy.contains("Never").click({ force: true });

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
   //Select date
   cy.get('tr:nth-child(5) > td:nth-child(5) .v-btn__content').click({ force: true });
   //Click on oK to save date
   cy.get('.btnBorder:nth-child(1) > .v-btn__content').click({ force: true });

    //Repeats-->Repeat Monthly - Day Case In Recurring Type
    cy.get('[content-class="reminder-menu "]').click({ force: true });
    cy.wait(2000);
    cy.contains(this.KitItemData.RepeatMonthlyDay).click({ force: true });

    //Select the Day of the month

    cy.get(".d-flex:nth-child(1) > .d-flex > .v-input .v-select__slot .v-icon")
    .click({ force: true });
    cy.wait(3000);
    cy.contains("7").click({ force: true });

    cy.wait(4000);
    cy.get(".v-input:nth-child(2) .v-select__slot .v-icon")
    .click({ force: true });
    cy.wait(3000);
    cy.contains("3").click({ force: true });

    //Time
    

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
    //Select date
    cy.get("tr:nth-child(5) > td:nth-child(5) .v-btn__content").click({
      force: true,
    });
    //Click on oK to save date
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //Repeats-->Repeat Monthly - Of Day Case In Recurring Type
    cy.get('[content-class="reminder-menu "]').click({ force: true });
    cy.wait(2000);
    cy.contains(this.KitItemData.RepeatMonthlyOfDay).click({ force: true });

    //Select Instance
    cy.get(
      ".d-flex:nth-child(1) > .v-input:nth-child(1) .v-select__slot .v-icon"
    ).click({ force: true });
    cy.wait(2000);
    //Chosee One Out of Five

    //cy.contains('First').click({ force: true });
    // cy.contains('Second').click({ force: true });
    cy.contains("Third").click({ force: true });
    // cy.contains('Fourth').click({ force: true });
    // cy.contains('Fifth').click({ force: true });
    cy.wait(2000);

    //Select Day
    cy.get(
      ".d-flex:nth-child(1) > .d-flex:nth-child(2) > .v-input .v-select__slot .v-icon"
    ).click({ force: true });

    cy.wait(2000);
    //Chosee One Out of Seven
    // cy.contains('Sunday').click({ force: true });
    // cy.contains('Monday').click({ force: true });
    cy.contains("Tuesday").click({ force: true });
    // cy.contains('Wednesday').click({ force: true });
    // cy.contains('Thursday').click({ force: true });
    // cy.contains('Friday').click({ force: true });
    // cy.contains('Saturday').click({ force: true });

    cy.wait(3000);

    //Select Month Number
    cy.get(".v-input:nth-child(2) .v-select__slot .v-icon").click({
      force: true,
    });
    cy.wait(2000);
    cy.contains(5).click({ force: true });

    //Time

    //End Date
    cy.contains("End Date").last().click({ force: true });
    // cy.get("tr:nth-child(3) > td:nth-child(3) .v-btn__content").click({
    //   force: true,
    // });
    // cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    cy.contains('Never').click({force:true});

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
    //Select date
    cy.get("tr:nth-child(5) > td:nth-child(5) .v-btn__content").click({
      force: true,
    });
    //Click on oK to save date
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //Repeats-->Repeat Annually - Date Case In Recurring Type
    cy.get('[content-class="reminder-menu "]').click({ force: true });
    cy.wait(2000);
    cy.contains(this.KitItemData.RepeatAnnuallyDate).click({ force: true });
    cy.wait(2000);

    //Click on DropDown To Select Month Name
    cy.get(
      ".d-flex:nth-child(1) > .d-flex > .v-input .v-select__slot .v-icon"
    ).click({ force: true });
    cy.wait(2000);
    //Select Month Name
    cy.contains("May").click({ force: true });
    cy.wait(2000);

    //Click on DropDown To Select Date
    cy.get(".d-flex:nth-child(1) > .v-input .v-select__slot .v-icon").click({
      force: true,
    });
    cy.wait(1000);

    //Choose Date Number
    cy.contains("12").click({ force: true });

    //Time

    //End Date
    cy.contains("End Date").last().click({ force: true });
    // cy.get("tr:nth-child(3) > td:nth-child(3) .v-btn__content").click({
    //   force: true,
    // });
    // cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    cy.contains("Never").click({ force: true });

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

    ///*

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
    //Select date
    cy.get("tr:nth-child(5) > td:nth-child(5) .v-btn__content").click({
      force: true,
    });
    //Click on oK to save date
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

    //End Date
    cy.contains("End Date").last().click({ force: true });
    // cy.get("tr:nth-child(3) > td:nth-child(3) .v-btn__content").click({
    //   force: true,
    // });
    // cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    cy.contains("Never").click({ force: true });

    //Select Channels
    cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
    cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
    cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder for -->Repeat Annually - Of Month Case In Recurring Type
    cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
      force: true,
    });

    // */
  });
});
