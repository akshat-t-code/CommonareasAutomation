class SanityLoginPage {
 
  visitServiceBuild() {
    cy.visit("https://serviceproviders.ca-build.com/");
  }

  visitKitBuilderServiceBuild() {
    cy.visit("https://serviceproviders.ca-build.com/ClientAdmin/KitBuilder#/");
  }

}

export default SanityLoginPage;
