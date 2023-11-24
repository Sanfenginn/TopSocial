const express = require("express");
const profileRouter = express.Router();
const { getProfile } = require("../controllers/profileController");
// require callback function from profileController.js
//reminder:require a callback function, need to use {};

//.then .catch method
// profileRouter.get("/profile", (req, res, next) => {
//   const url = "http://localhost:50010/profile";
//   axios
//     .get(url)
//     .then((axiosResponse) => {
//       //这里promise的结果不能用res，因为res是express的，axiosResponse是axios的，如果用res会跟express的冲突
//       const responseData = axiosResponse.data;
//       console.log("response: ", responseData);
//       res.status(200).json({
//         status: 200,
//         msg: "get profile successfully",
//         data: responseData,
//       });
//     })
//     .catch((err) => {
//       console.error("error: ", err);
//       next(err);
//     });
// });

// async/await method, use with try/catch
profileRouter.get("/profile", getProfile);
// use the callback function from profileController.js

module.exports = profileRouter;
