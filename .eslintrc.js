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
  ignorePatterns: ["client/dist/**", "tests/**"],
  rules: {},
};
