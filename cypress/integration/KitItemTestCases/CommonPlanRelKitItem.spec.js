import LoginPage from "../PageObject/LoginPage";

describe("CommonPlan Test Case for Related KitItem", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    lp.visitServiceBuild();
    lp.EnterEmail("dzhao@commonareas.work.dev");
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
    cy.fixture("KitTypeTestData/CommonPlanRelKitItemData").then(function (
      CommonPlanRelatedKitItemData
    ) {
      this.CPRelKitItemData = CommonPlanRelatedKitItemData;
    });

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType2 = NewDataForElements;
    });

    cy.fixture("KitTypeTestData/CommonPlanKitType").then(function (KitName) {
      this.KitName = KitName;
    });
  });

  it.only("Open Created Kit type form left Panel", function () {
    //Page Object
    const lp = new LoginPage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    cy.wait(10000);
    //Click on Hamburger Icon
    lp.HMBIcon();
    cy.contains(this.KitName.CommonPlanKitName).scrollIntoView({
      force: true,
    });
    cy.wait(5000);
    //Open KitType from left paneal
    cy.contains(this.KitName.CommonPlanKitName).click({
      force: true,
    });
    cy.log("Kit Type has been OPened");
    cy.wait(5000);
  });

  it.only("CommonPlan Tab", function () {
    //Click on First kit item of kit type to open edit view
    cy.get(
      "#action_items_list > div.fill-height.col > div > div > div.left-panel-top-panel-menu > div:nth-child(3) > div:nth-child(1) > div > div.d-flex.kit-item-list.list-item-col-right.col.row-list-item-details"
    ).click({ force: true });
    cy.log("Kit Item Detail View has been Opened");
    cy.wait(3000);
    //Click on Common Plan Tab
    cy.contains("Common Plans").click({ force: true });
    cy.wait(1000);

    /*
    //Click on Add Icon
    cy.get(".ml-4").click({ force: true });
    cy.log("Common Plan Board has been Opened");
    cy.wait(2000);

    //Creating Plan
    cy.get('[placeholder="Plan Name"]').type(this.KitName.CommonPlanName);
    //Click on save btn to create common plan
    cy.get(".new-kit-space-planner-wrapper__save > .v-btn__content").click({
      force: true,
    });
    cy.log("Common Plan created and Saved");
    cy.contains("Plan created").should("be.visible");
    cy.wait(2000);
    //Exit the Plan
    cy.get(".new-kit-space-planner-wrapper__exit path").click({ force: true });
    cy.log("Taken Exit form Layout Mode");
    cy.wait(2000);

    */

    //To click on Created CommonPlan(CP)
    //NOte-Indexes use for if there are more than one common plan---for 1st CP index is 0,for 2nd it would be 1 ,and so on
    cy.get(".space-planner-card--name").eq(0).click({ force: true });
    cy.wait(2000);
    //Click on Layout
    cy.get('[value="EDIT"]').click({ force: true });
    cy.log("Common Plan has Opened in LayOut Mode");
    cy.wait(2000);

    //Click on related kitItem name to expend (index wise nth-child(1/3/5))
    cy.get(".group:nth-child(1) > .group-label").click({ force: true });
    cy.wait(2000);
    //DoubleClick on the related Item
    cy.get('[data-tooltip="99Acres"]').dblclick({ force: true });
    cy.wait(3000);

    // //File
    // //Click on cross
    // cy.get(".v-icon--link:nth-child(2)").click();
    // cy.wait(1000);
    // cy.contains(" Discard ").click();
    // cy.wait(1000);

    // cy.get(".link-icon--green > path").eq(0).click({ force: true });
    // cy.wait(3000);
    // cy.get(".thumb-container:nth-child(5) .selected-icon").click({
    //   force: true,
    // });
    // cy.get(
    //   ".container-search > .pop-up--header > .pop-up--header--right > .button-pop-ups--size > .v-btn__content"
    // ).click({ force: true });
    // cy.wait(1000);

    // //Stepper
    // cy.get("[name" + "=" + this.DataType2.StepperName + "]")
    //   .first()
    //   .scrollIntoView({
    //     force: true,
    //   });
    // cy.wait(2000);

    // //Stepper
    // cy.get(".v-stepper__step:nth-child(1) > .v-stepper__step__step")
    //   .eq(0)
    //   .click({
    //     force: true,
    //   });

    //Time
    cy.get(".v-input__append-inner > .v-input__icon--clear > .v-icon")
      .eq(0)
      .click();
    cy.wait(2000);

    //Date
    cy.get(
      "div.v-input.no-bottom.date-picker-text-field.v-input--is-label-active.v-input--is-dirty.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder > div.v-input__control > div.v-input__slot > div.v-input__append-inner"
    ).click();
    cy.wait(2000);

    cy.wait(2000);
    //Click on cross of userSelector to add new value
    cy.get(
      "span > div > div > div.v-input__slot > div.v-select__slot > div:nth-child(3) > div"
    )
      .eq(0)
      .click();
    cy.wait(2000);
    // //UserSelector(Values coming form KitItemValues Json File)
    // //Click on to open UserSelector Pop up
    // cy.get(".searchIcon").eq(2).click({ force: true });
    // cy.wait(3000);
    // cy.contains(this.CPRelKitItemData.UserSelectorName).click({ force: true });
    // cy.wait(3000);

    // ContactSelector(Values coming form KitItemValues Json File)
    // Click on to open ContactSelector Pop up
    // Click on cross of ContactSelector to add new value
    cy.get(
      "span > div > div > div.v-input__slot > div.v-select__slot > div:nth-child(3) > div"
    )
      .eq(1)
      .click();
    // cy.wait(2000);
    // cy.get(".searchIcon").eq(3).click({ force: true });

    // cy.wait(4000);
    // cy.contains(this.CPRelKitItemData.ContactSelectorName).click({
    //   force: true,
    // });
    // cy.wait(4000);

    //Inspection(Values coming form KitItemValues Json File)
    cy.contains(this.DataType2.InspectionName).first().scrollIntoView({
      force: true,
    });

    // //Icon
    // //Click on + icon of ICON Element
    // cy.wait(2000);
    // cy.get(".v-btn__content > img").click({
    //   force: true,
    // });

    // //Click on Icon Tittle and  select Icon logo
    // //Give numeric no from 1 in child(1,2,3...)
    // cy.get(".thumb-container:nth-child(4) .selected-icon").click({
    //   force: true,
    // });
    // cy.wait(2000);
    // //Icon Save
    // cy.get(".button-pop-ups").click({ force: true });
    // cy.wait(2000);

    // //IcozSize
    // cy.get(
    //   "div.row.wrapper-kit-control.align-center > div > div.fill-height.border-right.col.col-4 > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    // )
    //   .eq(0)
    //   .click({ force: true });
    // cy.contains(this.CPRelKitItemData.ExtraLargeiconSize).click({
    //   force: true,
    // });
    // cy.wait(2000);
    // //IconLable
    // cy.get('[placeholder="Label"]')
    //   .eq(0)
    //   .clear()
    //   .type(this.CPRelKitItemData.IconLabel);

    cy.wait(3000);
    //child 1 for 1st value &&&& child 2 for 2nd value-child 3 for 3rd value......
    //"These are the index value of div child":"use according to select inspection value",
    // cy.get(
    //   "div.v-slide-group__wrapper > div > span:nth-child(" +
    //     this.CPRelKitItemData.InspectionValue3 +
    //     ") > span"
    // ).click({ force: true });
    // cy.log("Inspection Value has been selected");

    cy.wait(3000);
    //Assigning
    //Click on cross icon to select new Assigning value
    cy.get(
      "span > div > div > div.v-input__slot > div.v-select__slot > div:nth-child(3) > div"
    )
      .eq(2)
      .click();

    // //Click on to open Assigning Pop up
    // cy.get(".searchIcon").eq(4).click({ force: true });
    // cy.wait(3000);
    // //Click on to select the Assigning
    // //cy.get(".list-item-search").first().click({ force: true });
    // cy.contains(this.CPRelKitItemData.AssigningName).click({ force: true });
    cy.wait(3000);
  });

  it("Details View Form Edit", function () {
    /*

    //Url
    cy.get("[name" + "=" + this.DataType2.Url + "]")
      .eq(1)
      .clear()
      .type(this.CPRelKitItemData.Url);
    cy.wait(1000);

    //Text
    cy.get("[name" + "=" + this.DataType2.Text + "]")

      .eq(1)
      .clear()
      .type(this.CPRelKitItemData.Text);
    cy.wait(1000);

    //File
    //Click on cross
    cy.get(".v-icon--link:nth-child(2)").click();
    cy.wait(1000);
    cy.contains(" Discard ").click();
    cy.wait(1000);

    // cy.get(".link-icon--green > path").first().click({ force: true });
    // cy.wait(3000);
    // cy.get(".thumb-container:nth-child(5) .selected-icon").click({
    //   force: true,
    // });
    // cy.get(
    //   ".container-search > .pop-up--header > .pop-up--header--right > .button-pop-ups--size > .v-btn__content"
    // ).click({ force: true });
    // cy.wait(1000);

    //Telephone
    cy.get("[name" + "=" + this.DataType2.Telephone + "]")

      .eq(1)
      .clear()
      .type(this.CPRelKitItemData.Telephone);
    cy.wait(1000);

    //TextAera
    cy.get("[name" + "=" + this.DataType2.TextAera + "]")

      .eq(1)
      .clear()
      .type(this.CPRelKitItemData.TextAera);
    cy.wait(1000);

    //Slider;

    // Currency;
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-currency.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-currency--right.ma-0.pa-0.col > div > div > div.v-input__slot > div"
    )
      .clear()
      .click({ force: true })
      // .clear()
      .type(this.CPRelKitItemData.Currency);

    //Measure

    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-measure.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-measure--left.ma-0.pa-0.pr-2.col > div > div > div.v-input__slot > div"
    )
      .clear()
      .click({ force: true })
      //.clear()
      .type(this.CPRelKitItemData.Measure);

    //Email;
    cy.get("[name" + "=" + this.DataType2.Email + "]")

      .eq(1)
      .clear()
      .type(this.CPRelKitItemData.Email);
    cy.wait(1000);

    //Address
    cy.get(
      '[placeholder="Street address, bulding, company ... "][name="Address"]'
    )
      .eq(0)
      .clear()
      .type(this.CPRelKitItemData.Addressline1);
    cy.wait(1000);
    //Address line2
    cy.get('[name="Address line 2."]')
      .eq(0)
      .clear()
      .type(this.CPRelKitItemData.Addressline2);
    cy.wait(1000);

    //City
    cy.get('[placeholder="City"]')
      .eq(0)
      .clear()
      .type(this.CPRelKitItemData.City);
    cy.wait(2000);
    //State
    cy.get(
      "div:nth-child(2) > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    )
      .eq(0)
      .click({ force: true });
    cy.contains(this.CPRelKitItemData.State).click({ force: true });

    cy.get('[placeholder="Zip/Postal Code"]')
      .eq(0)
      .scrollIntoView({ force: true });
    cy.wait(1000);

    //ZipCode
    cy.get('[placeholder="Zip/Postal Code"]')
      .eq(0)
      .clear()
      .type(this.CPRelKitItemData.ZipCode);
    cy.wait(1000);

    //Number
    cy.get("[name" + "=" + this.DataType2.Number + "]")
      .eq(1)
      .clear()
      .type(this.CPRelKitItemData.Number);
    cy.wait(1000);

    //Time
    cy.get(".v-input__append-inner > .v-input__icon--clear > .v-icon")
      .eq(0)
      .click();
    cy.wait(2000);
    cy.get('[placeholder="Add Time"][type="text"]')
      .eq(0)
      .click({ force: true });
    cy.wait(1000);
    //Select hour value
    cy.xpath(
      "//div[contains(@class,'v-dialog v-dialog--active')]//span[4]"
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
    cy.wait(3000);

    //Date
    cy.get(".v-input__append-inner > .v-input__icon--clear > .v-icon")
      .eq(1)
      .click();
    cy.wait(2000);
    //Click on Date to appear Date pop up
    cy.get('[placeholder="Add Date"][type="text"]')
      .eq(0)
      .click({ force: true });
    cy.xpath("//div[@class='v-btn__content'][contains(text(),'30')]").click({
      force: true,
    });
    cy.wait(2000);
    //Click on OK to save Date
    cy.xpath("//span[contains(text(),'OK')]").first().click({ force: true });
    */
    cy.wait(2000);

    //Toggle
    cy.get(".sync-switch .v-input--selection-controls__ripple").first().click({
      force: true,
    });

    //Click on DropDown of SelectList
    cy.wait(3000);
    cy.contains(this.CPRelKitItemData.SelectListValue).click({ force: true });
    cy.wait(2000);
    //SelectList Value(Values coming form KitItemValues Json File)
    //Selecting SelectList value again
    cy.contains(this.CPRelKitItemData.SelectListValueAgain).click({
      force: true,
    });
    cy.wait(2000);

    //RadioSelect
    cy.contains(this.CPRelKitItemData.RadioSelectValue).click({ force: true });
    cy.wait(2000);

    //CheckboxSelect(Values coming form KitItemValues Json File)
    cy.contains(this.CPRelKitItemData.CheckboxSelectValue1).click({
      force: true,
    });
    cy.contains(this.CPRelKitItemData.CheckboxSelectValue2).click({
      force: true,
    });
    cy.contains(this.CPRelKitItemData.CheckboxSelectValue3).click({
      force: true,
    });

    //Selecting again
    cy.contains(this.CPRelKitItemData.CheckboxSelectValue1).click({
      force: true,
    });

    cy.wait(5000);

    //Stepper
    cy.get("[name" + "=" + this.DataType2.StepperName + "]")
      .first()
      .scrollIntoView({
        force: true,
      });
    cy.wait(2000);

    //Stepper
    cy.get(".v-stepper__step:nth-child(1) > .v-stepper__step__step")
      .eq(0)
      .click({
        force: true,
      });

    cy.wait(2000);
    cy.get(".v-input__append-inner > .v-input__icon--clear > .v-icon")
      .eq(2)
      .click();
    cy.wait(2000);
    //UserSelector(Values coming form KitItemValues Json File)
    //Click on to open UserSelector Pop up
    cy.get(".searchIcon").eq(0).click({ force: true });
    cy.wait(3000);
    //cy.contains(this.CPRelKitItemData.UserSelectorName).click({ force: true });
    cy.wait(3000);

    //ContactSelector(Values coming form KitItemValues Json File)
    //Click on to open ContactSelector Pop up
    cy.get(".v-input__append-inner > .v-input__icon--clear > .v-icon")
      .eq(3)
      .click();
    cy.wait(2000);
    cy.get(".searchIcon").eq(1).click({ force: true });

    cy.wait(4000);
    cy.contains(this.CPRelKitItemData.ContactSelectorName).click({
      force: true,
    });
    cy.wait(4000);

    //Inspection(Values coming form KitItemValues Json File)
    cy.contains(this.DataType2.InspectionName).first().scrollIntoView({
      force: true,
    });
    cy.wait(3000);
    //child 1 for 1st value &&&& child 2 for 2nd value-child 3 for 3rd value......
    //"These are the index value of div child":"use according to select inspection value",
    cy.get(
      "div.v-slide-group__wrapper > div > span:nth-child(" +
        this.CPRelKitItemData.InspectionValue3 +
        ") > span"
    ).click({ force: true });

    cy.wait(3000);
    //Assigning
    //Click on to open Assigning Pop up-Also working
    //cy.get(".searchIcon > .inline-svg > path").last().click({ force: true });

    //Click on to open Assigning Pop up
    cy.get(".searchIcon").eq(2).click({ force: true });
    cy.wait(3000);
    //Click on to select the Assigning
    //cy.get(".list-item-search").first().click({ force: true });
    cy.contains(this.CPRelKitItemData.AssigningName).click({ force: true });
    cy.wait(3000);
    //Click on to save
    cy.get(".button-pop-ups--size > .v-btn__content").click({ force: true });
    cy.wait(4000);
  });
});
