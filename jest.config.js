/** @type {import('jest').Config} */
const config = {
  testEnvironment: "node",
  transform: {}, // não usar Babel, só aceitar ESM puro
  testMatch: [
    "**/src/**/*.test.js",
    "**/?(*.)+(spec|test).js"
  ],
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/**/*.test.js"
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"]
};

export default config;
