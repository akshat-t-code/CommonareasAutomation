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

}

export default SanityLoginPage;
