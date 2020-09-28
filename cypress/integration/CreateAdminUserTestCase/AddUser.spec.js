import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";
import RandomString from "../PageObject/RandomString";

//Global Variables
let UserData;
let UserEmailID;
let UserFirstName;
let UserLastName;
let UserPhn;
let Telephone;
//Randomly Generated UserData coming from PageObject(RandomString Class)
const Rs = new RandomString();
UserPhn = Rs.getRandomPhoneNo();
Telephone = Rs.getRandomPhoneNo();
UserData = Rs.getRandomUser();
UserEmailID = UserData.Useremail;
UserFirstName = UserData.UserFirstName;
UserLastName = UserData.UserLastName;

describe("Create user from admin and login with the new user", function () {
  this.beforeAll(() => {
    debugger;
    //Generating Dynamic Json file at RumTime
    cy.writeFile(
      "cypress/fixtures/AddUserDynamicTestData/AddUserCredentials.json",
      {
        FirstName: UserFirstName,
        LastName: UserLastName,
        UserEmail: UserEmailID,
        UserPhoneNo: UserPhn,
        UserTelephone: Telephone,
      }
    );
    cy.log("Data has been write to json file");
    cy.log(UserEmailID);
    cy.log(UserFirstName);
    cy.log(UserLastName);
    cy.log(UserPhn);
    cy.log(Telephone);
  });

  this.beforeEach(
    "Getting the Dynmaically Generated data through Fixtures file",
    function () {
      // cy.eyesOpen({
      //   appName: "Common Aera UI Automation",
      //   testName: "Adding New User From Admin",
      // });
      //Dynamic taking data form this fixtures file(1)
      cy.fixture("AddUserDynamicTestData/AddUserCredentials").then(function (
        JsonData
      ) {
        this.Credentials = JsonData;
        cy.log(this.Credentials.UserEmail);
        cy.log(this.Credentials.FirstName);
        cy.log(this.Credentials.LastName);
      });
      //2nd Fixture file(Static) for Adding User
      cy.fixture("AddUserDynamicTestData/AdminUserdata").then(function (data) {
        this.data = data;
      });
      cy.viewport(1000, 600);
    }
  );

  it("Create user form admin", function () {
    //PageObject
    const lp = new LoginPage();
    lp.Adminvisit();
    lp.EnterEmail("starksolutions@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    //cy.eyesCheckWindow("Logging into the Application");
    lp.Submit();
    cy.wait(5000);
    cy.log("User has been Logged in successfully");
    //cy.eyesCheckWindow("Logged In");
    cy.title().should("eq", "Common Areas");
    cy.wait(10000);
    lp.AdminUrl();
    //cy.eyesCheckWindow();
    cy.ClickOnAddUser();
    //Assertion
    cy.get("#content > div.right > h2")
      .contains("Add User")
      .should("be.visible");
    //cy.eyesCheckWindow();
    cy.wait(10000);

    //Adding User form Admin Custom Commands coming from command.js
    cy.UserFirstName(this.Credentials.FirstName);
    cy.UserLastName(this.Credentials.LastName);

    cy.Tittle(this.data.Tittle);

    cy.UserEmail(this.Credentials.UserEmail);
    //cy.eyesCheckWindow("User Details");

    cy.UserPassword(this.data.UserPassword);
    cy.UserConfirmPassword(this.data.UserPassword);

    cy.UserTelephone(this.Credentials.UserTelephone);
    cy.UserMobilePhone(this.Credentials.UserPhoneNo);
    //cy.eyesCheckWindow("User Details");

    cy.get('.btnSaveDetails').scrollIntoView()
    .should('be.visible')



    cy.UserAddress1(this.data.UserAddress1);
    cy.UserAddress2(this.data.UserAddress2);
    cy.UserZipCode(this.data.UserZipCode);
    cy.UserCity(this.data.UserCity);
    //cy.eyesCheckWindow("User Details");
    //Select State
    cy.get('[name="AccountUser.UserContact.Country"]').select(this.data.Country);
    //Select State
    cy.get('[name="AccountUser.UserContact.State"]').select(this.data.State);
    cy.log("All details has been entered for Admin user");
    //cy.eyesCheckWindow("User Details");

    cy.AddUser();
    cy.log("user has been add successfully");
    //cy.eyesCheckWindow();
    cy.wait(5000);
    //Assertion
    cy.url().should("include", "ClientAdmin/UserDetails/");
    //cy.wait(2000).eyesCheckWindow();
    cy.SaveUserDetails();
    cy.log("users's Detalis has been saved successfully");

    //Assertion
    cy.get(
      "body > div.ns-box.ns-bar.ns-effect-slidetop.ns-type-success.success.ns-hide > div > p"
    )
      .contains("User details updated successfully.")
      .should("be.visible");
    //cy.eyesCheckWindow();
    cy.wait(10000);
  });

  it("First time New Add user login into the appliction", function () {
    //PageObject
    const lp = new LoginPage();
    lp.Adminvisit();
    //fixtures file(1)
    lp.EnterEmail(this.Credentials.UserEmail);
    lp.EnterPassword(this.data.UserPassword);
    //cy.eyesCheckWindow("First time user logging into the application");
    lp.Submit();
    cy.wait(3000);
    //First Time login commands
    cy.url().should("include", "Public/TermsAndConditions?acceptTerms=True");
    cy.get("#readTerms").scrollIntoView()
    .click({force:true});
    //cy.eyesCheckWindow("New User");
    cy.wait(10000);
    cy.log("New User has been logged in successfully");
    //cy.eyesCheckWindow("Logged In");
    //Assertion
    cy.title().should("eq", "Common Areas App");
    cy.wait(5000);
    //Profile Assertion
    cy.get(
      "#inspire > div.v-application--wrap > div:nth-child(1) > div.root-container.fill-height.fill-width > div.base-layout-main-content.box > div > div.fill-height.body-right-wrapper.col-sm-12.col.col-xs-12.col-md-7.col-lg-8.col-xl-9 > div > div > div > div.px-4.col.col-12 > div"
    ).then(function ($WelEle) {
      const WelcomeTxt = $WelEle.text();
      cy.log(WelcomeTxt);
      const username = this.Credentials.FirstName;
      cy.log(username);
      expect(username).eq(this.Credentials.FirstName);
      cy.wait(3000);
    });
  });

  // this.afterAll(function () {
  //   cy.eyesClose();
  // });
});
