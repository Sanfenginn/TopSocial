// IMPORT ALL THE CSS FILES
import "normalize.css";
import "./index.css";
import { profile } from "@/js/database.js";

// IMPORT ALL THE JS FILES
import "./src/css/navbar";
import "./src/frames/main/main-middle/highline/highline";
import "./src/frames/main/main-middle/postCards/postCards";
import "./src/frames/main/main-right/message/message";
import "./src/frames/main/main-right/message/options";
import "./src/frames/main/main-right/request/request";

//SET THE PROFILE PHOTO OF CURRENT USER
const currentUserProfile = document.querySelectorAll(".current-user-profile");
const currentUserProfileUsername = document.querySelector(".username");
const currentUserProfileAccount = document.querySelector(".account");

currentUserProfile.forEach((element) => {
  element.src = profile.img_src.replace("./src", "");
});

currentUserProfileUsername.textContent = profile.name;
currentUserProfileAccount.textContent = profile.at;
