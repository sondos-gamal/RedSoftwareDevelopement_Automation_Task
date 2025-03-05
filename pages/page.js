class Page {
    /**
     * Opens the website using the provided URL path
     */

    async open(path = '/') {
        await browser.url(`${browser.options.baseUrl}${path}`);
    }
}

module.exports = Page;
