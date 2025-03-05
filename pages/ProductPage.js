const Page = require('./page');

class ProductPage extends Page {

    get colorOptions() { return $$('//div[contains(@class, "swatch-option color")]'); }
    get sizeOptions() { return $$('//div[contains(@class, "swatch-option text")]'); }
    get addToCartButton() { return $('//button[@id="product-addtocart-button"]'); }




    async selectSize(index = 0) {
        await this.sizeOptions[index].waitForExist({ timeout: 5000 });
        await this.sizeOptions[index].click();
    }

    async selectColor(index = 0) {
            await this.colorOptions[index].waitForExist({ timeout: 5000 });
            await this.colorOptions[index].click();
        }

    async enterQuantity(quantity) {
        await this.quantityInput.waitForExist({ timeout: 5000 });
        await this.quantityInput.setValue(quantity);
    }

    async addToCart() {
        await this.addToCartButton.waitForExist({ timeout: 5000 });
        await this.addToCartButton.click();
    }
}

module.exports = new ProductPage();
