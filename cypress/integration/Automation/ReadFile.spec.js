describe('Read file from outside', function(){

    it('Uploading the file form outside',function(){

        cy.visit('https://the-internet.herokuapp.com/upload')
        const fileName = 'Fixtures.png'
    
        cy.readFile('C:/Users/akash/Desktop/ScreenShots/Fixtures.png').then(function(fileContent){ 
            cy.get('#file-upload').attachFile({ fileContent, fileName, mimeType: 'image/png' })
            cy.get('#file-submit').click()
            cy.log('File Uploaded!')
            
        })
       
    
    })

})