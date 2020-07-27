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

  it.only("AutomationKit type", function () {
    //cy.wait(5000)
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    //debugger;
    //Click on To open Kit Type
    KTP.SearchKitType(this.KitItemData.KitName2);
    KTP.OpenKitType(this.KitItemData.KitName2);
    cy.wait(2000);
    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.log("New Item created and Kit Type has been Opened");
  });

  it.only("Element Interation", function () {

    cy.wait(2000);

    //Url
    cy.get('[name="Url"]').last().type(this.KitItemData.Url);
    cy.wait(1000);

    //Text
    cy.get('[name="Text"]').last().type(this.KitItemData.Text);
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
    cy.get('[name="Telephone"]').last().type(this.KitItemData.Telphone);
    cy.wait(1000);

    //TextAera
    cy.get('[name="TextAera"]').last().type(this.KitItemData.TextAera);
    cy.wait(1000);

    //Slider;

    // Currency;
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-currency.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-currency--right.ma-0.pa-0.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(this.KitItemData.Currency);

    //Measure

    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-measure.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-measure--left.ma-0.pa-0.pr-2.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(this.KitItemData.Measure);

    //Email;
    cy.get('[name="Email"]').last().type(this.KitItemData.Email);

    //Address
    cy.get(
      '[placeholder="Street address, bulding, company ... "][name="Address"]'
    ).type(this.KitItemData.Addressline1);
    //Address line
    cy.get('[name="Address line 2."]').type(this.KitItemData.Addressline2);

    //City
    cy.get('[placeholder="City"]').type(this.KitItemData.City);
    //State
    cy.get(
      "div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    ).click({ force: true });
    cy.contains(this.KitItemData.State).click({ force: true });
    //ZipCode
    cy.get('[placeholder="Zip/Postal Code"]').type(this.KitItemData.ZipCode);
    cy.wait(1000);

    //Country
    // cy.get(
    //   " div > div:nth-child(2) > div:nth-child(6) > div > div > div.v-input__slot > div.v-select__slot > div > div"
    // ).click({ force: true });
    // cy.wait(2000)
    // cy.contains(this.KitItemData.Country).click({ force: true });

    //Number
    cy.get('[placeholder="Zip/Postal Code"]').scrollIntoView({ force: true });
    cy.get('[name="Number"]').last().type(this.KitItemData.Number);
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
    cy.wait(1000)

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
    cy.contains(this.KitItemData.SelectListValue).click({ force: true });

    //RadioSelect
    cy.contains(this.KitItemData.RadioSelect).click({ force: true });

    //CheckboxSelect(Values coming form KitItemValues Json File)
    cy.contains(this.KitItemData.CheckboxSelectValue1).click({ force: true });
    cy.contains(this.KitItemData.CheckboxSelectValue2).click({ force: true });
    cy.contains(this.KitItemData.CheckboxSelectValue3).click({ force: true });
    cy.contains(this.KitItemData.CheckboxSelectValue4).click({ force: true });

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
     cy.get(".kit-control-component:nth-child(21) .inline-svg")
    .click({
      force: true,
    });
    cy.wait(1000);
    cy.contains(this.KitItemData.UserSelectorName).click({ force: true });
    cy.wait(2000);

    //ContactSelector(Values coming form KitItemValues Json File)
    cy.get(".kit-control-component:nth-child(22) .inline-svg").click({
      force: true,
    });
    cy.wait(1000);
    cy.contains(this.KitItemData.ContactSelectorName).click({ force: true });
    cy.wait(2000);

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
    cy.contains(this.KitItemData.iconSize).click({ force: true });
    cy.wait(2000);
    //IconLable
    cy.get('[placeholder="Label"]').type(this.KitItemData.IconLabel);

    //Inspection(Values coming form KitItemValues Json File)
    cy.contains(this.KitItemData.InspectionValue).scrollIntoView({
      force: true,
    });
    cy.wait(3000);
    cy.contains(this.KitItemData.InspectionValue).click({ force: true });
    cy.wait(3000);
    //Assigning
    cy.get(".searchIcon > .inline-svg > path").last().click({ force: true });
    cy.wait(2000);
    cy.get(".list-item-search").click({ force: true });
    cy.wait(2000);
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

    //save AkshatKitDemo Kit Type
    cy.get(".v-select__selections .v-btn__content").click({ force: true });
    cy.log(this.KitItemData.KitName3 + "Kit Type has been Saved");
    //close the Kit Item
    cy.wait(5000);
    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });

    cy.log(this.KitItemData.KitName3 + "Kit item has been Close");

    cy.wait(5000);

    const lp = new LoginPage();
    cy.wait(5000);
    lp.RefreshBtn();
    cy.wait(5000);
    cy.get(
      "#action_items_list > div.fill-height.col > div > div > div.fill-height > div:nth-child(1)"
    ).click({ force: true });
  });
});
