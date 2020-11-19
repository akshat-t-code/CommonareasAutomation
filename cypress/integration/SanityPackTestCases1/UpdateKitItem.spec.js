import LoginPage from "../PageObject/LoginPage";
import SanityLoginPage from "../PageObject/SanityLoginPage";

describe("Update created kit item test case", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    const slp = new SanityLoginPage();
    slp.visitServiceTest();

    //Handling Alert
    cy.on("window:confirm", () => {
      cy.log("Alert has been Handled");
    });

    //Login Assertions
    cy.contains(" Log In ").should("be.visible");
    //Enter credentials
    lp.EnterEmail("kstanley@commonareas.work.dev");
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

    cy.fixture("SanityPackTestData/UpdateKItItemData").then(function (
      UpDateKitItemSDTCData
    ) {
      this.UpdateKitItemData = UpDateKitItemSDTCData;
    });
  });

  it.only("Navigating to kit item listView and select kit type to Update", function () {
    const lp = new LoginPage();
    //Click on Hamburger Icon
    lp.HMBIcon();
    cy.wait(2000);
    cy.contains(this.NewKitItemData.KitName).scrollIntoView({
      force: true,
    });
    cy.wait(5000);
    //Open KitType from left paneal
    cy.contains(this.NewKitItemData.KitName).click({
      force: true,
    });
    cy.log("Kit Type has been OPened");
    cy.wait(5000);
    //Click on First kit item of kit type to open edit view
    cy.log("Kit Item Detail View has been Opened");
    cy.wait(3000);
    //Validation assertion for details view
    cy.get(".kits-landing--header-title").should(
      "have.text",
      " Recently Viewed "
    );

    //Created kit type existance assertion
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).should("exist");
    cy.log("Created New Kit Item has been Exist");
    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);
  });

  it.only("Updation in DetailView(EditView)", function () {
    cy.wait(2000);
    //Url
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .last()
      .clear()
      .type(this.UpdateKitItemData.Url);
    cy.log("Url Updated");
    cy.wait(1000);

    //Text
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .last()
      .clear()
      .type(this.UpdateKitItemData.Text);
    cy.log("Url Updated");
    cy.wait(1000);

    //File
    //Click on to remove existing file
    cy.get(".dropzone-area-button:nth-child(2)").click({ force: true });
    cy.wait(1000);
    //Discard validation
    cy.contains(" Are you sure you want to discard?").should("be.visible");
    //Click on Discard
    cy.get(".mb-4:nth-child(1) .v-btn__content").click({ force: true });
    cy.log("Existing file has been deleted");
    cy.wait(2000);
    //Click on file link again
    cy.get(".link-icon--green > path").click({ force: true });
    cy.wait(3000);
    //give file name to select
    cy.contains(this.UpdateKitItemData.UpdateFileName).click({ force: true });
    cy.log("New file has been uploaded");

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
      .clear()
      .type(this.UpdateKitItemData.Telephone);
    cy.log("Telephone Updated");
    cy.wait(1000);

    //TextAera
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .last()
      .clear()
      .type(this.UpdateKitItemData.TextAera);
    cy.log("TextAera Updated");
    cy.wait(1000);

    //Currency;
    cy.get(
      "div.kit-control-currency--right.ma-0.pa-0.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })

      .type(this.UpdateKitItemData.Currency);
    cy.log("Currency Updated");
    cy.wait(2000);

    //Measure
    cy.get(
      "div.kit-control-measure--left.ma-0.pa-0.pr-2.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(this.UpdateKitItemData.Measure);
    cy.log("Measure Updated");
    cy.wait(2000);

    //Email;
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .last()
      .clear()
      .type(this.UpdateKitItemData.Email);
    cy.log("Email Updated");
    cy.wait(1000);

    //Address
    cy.get(
      '[placeholder="Street address, bulding, company ... "][name="Address"]'
    )
      .clear()
      .type(this.UpdateKitItemData.Addressline1);
    cy.log("TextAera Updated");
    //Address line
    cy.get('[name="Address line 2."]')
      .clear()
      .type(this.UpdateKitItemData.Addressline2);
    cy.log("Address line1 Updated");

    cy.get('[placeholder="City"]').scrollIntoView({ force: true });
    cy.wait(1000);

    //City
    cy.get('[placeholder="City"]').clear().type(this.UpdateKitItemData.City);
    cy.log("City Updated");
    //State
    cy.get(
      "div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    ).click({ force: true });
    cy.contains(this.UpdateKitItemData.State).click({ force: true });
    cy.log("State Updated");

    cy.get('[placeholder="Zip/Postal Code"]').scrollIntoView({ force: true });
    cy.wait(1000);

    //ZipCode
    cy.get('[placeholder="Zip/Postal Code"]')
      .clear()
      .type(this.UpdateKitItemData.ZipCode);
    cy.log("ZipCode Updated");
    cy.wait(1000);

    //Number
    cy.get("[name" + "=" + this.DataType2.Number + "]")
      .last()
      .clear()
      .type(this.UpdateKitItemData.Number);
    cy.log("Number Updated");
    cy.wait(1000);

    //Time Data Element
    //Click on cross to delete Time
    cy.get(
      ".v-input__slot > .v-input__append-inner > .v-input__icon--clear > .v-icon"
    )
      .first()
      .click({ force: true });
    cy.wait(1000);
    //Click on Time to appear time pop up
    cy.get('[placeholder="Add Time"][type="text"]')
      .last()
      .click({ force: true });
    cy.wait(1000);
    //Select hour value
    cy.xpath(
      "//div[contains(@class,'v-dialog v-dialog--active')]//span[6]"
    ).click({ force: true });
    cy.wait(1000);
    //Select Value of miniutes
    cy.xpath("//span[contains(text(),'25')]").first().click({ force: true });
    cy.wait(1000);
    //Click on PM
    cy.xpath("//div[contains(text(),'PM')]").click({ force: true });
    //Click on OK to save date
    cy.xpath(
      "//div[contains(@class,'v-dialog v-dialog--active')]//button[1]"
    ).click({ force: true });
    cy.log("Time has been Updated");
    cy.wait(2000);

    //Date Data Element
    //Click on Date to appear Date pop up
    cy.get(
      "div.v-input.no-bottom.date-picker-text-field.date-picker-text-field-direct.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder > div > div.v-input__slot > div.v-input__prepend-inner > i"
    ).click({ force: true });
    //Select Date
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'25')]")
      .first()
      .click({ force: true });
    cy.wait(2000);
    //Click on OK to save Date
    cy.xpath("//span[contains(text(),'OK')]").first().click({ force: true });
    cy.wait(2000);

    //Toggle
    cy.get(".sync-switch .v-input--selection-controls__ripple").click({
      force: true,
    });
    cy.log("Toggle updated");

    cy.wait(3000);
    //Click on DropDown of SelectList
    cy.get(
      " div.row.container-details div.fill-height.col div.container.details-wrapper.fill-height div.row.kit-related-form.pa-6 div.kit-control-component.row-component.px-3.col.col-sm-12.col-md-6.mb-4.px-3.col-sm-12.col-md-6.mb-4.px-3:nth-child(17) div.v-input.kit-control-select-list.layout-alignment.v-input--is-label-active.v-input--is-dirty.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select div.v-input__control div.v-input__slot div.v-select__slot:nth-child(2) div.v-input__append-inner:nth-child(3) div.v-input__icon.v-input__icon--append > i.v-icon.notranslate.material-icons.theme--light"
    ).click({ force: true });
    cy.wait(2000);
    //SelectList Value(Values coming form KitItemValues Json File)
    cy.contains(this.UpdateKitItemData.SelectListValue).click({ force: true });
    cy.log("SelectList Value has been Updated.");

    cy.wait(4000);

    //RadioSelect
    cy.contains(this.UpdateKitItemData.RadioSelectValue).click({ force: true });
    cy.log("RadioSelect Value has been set.");
    cy.wait(3000);

    //CheckboxSelect(Values coming form KitItemValues Json File)
    cy.contains(this.UpdateKitItemData.CheckboxSelectValue1).click({
      force: true,
    });
    cy.contains(this.UpdateKitItemData.CheckboxSelectValue2).click({
      force: true,
    });
    cy.contains(this.UpdateKitItemData.CheckboxSelectValue3).click({
      force: true,
    });
    cy.log("UnChecking existing Values.");
    cy.wait(2000);
    cy.contains(this.UpdateKitItemData.CheckboxSelectValue4).click({
      force: true,
    });
    cy.contains(this.UpdateKitItemData.CheckboxSelectValue5).click({
      force: true,
    });
    cy.log("Checkbox Values updated.");

    cy.wait(3000);
    cy.get("[name" + "=" + this.DataType2.Stepper + "]")
      .last()
      .scrollIntoView({
        force: true,
      });

    //Stepper
    cy.contains(this.UpdateKitItemData.StepperValue3).click({ force: true });
    cy.wait(10000);

    //Click on cross to user selector
    cy.get(
      "div.v-window.tab-content-wrapper.v-item-group.theme--light.v-tabs-items div.v-window__container div.v-window-item.v-window-item--active:nth-child(1) div.wrapper-tabs-content.v-card.v-sheet.theme--light div.v-card__text.kit-documents.fill-height div.row.container-details div.fill-height.col div.container.details-wrapper.fill-height div.row.kit-related-form.pa-6 div.kit-control-component.kit-control-component--item-picker.px-3.col.col-sm-12.col-md-6.mb-4.px-3.col-sm-12.col-md-6.mb-4.px-3:nth-child(22) span.searchRel div.v-input.searchSelectNone.v-input--is-label-active.v-input--is-dirty.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select div.v-input__control div.v-input__slot div.v-select__slot:nth-child(2) div.v-select__selections:nth-child(2) div.imageContent:nth-child(1) > div.row.control-item-picker"
    ).click({ force: true });
    cy.wait(4000);
    //Click on to open UserSelector Pop up
    //cy.get(".searchIcon").eq(7).click({ force: true });
    cy.contains(this.UpdateKitItemData.UserSelectorName).click({ force: true });
    cy.log("UserSelect Updated");
    cy.wait(3000);

    //Click on cross to contact selector
    cy.get(
      "div.tab--content.col div.v-window.tab-content-wrapper.v-item-group.theme--light.v-tabs-items div.v-window__container div.v-window-item.v-window-item--active:nth-child(1) div.wrapper-tabs-content.v-card.v-sheet.theme--light div.v-card__text.kit-documents.fill-height div.row.container-details div.fill-height.col div.container.details-wrapper.fill-height div.row.kit-related-form.pa-6 div.kit-control-component.kit-control-component--item-picker.px-3.col.col-sm-12.col-md-6.mb-4.px-3.col-sm-12.col-md-6.mb-4.px-3:nth-child(24) span.searchRel div.v-input.searchSelectNone.v-input--is-label-active.v-input--is-dirty.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select div.v-input__control div.v-input__slot div.v-select__slot:nth-child(2) div.v-select__selections:nth-child(2) div.imageContent:nth-child(1) > div.row.control-item-picker"
    ).click({ force: true });
    cy.wait(4000);
    // //Click on to open ContactSelector Pop up
    // cy.get(".searchIcon").eq(8).click({ force: true });
    cy.contains(this.UpdateKitItemData.ContactSelectorName).click({
      force: true,
    });
    cy.log("ContactSelecto Updated");
    cy.wait(4000);

    cy.wait(2000);
    //Icon
    //Click on + icon of ICON Element
    cy.get(".v-btn__content > img").click({
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
    cy.get('[placeholder="Label"]').scrollIntoView({ force: true });
    //Click on arrow
    cy.get(
      "div.fill-height.border-right.col.col-4 div.v-input.v-input--is-label-active.v-input--is-dirty.theme--light.v-text-field.v-text-field--single-line.v-text-field--solo.v-text-field--is-booted.v-text-field--enclosed.v-select div.v-input__control div.v-input__slot div.v-select__slot div.v-input__append-inner:nth-child(2) div.v-input__icon.v-input__icon--append > i.v-icon.notranslate.material-icons.theme--light"
    )
      .scrollIntoView({ force: true })
      .click({ force: true });
    cy.contains(this.UpdateKitItemData.ExtraSmalliconSize).click({
      force: true,
    });
    cy.wait(2000);
    //IconLable
    cy.get('[placeholder="Label"]')
      .clear()
      .type(this.UpdateKitItemData.IconLabel);

    //Inspection
    cy.contains(this.DataType2.Inspection).scrollIntoView({
      force: true,
    });

    cy.wait(3000);
    //child 1 for 1st value &&&& child 2 for 2nd value-child 3 for 3rd value......
    //"These are the index value of div child":"use according to select inspection value",
    cy.get(
      ".v-chip:nth-child(" +
        this.UpdateKitItemData.InspectionValue4 +
        ") > .v-chip__content"
    ).click({ force: true });
    cy.wait(2000);

    //Click on cross to delete Assigning
    // cy.get(
    //   " div.v-window-item.v-window-item--active:nth-child(1) div.wrapper-tabs-content.v-card.v-sheet.theme--light div.v-card__text.kit-documents.fill-height div.row.container-details div.fill-height.col div.container.details-wrapper.fill-height div.row.kit-related-form.pa-6 div.kit-control-component.kit-control-assigning.pr-3.col.col-sm-12.col-md-6.mb-4.px-3.col-sm-12.col-md-6.mb-4.px-3:nth-child(28) span.searchRel div.v-input.searchSelectNone.v-input--is-label-active.v-input--is-dirty.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select div.v-input__control div.v-input__slot div.v-select__slot:nth-child(2) > div.v-select__selections:nth-child(2)"
    // ).click({ force: true });
    //Click on to open Assigning
    cy.wait(5000);
    //cy.contains(this.UpdateKitItemData.AssigningName).click({ force: true });
    cy.wait(3000);
    //Click on to save
    //cy.get(".button-pop-ups--size > .v-btn__content").click({ force: true });
    //Assigning creation assertion
    //cy.contains("Item shared").should("be.visible");
    cy.log("Assigning added");
    cy.wait(5000);

    //Click to save
    cy.get(".navi-bar-dropdown:nth-child(2) .v-btn").click({ force: true });
    cy.contains(this.NewKitItemData.KitName + " has been saved").should(
      "be.visible"
    );
    cy.log(
      this.NewKitItemData.KitName + "Kit Type has been Saved with updation"
    );
    cy.wait(10000);

    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
    cy.log(this.NewKitItemData.KitName + "Kit item has been Close");
    cy.contains(" Recently Viewed ").should("be.visible");
    cy.wait(5000);

    //Update kit item assertion
    cy.contains(
      this.DataType2.Url + ":" + " " + this.UpdateKitItemData.Url
    ).should("be.visible");

    cy.log("updated Kit item updated and exist in Kit Item List View ");
  });
});
