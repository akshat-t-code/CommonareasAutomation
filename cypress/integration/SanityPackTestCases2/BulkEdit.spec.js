import LoginPage from "../PageObject/LoginPage";
import SanityLoginPage from "../PageObject/SanityLoginPage";

describe("Bulk Edit test case for List View kit item", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    const slp = new SanityLoginPage();
    //slp.visitCityComTest();
    //cy.visit("https://nvd.ca-test.com/Public/Login?ReturnUrl=%2F");
    cy.visit("https://tm.commonareas.io/Public/Login?ReturnUrl=%2F");

    //Handling Alert
    cy.on("window:confirm", () => {
      cy.log("Alert has been Handled");
    });

    //Login Assertions
    cy.contains(" Log In ").should("be.visible");

    //Enter credentials
    lp.EnterEmail("sam@armyspy.com");
    //lp.EnterEmail("propertymanagement@commonareas.work.dev");
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

    // cy.fixture("SanityPackTestData2/BulkEditData").then(function (KitDataEle) {
    //   this.NewKitItemData = KitDataEle;
    // });

    cy.fixture("SanityPackTestData(Prod)/BulkEditData(Prod)").then(function (
      KitDataEle
    ) {
      this.NewKitItemData = KitDataEle;
    });

    // cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
    //   NewDataForElements
    // ) {
    //   this.DataType2 = NewDataForElements;
    // });

    cy.fixture("SanityPackTestData(Prod)/KitBuilderDataTypes2(Prod)").then(
      function (NewDataForElements) {
        this.DataType2 = NewDataForElements;
      }
    );

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  });

  it.only("Navigate to left Panel List View kit items", function () {
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
    cy.wait(7000);
  });

  it.only("Select kit items and Elements for bulk action", function () {
    cy.wait(3000);
    //Select first four kit items for bulk edit
    cy.get(".row:nth-child(1) .list-item-col-left .item-check").click({
      force: true,
    });
    cy.wait(1000);

    cy.get(".row:nth-child(2) > .d-flex .item-check").click({ force: true });
    cy.wait(1000);

    cy.get(".row:nth-child(3) > .d-flex .item-check").click({ force: true });
    cy.wait(1000);

    cy.get(".row:nth-child(4) > .d-flex .item-check").click({ force: true });
    cy.wait(1000);
    //Assertion
    cy.contains("4 Items Selected").should("be.visible");

    //Click on bulk action btn
    cy.get(".btn-title").click({ force: true });
    cy.wait(1000);
    cy.contains("Edit").click({ force: true });
    //Assertion
    cy.contains(" Bulk Edit ").should("be.visible");

    //Click on dropdown to select elements
    cy.get(
      "div.container-search.fill-height.container-dialog-grid.bulk-edit-dialog--wrapper.v-card.v-sheet.theme--light div.v-card__text.items-wrapper.wrapper-control-grid div.px-3.mt-6.col.col-12 div.v-input.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select.v-select--chips.v-select--is-multi div.v-input__control div.v-input__slot div.v-select__slot:nth-child(2) div.v-input__append-inner:nth-child(3) div.v-input__icon.v-input__icon--append > i.v-icon.notranslate.material-icons.theme--light"
    ).click({ force: true });
    cy.wait(2000);

    //Select elements for bulk action
    cy.get(".v-simple-checkbox").click({ multiple: true });
    cy.contains(this.DataType2.Icon).click({ force: true });

    //Bulk Pop
    //Firing Alert pop for manual action
    cy.log("User need to do something").then(() => {
      alert("Remove Bulk POP UP by Clicking somewhere ELSE");
    });
    cy.log("Remove Bulk POP UP by Clicking somewhere ELSE");
    cy.wait(6000);
  });

  it.only("Bulk Data", function () {
    cy.wait(3000);

    //Url
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .eq(1)
      .type(this.NewKitItemData.Url);
    cy.wait(1000);

    //Text
    cy.get("[name" + "=" + this.DataType2.Text + "]")
      .eq(1)
      .type(this.NewKitItemData.Text);
    cy.wait(1000);

    //Telephone
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")
      .eq(1)
      .type(this.NewKitItemData.Telephone);
    cy.wait(1000);

    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .eq(1)
      .scrollIntoView({ force: true });
    cy.wait(2000);

    //TextAera
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")
      .eq(1)
      .type(this.NewKitItemData.TextAera);
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
      " div.v-card__text.items-wrapper.wrapper-control-grid div.container.bulk-edit-elements div.container.details-wrapper.fill-height.kit-element-bulk-edit-form div.row.kit-related-form.pa-6 div.kit-control-component.kit-control-currency.px-3.col.col-sm-12.col-md-6.mb-4.px-3.col-sm-12.col-md-6.mb-4.px-3:nth-child(6) div.row div.kit-control-currency--right.ma-0.pa-0.col div.v-input.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined div.v-input__control div.v-input__slot > div.v-text-field__slot:nth-child(2)"
    )
      .click({ force: true })
      .type(this.NewKitItemData.Currency);

    //Measure

    cy.get(
      " div.v-card__text.items-wrapper.wrapper-control-grid div.container.bulk-edit-elements div.container.details-wrapper.fill-height.kit-element-bulk-edit-form div.row.kit-related-form.pa-6 div.kit-control-component.kit-control-measure.px-3.col.col-sm-12.col-md-6.mb-4.px-3.col-sm-12.col-md-6.mb-4.px-3:nth-child(7) div.row div.kit-control-measure--left.ma-0.pa-0.pr-2.col div.v-input.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined div.v-input__control div.v-input__slot > div.v-text-field__slot:nth-child(2)"
    )
      .click({ force: true })
      .type(this.NewKitItemData.Measure);

    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .eq(1)
      .scrollIntoView({ force: true });
    cy.wait(2000);

    //Email;
    cy.get("[name" + "=" + this.DataType2.Email + "]")
      .eq(1)
      .type(this.NewKitItemData.Email);
    cy.wait(1000);

    //Address
    cy.get('[placeholder="Street address, building, company ... "]').type(
      this.NewKitItemData.Addressline1
    );
    //Address line
    cy.get('[name="Address line 2."]').type(this.NewKitItemData.Addressline2);

    cy.get('[placeholder="City"]').scrollIntoView({ force: true });
    cy.wait(1000);

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
    cy.get("[name" + "=" + this.DataType2.Number + "]")
      .eq(1)
      .type(this.NewKitItemData.Number);
    cy.wait(1000);

    //Time Data Element
    //Click on Time to appear time pop up
    cy.get('[placeholder="Add Time"][type="text"]')
      .eq(0)
      .click({ force: true });
    cy.wait(1000);
    //Select hour value
    cy.xpath(
      "//div[contains(@class,'v-dialog v-dialog--active')]//span[10]"
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

    cy.get('[placeholder=" MM / DD / YYYY"]').scrollIntoView({ force: true });
    cy.wait(2000);

    //Date Data Element
    //Click on Date to appear Date pop up
    cy.get(
      "div.v-input.no-bottom.date-picker-text-field.date-picker-text-field-direct.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder > div > div.v-input__slot > div.v-input__prepend-inner > i"
    ).click({ force: true });
    //Select Date
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'20')]")
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

    cy.wait(2000);

    //Click on DropDown of SelectList
    cy.wait(3000);
    cy.get(
      "div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner"
    )
      .eq(3)
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

    cy.contains(this.NewKitItemData.StepperValue5).scrollIntoView({
      force: true,
    });
    cy.wait(3000);
    //Stepper
    //getting value form different json file
    cy.contains(this.NewKitItemData.StepperValue5).click({ force: true });
    cy.log("Stepper Value has been set.");

    cy.wait(2000);

    cy.get(".v-btn--depressed > .v-btn__content > .inline-svg > path")
      .first()
      .scrollIntoView({ force: true });
    cy.wait(3000);
    //Icon
    //Click on + icon of ICON Element
    cy.get(".v-btn--depressed > .v-btn__content > .inline-svg > path")
      .first()
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
    cy.get('[placeholder="Label"]').type(this.NewKitItemData.IconLabel);

    cy.wait(2000);
    //Click on to open UserSelector Pop up
    cy.get(".searchIcon").eq(2).click({ force: true });
    cy.contains(" Users ").should("be.visible");
    cy.wait(5000);
    cy.contains(this.NewKitItemData.UserSelectorName).click({ force: true });

    cy.log("UserSelect added");
    cy.wait(3000);

    //ContactSelector(Values coming form KitItemValues Json File)
    //Click on to open ContactSelector Pop up
    cy.get(".searchIcon").eq(3).click({ force: true });
    cy.contains("Connection").should("be.visible");

    cy.wait(4000);

    cy.contains(this.NewKitItemData.ContactSelectorName).click({ force: true });
    cy.log("ContactSelecto added");
    cy.wait(4000);

    //Link onetoone
    cy.get(".action-icon:nth-child(2) path").click({ force: true });
    cy.contains(" Related Items ").should("be.visible");
    cy.wait(2000);
    cy.get(
      ".row:nth-child(1) > .d-flex > .list-item-col-left > .v-avatar:nth-child(1) svg"
    ).click({ force: true });

    //Click on save
    cy.get(".ca-button-green > .v-btn__content").click({ force: true });
    cy.contains(" Bulk edit complete ").should("be.visible");
    cy.wait(2000);
  });

  it.only("Validate bulk Edit", function () {
    cy.wait(3000);
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
});
