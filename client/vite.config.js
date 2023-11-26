import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
import path from "path";
//必须有

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      //src下的所有文件都可以用@引用
    },
  },
  esbuild: {
    target: "esnext", // 指定 esbuild 的目标为 'esnext'
  },
  plugins: [
    topLevelAwait({
      // 设置顶层 await promise 的导出名称，每个 chunk 模块使用
      promiseExportName: "__tla",
      // 生成每个 chunk 模块中顶层 await promise 的导入名称的函数
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
});
