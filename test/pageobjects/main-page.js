module.exports = class Page {
    openUrl () {
        browser.maximizeWindow();
        const endpoint = require('./../utils/endpoint.json');
        browser.url(endpoint.BaseURL);
    }
}
