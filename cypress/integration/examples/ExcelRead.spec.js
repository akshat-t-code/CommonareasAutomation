/*
<script lang="javascript" src="dist/xlsx.full.min.js"></script>



const testData = require("cypress\fixtures\testData.xlsx");

describe("Dynamically Generated Tests", () => {
  testData.forEach((testDataRow: any) => {
    const data = {
      username: testDataRow.username,
      password: testDataRow.password
    };

    context(`Generating a test for ${data.username}`, () => {
      it("should fail to login for the specified details", () => {
        login.visit('https://serviceproviders.ca-test.com/Public/Login?ReturnUrl=%2F');
        login.username.type(data.username);
        login.password.type(`${data.password}{enter}`);
        
      });
    });
  });
});

*/