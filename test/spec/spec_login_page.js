describe('Тестирование страницы login. ', function() {
    var login_page = require('../page_object/login_page');

    var loginPage = new login_page();
    var loginText = 'testangular';
    var passwordText = 'testPassword1';

    var EC = protractor.ExpectedConditions;

    beforeEach(function () {
        browser.get('https://mail.protonmail.com/login');
    });

    it('Ввод только логина и нажатие на submit приводит к errorMassage', function () {
        loginPage.fillLoginAndClickButton(loginText);
        expect(loginPage.textErrorMassege.getText()).toEqual('Please enter your username and password');
    });

    it('Ввод только пароля и нажатие на submit приводит к errorMassage', function () {
        loginPage.fillPasswordAndClickButton(passwordText);
        expect(loginPage.textErrorMassege.getText()).toEqual('Please enter your username and password');
    });

    it('Ввод неверного логина и верного пароля пароля ', function () {
        loginPage.fillLoginAndPasswordAndButtonClick('otherLogin', passwordText);
        browser.wait(EC.presenceOf(loginPage.InvalidLoginMassege), 10000);
        expect(loginPage.InvalidLoginMassege.getText()).toEqual('Incorrect login credentials. Please try again');
    });

    it('Ввод неверного пароля и верного логина', function () {
        loginPage.fillLoginAndPasswordAndButtonClick(loginText, 'text');
        browser.wait(EC.presenceOf(loginPage.InvalidLoginMassege), 10000);
        expect(loginPage.InvalidLoginMassege.getText()).toEqual('Incorrect login credentials. Please try again');
    });


});