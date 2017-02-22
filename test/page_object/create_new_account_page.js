function create_new_account_page() {

    this.loginInput = element(by.id('username'));
    this.passwordInput = element(by.id('password'));
    this.confirmPasswordInput = element(by.id('passwordc'));
    this.recoveryEmailInput = element(by.id('notificationEmail'));
    this.createAccountSubmit = element(by.css('.signUpProcess-btn-create'));
    this.successMessageLogin = element(by.css('.signUpProcess-about-success'));
    this.dangerMessageLogin = element(by.css('.signUpProcess-about-error'));
    this.dangerMessageRecoveryEmail = element(by.css('.signUpProcess-errors-recoveryEmail'));

    this.errorPasswordOrConfirmPassword = element(by.css('#mainContainer > div > div > div.pm_panel.wide.signUpProcess-step-1 > form > div.wrapper.margin > div:nth-child(6) > div:nth-child(4) > div > div'));

    this.fillLogin = function (loginText) {
        this.loginInput.sendKeys(loginText);
    };

    this.fillPassword = function (passwordText) {
        this.passwordInput.sendKeys(passwordText);
    };

    this.fillConfirmPassword = function (confirmPasswordText) {
        this.confirmPasswordInput.sendKeys(confirmPasswordText);
    };

    this.fillPasswordAndConfirmPassword = function (passwordText, confirmPasswordText) {
        this.fillPassword(passwordText);
        this.fillConfirmPassword(confirmPasswordText);
    };

    this.fillRecoveryEmail = function (emailText) {
        this.recoveryEmailInput.sendKeys(emailText);
    };

    this.clickSubmit = function () {
        this.createAccountSubmit.click();
    };

    this.fillFullFormAndClick = function (loginText, passwordText, confirmPasswordText, emailText) {
        this.fillLogin(loginText);
        this.fillPasswordAndConfirmPassword(passwordText, confirmPasswordText);
        this.fillRecoveryEmail(emailText);
        this.clickSubmit();
    };

}

module.exports = create_new_account_page;