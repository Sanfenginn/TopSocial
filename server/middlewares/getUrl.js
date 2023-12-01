require("dotenv").config();

const getUrl = (path) => {
  const baseUrl = process.env.DATABASE_URL;
  if (typeof path === "string") {
    return `${baseUrl}/${path}`;
  } else {
    return `${baseUrl}/${String(path)}`;
  }
};

//当你检查path是否为字符串时，应该使用typeof path === "string"，而不是String。因为String是一个构造函数，而typeof操作符返回的是小写的类型字符串。

module.exports = { getUrl };
