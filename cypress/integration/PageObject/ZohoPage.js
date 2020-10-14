class ZohoPage {
  visitZohoSignIn() {
    cy.visit("https://accounts.zoho.com/signin?");
  }

  EnterEmail(value) {
    const field = cy.get('[placeholder="Email address or mobile number"]');
    field.clear();
    field.type(value);
    return this;
  }

  EnterPassword(value) {
    const field = cy.get("#password");
    field.clear();
    field.type(value);
    return this;
  }

  NextBtn() {
    cy.get("#nextbtn").click({force:true})
  }

  ClickOnSignInBtn(){
      cy.get('#nextbtn').click({force:true})
  }
}

export default ZohoPage;
