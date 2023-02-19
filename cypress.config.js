const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "c6pd9y",
  viewportWidth: 1200,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 100000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
