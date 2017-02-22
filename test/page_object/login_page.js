function login_page() {

    this.login = element(by.model('username'));
    this.password = element(by.model('password'));
    this.buttonSubmit = element(by.css('#pm_login #login_btn'));
    this.textErrorMassege = element(by.css('#login > div.proton-notification-template.cg-notify-message.notification-danger.cg-notify-message-center > div:nth-child(1) > span'));
    this.InvalidLoginMassege = element(by.css('#login > div.proton-notification-template.cg-notify-message.notification-danger.cg-notify-message-center > div:nth-child(1) > span'));

    this.fillOnlyLogin = function (loginText) {
        this.login.sendKeys(loginText);
    };

    this.fillOnlyPassword = function (passwordText) {
        this.password.sendKeys(passwordText);
    };

    this.fillLoginAndClickButton = function (loginText) {
        this.fillOnlyLogin(loginText);
        this.buttonSubmit.click();
    };

    this.fillPasswordAndClickButton = function (passwordText) {
        this.fillOnlyPassword(passwordText);
        this.buttonSubmit.click();
    };

    this.fillLoginAndPasswordAndButtonClick = function (loginText, passwordText) {
        this.fillOnlyLogin(loginText);
        this.fillOnlyPassword(passwordText);
        this.buttonSubmit.click();
    }
}

module.exports = login_page;