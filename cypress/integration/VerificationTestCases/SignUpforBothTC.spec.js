import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";
import RandomString from "../PageObject/RandomString";

//First User
let UserData;
let UserEmailID;
let UserFirstName;
let UserLastName;
//Second User
let UserData1;
let UserEmailID1;
let UserFirstName1;
let UserLastName1;
//Randomly Generated UserData coming from PageObject for AcceptRequest
const Rs = new RandomString();
UserData = Rs.getRandomUser();
UserEmailID = UserData.Useremail;
UserFirstName = UserData.UserFirstName;
UserLastName = UserData.UserLastName;
//Randomly Generated UserData coming from PageObject for RejectRequest
const Rs1 = new RandomString();
UserData1 = Rs1.getRandomUser1();
UserEmailID1 = UserData1.Useremail1;
UserFirstName1 = UserData1.UserFirstName1;
UserLastName1 = UserData1.UserLastName1;

describe("Sign up for a New Users for", function () {
  this.beforeAll(() => {
    debugger;
    //Creating Dynamic Json file at RumTime for AcceptRequest TestCase
    cy.writeFile(
      "cypress/fixtures/VerificationTestCasesData/AcceptRequestUserData.json",
      {
        Fname: UserFirstName,
        Lname: UserLastName,
        UserEmail: UserEmailID,
        Password: "1234567Aa",
      }
    );

    //Creating Dynamic Json file at RumTime for RejectRequest TestCase
    cy.writeFile(
      "cypress/fixtures/VerificationTestCasesData/RejectRequestUserData.json",
      {
        Fname1: UserFirstName1,
        Lname1: UserLastName1,
        UserEmail1: UserEmailID1,
        Password: "1234567Aa",
      }
    );
    //First User data
    cy.log("Data has been write to json for Accept Request TestCase");
    cy.log(UserEmailID);
    cy.log(UserFirstName);
    cy.log(UserLastName);
    //Second User data
    cy.log("Data has been write to jsonfor Reject Request TestCase");
    cy.log(UserEmailID1);
    cy.log(UserFirstName1);
    cy.log(UserLastName1);
  });

  this.beforeEach(
    "Getting the Dynmaically Generated data through Fixtures file",
    function () {
      //debugger;
      cy.fixture("VerificationTestCasesData/AcceptRequestUserData").then(
        function (JsonData) {
          this.Credentials = JsonData;
          cy.log(this.Credentials.UserEmail);
          cy.log(this.Credentials.Fname);
          cy.log(this.Credentials.Lname);
        }
      );

      cy.fixture("VerificationTestCasesData/RejectRequestUserData").then(
        function (JsonData1) {
          this.Credentials1 = JsonData1;
          cy.log(this.Credentials1.UserEmail1);
          cy.log(this.Credentials1.Fname1);
          cy.log(this.Credentials1.Lname1);
        }
      );
    }
  );

  it("New User Sign up Accept Requets", function () {
    //PageObject
    const sp = new SignUpPage();
    sp.visit();
    cy.wait(3000);
    cy.url().should("include", "app.ca-test.com/Public/Login?ReturnUrl=%2F");
    sp.SignUpbtn();
    cy.url().should("include", "Register/Create");
    //Sign Up detalis commands coming from command.js
    cy.SignUpUserFirstName(this.Credentials.Fname);
    cy.SignUpUserLastName(this.Credentials.Lname);
    cy.SignUpUserEmail(this.Credentials.UserEmail);
    cy.ConfirmEmailAddress(this.Credentials.UserEmail);
    cy.SignUpUserPassword(this.Credentials.Password);
    cy.ConfirmPassword(this.Credentials.Password);
    cy.get('[name="ContactInformation.CompanyType"]').scrollIntoView({
      force: true,
    });
    cy.wait(3000);
    cy.get('[name="ContactInformation.CompanyType"]').select(
      "Facility Management"
    );
    //Click on Submit to Create the user
    cy.get(".icon:nth-child(1)").click();
    cy.wait(5000);
    cy.log("New User has been signed up successfully");
    //Assertion
    cy.get(".login-message").should(
      "have.text",
      "An email has been sent to you to verify the email address you provided with a link to activate your account."
    );
    cy.wait(5000);
    cy.get(".icon").click();
    cy.url().should("include", "/Public/Login");
    cy.wait(10000);
  });

  it("New User Sign up Reject Request", function () {
    //PageObject
    const sp = new SignUpPage();
    sp.visit();
    cy.wait(3000);
    cy.url().should("include", "app.ca-test.com/Public/Login?ReturnUrl=%2F");
    sp.SignUpbtn();
    cy.url().should("include", "Register/Create");
    //Sign Up detalis commands coming from command.js
    cy.SignUpUserFirstName(this.Credentials1.Fname1);
    cy.SignUpUserLastName(this.Credentials1.Lname1);
    cy.SignUpUserEmail(this.Credentials1.UserEmail1);
    cy.ConfirmEmailAddress(this.Credentials1.UserEmail1);
    cy.SignUpUserPassword(this.Credentials1.Password);
    cy.ConfirmPassword(this.Credentials1.Password);
    cy.get('[name="ContactInformation.CompanyType"]').scrollIntoView({
      force: true,
    });
    cy.wait(3000);
    cy.get('[name="ContactInformation.CompanyType"]').select(
      "Facility Management"
    );
    //Click on Submit to Create the user
    cy.get(".icon:nth-child(1)").click();
    cy.wait(5000);
    cy.log("New User has been signed up successfully");
    //Assertion
    cy.get(".login-message").should(
      "have.text",
      "An email has been sent to you to verify the email address you provided with a link to activate your account."
    );
    cy.wait(5000);
    cy.get(".icon").click();
    cy.url().should("include", "/Public/Login");
    cy.wait(3000);
    
  });
});
