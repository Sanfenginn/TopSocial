import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    env: {
      MODE: "development", // 设置默认模式为 'test'
      VITE_DB_PATH: "localhost:51002", //"project1.sanfenginn.com/api2/",
    },
    // 在此处添加你的测试配置
    globals: true,
    environment: "node", //"jsdom", // 如果你的测试依赖于DOM或浏览器API
    // include: ["src/**/*.test.js"], // 包含哪些文件，支持 glob 模式
    // exclude: ["src/**/*.ignore.js"], // 排除哪些文件，支持 glob 模式
  },
  coverage: {
    // 覆盖率配置
    reporter: ["text", "json", "html"],
    // 可以添加更多的覆盖率配置项，如 include, exclude 等
    dir: "./coverage_reports",
  },
});
