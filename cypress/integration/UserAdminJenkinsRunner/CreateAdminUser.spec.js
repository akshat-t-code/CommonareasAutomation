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

describe("Create new User admin", function () {
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
    lp.visitStarksBuild();

    //Login Page assertion
    cy.get(".page-main-title").should("be.visible");

    lp.EnterEmail("starksolutions@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    cy.screenshot("Create User Admin Details");
    cy.wait(10000);
    //cy.eyesCheckWindow("Logging into the Application");
    lp.Submit();
    cy.wait(5000);
    cy.log("User has been Logged in successfully");
    //cy.eyesCheckWindow("Logged In");
    cy.title().should("eq", "Common Areas");
    cy.wait(10000);
    cy.visit('https://starksolutions.ca-build.com/ClientAdmin/AddUser')

    //lp.AdminStarksBuild();
    //cy.eyesCheckWindow();
    //cy.ClickOnAddUser();
    //Assertion
    cy.get(".admin--header").contains("Add User").should("be.visible");
    //cy.eyesCheckWindow();
    cy.screenshot("Add User Admin Form");
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

    cy.get('[name="AccountUser.UserContact.State"]')
      .scrollIntoView()
      .should("be.visible");

    cy.UserAddress1(this.data.UserAddress1);
    cy.UserAddress2(this.data.UserAddress2);
    cy.UserZipCode(this.data.UserZipCode);
    cy.UserCity(this.data.UserCity);
    //cy.eyesCheckWindow("User Details");
    //Select State
    cy.get('[name="AccountUser.UserContact.Country"]').select(
      this.data.Country
    );
    //Select State
    cy.get('[name="AccountUser.UserContact.State"]').select(this.data.State);
    cy.log("All details has been entered for Admin user");
    //cy.eyesCheckWindow("User Details");
    cy.screenshot("All Admin User Details");
    cy.SaveUserDetails();
    cy.log("User Details has been add successfully");
    //cy.eyesCheckWindow();
    cy.wait(5000);
    //Assertion
    cy.url().should("include", "ClientAdmin/UserDetails/");
    //cy.wait(2000).eyesCheckWindow();
    cy.SaveUser();
    cy.log("Admin User has been saved successfully");

    //Assertion
    cy.get(
      "body > div.ns-box.ns-bar.ns-effect-slidetop.ns-type-success.success.ns-hide > div > p"
    )
      .contains("User details updated successfully.")
      .should("be.visible");
    //cy.eyesCheckWindow();
    cy.screenshot("Admin User saved successfully");
    cy.wait(10000);
  });

  // this.afterAll(function () {
  //   cy.eyesClose();
  // });
});
