// IMPORT ALL THE JS VARIABLES
import { highline } from "@/js/database.js";

// SET ALL THE HIGHLINE PICTURES, DESCRIPTION, AND PROFILE PHOTOS FROM DATABASE
const middle = document.querySelector(".main-middle");
const middleHighlineContainer = middle.querySelector(".highline-container");
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
