Feature('login');

Scenario('Login Com Sucesse',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'luan@qa.com.br')
    I.fillField('#password', secret('12345678'))
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)
}).tag('@sucesso')

Scenario('Login apenas com e-mail',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'luan@qa.com.br')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.', 3)
}).tag('@falhasenha');


Scenario('Login apenas com a senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#password', secret('12345678'))
    I.click('#btnLogin')
    I.waitForText('', 3)
}).tag('@falhaemail');

Scenario('Login sem e-mail e senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login', 10)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 5)
    I.waitForText('Senha inválida.', 5)

}).tag('@falhaemailsenha');