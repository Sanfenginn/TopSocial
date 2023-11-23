const express = require("express");
const axios = require("axios");
const profileRouter = express.Router();

//.then .catch 方法
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

// async/await方法
profileRouter.get("/profile", async (req, res, next) => {
  try {
    const url = "http://localhost:50010/profile";
    const responseDate = await axios.get(url);
    console.log("response: ", responseDate.data);
    res.status(200).json({
      status: 200,
      msg: "get profile successfully",
      data: responseDate.data,
    });
  } catch (error) {
    console.error("error: ", error);
    next(error);
  }
});

module.exports = profileRouter;
