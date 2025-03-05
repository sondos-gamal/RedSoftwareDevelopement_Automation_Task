exports.config = {
    runner: 'local',

    specs: ['./features/cart.feature'],
    exclude: [],

    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [] // Remove "--headless" to open the browser UI
        }
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://magento.softwaretestingboard.com/',

    waitforTimeout: 300000, // 5-minute wait time for elements
    connectionRetryTimeout: 360000, // 6-minute retry timeout
    connectionRetryCount: 3,

    services: ['chromedriver'],

    framework: 'cucumber',
    reporters: ['spec', ['allure', { outputDir: 'reports/allure-results' }]], // ✅ FIXED FORMAT

    cucumberOpts: {
        require: ['./step-definitions/cartSteps.js'],
        timeout: 600000, // 10 minutes timeout
    },

    before: async () => {
        await browser.maximizeWindow(); // Ensure the browser opens
    },

    afterScenario: async (world, result) => {
        if (!result.passed) {
            await browser.saveScreenshot(`./reports/screenshots/${Date.now()}.png`);
        }
    },

    onComplete: () => {
        console.log('✅ Test execution completed!');
    }
};
