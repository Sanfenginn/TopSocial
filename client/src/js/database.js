//IMPORT PACKAGES
import axios from "axios";

//IMPORT FUNCTIONS
import { getPath } from "./utils.js";

// get the data from database
const getInfo = async (path) => {
  try {
    return await axios.get(path);
  } catch (error) {
    console.error(error);
  }
};

// get highline array from database
const getHighline = async () => {
  const path = getPath("highline");
  const response = await getInfo(path);
  return response.data;
};

const highline = await getHighline();

// 什么作用？
// 1. 通过 getPath 函数，获取后端的path
// 2. 通过 getInfo 函数，获取后端的数据
// 3. 通过 await 等待 getInfo 函数返回数据
// 4. 将数据赋值给 highLine 变量
// 5. 通过 export 导出 highLine 变量
// 6. 供其他文件使用

// get the request array from database
const getRequest = async () => {
  const path = getPath("request");
  const response = await getInfo(path);
  return response.data;
};
const request = await getRequest();

// get message section array from database
const getMessage = async () => {
  const path = getPath("message");
  const response = await getInfo(path);
  return response.data;
};
const message = await getMessage();

// get current user array from database
const getCurrentUserProfile = async () => {
  const path = getPath("profile");
  const response = await getInfo(path);
  return response.data;
};
const profile = await getCurrentUserProfile();

// get post card information array from database
const getPostCards = async () => {
  const path = getPath("cards");
  const response = await getInfo(path);
  return response.data;
};
const postCards = await getPostCards();

export { highline, request, message, profile, postCards };
