import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  screenshotOnRunFailure: false,
  video: false,

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
