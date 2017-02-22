describe('Тестирование страницы создания нового аккаунта. ', function() {
    var create_new_account_page = require('../page_object/create_new_account_page.js');

    var newAccount = new create_new_account_page();

    var loginText = 'testangular';
    var passwordText = 'testPassword1';

    beforeEach(function () {
        browser.get('https://mail.protonmail.com/create/new');
    });

    it('При вводе зарегистрированного логина появляется danger Message', function () {
        newAccount.fillLogin(loginText);
        expect(newAccount.dangerMessageLogin.getAttribute('class')).toMatch('ng-active');
    });

    it('При вводе не зарегистрированного логина появляется success Message', function () {
        newAccount.fillLogin('newLoginN1');
        browser.waitForAngular();
        expect(newAccount.successMessageLogin.getAttribute('class')).not.toMatch('ng-hide');
    });

    it('При вводе разных паролей появляется ошибка', function () {
        newAccount.fillPasswordAndConfirmPassword(passwordText, 'otherText');
        expect(newAccount.errorPasswordOrConfirmPassword.getAttribute('class')).toMatch('ng-active');
    });

    it('При вводе одинаковых паролей ошибка не появляется', function () {
        newAccount.fillPasswordAndConfirmPassword(passwordText, passwordText);
        expect(newAccount.errorPasswordOrConfirmPassword.getAttribute('class')).toMatch('ng-inactive');
    });

    it('При вводе не email появляется ошибка', function () {
        newAccount.fillRecoveryEmail('text');
        expect(newAccount.dangerMessageRecoveryEmail.getAttribute('class')).not.toMatch('ng-inactive');
    });

});