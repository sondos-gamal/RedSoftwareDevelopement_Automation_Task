const Page = require('./page');

class CartPage extends Page {
    get trashIcon() { return $('//a[@class="action action-delete"]'); }
    get emptyCartMessage() { return $('//div[@class ="cart-empty"]'); }

    async removeProduct() {
        await this.trashIcon.click();
    }

    async verifyCartIsEmpty() {
        await expect(this.emptyCartMessage).toBeDisplayed();
    }
}

module.exports = new CartPage();
