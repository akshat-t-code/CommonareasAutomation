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

    // /*
    //Click to open Reminder POPUP
    cy.contains("SET REMINDER").click({ force: true });
    cy.log("Reminder Pop Up has been Opened for One time");
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

    //Select date
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'31')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    //Click on OK to save Date
    cy.xpath("//span[contains(text(),'Ok')]").first().click({ force: true });
    cy.log("Date has been selected for Reminder Start Date");

    //this lower code for select Reminder start date also working

    // cy.get('tr:nth-child(5) > td:nth-child(5) .v-btn__content').click({ force: true });
    // //Click on oK to save date
    // cy.get('.btnBorder:nth-child(1) > .v-btn__content').click({ force: true });

    //Reminder Time
    //Click on Reminder Time POP up
    cy.get(
      ".pop-up-reminder--content > div > div.row.d-flex > div:nth-child(2) > div > div.v-input.px-2.select--medium.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot input"
    ).click({ force: true });
    cy.wait(1000);
    //Add Time
    cy.xpath(
      "//span[@class='v-time-picker-clock__item']//span[contains(text(),'5')]"
    ).click({ force: true });
    cy.wait(1000);
    //cy.xpath("//span[contains(text(),'55')]").click({ force: true });
    cy.xpath(
      "//span[@class='v-time-picker-clock__item']//span[contains(text(),'55')]"
    ).click({ force: true });
    cy.wait(1000);
    //Click on PM
    cy.xpath("//div[contains(text(),'PM')]").click({ force: true });
    cy.wait(1000);
    //Click on Ok
    cy.xpath(
      "//div[@class='v-dialog v-dialog--active v-dialog--persistent']//button[1]"
    ).click({ force: true });
    cy.log("Time has been Selected for Reminder");
    cy.wait(2000);

    //Select Channels
    cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
    cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
    cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder
    // cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
    //   force: true,
    // });

    //  */

    //----------------------//Repeats-->Repeat Daily Case In Recurring Type------------------------------------------------------------

    /*

    //Click to open Reminder POPUP
    cy.wait(20000);
    cy.contains("SET REMINDER").click({ force: true });
    cy.log("Reminder has been Opened for Repeat Daily");
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
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'31')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    //Click on OK to save Date
    cy.xpath("//span[contains(text(),'Ok')]").first().click({ force: true });
    cy.log("Date has been selected for Reminder Start Date");

    //this lower code for select Reminder start date also working
    // cy.get("tr:nth-child(5) > td:nth-child(5) .v-btn__content").click({
    //   force: true,
    // });
    // //Click on oK to save date
    // cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //Repeats-->RepeatDaily Case In Recurring Type
    cy.get('[content-class="reminder-menu "]').click({ force: true });
    cy.wait(2000);
    cy.contains(this.KitItemData.RepeatDaily).click({ force: true });
    cy.wait(3000);

    //Reminder Time
    //Click on to appear Time pop up
    cy.get(".reminder--time .v-text-field__slot input").click({ force: true });
    cy.wait(2000);
    //Select Time
    cy.xpath(
      "//span[@class='v-time-picker-clock__item']//span[contains(text(),'3')]"
    ).click({ force: true });
    cy.wait(1000);
    cy.xpath("//span[contains(text(),'30')]").click({ force: true });
    //Click on Ok
    cy.xpath(
      "//div[@class='v-dialog v-dialog--active v-dialog--persistent']//button[1]"
    ).click({ force: true });
    cy.log("Time has been Selected for Reminder");
    cy.wait(2000);

    //Click on Reminder End Date
    cy.get(
      ".pop-up-reminder.v-card.v-sheet.theme--light > div.v-card__text.pop-up-reminder--content > div > div.pt-4.d-flex.col > div.d-flex.pt-1.col-sm-6.col-md-3.col > div.v-input.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot input"
    ).click({ force: true });
    cy.wait(1000);
    //Select Date
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'31')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    //Click on oK to save date
    cy.xpath("//span[contains(text(),'Ok')]").first().click({ force: true });
    cy.log("Date has been selected Reminder End Date");

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    //cy.contains("Never").click({ force: true });

    //Select Channels
    cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
    cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
    cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder for -->RepeatDaily Case In Recurring Type
    // cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
    //   force: true,
    // });

     */

    //----------------------//Repeats-->Repeat Mon-Friday Case In Recurring Type------------------------------------------------------------

    /*

    //Click to open Reminder POPUP
    cy.wait(20000);
    cy.contains("SET REMINDER").click({ force: true });
    cy.log("Reminder has been Opened for Mon-Friday");
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
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'31')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    //Click on OK to save Date
    cy.xpath("//span[contains(text(),'Ok')]").first().click({ force: true });
    cy.log("Date has been selected for Reminder Start Date");

    //this lower code for select Reminder start date also working

    // cy.get("tr:nth-child(5) > td:nth-child(5) .v-btn__content").click({
    //   force: true,
    // });
    // //Click on oK to save date
    // cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //Repeats-->Repeat Mon-Friday Case In Recurring Type
    cy.get('[content-class="reminder-menu "]').click({ force: true });
    cy.wait(2000);
    cy.contains(this.KitItemData.RepeatMonFriday).click({ force: true });

    //Reminder Time
    cy.get(".reminder--time .v-text-field__slot input").click({ force: true });
    cy.wait(1000);
    //Add Time
    cy.xpath(
      "//span[@class='v-time-picker-clock__item']//span[contains(text(),'3')]"
    ).click({ force: true });
    cy.wait(1000);
    cy.xpath("//span[contains(text(),'30')]").click({ force: true });
    //Click on Ok
    cy.xpath(
      "//div[@class='v-dialog v-dialog--active v-dialog--persistent']//button[1]"
    ).click({ force: true });
    cy.log("Time has been Selected for Reminder");

    //Click on appear Reminder End Date pop up
    cy.get(
      ".pop-up-reminder--content > div > div.pt-4.d-flex.col > div.d-flex.pt-1.col-sm-6.col-md-3.col > div.v-input.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot input"
    ).click({ force: true });
    //Select Date
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'31')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    //Click on oK to save date
    cy.xpath("//span[contains(text(),'Ok')]").first().click({ force: true });
    cy.log("Date has been selected for Reminder End Date");
    cy.wait(2000);

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    // cy.contains("Never").click({ force: true });

    //Select Channels
    cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
    cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
    cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder for -->RepeatDaily Case In Recurring Type
    // cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
    //   force: true,
    // });

     */

    //----------------------//Repeats-->Repeat Weekly Case In Recurring Type------------------------------------------------------------

    /*

    //Click to open Reminder POPUP
    cy.wait(20000);
    cy.contains("SET REMINDER").click({ force: true });
    cy.log("Reminder has been Opened for Weekly");
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
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'31')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    //Click on OK to save Date
    cy.xpath("//span[contains(text(),'Ok')]").first().click({ force: true });
    cy.log("Date has been selected for Reminder Start Date");

    //this lower code for select Reminder start date also working

    // cy.get("tr:nth-child(5) > td:nth-child(5) .v-btn__content").click({
    //   force: true,
    // });
    // //Click on oK to save date
    // cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

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

    //Reminder Time
    cy.get(
      ".pop-up-reminder--content > div > div:nth-child(5) > div:nth-child(2) > div.v-input.px-2.reminder-text-field.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot input"
    ).click({ force: true });
    cy.wait(1000);
    //Add Time
    cy.xpath(
      "//span[@class='v-time-picker-clock__item']//span[contains(text(),'3')]"
    ).click({ force: true });
    cy.wait(1000);
    cy.xpath("//span[contains(text(),'30')]").click({ force: true });
    //Click on Ok
    cy.xpath(
      "//div[@class='v-dialog v-dialog--active v-dialog--persistent']//button[1]"
    ).click({ force: true });
    cy.log("Time has been Selected for Reminder");
    cy.wait(2000);

    //Reminder End Date
    cy.get(
      ".pop-up-reminder--content > div > div.pt-4.d-flex.col > div.d-flex.pt-1.col-sm-6.col-md-3.col > div.v-input.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot input"
    ).click({ force: true });
    //Select Date
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'31')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    cy.xpath("//span[contains(text(),'Ok')]").first().click({ force: true });
    cy.log("Date has been selected Reminder End Date");
    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    //cy.contains("Never").click({ force: true });

    //Select Channels
    cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
    cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
    cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder for -->Repeat Weekly Case In Recurring Type
    // cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
    //   force: true,
    // });

    */

    //----------------------//Repeats-->Repeat Monthly - Day Case In Recurring Type------------------------------------------------------------

    /*
    //Click to open Reminder POPUP
    cy.wait(20000);
    cy.contains("SET REMINDER").click({ force: true });
    cy.log("Reminder has been Opened for Monthly - Day");
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
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'31')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    //Click on OK to save Date
    cy.xpath("//span[contains(text(),'Ok')]").first().click({ force: true });
    cy.log("Date has been selected for Reminder Start Date");

    //this lower code for select Reminder start date also working

    // cy.get("tr:nth-child(5) > td:nth-child(5) .v-btn__content").click({
    //   force: true,
    // });
    // //Click on oK to save date
    // cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

    //Repeats-->Repeat Monthly - Day Case In Recurring Type
    cy.get('[content-class="reminder-menu "]').click({ force: true });
    cy.wait(2000);
    cy.contains(this.KitItemData.RepeatMonthlyDay).click({ force: true });

    //Select the Day of the month

    cy.get(
      ".d-flex:nth-child(1) > .d-flex > .v-input .v-select__slot .v-icon"
    ).click({ force: true });
    cy.wait(3000);
    cy.contains("7").click({ force: true });

    cy.wait(4000);
    cy.get(".v-input:nth-child(2) .v-select__slot .v-icon").click({
      force: true,
    });
    cy.wait(3000);
    cy.contains("3").click({ force: true });

    //Reminder Time
    cy.get(
      ".pop-up-reminder--content > div > div:nth-child(5) > div.d-flex.col-sm-6.col-md-3.col > div.v-input.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot input"
    ).click({ force: true });
    //Add Time
    cy.wait(1000);
    cy.xpath(
      "//span[@class='v-time-picker-clock__item']//span[contains(text(),'3')]"
    ).click({ force: true });
    cy.wait(1000);
    cy.xpath("//span[contains(text(),'30')]").click({ force: true });
    //Click on Ok
    cy.xpath(
      "//div[@class='v-dialog v-dialog--active v-dialog--persistent']//button[1]"
    ).click({ force: true });
    cy.log("Time has been Selected for Reminder");
    cy.wait(2000);

    //Reminder End Date
    cy.get(
      ".pop-up-reminder--content > div > div.pt-4.d-flex.col > div.d-flex.pt-1.col-sm-6.col-md-3.col > div.v-input.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot input"
    ).click({ force: true });

    //Select Date
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'31')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    cy.xpath("//span[contains(text(),'Ok')]").first().click({ force: true });
    cy.log("Date has been selected Reminder End Date");

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    // cy.contains("Never").click({ force: true });

    //Select Channels
    cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
    cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
    cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder for -->Repeat Monthly - Day Case In Recurring Type
    // cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
    //   force: true,
    // });

    */

    //----------------------//Repeats-->Repeat Monthly - Of Day Case In Recurring Type------------------------------------------------------------

    /*

    //Click to open Reminder POPUP
    cy.wait(20000);
    cy.contains("SET REMINDER").click({ force: true });
    cy.log("Reminder has been Opened for Monthly - Of Day ");
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
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'31')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    cy.xpath("//span[contains(text(),'Ok')]").first().click({ force: true });
    cy.log("Date has been selected for Reminder Start Date");

    //this lower code for select Reminder start date also working

    // cy.get("tr:nth-child(5) > td:nth-child(5) .v-btn__content").click({
    //   force: true,
    // });
    // //Click on oK to save date
    // cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

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

    //Reminder Time
    cy.get(
      ".pop-up-reminder--content > div > div:nth-child(5) > div:nth-child(2) > div.d-flex.month_o.col-sm-12.col-md-8.col > div > div.v-input.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot input"
    ).click({ force: true });
    cy.wait(1000);
    //Add Time
    cy.xpath(
      "//span[@class='v-time-picker-clock__item']//span[contains(text(),'3')]"
    ).click({ force: true });
    cy.wait(1000);
    cy.xpath("//span[contains(text(),'30')]").click({ force: true });
    //Click on Ok
    cy.xpath(
      "//div[@class='v-dialog v-dialog--active v-dialog--persistent']//button[1]"
    ).click({ force: true });
    cy.log("Time has been Selected for Reminder");
    cy.wait(2000);

    //Reminder End Date
    cy.get(
      ".pop-up-reminder--content > div > div.pt-4.d-flex.col > div.d-flex.pt-1.col-sm-6.col-md-3.col > div.v-input.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot input"
    ).click({ force: true });
    //Select Date
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'31')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    cy.xpath("//span[contains(text(),'Ok')]").first().click({ force: true });
    cy.log("Date has been selected for Reminder End Date");

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    //cy.contains("Never").click({ force: true });

    //Select Channels
    cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
    cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
    cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder for -->Repeat Monthly - Of Day Case In Recurring Type
    // cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
    //   force: true,
    // });

    */

    //----------------------//Repeats-->Repeat Annually - Date Case In Recurring Type------------------------------------------------------------

    /*
    //Click to open Reminder POPUP
    cy.wait(20000);
    cy.contains("SET REMINDER").click({ force: true });
    cy.log("Reminder has been Opened Annually - Date");
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
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'31')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    cy.xpath("//span[contains(text(),'Ok')]").first().click({ force: true });
    cy.log("Date has been selected for Reminder Start Date");

    //this lower code for select Reminder start date also working

    // cy.get("tr:nth-child(5) > td:nth-child(5) .v-btn__content").click({
    //   force: true,
    // });
    // //Click on oK to save date
    // cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

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

    // //Reminder Time
    cy.get(
      ".pop-up-reminder--content > div > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div.v-input.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot input"
    ).click({ force: true });
    cy.wait(1000);
    //Add Time
    cy.xpath(
      "//span[@class='v-time-picker-clock__item']//span[contains(text(),'3')]"
    ).click({ force: true });
    cy.wait(1000);
    cy.xpath("//span[contains(text(),'30')]").click({ force: true });
    //Click on Ok
    cy.xpath(
      "//div[@class='v-dialog v-dialog--active v-dialog--persistent']//button[1]"
    ).click({ force: true });
    cy.log("Time has been Selected for Reminder");
    cy.wait(2000);

    //Reminder End Date
    cy.get(
      ".pop-up-reminder--content > div > div.pt-4.d-flex.col > div.d-flex.pt-1.col-sm-6.col-md-3.col > div.v-input.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot input"
    ).click({ force: true });
    //Select Date
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'31')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    cy.xpath("//span[contains(text(),'Ok')]").first().click({ force: true });
    cy.log("Date has been selected for Reminder End Date");

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    // cy.contains("Never").click({ force: true });

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
    cy.wait(20000);
    cy.contains("SET REMINDER").click({ force: true });
    cy.log("Reminder has been Opened for Annually - Of Month ");
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
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'31')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    cy.xpath("//span[contains(text(),'Ok')]").first().click({ force: true });
    cy.log("Date has been selected for Reminder Start Date");

    //this lower code for select Reminder start date also working

    // cy.get("tr:nth-child(5) > td:nth-child(5) .v-btn__content").click({
    //   force: true,
    // });
    // //Click on oK to save date
    // cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });

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

    // Reminder Time
    cy.get(
      ".pop-up-reminder--content > div > div:nth-child(5) > div.d-flex.align-center.col-sm-6.col-md-2.col > div.v-input.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot input"
    ).click({ force: true });
    cy.wait(1000);
    //Add Time
    cy.xpath(
      "//span[@class='v-time-picker-clock__item']//span[contains(text(),'3')]"
    ).click({ force: true });
    cy.wait(1000);
    cy.xpath("//span[contains(text(),'30')]").click({ force: true });
    //Click on Ok
    cy.xpath(
      "//div[@class='v-dialog v-dialog--active v-dialog--persistent']//button[1]"
    ).click({ force: true });
    cy.log("Time has been Selected for Reminder");
    cy.wait(2000);

    //Reminder End Date
    cy.get(
      ".pop-up-reminder--content > div > div.pt-4.d-flex.col > div.d-flex.pt-1.col-sm-6.col-md-3.col > div.v-input.px-2.v-input--is-readonly.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined > div > div.v-input__slot > div.v-text-field__slot input"
    ).click({ force: true });

    //Select Date
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'31')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    cy.xpath("//span[contains(text(),'Ok')]").first().click({ force: true });
    cy.log("Date has been selected for Reminder End Date");

    //---------OR----------------------------

    cy.wait(3000);
    //Click or Never
    //cy.contains("Never").click({ force: true });

    //Select Channels
    cy.contains(this.KitItemData.ChannelWebApp).click({ force: true });
    cy.contains(this.KitItemData.ChannelEmail).click({ force: true });
    cy.contains(this.KitItemData.ChannelMobileApp).click({ force: true });

    //Save Reminder for -->Repeat Annually - Of Month Case In Recurring Type
    // cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
    //   force: true,
    // });

    */
  });
});
