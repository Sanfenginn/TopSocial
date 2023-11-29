// IMPORT ALL THE JS VARIABLES
import { message } from "@/js/database.js";
import { getAllAttributes } from "@/js/utils";

//SET ALL THE PROFILE PHOTOS, MESSAGES, AND NAMES FOR MESSAGE SECTION
const messageList = document.querySelector(".message-list");
const userListProfile = messageList.querySelectorAll(".user-list__profile");
const friendsName = messageList.querySelectorAll(".friends-name");
const friendsMessage = messageList.querySelectorAll("small");

//set a project to get all src path, name,message from message array that wo got from database
const messageAllAttributes = getAllAttributes(message, "src", "name", "msg");
//get the src of profile photo
userListProfile.forEach((element, index) => {
  element.src = messageAllAttributes[index].src.replace("/src", "");
});

// get friends'name
friendsName.forEach((element, index) => {
  element.textContent = messageAllAttributes[index].name;
});
// get the msg for every friend
friendsMessage.forEach((element, index) => {
  element.textContent = messageAllAttributes[index].msg;
});
