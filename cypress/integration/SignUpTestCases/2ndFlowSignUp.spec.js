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

describe("Create Connection(Second Flow of Accept and Reject Request and Sign up for a New User", function () {
  this.beforeAll(() => {
    debugger;
    //Generating Dynamic Json file at RumTime
    cy.writeFile(
      "cypress/fixtures/ConnectionsDynamicTestData/Connection2ndFlowUserCredentials.json",
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
      Cypress.Cookies.preserveOnce(
        ".AspNet.ApplicationCookie",
        "ASP.NET_SessionId",
        "ca-cf-auth",
        "kit-detail-selected-tab",
        "jwt",
        "refreshToken",
        "jwtAccessToken"
      );

      // cy.eyesOpen({
      //     appName: "Common Aera UI Automation",
      //     testName: "Sign Up for a new User for Second Flow",
      //   });

      // debugger;

      cy.fixture("SignUpTestData/SignUpTestData").then(function (SignUpData) {
        this.SignUPData = SignUpData;
      });

      cy.fixture(
        "ConnectionsDynamicTestData/Connection2ndFlowUserCredentials"
      ).then(function (JsonData) {
        this.Credentials = JsonData;
        cy.log(this.Credentials.UserEmail);
        cy.log(this.Credentials.Fname);
        cy.log(this.Credentials.Lname);
      });
    }
  );

  it("Creating a new Connection ", function () {
    const lp = new LoginPage();
    lp.visitServiceTest();

    //Login Assertions
    cy.get(".page-main-title").should("be.visible");

    lp.EnterEmail("kstanley@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    //cy.eyesCheckWindow('Logging into the application')
    lp.Submit();
    cy.wait(10000);
    cy.log("Users has been logged in successfully");
    //cy.eyesCheckWindow('Logged into the application')
    lp.PlusIcon();
    lp.ConnectionIcon();
    cy.wait(2000);
    //cy.eyesCheckWindow()
    //Connection Custom Commands coming from commands.js
    cy.ConnectionFirstName(this.Credentials.Fname);
    cy.ConnectionLastName(this.Credentials.Lname);
    cy.ConnectionEmail(this.Credentials.UserEmail);
    //cy.eyesCheckWindow('Connection Details')
    cy.log("Connection detalis has been Entered");
    //click on DropDown(This DropDown feature has be removed from this connection module)
    // cy.get(
    //   "#inspire > div.v-dialog__content.v-dialog__content--active > div > div > div > div.row.position-relative.contact-detail-wrapper.md11.fill-height.new-connection > div.base-layout-main-content.d-flex.pa-0.fill-height.px-8.col > div.row.wrapper-content.px-8.py-4.pb-4 > div > div.v-input.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select.v-select--chips.v-select--is-multi > div > div.v-input__slot > div.v-select__slot > div.v-input__append-inner > div"
    // ).click({ force: true });
    // cy.contains("Meeting").click();
    // cy.contains("02").click();
    // cy.contains("LOL").click();
    //cy.eyesCheckWindow()
    //Click on Save btn
    cy.get(".button-pop-ups--size").click();
    cy.log("Connection Request has been sent successfully");
    cy.wait(10000);
  });

  it("New User Sign up", function () {
    //PageObject
    const sp = new SignUpPage();
    sp.visitBaseTest();
    cy.wait(3000);
    // cy.eyesCheckWindow()

    cy.url().should("include", "/Public/Login?ReturnUrl=%2F");
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

    //Click on Submit to Create the user
    cy.get("#submitButton").click();

    cy.wait(5000);
    cy.log("New User has been signed up successfully");
    //Assertion
    cy.contains(
      "An email has been sent to you to verify the email address you provided with a link to activate your account."
    ).should("be.visible");
    // cy.eyesCheckWindow("New user Signed Up");
    cy.wait(5000);
    //cy.eyesCheckWindow();
  });

  // this.afterAll(function () {
  //   cy.eyesClose();
  // });
});
