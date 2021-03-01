import LoginPage from "../PageObject/LoginPage";
import SanityLoginPage from "../PageObject/SanityLoginPage";

describe("New created kit item creation Validation test case", function () {
  this.beforeAll(function () {
    // cy.viewport(1280, 720);
    const lp = new LoginPage();
    const slp = new SanityLoginPage();
    //slp.visitCityComTest();
    slp.nvdTest()
    //slp.TmProd();
    //cy.visit('https://piret.ca-test.com/')
    //Handling Alert
    cy.on("window:confirm", () => {
      cy.log("Alert has been Handled");
    });

    //Login Assertions
    cy.contains(" Log In ").should("be.visible");

    //Enter credentials
    //lp.EnterEmail("sam@armyspy.com");
    //lp.EnterEmail("smcluckie@piret.ca.dev");
    lp.EnterEmail("propertymanagement@commonareas.work.dev");
    //lp.EnterEmail("citycom@commonareas.work.dev");
    lp.EnterPassword("1234567Aa");
    lp.Submit();
    cy.log("User has been Logged In into the application");

    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.wait(10000);
  });

  this.beforeEach("KitType Data", function () {
    Cypress.Cookies.preserveOnce(
      ".AspNet.ApplicationCookie",
      "ASP.NET_SessionId",
      "ca-cf-auth",
      "kit-detail-selected-tab",
      "jwt",
      "refreshToken",
      "jwtAccessToken"
    );

    cy.fixture("KitTypeTestData/NewKitItemDataValues").then(function (
      KitDataEle
    ) {
      this.NewKitItemData = KitDataEle;
    });

    // cy.fixture("SanityPackTestData(Prod)/NewKitItemDataValue(Prod)").then(
    //   function (KitDataEle) {
    //     this.NewKitItemData = KitDataEle;
    //   }
    // );

    cy.fixture("VerificationTestCasesData/KitBuilderDataTypes2").then(function (
      NewDataForElements
    ) {
      this.DataType2 = NewDataForElements;
    });

    // cy.fixture("SanityPackTestData(Prod)/KitBuilderDataTypes2(Prod)").then(
    //   function (NewDataForElements) {
    //     this.DataType2 = NewDataForElements;
    //   }
    // );

    cy.fixture("SanityPackTestData/NewKitItemTabsData").then(function (
      SanityTCData
    ) {
      this.SData = SanityTCData;
    });

    // cy.fixture("SanityPackTestData(Prod)/NewKitItemTabsData(Prod)").then(
    //   function (SanityTCData) {
    //     this.SData = SanityTCData;
    //   }
    // );

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    cy.fixture("KitBuilderTestData/NewKitTypeData").then(function (
      KittypeName
    ) {
      this.KitTypeName = KittypeName;
    });

    cy.fixture("KitBuilderTestData/FormViewsNameData").then(function (
      KitTypeFormViewsNames
    ) {
      this.ViewName = KitTypeFormViewsNames;
    });
  });

  it.only("Click on list view and select kit type to Validate", function () {
    const lp = new LoginPage();
    //Click on Hamburger Icon
    lp.HMBIcon();
    cy.wait(2000);
    cy.contains(this.NewKitItemData.KitName).scrollIntoView({
      force: true,
    });
    cy.wait(5000);
    //scroll to Open KitType from left panel
    cy.contains(this.NewKitItemData.KitName).scrollIntoView({ force: true })
    cy.wait(3000)
    //Open KitType from left panel
    cy.contains(this.NewKitItemData.KitName).click({
      force: true,
    });
    cy.log("Kit Type has been OPened");
    cy.wait(5000);
    //Click on First kit item of kit type to open edit view
    cy.log("Kit Item Detail View has been Opened");
    cy.wait(3000);
    //Validation assertion for details view
    cy.get(".kits-landing--header-title").should(
      "have.text",
      " Recently Viewed "
    );

    //Created kit type existance assertion
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).should("exist");
    cy.log("Created New Kit Item has been Exist");
    //Click on created kit item
    cy.contains(
      this.DataType2.Url + ":" + " " + this.NewKitItemData.Url
    ).click({ force: true });
    cy.wait(5000);
  });


  it.only("Url Element data Validation", function () {

    cy.wait(2000)
    var lower = this.DataType2.Url.toLowerCase();
    //logging input data on console
    cy.xpath("//input[@controlname='" + lower + "']")
      .invoke('val')
      .then(text => {
        const url = text;
        cy.log(url);
      })
    cy.wait(2000)
    //Validating details view input data
    cy.xpath("//input[@controlname='" + lower + "']").should("have.value", this.NewKitItemData.Url)
    cy.wait(2000)

  });


  it.only("Text Element data Validation", function () {
    cy.wait(2000)
    var lower = this.DataType2.Text.toLowerCase();
    //logging input data on console
    cy.xpath("//input[@controlname='" + lower + "']")
      .invoke('val')
      .then(text => {
        const Text = text;
        cy.log(Text);
      })
    cy.wait(2000)
    //Validating details view input data
    cy.xpath("//input[@controlname='" + lower + "']").should("have.value", this.NewKitItemData.Text)
    cy.wait(2000)

  });

  it('File Element data Validation', function () {
    cy.wait(2000)
    var lower = this.DataType2.File.toLowerCase();

    //logging input data on console
    cy.xpath("//div[@controlname='" + lower + "']")
      .invoke('val')
      .then(text => {
        const Text = text;
        cy.log(Text);
      })
    cy.get(".dropzone-area-button:nth-child(2)").should('be.visible')
    cy.wait(2000)
    //cy.contains(this.NewKitItemData.NewFormLibFileName).should('be.visible')
    cy.xpath("//div[@controlname='" + lower + "']").should("have.value", this.NewKitItemData.NewFormLibFileName)
    cy.wait(2000)
  })


  it.only("Telephone Element data Validation", function () {
    cy.wait(2000)
    var lower = this.DataType2.Telephone.toLowerCase();
    //logging input data on console
    cy.xpath("//input[@controlname='" + lower + "']")
      .invoke('val')
      .then(text => {
        const Telephone = text;
        cy.log(Telephone);
      })
    cy.wait(2000)
    //Validating details view input data
    cy.xpath("//input[@controlname='" + lower + "']").should("have.value", this.NewKitItemData.Telephone)
    cy.wait(2000)

  });


  it.only("TextAera Element data Validation", function () {
    cy.wait(2000)
    var lower = this.DataType2.TextAera.toLowerCase();
    //logging input data on console
    cy.get("[name" + "=" + this.DataType2.TextAera + "]").eq(3)
      .invoke('val')
      .then(text => {
        const TextAera = text;
        cy.log(TextAera);
      })
    cy.wait(2000)
    //Validating details view input data
    cy.get('[name="TextAera"]').eq(3).should("have.value", this.NewKitItemData.TextAera)
    cy.wait(2000)

  });


  it('Currency Element data Validation', function () {

    cy.wait(2000)
    var lower = this.DataType2.Currency.toLowerCase();
    cy.log(lower)
    //logging input data on console
    cy.xpath("//div[@controlname='" + lower + "']")
      .invoke('val')
      .then(text => {
        const currency = text;
        cy.log(currency);
      })


    cy.wait(2000)



    cy.wait(2000)


    cy.get('.imageContent').eq(0)
      .invoke('val')
      .then(text => {
        const currency = text;
        cy.log(currency);
      })

    cy.get('.imageContent').eq(1)
      .invoke('val')
      .then(text => {
        const currency = text;
        cy.log(currency);
      })

    cy.xpath("//div[contains(text(),'Max Max')]")
      .invoke('val')
      .then(text => {
        const currency = text;
        cy.log(currency);
      })

  })

  it('Measure Element data Validation', function () {

    cy.wait(2000)
    //Measure
    var lower = this.DataType2.Measure.toLowerCase();
    cy.log(lower)
    cy.wait(2000)

    //logging input data on console
    cy.xpath("//div[@controlname='" + lower + "']")
      .invoke('val')
      .then(text => {
        const Measure = text;
        cy.log(Measure);
      })
    cy.wait(2000)

  })

  it.only("Email Element data Validation", function () {
    cy.wait(2000)
    var lower = this.DataType2.Email.toLowerCase();
    //logging input data on console
    cy.xpath("//input[@controlname='" + lower + "']")
      .invoke('val')
      .then(text => {
        const Email = text;
        cy.log(" Email Input box has data " + Email);
      })
    cy.wait(2000)
    //Validating details view input data
    cy.xpath("//input[@controlname='" + lower + "']").should("have.value", this.NewKitItemData.Email)
    cy.wait(3000)

  });

  it.only("Addressline1 Element data Validation", function () {
    cy.wait(2000)
    cy.get('[placeholder="Street address, building, company ... "]').scrollIntoView({ force: true })
    cy.wait(3000)
    //logging input data on console
    cy.get('[placeholder="Street address, building, company ... "]')
      .invoke('val')
      .then(text => {
        const address1 = text;
        cy.log(address1);
      })
    cy.wait(2000)
    //Validating details view input data
    cy.get('[placeholder="Street address, building, company ... "]')
      .should("have.value", this.NewKitItemData.Addressline1)
    cy.wait(3000)
  });

  it.only("Addressline2 Element data Validation", function () {
    cy.wait(2000)
    //logging input data on console
    cy.get('[name="Address line 2."]')
      .invoke('val')
      .then(text => {
        const Addressline2 = text;
        cy.log(Addressline2);
      })
    cy.wait(2000)
    //Validating details view input data
    cy.get('[name="Address line 2."]')
      .should("have.value", this.NewKitItemData.Addressline2)
    cy.wait(3000)
  });

  it.only("City Element data Validation", function () {
    cy.wait(2000)
    //logging input data on console
    cy.get('[placeholder="City"]')
      .invoke('val')
      .then(text => {
        const City = text;
        cy.log(City);
      })
    cy.wait(2000)
    //Validating details view input data
    cy.get('[placeholder="City"]')
      .should("have.value", this.NewKitItemData.City)
    cy.wait(3000)
  });

  it.only("ZipCode Element data Validation", function () {
    cy.wait(2000)
    cy.get('[placeholder="Zip/Postal Code"]').scrollIntoView({ force: true })
    cy.wait(3000)
    //logging input data on console
    cy.get('[placeholder="Zip/Postal Code"]')
      .invoke('val')
      .then(text => {
        const ZipCode = text;
        cy.log(ZipCode);
      })
    cy.wait(2000)
    //Validating details view input data
    cy.get('[placeholder="Zip/Postal Code"]')
      .should("have.value", this.NewKitItemData.ZipCode)
    cy.wait(3000)
  });

  it("State Element data Validation", function () {
    cy.wait(2000)
    //logging input data on console
    cy.get('.v-select__selection')
      .eq(0)
      .invoke('val')
      .then(text => {
        const State = text;
        cy.log(State);
      })
    cy.wait(2000)
    //Validating details view input data
    cy.get('[placeholder="State / Province"]')
      .should("have.value", this.NewKitItemData.State)
    cy.wait(3000)
  });

  it.only("Country Element data Validation", function () {
    cy.wait(2000)
    //logging input data on console
    cy.get('[placeholder="Country"]')
      .invoke('val')
      .then(text => {
        const Country = text;
        cy.log(Country);
      })
    cy.wait(2000)
    //Validating details view input data
    cy.get('[placeholder="Country"]')
      .should("have.value", this.NewKitItemData.Country)
    cy.wait(3000)
  });

  it.only("Number Element data Validation", function () {
    cy.wait(2000)
    var lower = this.DataType2.Number.toLowerCase();
    //logging input data on console
    cy.xpath("//input[@controlname='" + lower + "']")
      .invoke('val')
      .then(text => {
        const Number = text;
        cy.log(Number);
      })
    cy.wait(2000)
    //Validating details view input data
    cy.xpath("//input[@controlname='" + lower + "']")
      .should("have.value", this.NewKitItemData.Number)
    cy.wait(3000)
  });

  it.only('Time Element data Validation', function () {
    cy.wait(2000)

    cy.get('[placeholder="Add Time"][readonly="readonly"]').eq(1)
      .invoke('val')
      .then(text => {
        const Time = text;
        cy.log("Time is " + Time);
      })
    cy.wait(2000)
  })

  it.only('Date Element data Validation', function () {
    cy.wait(2000)

    cy.get('[placeholder=" MM / DD / YYYY"]')
      .invoke('val')
      .then(text => {
        const Date = text;
        cy.log("Date is " + Date);
      })

    cy.wait(2000)


  })

  it("SelectList Element data Validation", function () {
    cy.wait(2000)
    var lower = this.DataType2.Number.toLowerCase();
    //logging input data on console
    cy.xpath("//div[contains(@class, 'v-list-item__subtitle') and contains(text(),' Australia ')]")
      .invoke('val')
      .then(text => {
        const SelectList = text;
        cy.log(SelectList);
      })
    cy.wait(2000)

    cy.wait(3000)
  });

  it("RadioSelect Element data Validation", function () {
    cy.wait(2000)
    cy.get('.v-radio').eq(1).should('be.checked')
    cy.wait(2000)
  });

  it.only("CheckboxSelect Element data Validation", function () {
    cy.wait(2000)
    //CheckboxSelect1
    cy.get('[type="checkbox"]').eq(3).should('be.checked')
    cy.get('[type="checkbox"]').last().should('be.checked')
    cy.wait(3000)
  });

  it.only('UserSelector Element data Validation', function () {
    cy.wait(2000)

    cy.get('.imageContent').eq(0).scrollIntoView({ force: true })
    cy.wait(4000)

    cy.xpath('//div[@class="col item-label"]').eq(0)
      .invoke('val')
      .then(text => {
        const Date = text;
        cy.log(Date);
      })

    cy.wait(2000)

    cy.contains(this.NewKitItemData.UserSelectorName).should('exist')
    cy.contains(this.NewKitItemData.UserSelectorName).should('be.visible')
    cy.wait(2000)


  })

  it.only('ContactSelector Element data Validation', function () {
    cy.wait(2000)

    cy.xpath('//div[@class="col item-label"]').eq(1)
      .invoke('val')
      .then(text => {
        const Date = text;
        cy.log(Date);
      })

    cy.wait(2000)
    cy.contains(this.NewKitItemData.ContactSelectorName).should('be.visible')
    cy.contains(this.NewKitItemData.ContactSelectorName).should('exist')
    cy.wait(2000)
  })

  it.only('Assigning Element data Validation', function () {

    cy.wait(2000)
    cy.get('.v-btn:nth-child(1) .v-badge > .inline-svg').scrollIntoView({ force: true })
    cy.wait(3000)

    cy.contains(this.NewKitItemData.AssigningName).should('be.visible')
    cy.contains(this.NewKitItemData.AssigningName).should('exist')
    cy.wait(2000)

  })

  it.only('Icon Element data Validation', function () {
    cy.wait(2000)

    cy.get('[placeholder="Label"]')
      .invoke('val')
      .then(text => {
        const IconLabel = text;
        cy.log(IconLabel);
      })
    cy.wait(2000)

    //Validating details view input data
    cy.get('[placeholder="Label"]')
      .should("have.value", this.NewKitItemData.IconLabel)
    cy.wait(3000)


  })


  it.only("Group tab data Validation in details view", function () {
    //Click on group
    cy.contains("Groups").click({ force: true });
    cy.wait(3000);
    cy.contains(this.SData.AddGroup).should("be.visible");

    cy.log("Added group exist");
    cy.wait(2000);
  });

  it.only("Comments tab data Validation in details view", function () {
    cy.contains("Comments").click({ force: true });
    cy.wait(3000);
    cy.contains(this.SData.AddComments).should("be.visible");
    cy.log("Created comments exist");
    cy.wait(2000);
  });

  it.only("Time Entries tab data Validation in details view", function () {
    cy.contains("Time Entries").click({ force: true });
    cy.wait(2000);
    cy.get(".time-entry-author__name").should(
      "have.text",
      this.SData.TimeEntryConnection
    );
    cy.get(".time-entry__description").should(
      "have.text",
      this.SData.AddDescription
    );
    cy.get(".time-entry__hours").should(
      "have.text",
      this.SData.TotalHours + " h"
    );

    cy.wait(1000)
    cy.contains(this.SData.AddTimeEntryLable).should('be.visible')
    cy.log("Created Time Entries exist");
    cy.wait(3000);
  });

  it.only("Contributors tab data Validation in details view", function () {
    cy.contains("Contributors").click({ force: true });
    cy.wait(3000);

    cy.get(".contributor__name")
      .eq(1)
      .should("have.text", this.SData.ContributorsName);
    cy.wait(2000);
    cy.get(".contributor__name")
      .eq(0)
      .should("have.text", this.NewKitItemData.AssigningName);
    cy.wait(2000)

    cy.log("Added Contributors exist");
    cy.wait(3000);

  });

  it.only("Files tab data Validation in details view", function () {
    cy.contains("Files").click({ force: true });
    cy.wait(2000);
    cy.contains(this.NewKitItemData.NewFormLibFileName).should("be.visible");
    cy.contains(this.SData.FileTabFileName).should("be.visible");
    cy.log("Uploaded files exist");
    cy.wait(2000)
  });
});
