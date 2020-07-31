class SignUpPage {
  visit() {
    cy.visit("https://app.ca-test.com/Public/Login?ReturnUrl=%2F");
  }

  visitBaseVuild() {
    cy.visit("https://app.ca-build.com/Public/Login?ReturnUrl=%2F");
  }

  SignUpbtn() {
    const sb = cy.get(".button-sign-up > a");
    sb.click();
  }

  mailinatorSite() {
    cy.visit("https://www.mailinator.com/");
  }

  EnterMailinatorEmail(value) {
    const field = cy.get('[placeholder="Enter Public Mailinator Inbox"]');
    field.type(value);
    return this;
  }

  Go() {
    const go = cy.get("#go-to-public");
    go.click();
  }

  ActiveAccount() {
    cy.get("#msg_body").then(($iframe) => {
      const $body = $iframe.contents().find("body");

      cy.wrap($body).contains("Activate Account").click();
    });
  }
}

export default SignUpPage;
