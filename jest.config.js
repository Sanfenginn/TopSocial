module.exports = {
  testEnvironment: "node",
  coverageDirectory: "coverage/jest",
  collectCoverage: true,
  collectCoverageFrom: ["server/**/*.js"],
  testMatch: ["**/tests/**/*api.test.js"],
  coverageReporters: ["lcov"],
};
