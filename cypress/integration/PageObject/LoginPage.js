class LoginPage {
  visitServiceTest() {
    cy.visit("https://serviceproviders.ca-test.com/");
  }

  visitKitBuilderServiceTest() {
    cy.visit("https://serviceproviders.ca-test.com/ClientAdmin/KitBuilder#/");
  }

  visitServiceBuild() {
    cy.visit("https://serviceproviders.ca-build.com/");
  }

  visitKitBuilderServiceBuild() {
    cy.visit("https://serviceproviders.ca-build.com/ClientAdmin/KitBuilder#/");
  }

  visitStarksTest() {
    cy.visit("http://starksolutions.ca-test.com/");
  }

  AdminStarksTest() {
    cy.visit("https://starksolutions.ca-test.com/ClientAdmin/Index/#/");
  }

  visitStarksBuild() {
    cy.visit("http://starksolutions.ca-build.com/");
  }

  AddUserStarksBuild() {
    cy.visit("https://starksolutions.ca-build.com/ClientAdmin/AddUser");
  }

  EnterEmail(value) {
    const field = cy.get("#UserName");
    field.clear();
    field.type(value);
    return this;
  }

  EnterPassword(value) {
    const field = cy.get("#Password");
    field.clear();
    field.type(value);
    return this;
  }

  Submit() {
    const button = cy.get("#login_button");
    button.click();
  }

  PlusIcon() {
    const btn = cy.get(
      ".fill-height > .plus-button > .v-btn__content > .icon > .inline-svg"
    );
    btn.click();
  }

  HMBIcon() {
    const btn = cy.get(".v-btn__content > .v-icon");
    btn.click({ force: true });
  }

  ConnectionIcon() {
    const btn = cy.get(".new-contact #Layer_1");
    btn.click();
  }

  ProfileIcon() {
    const button = cy.get("img");
    button.click();
  }

  ClickOnAdmin() {
    const button = cy.get(
      ".custom-v-btn-nav-list-item:nth-child(5) > .v-list-item__title"
    );
    button.click();
  }

  RefreshBtn() {
    cy.get(".button__reset-filters > .v-btn__content").click({ force: true });
  }

  FilterIcon() {
    const btn = cy.get(".fill-height > .v-btn #Layer_1");
    btn.click({ force: true });
  }
}

export default LoginPage;
