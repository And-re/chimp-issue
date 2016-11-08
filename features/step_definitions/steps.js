module.exports = function () {
    this.When(/^I am on the login page$/, function () {
        browser.url('http://localhost:3000');
        browser.waitForVisible('#username');
    });

    this.When(/^I enter "([^"]*)" in "([^"]*)" field$/, function (value, fieldName) {
        const selector = `//*[@id='${fieldName}']`
        browser.setValue(selector, value);
    });

    this.When(/^I click on the "([^"]*)" button$/, function (buttonText) {
        const selector = `//button[contains(text(),'${buttonText}')]`;
        browser.click(selector);
    });

    this.Then(/^I should see empty inputs$/, function () {
        const usernameSelector = `//*[@id='username']`;
        const passwordSelector = `//*[@id='password']`;
        expect(browser.getValue(usernameSelector)).toBe('');
        expect(browser.getValue(passwordSelector)).toBe('');
    });
};
