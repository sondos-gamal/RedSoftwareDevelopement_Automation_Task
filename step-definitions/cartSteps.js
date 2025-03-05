const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/HomePage');
const SidebarPage = require('../pages/SidebarPage');
const ListPage = require('../pages/ListPage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');

Given('the user navigates to the home page', async () => {
    await browser.url('https://magento.softwaretestingboard.com/');

    await browser.waitUntil(
        async () => {
            const readyState = await browser.execute(() => document.readyState);
            console.log(`Page Ready State: ${readyState}`);
            return readyState === 'complete';
        },
        {
            timeout: 300000,
            timeoutMsg: '❌ Page did not load within 5 minutes'
        }
    );

    await browser.pause(5000);
});

When('the user selects the {string} category from the top menu', async (category) => {
    await HomePage.selectCategory(category);
});

When('the user selects {string} from the sidebar category', async (subCategory) => {
    await SidebarPage.selectSubCategory(subCategory);
});

When('the user selects a product from the product list', async () => {
    await ListPage.selectProduct(0);

});

When('the user chooses a color', async () => {
    await ProductPage.selectColor(0);

});

When('the user chooses a size', async () => {
    await ProductPage.selectSize(0);
});

When('the user clicks "Add to Cart"', async () => {
    await ProductPage.addToCart();
    await browser.pause(3000);

});

When('the user navigates to the cart via the top menu', async () => {
    await HomePage.openCart();
});

When('the user clicks on "View and Edit Cart"', async () => {
    await HomePage.viewCart();

});

When('the user clicks on the trash icon of the product', async () => {
    await CartPage.removeProduct();

});

Then('the cart should be empty', async () => {
    await CartPage.verifyCartIsEmpty();

});
