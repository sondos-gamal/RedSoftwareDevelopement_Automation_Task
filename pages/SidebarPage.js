const Page = require('./page');

class SidebarPage extends Page {
    get topsCategory() { return $('//a[text()=\'Tops\']'); }

    async selectSubCategory() {
        await this.topsCategory.click();
    }
}

module.exports = new SidebarPage();
