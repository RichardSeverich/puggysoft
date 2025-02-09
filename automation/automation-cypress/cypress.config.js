const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'http://localhost:3000',
    defaultCommandTimeout: 10000,
    // browser: 'chrome',
    setupNodeEvents(on, config) {
    // implement node event listeners here
    },
  },
});
