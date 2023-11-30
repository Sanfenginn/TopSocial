module.exports = {
  // 设置测试环境为 Node，适用于后端测试
  testEnvironment: "node",

  // 指定测试文件的匹配模式，这里匹配 tests/backend 目录下的 api.test.js 文件
  testMatch: ["**/tests/backend/**/*api.test.js"],

  // 如果您使用了特定的 Babel 配置或其他预处理器，可以在这里配置
  transform: {
    "^.+\\.js$": "babel-jest",
  },

  // 设置测试覆盖率收集范围，这里假设您想收集 server 目录下的代码覆盖率
  collectCoverageFrom: [
    "server/**/*.js", // 收集 server 目录下的 JS 文件的覆盖率
  ],

  // 其他 Jest 相关配置...
};
