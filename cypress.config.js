const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
dotenv.config();

module.exports = defineConfig({
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 1,
  video: false,
  screenshotsFolder: "cypress/screenshots",
  screenshotsFolder: false,
  fixturesFolder: "cypress/fixtures",
  projectId: "2kqw82",
  e2e: {
    experimentalMemoryManagement: true,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.username = process.env.USERNAME_HYTECH;
      config.env.password = process.env.PASSWORD;
      return config;
    },
    baseUrl: "https://gizmo.local/",
  },
});
