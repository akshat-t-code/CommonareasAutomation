import LoginPage from "../PageObject/LoginPage";
import KitTypePage from "../PageObject/KitTypePage";

describe("Basic Test Case for Element interaction for common area DT", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
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

    cy.fixture("KitTypeTestData/KitTtypeDataElements").then(function (
      KitDataEle
    ) {
      this.KitData = KitDataEle;
    });
  });

  it("CypressAutomation Kit type", function () {
    //cy.wait(5000)
    const lp = new LoginPage();
    const KTP = new KitTypePage();
    //Assertion
    cy.title().should("eq", "Common Areas");
    lp.PlusIcon();
    //debugger;
    //Click on To open Kit Type
    KTP.SearchKitType(this.Kit.KitName);
    KTP.OpenKitType(this.Kit.KitName);
    //Assertion
    cy.contains("New Item created").should("be.visible");
    cy.log("New Item created and Kit Type has been Opened");
  });

  it("Element Interation", function () {
    //Url
    cy.get('[name="Url"]').type(this.KitData.Url);
    cy.wait(1000);

    //Text
    cy.get('[name="Text"]').type(this.KitData.Text);
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
    cy.get('[name="Telephone"]').type(this.KitData.Telphone);
    cy.wait(1000);

    //TextAera
    cy.get('[name="TextAera"]').type(this.KitData.TextAera);
    cy.wait(1000);

    //Address
    cy.get('[placeholder="Address"]').type(this.KitData.Address);
    //Address count
    cy.get('[name="Address Cont."]').type(this.KitData.AddressCount);

    //Scrolling
    cy.get('[placeholder="Zip/Postal Code"]').scrollIntoView({ force: true });
    cy.wait(3000);

    //City
    cy.get('[placeholder="City"]').type(this.KitData.City);
    //State
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div.kit-control-component.kit-control-check-list.kit-control-address.kit-control--no-fixed-height.pa-3.col.col-12.px-3 > div > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    ).click({ force: true });
    cy.contains("Alaska").click({ force: true });
    //ZipCode
    cy.get('[placeholder="Zip/Postal Code"]').type(this.KitData.ZipCode);
    cy.wait(1000);

    //Number
    cy.get('[name="Number"]').scrollIntoView({ force: true });
    cy.wait(3000);
    cy.get('[name="Number"]').type(this.KitData.Number);
    cy.wait(1000);

    //Time Data Element
    cy.get('[placeholder="Add Time"]').first().click({force:true})
    //Hour
    cy.get('#inspire > div:nth-child(1) > div > div > div.v-picker__body.theme--light > div > div.v-time-picker-clock.v-time-picker-clock--indeterminate.theme--light > div > span:nth-child(5)')
    .first().click({force:true})

    cy.wait(5000)
    //Min
    cy.get('#inspire > div:nth-child(1) > div > div > div.v-picker__body.theme--light > div > div.v-time-picker-clock.v-time-picker-clock--indeterminate.theme--light > div > span:nth-child(5)')
    .last().click({force:true})

    //Click on OK
    cy.get('.btnBorder:nth-child(1) > .v-btn__content').click({force:true})

    //Date Data Element
    cy.get('[placeholder="Add Date"]').first().click({force:true})
    cy.get('tr:nth-child(2) > td:nth-child(5) .v-btn__content').click({force:true})
    cy.get('.dateActions > .btnBorder:nth-child(1) > .v-btn__content').click({force:true});

    //Toggle
    cy.get(".sync-switch .v-input--selection-controls__ripple").click({
      force: true,
    });

    //Click on DropDown of SelectList
    cy.get(
      "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div:nth-child(2) > div.new-kit-item.v-card.v-sheet.theme--light > div > div > div > div > div.row.kit-details-wrapper--content.pb-0 > div > div > div > div > div > div > div.tab--content.col > div > div > div.v-window-item.v-window-item--active > div > div > div.row.container-details > div.fill-height.col > div > div > div:nth-child(13) > div > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    ).click({ force: true });
    //Select Value
    cy.contains("Value2").click({ force: true });

    //RadioSelect
    cy.contains("Value22").click({ force: true });

    //CheckboxSelect
    cy.contains("Value222").click({ force: true });
    cy.contains("Value333").click({ force: true });
    cy.contains("Value444").click({ force: true });
    cy.contains("Value111").click({ force: true });

    cy.wait(5000);

    //Stepper
    cy.contains("Stepper").scrollIntoView({ force: true });
    cy.get(".v-stepper__step:nth-child(5) > .v-stepper__step__step").click({
      force: true,
    });

    //Scrolling
    cy.contains("NEW ITEM").scrollIntoView({ force: true });
    //New Item Kit(Related New Kit Type)
    cy.contains("NEW ITEM").first().click({ force: true });
    //Assertion
    cy.contains("New Item created").should("be.visible");

    //Related New Form Elements Interaction
    //Name
    cy.get('[name="Name"]').type(this.KitData.Text);

    //Url
    cy.get('[name="Url"]').first().type(this.KitData.Url);

    //Related New Kit Type saved for One to many Relation Control
    cy.get(
      ".v-dialog__content:nth-child(1) .fill-height:nth-child(3) .v-btn__content:nth-child(1)"
    ).click();
    cy.log("Related New Kit Type has been saved");
    cy.get(
      ".v-dialog__content:nth-child(1) .navi-bar:nth-child(1) .inline-svg:nth-child(1)"
    ).click();

    //Click on New Item Related New Kit Type for Square Card Relation Control
    cy.get('.kit-control-grid:nth-child(18) .ma-2:nth-child(2) > .v-btn__content')
    .click({force:true});

    //Assertion
    cy.contains("New Item created").should("be.visible");

    //Name
    cy.get('[name="Name"]').type(this.KitData.Text);

    //Url
    cy.get('[name="url"]').type(this.KitData.Url);

    //Related New Kit Type saved for Square Card Relation Control
    cy.get(
      ".v-dialog__content:nth-child(1) .fill-height:nth-child(3) .v-btn__content:nth-child(1)"
    ).click();
    cy.log("Related New Kit Type has been saved");
    cy.get(
      ".v-dialog__content:nth-child(1) .navi-bar:nth-child(1) .inline-svg:nth-child(1)"
    ).click();

    //save CypressAutomation Kit Type
    cy.get(".v-select__selections .v-btn__content").click({ force: true });
    //close
    cy.wait(5000);
    //Close Kit type
    cy.get(".subheader--button-icon-wrapper .inline-svg").click({
      force: true,
    });

    
  });
});
