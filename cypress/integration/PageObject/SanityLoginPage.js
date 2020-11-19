class SanityLoginPage {
  visitServiceBuild() {
    cy.visit("https://serviceproviders.ca-build.com/");
  }

  visitKitBuilderServiceBuild() {
    cy.visit("https://serviceproviders.ca-build.com/ClientAdmin/KitBuilder#/");
  }

  visitServiceTest() {
    cy.visit("https://serviceproviders.ca-test.com/");
  }

  visitKitBuilderServiceTest() {
    cy.visit("https://serviceproviders.ca-test.com/ClientAdmin/KitBuilder#/");
  }

  visitCityComTest() {
    cy.visit("https://citycommercial.ca-test.com/#/");
  }

  visitCityComBuild() {
    cy.visit("https://citycommercial.ca-build.com/#/");
  }

  visitCityComTestKitBuilder() {
    cy.visit("https://citycommercial.ca-test.com/ClientAdmin/KitBuilder#/");
  }

  visitCityComKBuildKitBuilder() {
    cy.visit("https://citycommercial.ca-build.com/ClientAdmin/KitBuilder#/");
  }

  CityComTestAddUser() {
    cy.visit("https://citycommercial.ca-test.com/ClientAdmin/AddUser");
  }

  CityComBuildAddUser() {
    cy.visit("https://citycommercial.ca-build.com/ClientAdmin/AddUser");
  }
}

export default SanityLoginPage;
