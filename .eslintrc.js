module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    plusSlides: "readonly",
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    requireConfigFile: false,
  },
  ignorePatterns: [
    "**/*.spec.js",
    "**/*.test.js",
    "client/dist/**",
    "coverage/**",
    "vitest.config.js",
    "jest.config.js",
  ],
  rules: {},
};
