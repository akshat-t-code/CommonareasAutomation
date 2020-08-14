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


    cy.fixture("KitTypeTestData/NewKitItemDataValues").then(function (
      KitDataEle
    ) {
      this.NewKitItemData = KitDataEle;
    });

    cy.fixture("KitBuilderTestData/KitBuilderDataTypes2").then(function (
        NewDataForElements
      ) {
        this.DataType2 = NewDataForElements;
      });

  });

  it("AutomationKit type", function () {
    //cy.wait(5000)
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    //debugger;
    //Click on To open Kit Type
    // KTP.SearchKitType(this.KitItemData.KitName4);
    // KTP.OpenKitType(this.KitItemData.KitName4);
    KTP.SearchKitType(this.KitTypeName.KitName2);
    KTP.OpenKitType(this.KitTypeName.KitName2);
    cy.wait(2000);
    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.log("New Item created and Kit Type has been Opened");
  });

  it("Element Interation", function () {
    cy.wait(2000);
    //Url
  
    cy.get("[name" + "=" + this.DataType2.Url + "]").last().type(this.NewKitItemData.Url);
    cy.wait(1000);

    //Text
    cy.get("[name" + "=" + this.DataType2.Text + "]").last().type(this.NewKitItemData.Text);
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
    cy.get('[name="Agent Phone Number"]').last().type(this.NewKitItemData.Telephone);
    //cy.get("[name" +"="+this.DataType2.Telephone+"]').last().type(this.NewKitItemData.Telephone);
   // cy.get("[name" + "=" + this.DataType2.Telephone + "]").last().type(this.NewKitItemData.Telephone);
    cy.wait(1000);

    //TextAera
    cy.get("[name" + "=" + this.DataType2.TextAera + "]").last().type(this.NewKitItemData.TextAera);
    cy.wait(1000);

    //Slider;

    // Currency;
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-currency.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-currency--right.ma-0.pa-0.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(this.NewKitItemData.Currency);

    //Measure

    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-measure.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-measure--left.ma-0.pa-0.pr-2.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(this.NewKitItemData.Measure);

    //Email;
    cy.get("[name" + "=" + this.DataType2.Email + "]").last().type(this.NewKitItemData.Email);
    cy.wait(1000)

    //Address
    cy.get(
      '[placeholder="Street address, bulding, company ... "][name="Address"]'
    ).type(this.NewKitItemData.Addressline1);
    //Address line
    cy.get('[name="Address line 2."]').type(this.NewKitItemData.Addressline2);

    //City
    cy.get('[placeholder="City"]').type(this.NewKitItemData.City);
    //State
    cy.get(
      "div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    ).click({ force: true });
    cy.contains(this.NewKitItemData.State).click({ force: true });

    cy.get('[placeholder="Zip/Postal Code"]').scrollIntoView({ force: true });
    cy.wait(1000);

    //ZipCode
    cy.get('[placeholder="Zip/Postal Code"]').type(this.NewKitItemData.ZipCode);
    cy.wait(1000);

    //Number
    cy.get("[name" + "=" + this.DataType2.Number + "]").last().type(this.NewKitItemData.Number);
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
      this.NewKitItemData.ReminderTitle
    );
    cy.wait(1000);
    //Reminder Type-->Click on DropDown
    cy.contains("arrow_drop_down").click({ force: true });

    //Reminder for Recurring
    cy.contains(this.NewKitItemData.ReminderTypeRecurring)
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

    //Repeats-->RepeatDaily Case In Recurring Type
    cy.get('[content-class="reminder-menu "]').click({ force: true });
    cy.wait(2000);
    cy.contains(this.NewKitItemData.RepeatDaily).click({ force: true });
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
    cy.contains(this.NewKitItemData.ChannelWebApp).click({ force: true });
    cy.contains(this.NewKitItemData.ChannelEmail).click({ force: true });
    cy.contains(this.NewKitItemData.ChannelMobileApp).click({ force: true });

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
    cy.contains(this.NewKitItemData.SelectListValue).click({ force: true });

    //RadioSelect
    cy.contains(this.NewKitItemData.RadioSelect).click({ force: true });

    //CheckboxSelect(Values coming form KitItemValues Json File)
    cy.contains(this.NewKitItemData.CheckboxSelectValue1).click({ force: true });
    cy.contains(this.NewKitItemData.CheckboxSelectValue2).click({ force: true });
    cy.contains(this.NewKitItemData.CheckboxSelectValue3).click({ force: true });

    cy.wait(5000);

    //Stepper
    cy.get("[name" + "=" + this.DataType2.StepperName + "]").scrollIntoView({ force: true });

    cy.contains(this.DataType2.StepperValue2).click({force:true})
    
    cy.wait(2000);
    //.v-stepper__step:nth-child(1/35/7/9)
    // cy.get(".v-stepper__step:nth-child(5) > .v-stepper__step__step").click({
    //   force: true,
    // });

    cy.wait(2000);
    //UserSelector(Values coming form KitItemValues Json File)
    //Click on to open UserSelector Pop up
    cy.get(".searchIcon").eq(0).click({ force: true });
    cy.wait(3000);
    cy.contains(this.NewKitItemData.UserSelectorName).click({ force: true });
    cy.wait(3000);

    //ContactSelector(Values coming form KitItemValues Json File)
    //Click on to open ContactSelector Pop up
    cy.get(".searchIcon").eq(1).click({ force: true });

    cy.wait(4000);
    cy.contains(this.NewKitItemData.ContactSelectorName).click({ force: true });
    cy.wait(4000);

   //Inspection
   cy.contains(this.NewKitItemData.InspectionName).scrollIntoView({
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
    cy.contains(this.NewKitItemData.LargeSmalliconSize).click({ force: true });
    cy.wait(2000);
    //IconLable
    cy.get('[placeholder="Label"]').type(this.NewKitItemData.IconLabel);

    //Inspection(Values coming form KitItemValues Json File)
    cy.contains(this.NewKitItemData.InspectionName).scrollIntoView({
      force: true,
    });
    cy.wait(3000);
    cy.contains(this.NewKitItemData.InspectionValue4).click({ force: true });
    cy.wait(3000);
    //Assigning
    //Click on to open Assigning Pop up-Also working
    //cy.get(".searchIcon > .inline-svg > path").last().click({ force: true });

    //Click on to open Assigning Pop up
    cy.get(".searchIcon").eq(2).click({ force: true });
    cy.wait(3000);
    //Click on to select the Assigning
    //cy.get(".list-item-search").first().click({ force: true });
    cy.contains(this.NewKitItemData.AssigningName).click({ force: true });
    cy.wait(3000);
    //Click on to save
    cy.get(".button-pop-ups--size > .v-btn__content").click({ force: true });

    

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
