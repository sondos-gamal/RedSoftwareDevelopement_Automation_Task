class Page {
    /**
     * Opens a specific page using the provided URL path.
     * If no path is given, it opens the base URL.
     */
    async open(path = '/') {
        await browser.url(`${browser.options.baseUrl}${path}`);
    }
}

module.exports = Page;
