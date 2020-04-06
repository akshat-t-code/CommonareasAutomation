

import LoginPage from '../PageObject/LoginPage'


describe('Window object', function(){

it('DOM element', function(){

const lp=new LoginPage()
lp.visit()
lp.EnterEmail('kstanley@commonareas.work.dev')
lp.EnterPassword('1234567Aa')
lp.Submit()

cy.window().then(function(win){


})


})



})