const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2kqw82',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
  },
});
