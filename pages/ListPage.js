const Page = require('./page');

class ListPage extends Page {

    get productItems() { return $$('//ol[contains(@class,"product-items")]//li[contains(@class,"product-item")]//a'); }

    async selectProduct(index = 0) {
        await this.productItems[index].waitForExist({ timeout: 5000 });
        await this.productItems[index].click();
    }
}

module.exports = new ListPage();
