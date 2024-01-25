const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://seller.stocksmaze.com/',
    specPattern: 'cypress/integration/stocksMazeSeller/Tests/*.js',
    setupNodeEvents(on, config) {
    },
  },
});
