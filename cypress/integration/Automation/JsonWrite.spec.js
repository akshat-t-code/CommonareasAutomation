describe("Json file write", function () {
  it("Josn file", function () {
    cy.writeFile("cypress/fixtures/data.json", {
      name: "he",
      email: "eliza@example.com",
      Password: "1234567Aa",
    });
    cy.writeFile("cypress/fixtures/data1.json", {
      name: "he",
      email: "eliza@example.com",
      Password: "1234567Aa",
    });
    cy.log("Data has been write to json");
    
  });
});
