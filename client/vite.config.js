import { defineConfig } from "vite";
import path from "path";
//必须有

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      //src下的所有文件都可以用@引用
    },
  },
});
