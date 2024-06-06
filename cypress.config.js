const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
dotenv.config();

module.exports = defineConfig({
  projectId: '2kqw82',
  e2e: {
    experimentalMemoryManagement: true,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.username = process.env.USERNAME_HYTECH;
      config.env.password = process.env.PASSWORD;
      return config;
    },
    video: false,
  },
});
