import path from "path-browserify";

export const getPath = (...info) => {
  const dbPath = import.meta.env.VITE_DB_PATH;
  const fullPath = getHttpHeader() + path.join(dbPath, ...info);
  return fullPath;
};
//return fullPath;

// 什么作用？
// 1. 通过 import.meta.env.VITE_DB_PATH 获取后端的path
// 2. 用于请求接口时，拼接请求地址

export const getWebsiteRunningMode = () => {
  return import.meta.env.MODE;
};
// 什么作用？
// 1. 通过 import.meta.env.MODE 获取当前运行环境
// 2. 通过 import.meta.env.BASE_URL 获取当前运行环境的根路径
// 3. 通过 import.meta.env.PROD 获取当前是否是生产环境
// 4. 通过 import.meta.env.DEV 获取当前是否是开发环境
// 5. 通过 import.meta.env.SSR 获取当前是否是服务端渲染
// 6. 通过 import.meta.env.VITE_APP_* 获取环境变量
//什么是不同的mode？

export const getHttpHeader = () => {
  if (getWebsiteRunningMode() === "development") {
    return "http://";
  } else {
    return "https://";
  }
};
// 什么作用？
// 1. 根据当前运行环境，返回 http 或者 https
// 2. 用于请求接口时，拼接请求地址
// 接下来可以写getPath函数了，获取后端的path
