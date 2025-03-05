const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/HomePage');
const SidebarPage = require('../pages/SidebarPage');
const ListPage = require('../pages/ListPage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');

Given('the user navigates to the home page', async () => {
    await browser.url('https://magento.softwaretestingboard.com/');

    // **Wait up to 5 minutes for the page to fully load**
    await browser.waitUntil(
        async () => {
            const readyState = await browser.execute(() => document.readyState);
            console.log(`Page Ready State: ${readyState}`);
            return readyState === 'complete';
        },
        {
            timeout: 300000, // **Waits 5 minutes (300000 ms)**
            timeoutMsg: '❌ Page did not load within 5 minutes'
        }
    );

    await browser.pause(5000); // Small delay for stability
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

    // Ensure the product is added to the cart by checking UI updates
    await browser.waitUntil(
        async () => await ProductPage.isProductAdded(),
        {
            timeout: 10000, // Increased timeout to ensure the cart updates
            timeoutMsg: 'Product was not added to the cart within 10 seconds'
        }
    );
});

When('the user navigates to the cart via the top menu', async () => {
    await HomePage.openCart();
});

When('the user clicks on "View and Edit Cart"', async () => {
    await HomePage.viewCart();

});

When('the user clicks on the trash icon of the product', async () => {
    await CartPage.removeProduct();

    // Wait for the cart to be updated
    await browser.waitUntil(
        async () => await CartPage.isProductRemoved(),
        {
            timeout: 10000,
            timeoutMsg: 'Product was not removed from the cart within 10 seconds'
        }
    );
});

Then('the cart should be empty', async () => {
    await CartPage.verifyCartIsEmpty();

});
