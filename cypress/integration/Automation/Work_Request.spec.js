import LoginPage from "../PageObject/LoginPage";

describe("Basic Test Case for Element interaction for common area DT", function () {
  this.beforeAll(function () {
    const lp = new LoginPage();
    lp.visit();
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

    cy.fixture("KitName").then(function (data) {
      this.data = data;
    });
  });

  it.only("Test case  for accessing and locating the all DT in Work Request kitType Form 1", function () {
    //cy.wait(5000)
    const lp = new LoginPage();
    //Assert
    cy.title().should("eq", "Common Areas");
     lp.PlusIcon()
    //+ Icon
    //cy.get('.fill-height > .plus-button > .v-btn__content > .icon > .inline-svg').click()
    //cy.get(
      //"#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-header.box > div > div > div.app-header-left-and-center.fill-height.col-md-5.col-lg-4.col-xl-3.col-12 > div > div > div > div > div > div.fill-height.d-flex.col.col-8 > div > div.plus-wrapper.fill-height.hidden-sm-and-down > div > button"
    //).click();

    //debugger;
    //Click on WorkRequest
    cy.get(".my-3:nth-child(31) .menu-items-icon").click();

    //debugger;

    //clicked on icon
    cy.get(".black--text").click();
    cy.get(".thumb-container:nth-child(1) .selected-icon").click({
      force: true,
    });

    cy.get(".button-pop-ups > .v-btn__content").click();
    //cy.get('[placeholder=Name]').type('Tiger And Lion')
    cy.get("[placeholder=Name]").type("TP1");

    //Priority
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div > i"
    ).click({ force: true });
    cy.get(
      ".v-list-item:nth-child(3) > .v-list-item__content:nth-child(1)"
    ).click({ force: true });

    //status
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div:nth-child(5) > div > div > div.v-input__slot"
    ).click({ force: true });
    cy.get(
      '[aria-labelledby="in-progress-list-item-1420"] > .v-list-item__content'
    ).click({ force: true });

    //Assigning
    cy.get(".searchSelectNone .v-select__selections").click();
    cy.get(".v-list-item:nth-child(1) > .list-item-search").click();
    cy.get(".button-pop-ups--size > .v-btn__content").click();

    cy.get('[placeholder="Description"]').type("Testing");

    //Date
    //debugger
    //cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-date-picker.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div.v-input.no-bottom.date-picker-text-field.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder > div.v-input__control > div.v-input__slot > fieldset').click({force:true})
    //cy.get('td > .v-btn--outlined').click();
    //cy.get('.btnBorder:nth-child(1) > .v-btn__content').click();

    //Priorty
    //cy.get('[placeholder="Select Priority"]').click({force:true})
    //cy.get('.v-list-item:nth-child(3) > .v-list-item__content:nth-child(1)').eq(1).click({force:true});

    //debugger;
    //file
    cy.get(".dropzone-area-button:nth-child(2)")
      .scrollIntoView()
      .click({ force: true });
    cy.get(".thumb-container:nth-child(5) .selected-icon").click({
      force: true,
    });
    cy.get(
      ".container-search > .pop-up--header > .pop-up--header--right > .button-pop-ups--size > .v-btn__content"
    ).click({ force: true });

    //currency
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-currency.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-currency--right.ma-0.pa-0.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(12344);

    //Click on NewItem
    cy.get(".ma-2:nth-child(2) > .v-btn__content").click();
    //debugger
    cy.get('[placeholder="Enter Name"]').click().type("NewKit");
    //debugger

    //Property type
    //cy.get('#inspire > div:nth-child(3) > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div:nth-child(2)').click({force:true})
    //cy.get('#list-2750 > div:nth-child(3)').click({force:true})

    cy.get('[placeholder="Address"]').click().type("USA");
    //debugger

    cy.get('[placeholder="City"]').click().type("NYY");

    //ZipCode
    cy.get('[name="Zip/Postal Code"]').type(786775);
    //debugger
    //Save button
    cy.get(
      "#inspire > div:nth-child(1) > div > div > div > div:nth-child(2) > div.navi-bar.fill-height.d-flex.px-6.header-box-border.col.col-12 > div.fill-height.d-flex.align-center.justify-end.px-4.col-md-5.col-lg-7.col-xl-4.col-8 > div.navi-bar-dropdown.fill-height.align-center.overflow-max-width.col-md-9.col-lg-8.col-10 > div > div > div.v-input__slot > div.v-select__slot > div.v-select__selections > button > span"
    ).click();
    //cy.contains('SAVE').eq(1).click()

    //KitSavebtn
    cy.get(".navi-bar-dropdown:nth-child(2) .v-btn__content").eq(1).click();

    cy.wait(5000);
    //cy.get('.button__reset-filters .inline-svg').click();

    //refresh button
    cy.get(
      "#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div.base-layout-second-header.header-box-border.col.col-12 > div > div > div.fill-height.col.col-md-5.col-lg-4.col-xl-3 > div > div > div > div > div.d-flex.align-center.justify-end.col.app-secondary-header-left--buttons.fill-height.gray-divider > button"
    ).click({ force: true });

    cy.wait(10000);

    //debugger
    //KitInbox
    cy.get(
      "#action_items_list > div.fill-height.col > div > div > div.fill-height > div:nth-child(1)"
    ).click({ force: true });

    //cy.contains('Work Request, #1362').scrollIntoView().click({force:true})
    //cy.get('[placeholder="Select Date"]').eq(1).click()

    cy.get("[placeholder=Name]").then(function ($NameText) {
      //

      //debugger
      const text = $NameText.text();
      console.log(text);
      cy.get(".kitname-account-id").should("have.text", "TP1").debug();

      //debugger;

      // console.log(text).debug()
      // debugger;
    });
  });

  it("Test case  for accessing and locating the all DT in Work Request kitType Form  1 ", function () {
    //cy.wait(10000)

    //cy.reload()
    //Assert
    cy.title().should("eq", "Common Areas");

    //+ Icon
    //cy.get('.fill-height > .plus-button > .v-btn__content > .icon > .inline-svg').click()
    cy.get(
      "#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-header.box > div > div > div.app-header-left-and-center.fill-height.col-md-5.col-lg-4.col-xl-3.col-12 > div > div > div > div > div > div.fill-height.d-flex.col.col-8 > div > div.plus-wrapper.fill-height.hidden-sm-and-down > div > button"
    ).click();

    //debugger;
    //Click on WorkRequest
    //  cy.wait(60000)
    cy.get(".my-3:nth-child(31) .menu-items-icon").click();
    cy.wait(10000);

    //debugger;

    //clicked on icon
    debugger;
    //cy.wait(60000)
    cy.get(".black--text").click();
    cy.get(".thumb-container:nth-child(3) .selected-icon").click({
      force: true,
    });

    cy.get(".button-pop-ups > .v-btn__content").click();
    //cy.get('[placeholder=Name]').type('Ten Birds')
    cy.get("[placeholder=Name]").type("Checking");
    //cy.get('[placeholder=Name]').type(this.data.Name)

    //status
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div:nth-child(5) > div > div > div.v-input__slot"
    ).click({ force: true });
    cy.get(
      ".v-list-item:nth-child(3) > .v-list-item__content:nth-child(1)"
    ).click({ force: true });

    //Assigning
    cy.get(".searchSelectNone .v-select__selections").click();
    cy.get(".v-list-item:nth-child(2) > .list-item-search").click();
    cy.get(".button-pop-ups--size > .v-btn__content").click();

    //cy.get('[placeholder="Description"]').type('Testing for Ten Birds')
    cy.get('[placeholder="Description"]').type("Test2");

    //Date
    //debugger
    //cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-date-picker.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div.v-input.no-bottom.date-picker-text-field.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder > div.v-input__control > div.v-input__slot > fieldset').click({force:true})
    //cy.get('td > .v-btn--outlined').click();
    //cy.get('.btnBorder:nth-child(1) > .v-btn__content').click();

    //Priorty
    //cy.get('[placeholder="Select Priority"]').click({force:true})
    //cy.get('.v-list-item:nth-child(3) > .v-list-item__content:nth-child(1)').eq(1).click({force:true});

    //debugger;
    //file
    cy.get(".dropzone-area-button:nth-child(2)")
      .scrollIntoView()
      .click({ force: true });
    cy.get(".thumb-container:nth-child(6) .selected-icon").click({
      force: true,
    });
    cy.get(
      ".container-search > .pop-up--header > .pop-up--header--right > .button-pop-ups--size > .v-btn__content"
    ).click({ force: true });

    //currency
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-currency.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div > div.kit-control-currency--right.ma-0.pa-0.col > div > div > div.v-input__slot > div"
    )
      .click({ force: true })
      .type(1029297);

    //Click on NewItem
    cy.get(".ma-2:nth-child(2) > .v-btn__content").click();
    //debugger
    cy.get('[placeholder="Enter Name"]').click().type("NewKit for location");
    //debugger

    //Property type
    //cy.get('#inspire > div:nth-child(3) > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div:nth-child(2)').click({force:true})
    //cy.get('#list-2750 > div:nth-child(3)').click({force:true})

    cy.get('[placeholder="Address"]').click().type("Canada");
    //debugger

    cy.get('[placeholder="City"]').click().type("SfCo");

    //ZipCode
    cy.get('[name="Zip/Postal Code"]').type(8976575);
    //debugger
    //Save button
    cy.get(
      "#inspire > div:nth-child(1) > div > div > div > div:nth-child(2) > div.navi-bar.fill-height.d-flex.px-6.header-box-border.col.col-12 > div.fill-height.d-flex.align-center.justify-end.px-4.col-md-5.col-lg-7.col-xl-4.col-8 > div.navi-bar-dropdown.fill-height.align-center.overflow-max-width.col-md-9.col-lg-8.col-10 > div > div > div.v-input__slot > div.v-select__slot > div.v-select__selections > button > span"
    ).click();
    //cy.contains('SAVE').eq(1).click()

    //KitSavebtn
    cy.get(".navi-bar-dropdown:nth-child(2) .v-btn__content").eq(1).click();

    cy.wait(5000);
    //cy.get('.button__reset-filters .inline-svg').click();

    //refresh button
    cy.get(
      "#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div.base-layout-second-header.header-box-border.col.col-12 > div > div > div.fill-height.col.col-md-5.col-lg-4.col-xl-3 > div > div > div > div > div.d-flex.align-center.justify-end.col.app-secondary-header-left--buttons.fill-height.gray-divider > button"
    ).click({ force: true });

    cy.wait(10000);

    //debugger
    //KitInbox
    cy.get(
      "#action_items_list > div.fill-height.col > div > div > div.fill-height > div:nth-child(1)"
    ).click({ force: true });

    cy.get("[placeholder=Name]").then(function ($NameText) {
      //debugger
      const text = $NameText.text();
      console.log(text);
      cy.get(".kitname-account-id").should("have.text", "Checking").debug();

      //debugger;

      // console.log(text).debug()
      // debugger;
    });
  });

  it("Go to Work Request form HMB icon ", function () {
    //HM Icon
    //cy.get('#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-header.box > div > div > div.app-header-left-and-center.fill-height.col-md-5.col-lg-4.col-xl-3.col-12 > div > div > div > div > div > div.fill-height.d-flex.col.col-8 > div > div.ml-2.fill-height > div').click({force:true})

    //HMIcon
    cy.get(".fill-height > .v-btn > .v-btn__content > .v-icon").click();
    //Scroll and click on WorkRequest
    cy.get(
      "#inspire > div.v-application--wrap > div:nth-child(1) > aside > div.v-navigation-drawer__content > div > div > div:nth-child(22)"
    )
      .scrollIntoView()
      .click({ force: true });
    cy.wait(5000);
    //Click on Filter
    cy.get(
      ".fill-height > .v-btn > .v-btn__content > .btn-nav > #Layer_1"
    ).click({ force: true });

    //for filter kittypes
    cy.get('[name="Description"]').click().type("TP1");

    //cy.get('[name="Description"]').click().type(this.data.FilterData)

    //click on apply
    cy.get(".apply .v-btn__content").click({ force: true });

    cy.wait(5000);

    //cy.get('#action_items_list > div.fill-height.col > div > div > div.left-panel-top-panel-menu > div:nth-child(3) > div:nth-child(1)').click({force:true})

    cy.get(".row:nth-child(1) .v-list-item__subtitle:nth-child(3)").click({
      force: true,
    });

    //cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-date-picker.px-3.col.col-sm-12.col-md-6.mb-4.px-3 > div.v-input.no-bottom.date-picker-text-field.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder > div.v-input__control > div.v-input__slot > fieldset').click({force:true})
    //cy.get('td > .v-btn--outlined').click();
  });
});
