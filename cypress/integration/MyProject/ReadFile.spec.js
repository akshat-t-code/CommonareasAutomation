
describe('Read file from outside', function(){

    it('Uploading the file form outside',function(){

        cy.visit('https://the-internet.herokuapp.com/upload')
        const fileName = 'test_app.pdf'
    
        cy.readFile('C:/Users/akash/Downloads/test_app.pdf').then(function(fileContent){ 
            cy.get('#file-upload').upload({ fileContent, fileName, mimeType: 'application/pdf' })
            cy.get('#file-submit').click()
            cy.contains('File Uploaded!')
            
        })
       
    
    })





})