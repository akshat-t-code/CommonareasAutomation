import SignUpPage from "../PageObject/SignUpPage";
import LoginPage from "../PageObject/LoginPage";
import RandomString from "../PageObject/RandomString";

let UserEmaill;
let UserData;
let UserEmailID;


describe("Sign up for a Randomly New User", function () {

  const Rs = new RandomString();
     UserEmaill = Rs.getRandomUserEmail();
    console.log(UserEmaill)
     // cy.log(UserEmaill);
      UserData = Rs.getRandomUser();
    // cy.log(UserData)
    console.log(UserData)
     UserEmailID=UserData.Useremail
    console.log(UserEmailID)
    

  this.beforeEach('Fixture file data',function(){
    cy.fixture("SignUpPageData").then(function (data) {
        this.data = data;
  })

})

      
  it('Sign up for new Random user',function(){

    //    const Rs = new RandomString();
    //    var UserEmaill = Rs.getRandomUserEmail();
    //     cy.log(UserEmaill);
    //    var UserData = Rs.getRandomUser();
    //    cy.log(UserData)

      const sp = new SignUpPage();
      sp.visit();
      cy.wait(3000);
  
      cy.url().should("include", "app.ca-test.com/Public/Login?ReturnUrl=%2F");
      sp.SignUpbtn();
      cy.url().should("include", "Register/Create");
  
      //Sign Up detalis commands coming from command.js
  
      //Randomly Generated UserFirstName
      cy.SignUpUserFirstName(UserData.UserFirstName);
      cy.log(UserData.UserFirstName);
    
      //Randomly Generated UserLastName
      cy.SignUpUserLastName(UserData.UserLastName);
      cy.log(UserData.UserLastName);
  
      //Randomly Generated UserEmail
      cy.SignUpUserEmail(UserEmailID);
      cy.log(UserEmailID);
  
      cy.ConfirmEmailAddress(UserEmailID);
  
      cy.SignUpUserPassword(this.data.Password);
  
      cy.ConfirmPassword(this.data.Password);
  
      cy.get('[name="ContactInformation.CompanyType"]').scrollIntoView({
        force: true,
      });
  
      cy.wait(5000);
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
 
     cy.wait(20000);

  })

  it('Verifying the New user Email Id for New User on Mailinator site',function(){

   
    //const sp = new SignUpPage();
   // sp.mailinatorSite();
    cy.visit('https://www.mailinator.com/')
    cy.url().should("include", "mailinator.com");
    cy.get('[placeholder="Enter Public Mailinator Inbox"]')
    cy.log(UserEmailID)
   
    //sp.EnterMailinatorEmail(UserEmailID);
    

    //Click on Go
    // sp.Go();
    // cy.wait(3000);
    // cy.contains("Common Areas - Account Activation").click();
    // //debugger
    // cy.wait(5000);
    // ////New Sign up user Account Verification on mailinator
    // sp.ActiveAccount();
    // cy.wait(5000);
    // cy.log("New user Account has been verified successfully on Mailinator");

  })


})



