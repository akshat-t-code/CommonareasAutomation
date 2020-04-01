

import LoginPage from '../PageObject/LoginPage'


describe('Page Object demo', function(){



it('Login', function(){

const lp=new LoginPage()
lp.visit()
lp.EnterEmail('kstanley@commonareas.work.dev')
lp.EnterPassword('1234567Aa')
lp.Submit()


})



})