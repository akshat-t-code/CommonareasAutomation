

it('Uploading the file form local',function(){

    cy.visit('https://the-internet.herokuapp.com/upload')
    const fileName = 'example.json'

    cy.fixture(fileName).then(function(fileContent){ 
        cy.get('#file-upload').upload({ fileContent, fileName, mimeType: 'application/json' })
        cy.get('#file-submit').click()
        cy.contains('File Uploaded!')
        
    })
   

})