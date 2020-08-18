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
    cy.fixture("KitTypeTestData/CypressAutomation").then(function (data) {
      this.Kit = data;
    });

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
      KitTypeData
    ) {
      this.KitTypeData = KitTypeData;
    });

    cy.fixture("KitTypeTestData/KitItemDataValues").then(function (KitDataEle) {
      this.KitData = KitDataEle;
    });
  });

  it.only("Kit Type Open", function () {
    //cy.wait(5000)
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    cy.wait(3000)
    //debugger;
    //Click on To open Kit Type
    KTP.SearchKitType(this.Kit.KitName3);
    cy.wait(3000)
    //This is class to open searched kit type by clicking + iocn
    cy.get('.truncate-special').first().click({force:true})
   // KTP.OpenKitType(this.Kit.KitName3);
    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.log("New Item created and Kit Type has been Opened");
  });

  it("Url Data Type", function () {
    cy.get('[name="Url"]').type(this.KitData.Url);
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
  });

  it("Text Data Type", function () {
    cy.get('[name="Text"]').type(this.KitData.Text);
    cy.wait(1000);
  });

  it("File Data Type", function () {
    cy.get(".link-icon--green > path").click({ force: true });
    cy.wait(3000);
    cy.get(".thumb-container:nth-child(5) .selected-icon").click({
      force: true,
    });
    cy.get(
      ".container-search > .pop-up--header > .pop-up--header--right > .button-pop-ups--size > .v-btn__content"
    ).click({ force: true });
    cy.wait(1000);
  });

  it("Telephone Data Type", function () {
    cy.get('[name="Telephone"]').type(this.KitData.Telphone);
    cy.wait(1000);
  });

  it("TextAera Data Type", function () {
    cy.get('[name="TextAera"]').type(this.KitData.TextAera);
    cy.wait(1000);
  });

  it("Slider", function () {
    //cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-slider.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div.v-input.theme--light.v-input__slider.col-sm-12.col-md-6.mb-4.px-3 > div > div.v-input__slot > div > div.v-slider__thumb-container > div')
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-slider.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div.v-input.v-input--is-label-active.v-input--is-dirty.theme--light.v-input__slider.col-sm-12.col-md-6.mb-4.px-3 > div > div.v-input__slot > div > div.v-slider__thumb-container > div"
    ).click({ force: true });
  });

  it("Currency", function () {
    //cy.contains('Currency').last().click({force:true}).type({force:true},'9878')

    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-currency.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-currency--right.ma-0.pa-0.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(this.KitData.Currency);
  });

  it("Measure", function () {
    //cy.contains('Measure').last().click({force:true}).type({force:true},"76678q2")

    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-measure.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-measure--left.ma-0.pa-0.pr-2.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(this.KitData.Measure);
  });

  it("Email", function () {
    cy.get('[name="Email"]').type(this.KitData.Email);
  });

  it.only("Address Data Type", function () {
    cy.get('[placeholder="Zip/Postal Code"]').scrollIntoView({ force: true });
    cy.wait(3000);

    // cy.get('[placeholder="Address"]').type(this.KitData.Address);
    // //Address count
    // cy.get('[name="Address Cont."]').type(this.KitData.AddressCount);

    // //Scrolling
    // cy.get('[placeholder="Zip/Postal Code"]').scrollIntoView({ force: true });
    // cy.wait(3000);

    // //City
    // cy.get('[placeholder="City"]').type(this.KitData.City);
    // //State
    // cy.get(
    //   "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-check-list.kit-control-address.kit-control--no-fixed-height.pa-3.col.col-12.px-3 > div > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    // ).click({ force: true });
    // cy.contains("Alaska").click({ force: true });
    // //ZipCode
    // cy.get('[placeholder="Zip/Postal Code"]').type(this.KitData.ZipCode);
    cy.wait(1000);
  });

  it("Number Data Type", function () {
    cy.get('[name="Number"]').scrollIntoView({ force: true });
    cy.wait(3000);
    cy.get('[name="Number"]').type(this.KitData.Number);
    cy.wait(1000);
  });

  it("Time and Date", function () {
    //Time
    cy.get('[placeholder="Zip/Postal Code"]').scrollIntoView({ force: true });
    cy.wait(3000);

    cy.get('[placeholder="Add Time"]').first().click({ force: true });

    cy.get(
      "#inspire > div:nth-child(1) > div > div > div.v-picker__body.theme--light > div > div.v-time-picker-clock.v-time-picker-clock--indeterminate.theme--light > div > span:nth-child(5)"
    )
      .first()
      .click({ force: true });

    cy.wait(5000);

    cy.get(
      "#inspire > div:nth-child(1) > div > div > div.v-picker__body.theme--light > div > div.v-time-picker-clock.v-time-picker-clock--indeterminate.theme--light > div > span:nth-child(5)"
    )
      .last()
      .click({ force: true });

    //Click on OK
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });
  });

  it("Date", function () {
    //Date

    cy.get('[placeholder="Add Date"]').first().click({ force: true });
    cy.get("tr:nth-child(2) > td:nth-child(5) .v-btn__content").click({
      force: true,
    });
    cy.get(".dateActions > .btnBorder:nth-child(1) > .v-btn__content").click({
      force: true,
    });
  });

  it("Toggle Data type", function () {
    cy.get(".sync-switch .v-input--selection-controls__ripple").click({
      force: true,
    });
  });

  it("SelectList Data type", function () {
    //Click on DropDown
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div:nth-child(17) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    ).click({ force: true });

    cy.contains("Value2").click({ force: true });
  });

  it.only("Radio CheckBox Data type", function () {
    cy.contains("Value22").click({ force: true });
  });

  it("CheckBoxSelect Data type", function () {
    cy.contains("Value222").click({ force: true });
    cy.contains("Value333").click({ force: true });
    cy.contains("Value444").click({ force: true });
    cy.contains("Value111").click({ force: true });

    cy.wait(5000);

    //save
    cy.get(".v-select__selections .v-btn__content").click({ force: true });
    //close
    cy.wait(5000);
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });
  });

  it.only("Stepper Data Element", function () {
    cy.contains("Stepper").scrollIntoView({ force: true });
    cy.get(".v-stepper__step:nth-child(5) > .v-stepper__step__step").click({
      force: true,
    });
  });

  it("UserSelector", function () {
    cy.get(".kit-control-component:nth-child(22) .inline-svg").click({
      force: true,
    });

    cy.contains("Deanne Howell").click({ force: true });
  });

  it("ContactSelector", function () {
    cy.get(".kit-control-component:nth-child(24) .inline-svg").click({
      force: true,
    });
    cy.contains("Vasu Deva").click({ force: true });
  });

  it.only("One To One Relation", function () {
    cy.contains("Stepper").scrollIntoView({ force: true });

    cy.get(".mr-4 > .inline-svg > path").click({ force: true });
    cy.wait(2000);
    //Assertion
    cy.contains("New Item created").should("be.visible");

    //Related New Form Elements Interaction
    //Name
    cy.get('[name="Name"]').type(this.KitItemData.Text);

    //Url
    cy.get('[name="Url"]').first().type(this.KitItemData.Url);

    //Related New Kit Type saved for One TO One Relation Control
    cy.get(
      ".v-dialog__content:nth-child(1) .fill-height:nth-child(3) .v-btn__content:nth-child(1)"
    ).click({ force: true });

    cy.wait(2000);
    cy.log("Related New Kit item has been Close");

    cy.wait(5000);
    cy.log("Related New Kit Type has been saved");

    cy.get(
      ".v-dialog__content:nth-child(3) .navi-bar:nth-child(1) .inline-svg:nth-child(1)"
    ).click({ force: true });
    cy.wait(2000);

    cy.log("Related New Kit item has been Close");
  });

  it.only("square card", function () {
    cy.wait(3000);

    cy.get(
      ".kit-control-grid:nth-child(25) .ma-2:nth-child(2) > .v-btn__content"
    ).click({ force: true });

    cy.wait(5000);

    //Assertion
    cy.contains("New Item created").should("be.visible");

    //Name
    cy.get('[name="Name"]').type(this.KitItemData.Text);

    //Url
    cy.get('[name="url"]').type(this.KitItemData.Url);

    //Related New Kit Type saved for Square Card Relation Control

    cy.get(
      ".v-dialog__content:nth-child(2) .fill-height:nth-child(3) .v-btn__content:nth-child(1)"
    )
    .click({ force: true });

    cy.log("Related New Kit Type has been saved");
    cy.wait(5000);
    cy.get(
      ".v-dialog__content:nth-child(2) .navi-bar:nth-child(1) .inline-svg:nth-child(1)"
    ).click({ force: true });
    cy.log("Related New Kit item has been Close");
  });

  it("Icon", function () {
    cy.get(".v-btn--depressed > .v-btn__content > .inline-svg > path").click({
      force: true,
    });
    cy.get(".thumb-container:nth-child(1) .selected-icon").click({
      force: true,
    });
    cy.get(".button-pop-ups").click({ force: true });
  });

  it("Inspection", function () {
    cy.contains("Value##2").click({ force: true });
  });

  it("Assigning", function () {
    cy.get(".searchIcon > .inline-svg > path").click({ force: true });

    cy.get(".list-item-search").click({ force: true });
    cy.get(".button-pop-ups--size > .v-btn__content").click({ force: true });
  });

  it("One To Many Relation Data Element", function () {
    cy.contains("NEW ITEM").scrollIntoView({ force: true });

    cy.contains("NEW ITEM").first().click({ force: true });
    //Assertion
    cy.contains("New Item created").should("be.visible");
  });

  it("New Item Kit(Related New Kit Type)", function () {
    cy.get('[name="Name"]').type(this.KitData.Text);

    cy.get('[name="Url"]').first().type(this.KitData.Url);
  });

  it("Save Related New Kit Type", function () {
    //Click on Save
    cy.get(".v-select__selections > .v-btn").first().click({ force: true });
    cy.log("Kit item has been saved");
    //Click on Close the kit item
    cy.get(".subheader--button-icon-wrapper .inline-svg")
      .last()
      .click({ force: true });

    cy.contains("Discard").click({ force: true });
  });

  

  it("Square Card New Item Kit(Related New Kit Type)", function () {
    cy.get('[name="Name"]').type(this.KitData.Text);

    cy.get('[name="Url"]').first().type(this.KitData.Url);

    cy.wait(5000);
  });

  // it('Save Related New Kit Type',function(){

  //   //Click on Save
  //   cy.get(".v-select__selections > .v-btn").first().click({force:true});
  //   cy.log("Kit item has been saved");
  //   //Click on Close the kit item
  //   cy.get(".subheader--button-icon-wrapper .inline-svg").last().click({force:true});

  //   cy.contains('Discard').click({force:true});

  // })

  // it("Kit Item Saved", function () {
  //   cy.wait(5000)
  //   //Click on Save
  //   cy.get(".v-select__selections > .v-btn").click({force:true});
  //   cy.log("Kit item has been saved");
  //   //Click on Close the kit item
  //   cy.wait(5000)
  //   cy.get(".subheader--button-icon-wrapper .inline-svg").click({force:true});
  // });
});
