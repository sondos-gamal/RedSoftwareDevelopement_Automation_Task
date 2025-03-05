const Page = require('./page');

class HomePage extends Page {
    get womenCategory() { return $('//a[@id="ui-id-4"]'); }
    get cartIcon() { return $('//a[@class="action showcart"]'); }
    get viewCartButton() { return $('//span[@data-bind="i18n: \'View and Edit Cart\'"]'); }


    async selectCategory() {
        await this.womenCategory.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async viewCart() {
            await this.viewCartButton.click();
        }

}

module.exports = new HomePage();
