module.exports = {
  // 设置测试环境为 Node，适用于后端测试
  testEnvironment: "node",

  // 指定测试文件的匹配模式，这里匹配 tests/backend 目录下的 api.test.js 文件
  testMatch: ["**/tests/backend/**/*api.test.js"],

  // 设置测试覆盖率收集范围，这里假设您想收集 server 目录下的代码覆盖率
  collectCoverageFrom: [
    "server/**/*.js", // 收集 server 目录下的 JS 文件的覆盖率
  ],
};
