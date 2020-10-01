import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";

describe("User Admin has already been Exist", function () {
  this.beforeEach("Getting data from Fixtures file", function () {
    //Fixture file(Static) for Adding User
    cy.fixture("NegativeAdminUserTestData/AdminUserAlreadyExist").then(
      function (data) {
        this.Credentials = data;
      }
    );
    //cy.viewport(1280, 720);
  });

  it("Already Added Admin User", function () {
    //PageObject
    const lp = new LoginPage();
    lp.visitStarksBuild();
     //Login Assertions
     cy.get('.page-main-title').should('be.visible')

    lp.EnterEmail("starksolutions@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.wait(5000);
    cy.log("User has been Logged in successfully");
    cy.title().should("eq", "Common Areas");
    cy.wait(10000);
    lp.AdminStarksBuild()
    cy.ClickOnAddUser();
    //Assertion
    cy.get("#content > div.right > h2")
      .contains("Add User")
      .should("be.visible");
    cy.wait(10000);

    //Adding User form Admin Custom Commands coming from command.js
    cy.UserFirstName(this.Credentials.UserFirstName);
    cy.UserLastName(this.Credentials.UserLastName);

    cy.Tittle(this.Credentials.Tittle);

    cy.UserEmail(this.Credentials.UserEmail);

    cy.UserPassword(this.Credentials.UserPassword);
    cy.UserConfirmPassword(this.Credentials.UserPassword);

    cy.UserTelephone(this.Credentials.UserTelephone);
    cy.UserMobilePhone(this.Credentials.UserMobilePhone);

    cy.get(".btnSaveDetails").scrollIntoView().should("be.visible");

    cy.UserAddress1(this.Credentials.UserAddress1);
    cy.UserAddress2(this.Credentials.UserAddress2);
    cy.UserZipCode(this.Credentials.UserZipCode);
    cy.UserCity(this.Credentials.UserCity);
    //Select State
    cy.get('[name="AccountUser.UserContact.Country"]').select(this.Credentials.Country);
    //Select State
    cy.get('[name="AccountUser.UserContact.State"]').select(this.Credentials.State);
    cy.log("All details has been entered for Admin user");

    cy.AddUser();
    cy.log("This user has Already been added OR Exist");
    //Assertion for already Added Admin User
    cy.contains("The user already exists and can not be added again.").should(
      "be.visible"
    );
    cy.log("This user has Already been added OR Exist");
    cy.wait(5000);
  });
});
