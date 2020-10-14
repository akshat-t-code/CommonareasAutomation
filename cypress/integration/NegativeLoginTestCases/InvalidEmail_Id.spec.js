import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";
import RandomString from "../PageObject/RandomString";

//User Data
let UserData;
let UserEmailID;
//Randomly Generated UserData coming from PageObject
const Rs = new RandomString();
UserData = Rs.getRandomUser();
UserEmailID = UserData.Useremail;

describe("TestCase For Invalid Email Id", function () {
  this.beforeAll(() => {
    debugger;
    //Creating Dynamic Json file at RumTime
    cy.writeFile("cypress/fixtures/NegativeLoginTestData/InvalidEmailId.json", {
      UserEmail: UserEmailID,
      Password: "1234567Aa",
    });
    //Dynamically generated User Email
    cy.log(UserEmailID);
  });

  this.beforeEach(function () {
    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    //debugger;
    cy.fixture("NegativeLoginTestData/InvalidEmailId").then(function (
      LoginData
    ) {
      this.Credentials = LoginData;
    });
  });

  it("Login into the appLication With Invalid Email Id", function () {
    //PageObject
    const sp = new SignUpPage();
    const lp = new LoginPage();
    sp.visitBaseBuild();
    //Login Assertions
    cy.get(".page-main-title").should("be.visible");

    lp.EnterEmail(this.Credentials.UserEmail);
    lp.EnterPassword(this.Credentials.Password);
    lp.Submit();
    cy.wait(2000);
    //Assertion for Invalid Email or Password
    cy.get(".field-validation-error").should("be.visible");
    cy.get(".field-validation-error").should(
      "have.text",
      "Invalid username or password."
    );
    cy.log("Please Enter Valid Email Id");
  });
});
