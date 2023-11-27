import {
  highline,
  request,
  message,
  profile,
  postCards,
} from "@/js/database.js";
//导入highLine变量

// SET ALL THE HIGHLINE PICTURES, DESCRIPTION, AND PROFILE PHOTOS FROM DATABASE
const middle = document.querySelector(".main-middle");
const middleHighlineContainer = middle.querySelector(".highline-container");
const middleHighline = middleHighlineContainer.querySelectorAll(".highline");
const middleHighlineProfile =
  middleHighlineContainer.querySelectorAll(".highline__profile");
const middleHighlinePicture =
  middleHighlineContainer.querySelectorAll(".highline__picture");
const middleHighlineSmall = middleHighlineContainer.querySelectorAll("small");
//要获取到middleHighlineContainer这个元素里面，每个类名为.highline的元素里面的每个small
//不能对一个NodeList使用querySelectorAll，只能对一个元素使用querySelectorAll

// set the profile photo
middleHighlineProfile.forEach((element, index) => {
  element.src = `images/profile/profile_${index + 5}.png`;
});

// set the highline picture
middleHighlinePicture.forEach((element, index) => {
  element.src = `images/highline/highline_${index + 1}.jpeg`;
});
//图片放在public文件夹下，所以要用相对路径
//为什么放在public里面路径不需要加public，但是它能识别到呢？
//vite.config.js里面配置了publicPath
//所以只要直接引用public下的文件，就不需要加public

// set the highline description
middleHighlineSmall.forEach((element, index) => {
  element.textContent = highline.description[index];
});

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
  element.src = requestAllAttributes[index].src.replace("./src", "./public");
});

//SET ALL THE PROFILE PHOTOS, MESSAGES, AND NAMES FOR MESSAGE SECTION
const messageList = document.querySelector(".message-list");
const userListProfile = messageList.querySelectorAll(".user-list__profile");
const friendsName = messageList.querySelectorAll(".friends-name");
const friendsMessage = messageList.querySelectorAll("small");

//set a project to get all src path, name,message from message array that wo got from database
const messageAllAttributes = getAllAttributes(message, "src", "name", "msg");
//get the src of profile photo
userListProfile.forEach((element, index) => {
  element.src = messageAllAttributes[index].src.replace("/src", "./public");
});
// get friends'name
friendsName.forEach((element, index) => {
  element.textContent = messageAllAttributes[index].name;
});
// get the msg for every friend
friendsMessage.forEach((element, index) => {
  element.textContent = messageAllAttributes[index].msg;
});

//SET THE PROFILE PHOTO OF CURRENT USER
const currentUserProfile = document.querySelectorAll(".current-user-profile");
const currentUserProfileUsername = document.querySelector(".username");
const currentUserProfileAccount = document.querySelector(".account");

currentUserProfile.forEach((element) => {
  element.src = profile.img_src.replace("./src", "./public");
});

currentUserProfileUsername.textContent = profile.name;
currentUserProfileAccount.textContent = profile.at;

//SET THE POST CARDS FOR POST SECTION
console.log(postCards);

const mainMiddle = document.querySelector(".main-middle");

postCards.forEach((element, index) => {
  const template = document.getElementById("template");
  const newPostCard = template.cloneNode(true);

  // set the profile photo
  const profileImg = newPostCard.querySelector(".post-information img");
  profileImg.src = postCards[index].profile.src.replace("./src", "./public");

  //set the poster name
  const posterName = newPostCard.querySelector(
    ".post-information .post-status .poster-name"
  );
  posterName.textContent = postCards[index].profile.name;

  //set the post location and time
  const postLocationTime = newPostCard.querySelector(
    ".post-information .post-status .post-location-time small"
  );
  postLocationTime.textContent = `${postCards[index].profile.position}, ${postCards[index].profile.time} minutes ago `;

  //set the post picture
  const postPicture = newPostCard.querySelector(".post-picture img");
  postPicture.src = postCards[index].picture.img_src.replace(
    "./src",
    "./public"
  );

  //SET THE POST COMMENTS
  //set the who like profile
  const whoLikeProfile = newPostCard.querySelectorAll(
    ".who-like .who-like__profile img"
  );
  whoLikeProfile.forEach((element, index) => {
    element.src = postCards[index].comment.img_src_list[index].replace(
      "./src",
      "./public"
    );
  });

  //set who-like description
  const whoLikeDescription = newPostCard.querySelector(
    ".who-like .who-like__description"
  );
  const first_people_name = postCards[index].comment.first_people_name;
  const like_peoples_number = postCards[index].comment.like_peoples_number;
  whoLikeDescription.textContent = `Liked by ${first_people_name} and ${like_peoples_number} others`;

  //set the comment info
  const commentInfo = newPostCard.querySelector(".comment-info");
  commentInfo.textContent = postCards[index].comment.comment_info;

  // set the other views option
  const otherViews = newPostCard.querySelector(".other-views");
  const viewNumber = postCards[index].comment.view_number;
  otherViews.textContent = `View all ${viewNumber} comments`;

  newPostCard.id = "";

  newPostCard.style.display = "flex";
  newPostCard.classList.add("posts");
  mainMiddle.appendChild(newPostCard);
});
