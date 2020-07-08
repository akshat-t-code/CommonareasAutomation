import LoginPage from "../PageObject/LoginPage";

describe("Basic Test Case for Element interaction for Work Request kit type", function () {
  this.beforeAll(function () {
    cy.viewport(1280, 720);
    const lp = new LoginPage();
    cy.visit("http://serviceproviders.ca-build.com/Public/Login?ReturnUrl=%2F");
    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();

    // Cypress.Cookies.preserveOnce(
    //   ".AspNet.ApplicationCookie",
    //   "ASP.NET_SessionId",
    //   "ca-cf-auth",
    //   "kit-detail-selected-tab",
    //   "jwt"
    // );
  });

  this.beforeEach("Fixtures file data", function () {
    cy.fixture("KitItemTestData/WorkRequestKit2").then(function (data) {
      this.data = data;
    });
  });

  it.only("New Form of Work Request", function () {
    //cy.wait(5000)
    const lp = new LoginPage();
    //Assert
    cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    //Click on Work Request
    cy.get(".my-3:nth-child(48) > .flex").click();

    cy.wait(5000);
    //cy.contains("No Thanks").click({ force: true });

    //Name
    cy.get('[placeholder="Name"]').type(this.data.Name);

    //Assiging
    cy.get(".searchIcon > .inline-svg").click({ force: true });
    cy.get(".v-list > .v-list-item:nth-child(1)").click({ force: true });
    cy.get(".button-pop-ups--size").click({ force: true });

    cy.get('[placeholder="Select Priority"]').click({ force: true });
    cy.contains("Normal").click({ force: true });

    cy.get('[placeholder="Select Status"]').click({ force: true });
    cy.contains("On Hold").click({ force: true });

    //Close Date
    //  cy.get('.v-input__icon--clear > .v-icon').click();

    //  cy.get('#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div:nth-child(5) > div.v-input.no-bottom.date-picker-text-field.v-input--is-readonly.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder > div.v-input__control > div.v-input__slot > div.v-text-field__slot')
    //  .click({force:true})
    //  cy.get('tr:nth-child(5) > td:nth-child(5) .v-btn__content').click({force:true});
    //  cy.get('.btnBorder:nth-child(1) > .v-btn__content').click({force:true});

    // //Description
    // cy.get('[placeholder="Description"]').type(this.data.Description);

    // cy.get(".v-btn--depressed > .v-btn__content > .inline-svg").scrollIntoView({
    //   force: true,
    // });
    // //Icon
    // cy.get(".v-btn--depressed > .v-btn__content > .inline-svg").click({
    //   force: true,
    // });
    // cy.get(".thumb-container:nth-child(1) .selected-icon").click({
    //   force: true,
    // });
    // cy.get(".button-pop-ups > .v-btn__content").click({ force: true });

    // cy.contains("currency").click({ force: true });
    //.type('6767674674')

    //Test Date
    //cy.get('[placeholder="Test Date"]').eq(1).click({force:true})

    //Work Request save btn
    //save
    //  cy.get('.navi-bar-dropdown:nth-child(2) .v-btn__content')
    //   .click({ force: true });
  });

  it("Work Request all tabs", function () {
    cy.wait(5000);
    // const lp = new LoginPage();
    //   //Assert
    //   cy.title().should("eq", "Common Areas");
    //    lp.PlusIcon()
    //    //Click on Work Request
    //    cy.get('.my-3:nth-child(48) > .flex').click();

    //Click on File
    cy.contains("Files").click({ force: true });
    cy.wait(3000);
    cy.contains("Choose From Library").click({ force: true });
    //Select one File
    cy.get(".thumb-container:nth-child(4) .selected-icon").click({
      force: true,
    });
    //cy.get('.button-pop-ups--size > .v-btn__content').click({force:true});
    //Select Second File
    cy.get(
      "#inspire > div:nth-child(2) > div > div > div > div.container-search.container-dialog-grid.v-card.v-sheet.theme--light > div.pop-up--content.col.col-12 > div.subpop-up--content.col.col-12 > div > div > div > div.infinite-scroll-wrapper.ma-0.pa-0.col > div > div:nth-child(3) > div.file-image__wrapper"
    ).click({ force: true });
    //Save File
    cy.get(
      "#inspire > div:nth-child(2) > div > div > div > div.container-search.container-dialog-grid.v-card.v-sheet.theme--light > div.pop-up--header.px-4.col.col-12 > div.pop-up--header--right.d-flex.justify-end.align-center.col.col-4 > button"
    ).click({ force: true });
    cy.wait(3000);
    //Click On Contributors
    cy.contains("Contributors").click({ force: true });
    cy.wait(3000);
    cy.get(".addBtn > .v-btn__content").click({ force: true });
    cy.get(".col:nth-child(3) .v-input--selection-controls__ripple").click({
      force: true,
    });
    cy.get(
      ".v-list-item:nth-child(1) > .list-item-search > .v-list-item__title"
    ).click({ force: true });
    //cy.get('.button-pop-ups--size > .v-btn__content').click({force:true});
    cy.get(
      "#inspire > div:nth-child(1) > div > div > div > div > div.col-12.col > div > div.pop-up--header--right.d-flex.justify-end.align-center.col.col-4 > button"
    ).click({ force: true });

    //Click On Time Entries
    cy.contains("Time Entries").click({ force: true });
    cy.wait(3000);
    cy.get(".ml-4 > .v-btn__content").click({ force: true });
    //Click on Time Type
    cy.contains("Time Type").click({ force: true });
    cy.contains("General Maintenance ").click({ force: true });

    cy.get('[name="totalHours"]').type(this.data.totalHours2);
    //Date
    cy.get('[name="startdate"]').click({ force: true });
    cy.get(".accent--text > .v-btn__content").click({ force: true });
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });
    cy.get('[placeholder="Add a Description"]').type(
      this.data.TimeDescription2
    );
    //save Time Entery
    cy.get(".col-3 > .ca-button-green > .v-btn__content").click();

    //Click on Comment
    cy.contains("Comments").click({ force: true });
    cy.wait(3000);
    cy.get('[name="addComment"]').type(this.data.AddComment2);
    cy.wait(2000);
    //Save Comment
    cy.get(".left-align > .v-btn__content").click({ force: true });

    //Click on Groups
    cy.contains("Groups").click({ force: true });
    //Click on Add
    cy.get(".ml-0 > .v-btn__content").click();
    //Add Group
    cy.get(".v-list-item:nth-child(2) > .pl-2 > .v-list-item__title").click();
    cy.wait(3000);
  });

  it("Related New form(Location(Child) Kit type)", function () {
    const lp = new LoginPage();
    //Assert
    cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    //Click on Work Request
    cy.get(".my-3:nth-child(48) > .flex").click();
    cy.wait(3000);
    cy.contains("Details").click({ force: true });
    cy.wait(2000);
    //Click on New Item
    cy.get(".ma-2:nth-child(2) > .v-btn__content").click({ force: true });
    cy.wait(5000);
    //Name
    cy.get('[placeholder="Enter Name"]').type(this.data.LocationName);

    //Property Type
    cy.get(
      "#inspire > div:nth-child(1) > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div:nth-child(2) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    ).click({ force: true });
    cy.contains("Automotive").click({ force: true });
    //Address
    cy.get('[placeholder="Address"]').type(this.data.Address);
    //Address count
    cy.get('[name="Address Cont."]').type(this.data.AddressCount);
    //City
    cy.get('[placeholder="City"]').type(this.data.City);
    //State
    cy.get(
      "#inspire > div:nth-child(2) > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-check-list.kit-control-address.kit-control--no-fixed-height.pa-3.col.col-12.px-3 > div > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    ).click({ force: true });
    cy.contains("Alaska").click({ force: true });
    //ZipCode
    cy.get('[placeholder="Zip/Postal Code"]').type(this.data.ZipCode);

    //Click on File
    cy.contains("Files").click({ force: true });
    cy.contains("Choose From Library").click({ force: true });
    cy.get(".thumb-container:nth-child(4) .selected-icon").click({
      force: true,
    });
    cy.get(".button-pop-ups--size > .v-btn__content").click({ force: true });

    //Click On Contributors
    cy.contains("Contributors").click({ force: true });
    cy.get(".addBtn > .v-btn__content").click({ force: true });
    cy.get(".col:nth-child(3) .v-input--selection-controls__ripple").click({
      force: true,
    });
    cy.get(
      ".v-list-item:nth-child(1) > .list-item-search > .v-list-item__title"
    ).click({ force: true });
    cy.get(".button-pop-ups--size > .v-btn__content").click({ force: true });

    //Click On Time Entries
    cy.contains("Time Entries").click({ force: true });
    cy.wait(3000);
    //Click on Add
    cy.get(".ml-4 > .v-btn__content").click({ force: true });
    //Click on Time Type
    cy.contains("Time Type").click({ force: true });
    cy.contains("General Maintenance ").click({ force: true });

    cy.get('[name="totalHours"]').type(this.data.totalHours);
    //Date
    cy.get('[name="startdate"]').click({ force: true });
    cy.get(".accent--text > .v-btn__content").click({ force: true });
    cy.get(".btnBorder:nth-child(1) > .v-btn__content").click({ force: true });
    cy.get('[placeholder="Add a Description"]').type(this.data.TimeDescription);
    //save Time Entery
    cy.get(".col-3 > .ca-button-green > .v-btn__content").click();

    //Click on Comment
    cy.contains("Comments").click({ force: true });

    cy.get('[name="addComment"]').type(this.data.AddComment);
    cy.wait(2000);
    //Save Comment
    cy.get(".left-align > .v-btn__content").click({ force: true });
    cy.wait(3000);
    //Click on Groups
    cy.contains("Groups").click({ force: true });
    //Click on Add
    cy.get(".ml-0 > .v-btn__content").click();
    //Add Group
    cy.get(".v-list-item:nth-child(2) > .pl-2 > .v-list-item__title").click();

    //Location save button
    // cy.get('#inspire > div:nth-child(2) > div > div > div > div:nth-child(2) > div.navi-bar.fill-height.d-flex.px-6.header-box-border.col.col-12 > div.fill-height.d-flex.align-center.justify-end.px-4.col-md-5.col-lg-7.col-xl-4.col-8 > div.navi-bar-dropdown.fill-height.align-center.overflow-max-width.col-md-9.col-lg-8.col-10 > div > div > div.v-input__slot > div.v-select__slot')
    cy.get(".navi-bar-dropdown:nth-child(2) .v-btn__content")
      .eq(1)
      .click({ force: true });
    // cy.wait(2000)

    //Close Location Kit
    cy.get(".navi-bar--button .v-icon").click();
    cy.wait(3000);

    // //Save Work Request
    // cy.get(
    //   "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.navi-bar.fill-height.d-flex.px-6.header-box-border.col.col-12 > div.fill-height.d-flex.align-center.justify-end.px-4.col-md-5.col-lg-7.col-xl-4.col-8 > div.navi-bar-dropdown.fill-height.align-center.overflow-max-width.col-md-9.col-lg-8.col-10 > div > div > div.v-input__slot > div.v-select__slot > div.v-select__selections > button"
    // ).click({ force: true });

    // //Close Work Request
    // cy.get(".subheader--button-icon-wrapper path").click();
    // //Refresh
    // cy.wait(3000);
    // cy.get(".button__reset-filters > .v-btn__content").click();
    // //Kit Inbox
    // cy.wait(3000);
    // cy.get(
    //   "#action_items_list > div.fill-height.col > div > div > div.fill-height > div:nth-child(1)"
    // ).click({ force: true });
  });
});
