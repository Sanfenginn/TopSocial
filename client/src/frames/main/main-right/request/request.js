// IMPORT ALL THE JS VARIABLES
import { request } from "@/js/database.js";
import { getAllAttributes } from "@/js/utils";

// SET ALL THE REQUEST PROFILE PHOTO, NAME, AND MUTUAL FRIEND NUMBER FROM DATABASE
const requestContainer = document.querySelector(".request-container");
const applierName = requestContainer.querySelectorAll(".applier-name");
const requestProfile = requestContainer.querySelectorAll(".request__profile");
const mutualFriend = requestContainer.querySelectorAll("small");

//set the name of applier
const requestAllAttributes = getAllAttributes(
  request,
  "name",
  "mutualFriendNum",
  "src"
);

applierName.forEach((element, index) => {
  element.textContent = requestAllAttributes[index].name;
});

// set the mutual friend number
mutualFriend.forEach((element, index) => {
  if (
    requestAllAttributes[index].mutualFriendNum === 0 ||
    requestAllAttributes[index].mutualFriendNum === 1
  ) {
    element.textContent = ` ${requestAllAttributes[index].mutualFriendNum} Mutual Friend`;
  } else {
    element.textContent = ` ${requestAllAttributes[index].mutualFriendNum} Mutual Friends`;
  }
});

// set the profile photo
requestProfile.forEach((element, index) => {
  element.src = requestAllAttributes[index].src.replace("./src", "");
});
