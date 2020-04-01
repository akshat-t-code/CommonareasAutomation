


describe('Fixtures Example for reading the data inside a test data folder', function () {

    this.beforeEach('Mulitple Fixtures block',function () {

        cy.visit('https://serviceproviders.ca-test.com/Public/Login?ReturnUrl=%2F')
        
        
        cy.fixture('/TestData/example1.json').then(function (data) {

            this.data1 = data

        })


        cy.fixture('example').then(function (Data) {

            this.Data = Data

        })

    })

    it('Reading the data from json file for positive TC', function () {

        //  cy.fixture('example1').then(function (data) {
        //  this.data1 = data
        cy.get('#UserName').click()
        cy.get('#UserName').type(this.Data.email)
        cy.get('#Password').type(this.Data.Password)
        // cy.get('#UserName').type(this.data.email)
        //cy.get('#Password').type(this.data.Password)
        cy.get('#login_button').click()
        //debugger;
        cy.title().should('eq', 'Common Areas')
        cy.log('Login successfully')
        cy.log('We can read data from multiple fixtures file in our TC')
        cy.wait(10000)


    })


    it('Reading the data from json file for Negative TC', function () {

        //  cy.fixture('example1').then(function (data) {
        //  this.data1 = data
        cy.get('#UserName').click()
        cy.get('#UserName').type(this.data1.email1)
        cy.get('#Password').type(this.data1.Password1)
        cy.get('#login_button').click()
        cy.get('.field-validation-error')
            .contains('Invalid username or password.', { timeout: 5000 })
            .should('be.visible')

    })





})




