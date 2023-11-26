import { highline, request } from "@/js/database.js";
//导入highLine变量

// set all the highline pictures from database
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

// set all the request profile photo, name, and mutual friend number from database
const requestContainer = document.querySelector(".request-container");
const applierName = requestContainer.querySelectorAll(".applier-name");
const requestProfile = requestContainer.querySelectorAll(".request__profile");
const mutualFriend = requestContainer.querySelectorAll("small");

//get a project include name, mutual friend number and profile photo src.
const allAttributes = request.map((item) => {
  return {
    name: item.name,
    mutualFriendNum: item.mutualFriendNum,
    src: item.src,
  };
});

//set the name of applier
applierName.forEach((element, index) => {
  element.textContent = allAttributes[index].name;
});

// set the mutual friend number
mutualFriend.forEach((element, index) => {
  if (
    allAttributes[index].mutualFriendNum === 0 ||
    allAttributes[index].mutualFriendNum === 1
  ) {
    element.textContent = ` ${allAttributes[index].mutualFriendNum} Mutual Friend`;
  } else {
    element.textContent = ` ${allAttributes[index].mutualFriendNum} Mutual Friends`;
  }
});

// set the profile photo
requestProfile.forEach((element, index) => {
  element.src = allAttributes[index].src;
});
