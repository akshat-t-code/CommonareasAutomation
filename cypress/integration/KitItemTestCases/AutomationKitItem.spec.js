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
      KittypeName
    ) {
      this.KitTypeName = KittypeName;
    });

    cy.fixture("KitBuilderTestData/KitBuilderDataTypes").then(function (
      DataEleValues
    ) {
      this.KitData = DataEleValues;
    });

    cy.fixture("KitTypeTestData/KitItemDataValues2").then(function (
      KitDataEle
    ) {
      this.KitItemData2 = KitDataEle;
    });
  });

  it.only("AutomationKit type", function () {
    //cy.wait(5000)
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    cy.wait(3000)
    //debugger;
    //Click on To open Kit Type
    // KTP.SearchKitType(this.KitItemData.KitName4);
    // KTP.OpenKitType(this.KitItemData.KitName4);
    KTP.SearchKitType(this.KitTypeName.KitName);
    cy.wait(3000)
    //This is class to open searched kit type by clicking + iocn
    cy.get('.truncate-special').first().click({force:true})
    //KTP.OpenKitType(this.KitTypeName.KitName);
    cy.wait(2000);
    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.log("New Item created and Kit Type has been Opened");
  });

  it.only("Element Interation", function () {
    cy.wait(2000);
    //Url
    //cy.get('[name="Url"]').last().type(this.KitItemData.Url);
    //Working
    cy.get("[name" + "=" + this.KitData.Url + "]")
      .last()
      .type(this.KitItemData2.Url);
    cy.wait(1000);

    //Text
    cy.get('[name="Text"]').last().type(this.KitItemData2.Text);
    cy.wait(1000);

    //File
    cy.get(".link-icon--green > path").click({ force: true });
    cy.wait(3000);
    cy.get(".thumb-container:nth-child(5) .selected-icon").click({
      force: true,
    });
    cy.get(
      ".container-search > .pop-up--header > .pop-up--header--right > .button-pop-ups--size > .v-btn__content"
    ).click({ force: true });
    cy.wait(1000);

    //Telephone
    cy.get('[name="Telephone"]').last().type(this.KitItemData2.Telphone);
    cy.wait(1000);

    //TextAera
    cy.get('[name="TextAera"]').last().type(this.KitItemData2.TextAera);
    cy.wait(1000);

    //Slider;

    // Currency;
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-currency.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-currency--right.ma-0.pa-0.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(this.KitItemData2.Currency);

    //Measure

    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-measure.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-measure--left.ma-0.pa-0.pr-2.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(this.KitItemData2.Measure);

    //Email;
    cy.get('[name="Email"]').last().type(this.KitItemData2.Email);

    //Address
    cy.get(
      '[placeholder="Street address, bulding, company ... "][name="Address"]'
    ).type(this.KitItemData2.Addressline1);
    //Address line
    cy.get('[name="Address line 2."]').type(this.KitItemData2.Addressline2);

    //City
    cy.get('[placeholder="City"]').type(this.KitItemData2.City);
    //State
    cy.get(
      "div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    ).click({ force: true });
    cy.contains(this.KitItemData2.State).click({ force: true });

    cy.get('[placeholder="Zip/Postal Code"]').scrollIntoView({ force: true });
    cy.wait(1000);

    //ZipCode
    cy.get('[placeholder="Zip/Postal Code"]').type(this.KitItemData2.ZipCode);
    cy.wait(1000);

    //Country
    // cy.get(
    //   " div > div:nth-child(2) > div:nth-child(6) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    // ).click({ force: true });
    // cy.wait(2000)
    // cy.contains(this.KitItemData.Country).click({ force: true });

    
    cy.get('[placeholder="Add Time"][type="text"]')
      .scrollIntoView({ force: true });
    //Number
    cy.get('[name="Number"]').last().type(this.KitItemData2.Number);
    cy.wait(1000);

    //Time Data Element
    //Click on Time to appear time pop up
    cy.get('[placeholder="Add Time"][type="text"]').click({ force: true });
    cy.wait(1000);
    //Select hour value
    cy.xpath(
      "//div[contains(@class,'v-dialog v-dialog--active')]//span[5]"
    ).click({ force: true });
    cy.wait(1000);
    //Select Value of miniutes
    cy.xpath("//span[contains(text(),'30')]").first().click({ force: true });
    cy.wait(1000);
    //Click on PM
    cy.xpath("//div[contains(text(),'PM')]").click({ force: true });
    //Click on OK to save date
    cy.xpath(
      "//div[contains(@class,'v-dialog v-dialog--active')]//button[1]"
    ).click({ force: true });

    //Click on OK to save Time(also working)
    // cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });
    cy.wait(3000);

    //Date Data Element
    //Click on Date to appear Date pop up
    cy.get('[placeholder="Add Date"][type="text"]').click({ force: true });
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'31')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    //Click on OK to save Date
    cy.xpath("//span[contains(text(),'OK')]").first().click({ force: true });
    //Click on OK to save Date(also working)
    // cy.get(".dateActions > .btnBorder:nth-child(1) > .v-btn__content").click({
    //   force: true,
    // });
    cy.wait(2000);

    //Reminder
    //Click to open Reminder POPUP
    cy.wait(2000);
    cy.contains("SET REMINDER").click({ force: true });
    cy.log("Reminder has been Opened for Repeat Daily");
    cy.wait(2000);

    //Reminder Tittle
    cy.get('[items="Recurring,One-Time"]').type(
      this.KitItemData2.ReminderTitle
    );
    cy.wait(1000);
    //Reminder Type-->Click on DropDown
    cy.contains("arrow_drop_down").click({ force: true });

    //Reminder for Recurring
    cy.contains(this.KitItemData2.ReminderTypeRecurring)
      .first()
      .click({ force: true });

    //Reminder Start Date
    cy.contains("Reminder Date").click({ force: true });

    //Select Reminder Start Date
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
    cy.contains(this.KitItemData2.RepeatDaily).click({ force: true });
    cy.wait(3000);

    //Reminder Time
    //Click on to appear Time pop up
    cy.get(".reminder--time .v-text-field__slot input").click({ force: true });
    cy.wait(2000);
    //Select Time
    cy.xpath(
      "//span[@class='v-time-picker-clock__item']//span[contains(text(),'3')]"
    )
      .first()
      .click({ force: true });
    cy.wait(1000);
    cy.xpath("//span[contains(text(),'30')]").first().click({ force: true });
    //Click on PM
    cy.xpath("//div[contains(text(),'PM')]").first().click({ force: true });
    cy.wait(1000);
    //Click on Ok to save Time
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
    cy.contains(this.KitItemData2.ChannelWebApp).click({ force: true });
    cy.contains(this.KitItemData2.ChannelEmail).click({ force: true });
    cy.contains(this.KitItemData2.ChannelMobileApp).click({ force: true });

    //Save Reminder for -->RepeatDaily Case In Recurring Type
    cy.get(".ca-button-green:nth-child(2) > .v-btn__content").click({
      force: true,
    });

    cy.wait(2000);

    //Toggle
    cy.get(".sync-switch .v-input--selection-controls__ripple").click({
      force: true,
    });

    //Click on DropDown of SelectList
    cy.wait(3000);
    cy.get(
      "div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner"
    )
      .eq(4)
      .click({ force: true });
    cy.wait(2000);
    //SelectList Value(Values coming form KitItemValues Json File)
    cy.contains(this.KitItemData2.SelectListValue).click({ force: true });

    //RadioSelect
    cy.contains(this.KitItemData2.RadioSelect).click({ force: true });

    //CheckboxSelect(Values coming form KitItemValues Json File)
    cy.contains(this.KitItemData2.CheckboxSelectValue1).click({ force: true });
    cy.contains(this.KitItemData2.CheckboxSelectValue2).click({ force: true });
    cy.contains(this.KitItemData2.CheckboxSelectValue3).click({ force: true });
    cy.contains(this.KitItemData2.CheckboxSelectValue4).click({ force: true });

    cy.wait(5000);

    //One TO Many Realtion Control

    //Scrolling
    // cy.contains("NEW ITEM").first().scrollIntoView({ force: true });
    // //New Item Kit(Related New Kit Type)
    // cy.contains("NEW ITEM").first().click({ force: true });
    // cy.log("One to Many Related New kit type has been Opened");
    // cy.wait(2000);
    // //Assertion
    // cy.contains("New Item created").should("be.visible");
    // cy.wait(5000)

    /*

    //Related New Form Elements Interaction
    //Name
    cy.get('[name="Name"]').last().type(this.KitItemData.Text);

    //Url
    //cy.get('[name="Url"]').last().type(this.KitItemData.Url);

    //Related New Kit Type saved for One to many Relation Control

    cy.get(
      "div.navi-bar-dropdown.fill-height.align-center.overflow-max-width.col-md-9.col-lg-8.col-10 > div > div > div.v-input__slot > div.v-select__slot > div.v-select__selections > button"
    )
      .last()
      .click({ force: true });

    cy.log("Related New Kit item has been Close");
    cy.wait(5000);

    cy.log("Related New Kit Type has been saved");
    cy.get(
      " div.fill-height.d-flex.col-md-7.col-lg-5.col-xl-8.col-4 > div.subheader--button-icon-wrapper.fill-height.d-flex.align-center.col > div > button"
    )
      .last()
      .click({ force: true });

    cy.log("Related New Kit item has been Close");
    cy.wait(2000);

    */

    //Stepper
    cy.contains("Stepper").last().scrollIntoView({ force: true });
    cy.wait(2000);
    cy.get(".v-stepper__step:nth-child(5) > .v-stepper__step__step").click({
      force: true,
    });

    cy.wait(2000);
    //UserSelector(Values coming form KitItemValues Json File)
    //Click on to open UserSelector Pop up
    cy.get(".searchIcon").eq(0).click({ force: true });
    cy.wait(3000);
    cy.contains(this.KitItemData2.UserSelectorName).click({ force: true });
    cy.wait(3000);

    //ContactSelector(Values coming form KitItemValues Json File)
    //Click on to open ContactSelector Pop up-Also Working
    // cy.get(".kit-control-component:nth-child(24) .inline-svg").click({
    //   force: true,
    // });
    //Click on to open ContactSelector Pop up
    cy.get(".searchIcon").eq(1).click({ force: true });

    cy.wait(4000);
    cy.contains(this.KitItemData2.ContactSelectorName).click({ force: true });
    cy.wait(4000);

    //OneToOne Relation
    // cy.get(".mr-4 > .inline-svg > path").click({ force: true });
    // cy.log("One to One Related New kit type has been Opened");
    // cy.wait(2000);
    // //Assertion
    // cy.contains("New Item created").should("be.visible");
    // cy.wait(5000)

    /*

    //Related New Form Elements Interaction
    //Name
    cy.get('[name="Name"]').type(this.KitItemData.Text);

    //Url
    cy.get('[name="Url"]').first().type(this.KitItemData.Url);

    //Related New Kit Type saved for One TO One Relation Control
    cy.get(
      ".v-dialog__content:nth-child(1) .fill-height:nth-child(3) .v-btn__content:nth-child(1)"
    ).click({ force: true });

    cy.wait(5000);
    cy.log("Related New Kit Type has been saved for one to one Realtion");

    cy.get(
      "#inspire > div:nth-child(1) > div > div > div > div:nth-child(2) > div.navi-bar.fill-height.d-flex.px-6.header-box-border.col.col-12 > div.fill-height.d-flex.col-md-7.col-lg-5.col-xl-8.col-4 > div.subheader--button-icon-wrapper.fill-height.d-flex.align-center.col > div > button"
    ).click({ force: true });
    cy.wait(2000);

    cy.log("Related New Kit item has been Close for one to one Realtion");

    */
    
   cy.contains(this.KitItemData2.InspectionValue).scrollIntoView({
    force: true,
  });
    cy.wait(2000);
    //Icon
    cy.get(".searchIcon > .inline-svg > path")
      .last()
      .scrollIntoView({ force: true });
    cy.get(".v-btn--depressed > .v-btn__content > .inline-svg > path")
      .last()
      .click({
        force: true,
      });
    cy.wait(2000);
    //Click on Icon Tittle
    cy.get(".thumb-container:nth-child(2) .selected-icon").click({
      force: true,
    });
    cy.wait(2000);
    //Icon Save
    cy.get(".button-pop-ups").click({ force: true });
    cy.wait(2000);

    //IcozSize
    cy.get(
      "div.row.wrapper-kit-control.align-center > div > div.fill-height.border-right.col.col-4 > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    ).click({ force: true });
    cy.contains(this.KitItemData2.iconSize).click({ force: true });
    cy.wait(2000);
    //IconLable
    cy.get('[placeholder="Label"]').type(this.KitItemData2.IconLabel);

    //Inspection(Values coming form KitItemValues Json File)
    cy.contains(this.KitItemData2.InspectionValue).scrollIntoView({
      force: true,
    });
    cy.wait(3000);
    cy.contains(this.KitItemData2.InspectionValue).click({ force: true });
    cy.wait(3000);
    //Assigning
    //Click on to open Assigning Pop up-Also working
    //cy.get(".searchIcon > .inline-svg > path").last().click({ force: true });

    //Click on to open Assigning Pop up
    cy.get(".searchIcon").eq(2).click({ force: true });
    cy.wait(3000);
    //Click on to select the Assigning
    //cy.get(".list-item-search").first().click({ force: true });
    cy.contains(this.KitItemData2.AssigningName).click({ force: true });
    cy.wait(3000);
    //Click on to save
    cy.get(".button-pop-ups--size > .v-btn__content").click({ force: true });

    /*

    //Click on New Item Related New Kit Type for Square Card Relation Control
    cy.get(
      "div.kit-control-grid--header_buttons.d-flex.align-center.col-sm-9.col > button:nth-child(3) > span"
    )
      .last()
      .click({ force: true });

    cy.wait(5000);

    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.wait(5000);

    

    //Name
    cy.get('[name="Name"]').last().type(this.KitItemData.Text);

    //Url
    cy.get('[name="url"]').last().type(this.KitItemData.Url);

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
    )
      .first()
      .click({ force: true });
    cy.log("Related New Kit item has been Close for Square Card");

    */

    // //save Kit Type
    // cy.get(".v-select__selections .v-btn__content").click({ force: true });
    // cy.log(this.KitTypeName.KitName + "Kit Type has been Saved");
    // //close the Kit Item
    // cy.wait(5000);
    // //Close Kit type
    // cy.get(".subheader--button-icon-wrapper path")

    //   // cy.get(".subheader--button-icon-wrapper .inline-svg")
    //   .click({
    //     force: true,
    //   });

    // cy.log(this.KitTypeName.KitName + "Kit item has been Close");

    // cy.wait(5000);

    // const lp = new LoginPage();
    // cy.wait(5000);
    // lp.RefreshBtn();
    // cy.wait(5000);
    // cy.get(
    //   "#action_items_list > div.fill-height.col > div > div > div.fill-height > div:nth-child(1)"
    // ).click({ force: true });
  });
});
