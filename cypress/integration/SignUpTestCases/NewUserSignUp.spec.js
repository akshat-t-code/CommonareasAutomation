import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";
import RandomString from "../PageObject/RandomString";

//Global Variable
let UserData;
let UserEmailID;
let UserFirstName;
let UserLastName;
//Randomly Generated UserData coming from PageObject(RandomString Class)
const Rs = new RandomString();
UserData = Rs.getRandomUser();
UserEmailID = UserData.Useremail;
UserFirstName = UserData.UserFirstName;
UserLastName = UserData.UserLastName;

describe("Sign up for a New User", function () {
  this.beforeAll(() => {
    debugger;
    //Creating Dynamic Json file at RumTime for Request TestCase
    cy.writeFile(
      "cypress/fixtures/ConnectionsDynamicTestData/ConnectionUserCredentials.json",
      {
        Fname: UserFirstName,
        Lname: UserLastName,
        UserEmail: UserEmailID,
        Password: "1234567Aa",
      }
    );

    cy.log("Data has been write to json");
    cy.log(UserEmailID);
    cy.log(UserFirstName);
    cy.log(UserLastName);
  });

  this.beforeEach(
    "Getting the Dynmaically Generated data through Fixtures file",
    function () {
      // cy.eyesOpen({
      //   appName: "Common Aera UI Automation",
      //   testName: "Sign Up for a new User",
      // });

      cy.fixture("SignUpTestData/SignUpTestData").then(function (SignUpData) {
        this.SignUPData = SignUpData;
      });

      //debugger;
      cy.fixture("ConnectionsDynamicTestData/ConnectionUserCredentials").then(
        function (JsonData) {
          this.Credentials = JsonData;
          cy.log(this.Credentials.UserEmail);
          cy.log(this.Credentials.Fname);
          cy.log(this.Credentials.Lname);
        }
      );
    }
  );

  it("New User Sign up", function () {
    //PageObject
    const sp = new SignUpPage();
    sp.visitBaseTest();
    //cy.visit('https://commonareas.io/Public/Login')
    cy.wait(3000);
    // cy.eyesCheckWindow()

    cy.url().should("include", "/Public/Login");
    //Click on Sign up for free
    sp.SignUp();
    cy.url().should("include", "Register/Create");
    //cy.eyesCheckWindow('Sign Up Page')
    //Sign Up detalis Custom Commands coming from command.js
    cy.SignUpUserFirstName(this.Credentials.Fname);
    cy.SignUpUserLastName(this.Credentials.Lname);
    cy.SignUpUserEmail(this.Credentials.UserEmail);
    cy.CompanyName(this.SignUPData.CompanyName);

    //cy.ConfirmEmailAddress(this.Credentials.UserEmail);
    cy.SignUpUserPassword(this.Credentials.Password);
    cy.ConfirmPassword(this.Credentials.Password);

    cy.get('[name="ContactInformation.CompanyType"]').scrollIntoView({
      force: true,
    });
    cy.wait(3000);
    cy.get(
      '[name="ContactInformation.CompanyType"]'
    ).select("Facility Management", { force: true });
    //cy.eyesCheckWindow("Getting User Details");
    cy.wait(2000);

    //Click on Agree Terms and conditions
    cy.get("#AgreeTermsAndConditions").click({ force: true });
    cy.screenshot("User details");
    cy.wait(10000);

    //Click on Submit to Create the user
    cy.get("#submitButton").click();

    cy.wait(5000);
    cy.log("New User has been signed up successfully");
    //Assertion
    cy.contains(
      "An email has been sent to you to verify the email address you provided with a link to activate your account."
    ).should("be.visible");

    cy.screenshot("Capturing the screenshot after successful signup");
    // cy.eyesCheckWindow("New user Signed Up");
    cy.wait(5000);
    //cy.eyesCheckWindow();
  });

  // this.afterAll(function () {
  //   cy.eyesClose();
  // });
});
