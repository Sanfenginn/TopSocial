import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      //src下的所有文件都可以用@引用
    },
  },
});
