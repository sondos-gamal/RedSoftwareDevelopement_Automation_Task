module.exports = {
    async waitForElement(selector) {
        await $(selector).waitForDisplayed();
    }
};