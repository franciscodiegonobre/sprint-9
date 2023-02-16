const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1200,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 100000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
