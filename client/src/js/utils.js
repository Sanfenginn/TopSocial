//IMPORT PACKAGES
import path from "path-browserify";

//GET FULLPATH
const getPath = (...info) => {
  // const dbPath = import.meta.env.VITE_DB_PATH;
  process.env.VITE_DB_PATH = "localhost:51002";

  const dbPath = process.env.VITE_DB_PATH;

  const fullPath = getHttpProtocol() + path.join(dbPath, ...info);
  return fullPath;
};

//GET WEBSITE RUNNING MODE
const getWebsiteRunningMode = () => {
  return import.meta.env.MODE;
};

//GET HTTP HEADER
const getHttpProtocol = () => {
  // if (getWebsiteRunningMode() === "development") {
  return "http://";
  // } else {
  // return "https://";
  // }
};

//SET A PROJECT TO GET ALL THE ATTRIBUTE THAT WE NEED FROM ARRAY THAT WE GOT FROM DATABASE
const getAllAttributes = (array, attribute1, attribute2, attribute3) => {
  const allAttributes = array.map((item) => {
    return {
      [attribute1]: item[attribute1],
      [attribute2]: item[attribute2],
      [attribute3]: item[attribute3],
    };
  });
  return allAttributes;
};

export { getPath, getAllAttributes };
