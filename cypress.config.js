const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'v2o5ui',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
