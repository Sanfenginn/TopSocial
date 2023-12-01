import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
    },
  },
  test: {
    env: {
      // MODE: "development", // 设置默认模式为 'test'
      VITE_DB_PATH: process.env.VITE_DB_PATH || "localhost:51002",
    },
    coverage: {
      // 覆盖率配置
      provider: "v8",
      reporter: ["lcov"],
      // 可以添加更多的覆盖率配置项，如 include, exclude 等
      reportsDirectory: "coverage/vitest",
    },
    // 在此处添加你的测试配置
    globals: true,
    environment: "node", //"jsdom", // 如果你的测试依赖于DOM或浏览器API
    include: ["client/src/**/*.test.js", "client/src/**/*.spec.js"], // 包含哪些文件，支持 glob 模式
    // exclude: ["src/**/*.ignore.js"], // 排除哪些文件，支持 glob 模式
  },
});
