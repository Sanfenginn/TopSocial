//IMPORT PACKAGES
import axios from "axios";

//IMPORT FUNCTIONS
import { getPath } from "./utils.js";

// get the data from database
const getInfo = async (path) => {
  try {
    const axiosResponse = await axios.get(path);
    return axiosResponse.data;
  } catch (error) {
    console.error(error);
  }
};

// get highline array from database
const getHighline = async () => {
  const path = getPath("highline");
  const response = await getInfo(path);
  return response;
};
const highline = await getHighline();

// get the request array from database
const getRequest = async () => {
  const path = getPath("request");
  const response = await getInfo(path);
  return response;
};
const request = await getRequest();

// get message section array from database
const getMessage = async () => {
  const path = getPath("message");
  const response = await getInfo(path);
  return response;
};
const message = await getMessage();

// get current user array from database
const getCurrentUserProfile = async () => {
  const path = getPath("profile");
  const response = await getInfo(path);
  return response;
};
const profile = await getCurrentUserProfile();

// get post card information array from database
const getPostCards = async () => {
  const path = getPath("cards");
  const response = await getInfo(path);
  return response;
};
const postCards = await getPostCards();

export { highline, request, message, profile, postCards };
