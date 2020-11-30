import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";
import SanityLoginPage from "../PageObject/SanityLoginPage";

describe("Related Control One to One test case", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    const slp = new SanityLoginPage();
    slp.visitCityComTest();

    //Handling Alert
    cy.on("window:confirm", () => {
      cy.log("Alert has been Handled");
    });

    //Login Assertions
    cy.contains(" Log In ").should("be.visible");
    //Enter credentials
    lp.EnterEmail("citycom@commonareas.work.dev");
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

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType2 = NewDataForElements;
    });

    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (
      KitTypeFormViewsNames
    ) {
      this.ViewName = KitTypeFormViewsNames;
    });

    cy.fixture("SanityPackTestData/NewKitItemTabsData").then(function (
      SanityTCData
    ) {
      this.SData = SanityTCData;
    });

    cy.fixture("SanityPackTestData/RelatedOneToOneData").then(function (
      SanityTCData
    ) {
      this.RelatedKitItemData = SanityTCData;
    });
  });

  it.only("Navigating to New form of created Kit type", function () {
    cy.wait(10000);
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    //debugger;
    //Click on To open Kit Type
    KTP.SearchKitType(this.NewKitItemData.KitName);
    cy.wait(3000);
    //This is class to open searched kit type by clicking + iocn
    cy.get(".truncate-special").first().click({ force: true });
    cy.wait(3000);
    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.log("New Item created and Kit Type has been Opened");
  });

  it.only("One to One Related Control to configure Related New form", function () {
    cy.wait(1000);
    //save Kit Item for empty form
    cy.get(".v-select__selections .v-btn__content").click({ force: true });
    //kit item Save Assertion for no data
    cy.contains("Nothing to save for " + this.NewKitItemData.KitName).should(
      "be.visible"
    );
    cy.wait(3000);
    cy.log("With No data new kit item saved successfully ");
    cy.wait(2000);

    //Url
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .last()
      .type(this.RelatedKitItemData.NewKitItemUrl);
    cy.wait(2000);

    //Text
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .last()
      .type(this.RelatedKitItemData.NewKitItemText);
    cy.wait(3000);

    //Scroll
    cy.get(".mr-4 > .inline-svg > path").scrollIntoView({ force: true });
    cy.wait(4000);

    //Click on New Item for one to one Related Control
    cy.get(".mr-4 > .inline-svg > path")
      .scrollIntoView({ force: true })
      .click({ force: true });
    //New Item Assertion
    cy.contains("New Item created").should("be.visible");
    //Related Kit Assertion
    cy.contains(this.DataType2.KitToBeRelated).should("be.visible");
    cy.wait(4000);

    //save related new with no data
    cy.get(".v-select__selections .v-btn__content")
      .first()
      .click({ force: true });
    //kit item Save Assertion for no data
    cy.contains("Nothing to save for " + this.DataType2.KitToBeRelated).should(
      "be.visible"
    );
    cy.wait(3000);
    cy.log("With No data Related New kit item saved successfully ");
    cy.wait(2000);

    //Enter data in Related New form

    cy.wait(2000);
    //Url
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .eq(1)
      .type(this.RelatedKitItemData.Url);
    cy.wait(1000);

    //Text
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .eq(1)
      .type(this.RelatedKitItemData.Text);
    cy.wait(1000);

    //File
    cy.get(".dropzone-icons-content > .clickable path")
      .eq(0)
      .click({ force: true });
    //cy.get(".link-icon--green > path").last().click({ force: true });
    cy.wait(3000);
    //give file name to select
    cy.contains(this.RelatedKitItemData.RelNewFileName).click({
      force: true,
    });
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
      .eq(1)
      .type(this.RelatedKitItemData.Telephone);
    cy.wait(1000);

    //TextAera
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .eq(1)
      .type(this.RelatedKitItemData.TextAera);
    cy.wait(1000);

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
      .eq(0)
      .click({ force: true })
      .type(this.RelatedKitItemData.Currency);

    //Measure

    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-measure.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-measure--left.ma-0.pa-0.pr-2.col > div > div > div.v-input__slot > div"
    )
      .eq(0)
      .click({ force: true })
      .type(this.RelatedKitItemData.Measure);

    //Email;
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .eq(1)
      .type(this.RelatedKitItemData.Email);
    cy.wait(1000);

    //Address
    cy.get(
      '[placeholder="Street address, bulding, company ... "][name="Address"]'
    )
      .eq(0)
      .type(this.RelatedKitItemData.Addressline1);
    //Address line
    cy.get('[name="Address line 2."]')
      .eq(0)
      .type(this.RelatedKitItemData.Addressline2);

    cy.get('[placeholder="City"]').eq(0).scrollIntoView({ force: true });
    cy.wait(1000);

    //City
    cy.get('[placeholder="City"]').eq(0).type(this.RelatedKitItemData.City);
    //State
    cy.get(
      "div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    )
      .eq(0)
      .click({ force: true });
    cy.contains(this.RelatedKitItemData.State).click({ force: true });

    cy.get('[placeholder="Zip/Postal Code"]')
      .eq(0)
      .scrollIntoView({ force: true });
    cy.wait(1000);

    //ZipCode
    cy.get('[placeholder="Zip/Postal Code"]')
      .eq(0)
      .type(this.RelatedKitItemData.ZipCode);
    cy.wait(1000);

    //Number
    cy.get("[name" + "=" + this.DataType2.Number + "]")
      .eq(0)
      .type(this.RelatedKitItemData.Number);
    cy.wait(1000);

    //Time Data Element
    //Click on Time to appear time pop up
    cy.get('[placeholder="Add Time"][type="text"]')
      .eq(0)
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

    //Date Data Element
    //Click on Date to appear Date pop up
    cy.get(
      "div.v-input.no-bottom.date-picker-text-field.date-picker-text-field-direct.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder > div > div.v-input__slot > div.v-input__prepend-inner > i"
    )
      .eq(0)
      .click({ force: true });
    //Select Date
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'30')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    //Click on OK to save Date
    cy.xpath("//span[contains(text(),'OK')]").first().click({ force: true });
    cy.wait(2000);

    //Toggle
    cy.get(".sync-switch .v-input--selection-controls__ripple").eq(0).click({
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
    cy.contains(this.RelatedKitItemData.SelectListValue).click({ force: true });
    cy.log("SelectList Value has been set.");

    //RadioSelect
    cy.contains(this.RelatedKitItemData.RadioSelectValue).click({
      force: true,
    });
    cy.log("RadioSelect Value has been set.");

    //CheckboxSelect(Values coming form KitItemValues Json File)
    cy.contains(this.RelatedKitItemData.CheckboxSelectValue1).click({
      force: true,
    });
    cy.contains(this.RelatedKitItemData.CheckboxSelectValue2).click({
      force: true,
    });
    cy.contains(this.RelatedKitItemData.CheckboxSelectValue3).click({
      force: true,
    });
    cy.log("Checkbox Values has been set.");

    cy.wait(5000);
    cy.get(".searchIcon").eq(1).scrollIntoView({ force: true });

    //Stepper
    //getting value form different json file
    cy.contains(this.RelatedKitItemData.StepperValue4).click({ force: true });
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

    cy.contains(this.RelatedKitItemData.UserSelectorName).click({
      force: true,
    });
    cy.log("UserSelect added");
    cy.wait(3000);

    //ContactSelector(Values coming form KitItemValues Json File)
    //Click on to open ContactSelector Pop up
    cy.get(".searchIcon").eq(1).click({ force: true });

    cy.wait(4000);
    cy.contains(this.RelatedKitItemData.ContactSelectorName).click({
      force: true,
    });
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
    cy.get(".thumb-container:nth-child(4) .selected-icon").click({
      force: true,
    });
    cy.wait(2000);
    //Icon Save
    cy.get(".button-pop-ups").click({ force: true });
    cy.wait(2000);

    //IcozSize
    cy.get(
      "div.row.wrapper-kit-control.align-center > div > div.fill-height.border-right.col.col-4 > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    )
      .eq(0)
      .click({ force: true });
    cy.wait(2000);
    cy.contains(this.RelatedKitItemData.LargeiconSize).click({ force: true });
    cy.wait(2000);
    //IconLable
    cy.get('[placeholder="Label"]')
      .eq(0)
      .type(this.RelatedKitItemData.IconLabel);

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
        this.RelatedKitItemData.InspectionValue2 +
        ") > span"
    )
      .eq(0)
      .click({ force: true });

    cy.wait(3000);
    //Assigning
    //Click on to open Assigning Pop up-Also working

    //Click on to open Assigning Pop up
    cy.get(".searchIcon").eq(2).click({ force: true });
    cy.wait(7000);
    //Click on to select the Assigning
    //cy.get(".list-item-search").first().click({ force: true });
    cy.contains(this.RelatedKitItemData.AssigningName).click({ force: true });
    cy.wait(3000);
    //Click on to save
    cy.get(".button-pop-ups--size > .v-btn__content").click({ force: true });
    //Assigning creation assertion
    cy.contains("Item shared").should("be.visible");
    cy.log("Assigning added");
    cy.wait(5000);

    //save related new
    cy.get(".v-select__selections .v-btn__content")
      .first()
      .click({ force: true });
    //Related kit item Save Assertion
    cy.contains(this.DataType2.KitToBeRelated + " has been saved").should(
      "be.visible"
    );
    cy.log(this.DataType2.KitToBeRelated + " related new has been Saved");

    //Related kit item created assertion
    cy.contains(
      " Relation on " +
        this.DataType2.OneToOneRelation +
        " for " +
        this.NewKitItemData.KitName +
        " created"
    ).should("be.visible");

    //close the Kit Item
    cy.wait(5000);
    //Close Kit type
    cy.get(".subheader--button-icon-wrapper path").first().click({
      force: true,
    });
    cy.contains(this.NewKitItemData.KitName).should("be.visible");
    cy.log("Related new has been Close");
    cy.wait(5000);
  });

  it.only("Validate One to One Element", function () {
    cy.wait(2000);
    //One to One element assetions(new form) before save kit item
    cy.contains(this.RelatedKitItemData.Url).should("exist");
    cy.log("Url data exist before save kit item");
    cy.wait(5000);

    //save Kit item(edit form) new
    cy.get(".v-select__selections .v-btn__content")
      .first()
      .click({ force: true });
    //kit item Save Assertion
    cy.contains(this.NewKitItemData.KitName + " has been saved").should(
      "be.visible"
    );
    cy.wait(5000);

    //Scrolling
    cy.get(".last-updated:nth-child(2) > .v-icon").scrollIntoView({
      force: true,
    });
    cy.wait(2000);

    //One to One element assetions(new form) after save kit item
    cy.contains(this.RelatedKitItemData.Url).should("exist");
    cy.log("Url data exist after save kit item");
    cy.wait(5000);

    //save AGAIN Kit item(edit form) new
    cy.get(".v-select__selections .v-btn__content")
      .first()
      .click({ force: true });
    //kit item Save Assertion for nothing
    cy.contains("Nothing to save for " + this.NewKitItemData.KitName).should(
      "be.visible"
    );
    cy.log("There is nothing to save for Kit Item");
  });

  it.only("Deletion one to one element for new form", function () {
    //Click on cross to delete value
    cy.wait(3000);
    cy.get(".last-updated:nth-child(2) > .v-icon").click({ force: true });
    cy.wait(2000);
    cy.contains(" Are you sure you want to discard?").should("be.visible");
    cy.wait(2000);
    cy.contains(" Discard ").click({ force: true });
    cy.contains(
      "Relation on " +
        this.DataType2.OneToOneRelation +
        " for " +
        this.NewKitItemData.KitName +
        " Deleted"
    ).should("be.visible");
    cy.wait(2000);
  });

  it.only("Deletion Validation of added OneToOne element", function () {
    //Deletion assertion
    cy.get(".action-icon:nth-child(2) > .inline-svg").scrollIntoView({
      force: true,
    });
    cy.wait(3000);
    //One to One element assetions(new form)
    cy.contains(this.RelatedKitItemData.Url).should("not.exist");
    cy.log("Data has been deleted");
    cy.wait(3000);
    //Again save Kit item(new form)
    cy.get(".v-select__selections .v-btn__content")
      .first()
      .click({ force: true });
    //kit item Save Assertion after delete elemets
    cy.log(this.DataType2.KitToBeRelated + " related new has been Saved");
    cy.log("Save Kit Item after delete relation elements");
    cy.wait(2000);
  });

  it.only("Link Existing Item for OneToOne Related Control", function () {
    cy.wait(2000);
    //Click on to link existing item
    cy.get(".action-icon:nth-child(2) > .inline-svg")
      .scrollIntoView({ force: true })
      .click({ force: true });

    //Search List view pop up assertion
    cy.contains(" Related Items ").should("be.visible");
    //Select item to be linked kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.RelatedKitItemData.Url
    ).click({ force: true });
    //Scroll
    cy.get(".last-updated:nth-child(2) > .v-icon").scrollIntoView({
      force: true,
    });
    //Linking assertion
    cy.contains(
      "Relation on " +
        this.DataType2.OneToOneRelation +
        " for " +
        this.NewKitItemData.KitName +
        " linked "
    ).should("be.visible");

    cy.wait(2000);
  });

  it.only("Validate Link Item elements for OneToOne", function () {
    //Scroll
    cy.get(".last-updated:nth-child(2) > .v-icon").scrollIntoView({
      force: true,
    });

    //One to one link item assetion
    cy.wait(2000);
    cy.contains(
      this.DataType2.Url + ":" + " " + this.RelatedKitItemData.Url
    ).should("exist");

    cy.contains(
      this.DataType2.Text + ":" + " " + this.RelatedKitItemData.Text
    ).should("exist");

    cy.contains(
      this.DataType2.TextAera + ":" + " " + this.RelatedKitItemData.TextAera
    ).should("exist");

    cy.log("Linked item exist for one to one related control");

    //save Kit item(edit form) new
    cy.get(".v-select__selections .v-btn__content")
      .first()
      .click({ force: true });
    //kit item Save Assertion
    cy.contains(this.NewKitItemData.KitName + " has been saved").should(
      "be.visible"
    );
    cy.wait(5000);

    //Scroll
    cy.get(".last-updated:nth-child(2) > .v-icon").scrollIntoView({
      force: true,
    });

    //One to one link item assetion after kit item save
    cy.wait(2000);
    cy.contains(
      this.DataType2.Url + ":" + " " + this.RelatedKitItemData.Url
    ).should("exist");

    cy.contains(
      this.DataType2.Text + ":" + " " + this.RelatedKitItemData.Text
    ).should("exist");

    cy.contains(
      this.DataType2.TextAera + ":" + " " + this.RelatedKitItemData.TextAera
    ).should("exist");
    cy.log(
      "Linked item exist for one to one related control after kit item saved"
    );

    //save AGAIN Kit item(edit form) new
    cy.get(".v-select__selections .v-btn__content")
      .first()
      .click({ force: true });
    //kit item Save Assertion for nothing
    cy.contains("Nothing to save for " + this.NewKitItemData.KitName).should(
      "be.visible"
    );
    cy.log("There is nothing to save for Kit Item");
  });
});
