import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";
import SanityLoginPage from "../PageObject/SanityLoginPage";

describe("New kit item complete creation test case", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    const slp = new SanityLoginPage();
   //slp.visitCityComTest();
    cy.visit("https://nvd.ca-test.com/Public/Login?ReturnUrl=%2F");
    //cy.visit("https://tm.commonareas.io/Public/Login?ReturnUrl=%2F");

    //Handling Alert
    cy.on("window:confirm", () => {
      cy.log("Alert has been Handled");
    });

    //Login Assertions
    cy.contains(" Log In ").should("be.visible");
     //Enter credentials
    lp.EnterEmail("propertymanagement@commonareas.work.dev");
    //lp.EnterEmail("citycom@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.log("User has been Logged In into the application");

    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.wait(10000);
  });

  this.beforeEach("KitType Data", function () {
    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.fixture("KitTypeTestData/NewKitItemDataValues").then(function (
      KitDataEle
    ) {
      this.NewKitItemData = KitDataEle;
    });

    // cy.fixture("SanityPackTestData(Prod)/NewKitItemDataValue(Prod)").then(
    //   function (KitDataEle) {
    //     this.NewKitItemData = KitDataEle;
    //   }
    // );

    cy.fixture("SanityPackTestData/SectionEleDataValues").then(function (
      SectionDataEle
    ) {
      this.SectionEleData = SectionDataEle;
    });

    // cy.fixture("SanityPackTestData(Prod)/SectionEleDataValues(Prod)").then(
    //   function (SectionDataEle) {
    //     this.SectionEleData = SectionDataEle;
    //   }
    // );

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType2 = NewDataForElements;
    });

    cy.fixture(
      "VerificationTestCasesData/SectionKitBuilderDataTypes2"
    ).then(function (SectionDataForElements) {
      this.SectionDataType = SectionDataForElements;
    });

    // cy.fixture(
    //   "SanityPackTestData(Prod)/SectionKitBuilderDataTypes2(Prod)"
    // ).then(function (SectionDataForElements) {
    //   this.SectionDataType = SectionDataForElements;
    // });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (
      KitTypeFormViewsNames
    ) {
      this.ViewName = KitTypeFormViewsNames;
    });

    
  });

  it.only("Navigating to created Kit type ", function () {
    cy.wait(10000);
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    //cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    //debugger;
    //Click on To open Kit Type
    KTP.SearchKitType(this.SectionEleData.SectionKitName);
    cy.wait(3000);
    //This is class to open searched kit type by clicking + iocn
    cy.get(".truncate-special").first().click({ force: true });
    cy.wait(3000);
    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.log("New Item created and Kit Type has been Opened");
  });

  it.only("Create New Kit Item with all the fields", function () {
    const lp = new LoginPage();
    cy.wait(2000);

    //save Kit Item for empty form
    cy.get(".v-select__selections .v-btn__content").click({ force: true });
    //kit item Save Assertion for no data
    cy.contains(
      "Nothing to save for " + this.SectionEleData.SectionKitName
    ).should("be.visible");
    cy.wait(3000);
    cy.log("With No data new kit item saved successfully ");
    //Url
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .last()
      .type(this.NewKitItemData.Url);
    cy.wait(1000);

    //Text
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .last()
      .type(this.NewKitItemData.Text);
    cy.wait(1000);

    //File
    cy.get(".link-icon--green > path").first().click({ force: true });
    cy.wait(3000);
    //give file name to select
    cy.contains(this.NewKitItemData.NewFormLibFileName).click({ force: true });
    // cy.get(".thumb-container:nth-child(5) .selected-icon").click({
    //   force: true,
    // });
    //Click on save file
    cy.wait(2000);
    cy.get(
      ".container-search > .pop-up--header > .pop-up--header--right > .button-pop-ups--size > .v-btn__content"
    ).click({ force: true });
    cy.contains("File saved").should("be.visible");
    cy.log("File Saved");
    cy.wait(1000);

    //Telephone
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .last()
      .type(this.NewKitItemData.Telephone);
    cy.wait(1000);

    //TextAera
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .last()
      .type(this.NewKitItemData.TextAera);
    cy.wait(3000);

    //Slider;
    //Firing Alert pop for manual action
    cy.log("User need to do something").then(() => {
      alert("Set Slider value by clicking slider Bar");
    });
    cy.log(
      "Firing Alert pop for manual action to Set Slider value by clicking slider Bar"
    );
    cy.wait(10000);

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
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .last()
      .type(this.NewKitItemData.Email);
    cy.wait(1000);

    cy.get(
      '[placeholder="Street address, building, company ... "]'
    ).first().scrollIntoView({force:true})

    //Address
    cy.get(
      '[placeholder="Street address, building, company ... "]'
    )
      .first()
      .type(this.NewKitItemData.Addressline1);
    //Address line
    cy.get('[name="Address line 2."]')
      .first()
      .type(this.NewKitItemData.Addressline2);

    cy.get('[placeholder="City"]').first().scrollIntoView({ force: true });
    cy.wait(1000);

    //City
    cy.get('[placeholder="City"]').first().type(this.NewKitItemData.City);
    //State
    cy.get(
      "div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    )
      .first()
      .click({ force: true });
    cy.contains(this.NewKitItemData.State).click({ force: true });

    cy.get('[placeholder="Zip/Postal Code"]')
      .first()
      .scrollIntoView({ force: true });
    cy.wait(1000);

    //ZipCode
    cy.get('[placeholder="Zip/Postal Code"]')
      .first()
      .type(this.NewKitItemData.ZipCode);
    cy.wait(1000);

    //Number
    cy.get("[name" + "=" + this.DataType2.Number + "]")
      .last()
      .type(this.NewKitItemData.Number);
    cy.wait(3000);

    //Time Data Element
    //Click on Time to appear time pop up
    cy.get('[placeholder="Add Time"][type="text"]')
      .first()
      .click({ force: true });
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

    // //Date Data Element
    // //Click on Date to appear Date pop up
    // cy.get(
    //   "div.v-input.no-bottom.date-picker-text-field.date-picker-text-field-direct.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder > div > div.v-input__slot > div.v-input__prepend-inner > i"
    // )
    //   .first()
    //   .click({ force: true });
    //   cy.wait(3000)
    // //Select Date
    // cy.xpath("//div[@class='v-btn__content'][contains(text(),'30')]")
    //   .first()
    //   .click({ force: true });
    // cy.wait(2000);
    // //Click on OK to save Date
    // cy.xpath("//span[contains(text(),'OK')]").first().click({ force: true });
    // cy.wait(2000);

    //Toggle
    cy.get(".sync-switch .v-input--selection-controls__ripple").first().click({
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
    cy.log("SelectList Value has been set.");

    //RadioSelect
    cy.contains(this.NewKitItemData.RadioSelectValue).click({ force: true });
    cy.log("RadioSelect Value has been set.");

    //CheckboxSelect(Values coming form KitItemValues Json File)
    cy.contains(this.NewKitItemData.CheckboxSelectValue1).click({
      force: true,
    });
    cy.contains(this.NewKitItemData.CheckboxSelectValue2).click({
      force: true,
    });
    cy.contains(this.NewKitItemData.CheckboxSelectValue3).click({
      force: true,
    });
    cy.log("Checkbox Values has been set.");
    cy.wait(2000);

    cy.wait(5000);
    cy.get(".searchIcon").eq(1).scrollIntoView({ force: true });

    //Stepper
    //getting value form different json file
    cy.contains(this.NewKitItemData.StepperValue4).click({ force: true });
    cy.log("Stepper Value has been set.");

    cy.wait(2000);
    //.v-stepper__step:nth-child(1/3/5/7/9)
    // cy.get(".v-stepper__step:nth-child(5) > .v-stepper__step__step").click({
    //   force: true,
    // });

    cy.wait(2000);
    //UserSelector(Values coming form KitItemValues Json File)
    //Click on to open UserSelector Pop up
    cy.get(".searchIcon").eq(0).click({ force: true });
    cy.wait(3000);

    cy.contains(this.NewKitItemData.UserSelectorName).click({ force: true });
    cy.log("UserSelect added");
    cy.wait(3000);

    //ContactSelector(Values coming form KitItemValues Json File)
    //Click on to open ContactSelector Pop up
    cy.get(".searchIcon").eq(1).click({ force: true });

    cy.wait(4000);
    cy.contains(this.NewKitItemData.ContactSelectorName).click({ force: true });
    cy.log("ContactSelecto added");
    cy.wait(4000);

    //getting value form different json file
    cy.wait(2000);
    //Icon
    //Click on + icon of ICON Element
    cy.get(".v-btn--depressed > .v-btn__content > .inline-svg > path")
      .eq(0)
      .click({
        force: true,
      });
    cy.wait(2000);
    //Click on Icon Tittle and  select Icon logo
    //Give numeric no from 1 in child(1,2,3...)
    cy.get(".thumb-container:nth-child(1) .selected-icon").click({
      force: true,
    });
    cy.wait(2000);
    //Icon Save
    cy.get(".button-pop-ups").first().click({ force: true });
    cy.wait(2000);

    //IcozSize
    cy.get(
      "div.row.wrapper-kit-control.align-center > div > div.fill-height.border-right.col.col-4 > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    )
      .first()
      .click({ force: true });
    cy.contains(this.NewKitItemData.LargeiconSize).click({ force: true });
    cy.wait(2000);
    //IconLable
    cy.get('[placeholder="Label"]').first().type(this.NewKitItemData.IconLabel);

    //Inspection(Values coming form KitItemValues Json File)
    //Inspection
    cy.contains(this.DataType2.Inspection).scrollIntoView({
      force: true,
    });

    cy.wait(3000);
    //child 1 for 1st value &&&& child 2 for 2nd value-child 3 for 3rd value......
    //"These are the index value of div child":"use according to select inspection value",
    cy.get(
      "div.v-slide-group__wrapper > div > span:nth-child(" +
        this.NewKitItemData.InspectionValue2 +
        ") > span"
    )
      .first()
      .click({ force: true });

    cy.wait(3000);
    //Assigning
    //Click on to open Assigning Pop up-Also working
    //cy.get(".searchIcon > .inline-svg > path").last().click({ force: true });

    //Click on to open Assigning Pop up
    cy.get(".searchIcon").eq(2).click({ force: true });
    cy.wait(7000);
    //Click on to select the Assigning
    //cy.get(".list-item-search").first().click({ force: true });
    cy.contains(this.NewKitItemData.AssigningName).click({ force: true });
    cy.wait(3000);
    //Click on to save
    cy.get(".button-pop-ups--size > .v-btn__content").click({ force: true });
    //Assigning creation assertion
    cy.contains("Item shared").should("be.visible");
    cy.log("Assigning added");
    cy.wait(5000);

    //save Kit Item
    cy.get(".v-select__selections .v-btn__content").click({ force: true });
    cy.contains(this.SectionEleData.SectionKitName + " has been saved").should(
      "be.visible"
    );
    cy.log(this.SectionEleData.SectionKitName + "Kit Type has been Saved");
  });

  it.only("Section Elements Configuration", function () {
    const lp = new LoginPage();
    cy.wait(2000);

    //Url
    cy.get("[name" + "=" + this.SectionDataType.Url2 + "]")
      .last()
      .type(this.SectionEleData.Url);
    cy.wait(1000);

    //Text
    cy.get("[name" + "=" + this.SectionDataType.Text2 + "]")
      .last()
      .type(this.SectionEleData.Text);
    cy.wait(1000);

    //File
    cy.get(".link-icon--green > path").last().click({ force: true });
    cy.wait(3000);
    //give file name to select
    cy.contains(this.SectionEleData.File).click({ force: true });
    // cy.get(".thumb-container:nth-child(5) .selected-icon").click({
    //   force: true,
    // });
    //Click on save file
    cy.wait(2000);
    cy.get(
      ".container-search > .pop-up--header > .pop-up--header--right > .button-pop-ups--size > .v-btn__content"
    ).click({ force: true });
    cy.contains("File saved").should("be.visible");
    cy.log("File Saved");
    cy.wait(1000);

    //Telephone
    cy.get("[name" + "=" + this.SectionDataType.Telephone2 + "]")
      .last()
      .type(this.SectionEleData.Telephone);
    cy.wait(1000);

    //TextAera
    cy.get("[name" + "=" + this.SectionDataType.TextAera2 + "]")
      .last()
      .type(this.SectionEleData.TextAera);
    cy.wait(3000);

    //Slider;
    //Firing Alert pop for manual action
    cy.log("User need to do something").then(() => {
      alert("Set Slider value by clicking slider Bar");
    });
    cy.log(
      "Firing Alert pop for manual action to Set Slider value by clicking slider Bar"
    );
    cy.wait(10000);

    // Currency;
    cy.get(
      "  div.kit-control-section.mb-3.v-item-group.theme--light.v-expansion-panels div.v-expansion-panel.v-expansion-panel--active.v-item--active div.v-expansion-panel-content div.v-expansion-panel-content__wrap div.v-card.v-sheet.theme--light div.v-card__text div.row div.kit-control-component.kit-control-currency.px-3.col.col-sm-12.col-md-6.mb-4.px-3.col-sm-12.col-md-6.mb-4.px-3:nth-child(7) div.row div.kit-control-currency--right.ma-0.pa-0.col div.v-input.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined div.v-input__control div.v-input__slot > div.v-text-field__slot:nth-child(2)"
    )
      .click({ force: true })
      .type(this.SectionEleData.Currency);

    //Measure

    cy.get(
      "div.kit-control-component.kit-control-measure.px-3.col.col-sm-12.col-md-6.mb-4.px-3.col-sm-12.col-md-6.mb-4.px-3:nth-child(8) div.row div.kit-control-measure--left.ma-0.pa-0.pr-2.col div.v-input.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined div.v-input__control div.v-input__slot > div.v-text-field__slot:nth-child(2)"
    )
      .last()
      .click({ force: true })
      .type(this.SectionEleData.Measure);

    //Email;
    cy.get("[name" + "=" + this.SectionDataType.Email2 + "]")
      .last()
      .type(this.SectionEleData.Email);
    cy.wait(1000);

    cy.get(
      '[placeholder="Street address, building, company ... "]'
    ).last().scrollIntoView({force:true})
    cy.wait(3000)

    //Address
    cy.get(
      '[placeholder="Street address, building, company ... "]'
    )
      .last()
      .type(this.SectionEleData.Addressline1);
    //Address line
    cy.get('[name="Address line 2."]')
      .last()
      .type(this.SectionEleData.Addressline2);

    cy.get('[placeholder="City"]').last().scrollIntoView({ force: true });
    cy.wait(1000);

    //City
    cy.get('[placeholder="City"]').last().type(this.SectionEleData.City);
    //State
    cy.get(
      "div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    )
      .last()
      .click({ force: true });
    cy.contains(this.SectionEleData.State).click({ force: true });

    cy.get('[placeholder="Zip/Postal Code"]')
      .last()
      .scrollIntoView({ force: true });
    cy.wait(1000);

    //ZipCode
    cy.get('[placeholder="Zip/Postal Code"]')
      .last()
      .type(this.SectionEleData.ZipCode);
    cy.wait(1000);

    //Number
    cy.get("[name" + "=" + this.SectionDataType.Number2 + "]")
      .last()
      .type(this.SectionEleData.Number);
    cy.wait(3000);

    //Time Data Element
    //Click on Time to appear time pop up
    cy.get('[placeholder="Add Time"][type="text"]')
      .eq(1)
      .click({ force: true });
    cy.wait(1000);
    //Select hour value
    cy.xpath(
      "//div[contains(@class,'v-dialog v-dialog--active')]//span[8]"
    ).click({ force: true });
    cy.wait(1000);
    //Select Value of miniutes
    cy.xpath("//span[contains(text(),'30')]").first().click({ force: true });
    cy.wait(1000);
    //Click on PM
    cy.xpath("//div[contains(text(),'PM')]").first().click({ force: true });
    //Click on OK to save date
    cy.xpath(
      "//div[contains(@class,'v-dialog v-dialog--active')]//button[1]"
    ).click({ force: true });

    //Date Data Element
    //Click on Date to appear Date pop up
    cy.get(
      "div.v-input.no-bottom.date-picker-text-field.date-picker-text-field-direct.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder > div > div.v-input__slot > div.v-input__prepend-inner > i"
    ).last().click({ force: true });
    cy.wait(3000)
    //Select Date
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'25')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    //Click on OK to save Date
    cy.xpath("//span[contains(text(),'OK')]").first().click({ force: true });
    cy.wait(2000);

    //Toggle
    cy.get(".sync-switch .v-input--selection-controls__ripple").last().click({
      force: true,
    });

    //Click on DropDown of SelectList
    cy.wait(3000);
    cy.get(
      "div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner"
    )
      .eq(14)
      .click({ force: true });
    cy.wait(2000);
    //SelectList Value(Values coming form KitItemValues Json File)
    cy.contains(this.SectionEleData.SelectListValue).click({ force: true });
    cy.log("SelectList Value has been set.");

    //RadioSelect
    cy.contains(this.SectionEleData.RadioSelectValue).click({ force: true });
    cy.log("RadioSelect Value has been set.");

    //CheckboxSelect(Values coming form KitItemValues Json File)
    cy.contains(this.SectionEleData.CheckboxSelectValue1).click({
      force: true,
    });
    cy.contains(this.SectionEleData.CheckboxSelectValue2).click({
      force: true,
    });
    cy.contains(this.SectionEleData.CheckboxSelectValue3).click({
      force: true,
    });
    cy.log("Checkbox Values has been set.");
    cy.wait(4000);

    ////////////////////////////////////////////////////////////////////////////////////////

    //Link One to many Kit item
    //Click on New Item for one to Many Related Control
    cy.get(".ca-item").eq(0).scrollIntoView({ force: true });
    cy.wait(3000);

    //Clcik on link Item
    cy.get(".ca-item").eq(0).click({ force: true });
    cy.wait(3000);
    //Selct the to be linked kit item
    cy.get(".thumb-selected-icon").eq(0).click();
    cy.get(".thumb-selected-icon").eq(1).click();
    cy.wait(2000);
    //Click on select btn
    cy.get(".button-pop-ups > .v-btn__content").first().click({ force: true });

    cy.contains(
      "Relation on " +
        this.SectionDataType.OneToManyRelation +
        " for " +
        this.SectionEleData.SectionKitName +
        " linked "
    ).should("be.visible");

    cy.log("Existing item linked");
    cy.wait(3000);
    ///////////////////////////////////////////////////////////////////////////////////////

    //Stepper
    //getting value form different json file
    cy.contains(this.SectionEleData.StepperValue4).click({ force: true });
    cy.log("Stepper Value has been set.");

    cy.get(
      "div.kit-control-section.mb-3.v-item-group.theme--light.v-expansion-panels div.v-expansion-panel.v-expansion-panel--active.v-item--active div.v-expansion-panel-content div.v-expansion-panel-content__wrap div.v-card.v-sheet.theme--light div.v-card__text div.row div.kit-control-component.kit-control-component--item-picker.px-3.col.col-sm-12.col-md-6.mb-4.px-3.col-sm-12.col-md-6.mb-4.px-3:nth-child(21) span.searchRel > i.searchIcon"
    ).scrollIntoView({ force: true });

    cy.wait(2000);
    //UserSelector(Values coming form KitItemValues Json File)
    //Click on to open UserSelector Pop up
    cy.get(
      "div.kit-control-section.mb-3.v-item-group.theme--light.v-expansion-panels div.v-expansion-panel.v-expansion-panel--active.v-item--active div.v-expansion-panel-content div.v-expansion-panel-content__wrap div.v-card.v-sheet.theme--light div.v-card__text div.row div.kit-control-component.kit-control-component--item-picker.px-3.col.col-sm-12.col-md-6.mb-4.px-3.col-sm-12.col-md-6.mb-4.px-3:nth-child(21) span.searchRel > i.searchIcon"
    ).click({ force: true });
    cy.wait(3000);

    cy.contains(this.SectionEleData.UserSelectorName).click({ force: true });
    cy.log("UserSelect added");
    cy.wait(3000);

    //ContactSelector(Values coming form KitItemValues Json File)
    //Click on to open ContactSelector Pop up
    cy.get(
      " div.tab--content.col div.v-window.tab-content-wrapper.v-item-group.theme--light.v-tabs-items div.v-window__container div.v-window-item.v-window-item--active:nth-child(1) div.wrapper-tabs-content.v-card.v-sheet.theme--light div.v-card__text.kit-documents.fill-height div.row.container-details div.fill-height.col div.container.details-wrapper.fill-height div.row.kit-related-form.pa-6 div.px-3.col.col-12:nth-child(27) div.kit-control-section.mb-3.v-item-group.theme--light.v-expansion-panels div.v-expansion-panel.v-expansion-panel--active.v-item--active div.v-expansion-panel-content div.v-expansion-panel-content__wrap div.v-card.v-sheet.theme--light div.v-card__text div.row div.kit-control-component.kit-control-component--item-picker.px-3.col.col-sm-12.col-md-6.mb-4.px-3.col-sm-12.col-md-6.mb-4.px-3:nth-child(23) span.searchRel div.v-input.searchSelectNone.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select div.v-input__control div.v-input__slot > div.v-select__slot:nth-child(2)"
    ).click({ force: true });
    cy.wait(4000);
    cy.contains(this.SectionEleData.ContactSelectorName).click({ force: true });
    cy.log("ContactSelecto added");
    cy.wait(4000);

    ///////////////////////////////////////////////////////////////////////

    //Click on to link existing item(onetoone)
    cy.get(".action-icon:nth-child(2) > .inline-svg")
      .last()
      .click({ force: true });

    //Search List view pop up assertion
    cy.contains(" Related Items ").should("be.visible");
    //Select item to be linked kit item
    cy.wait(2000);
    cy.get(
      ".row:nth-child(1) > .d-flex > .list-item-col-left > .v-avatar:nth-child(1) svg"
    ).click({ force: true });
    //Linking assertion
    cy.contains(
      "Relation on " +
        this.SectionDataType.OneToOneRelation +
        " for " +
        this.SectionEleData.SectionKitName +
        " linked "
    ).should("be.visible");

    //Scroll
    cy.get(".btn-light:nth-child(3) .ca-item").last().scrollIntoView({
      force: true,
    });
    cy.wait(2000);

    /////////////////////////////////////////////////////////////////////

    cy.wait(3000);
    //Click on New Item for one to Many Related Control
    cy.get(".ca-item")
      .eq(2)
      .scrollIntoView({ force: true })
      .click({ force: true });
    //Search List view pop up assertion
    cy.contains(this.ViewName.SearchView).should("be.visible");
    //Selct the to be linked kit item
    cy.get(".thumb-selected-icon").eq(0).click();
    cy.get(".thumb-selected-icon").eq(1).click();
    cy.wait(2000);
    //Click on select btn
    cy.get(".button-pop-ups > .v-btn__content").first().click({ force: true });

    cy.contains(
      "Relation on " +
        this.SectionDataType.SquareCardName +
        " for " +
        this.SectionEleData.SectionKitName +
        " linked "
    ).should("be.visible");

    cy.log("Existing item linked");
    cy.wait(3000);

    ////////////////////////////////////////////////////////////////////

    cy.wait(2000);
    //Icon
    //Click on + icon of ICON Element
    cy.get(".v-btn--depressed > .v-btn__content > .inline-svg > path")
      .last()
      .click({
        force: true,
      });
    cy.wait(2000);
    //Click on Icon Tittle and  select Icon logo
    //Give numeric no from 1 in child(1,2,3...)
    cy.get(".thumb-container:nth-child(5) .selected-icon").click({
      force: true,
    });
    cy.wait(2000);
    //Icon Save
    cy.get(".button-pop-ups").first().click({ force: true });
    cy.wait(2000);

    //IcozSize
    cy.get(
      "div.row.wrapper-kit-control.align-center > div > div.fill-height.border-right.col.col-4 > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    )
      .last()
      .click({ force: true });
    cy.contains(this.SectionEleData.ExtraLargeiconSize).click({ force: true });
    cy.wait(2000);
    //IconLable
    cy.get('[placeholder="Label"]').last().type(this.NewKitItemData.IconLabel);

    cy.wait(3000);
    cy.get(".searchIcon").last().scrollIntoView({ force: true });
    //child 1 for 1st value &&&& child 2 for 2nd value-child 3 for 3rd value......
    //"These are the index value of div child":"use according to select inspection value",
    cy.get(
      "div.v-slide-group__wrapper > div > span:nth-child(" +
        this.SectionEleData.InspectionValue3 +
        ") > span"
    )
      .last()
      .click({ force: true });

    cy.wait(3000);
    //Assigning
    //Click on to open Assigning Pop up-Also working
    //cy.get(".searchIcon > .inline-svg > path").last().click({ force: true });

    //Click on to open Assigning Pop up
    cy.get(".searchIcon").last().click({ force: true });
    cy.wait(7000);
    //Click on to select the Assigning
    //cy.get(".list-item-search").first().click({ force: true });
    cy.contains(this.SectionEleData.AssigningName).click({ force: true });
    cy.wait(3000);
    //Click on to save
    cy.get(".button-pop-ups--size > .v-btn__content").click({ force: true });
    //Assigning creation assertion
    cy.contains("Item shared").should("be.visible");
    cy.log("Assigning added");
    cy.wait(5000);

    //save Kit Item
    cy.get(".v-select__selections .v-btn__content").click({ force: true });
    cy.contains(this.SectionEleData.SectionKitName + " has been saved").should(
      "be.visible"
    );
    cy.log(this.SectionEleData.SectionKitName + "Kit Type has been Saved");
  });
});
