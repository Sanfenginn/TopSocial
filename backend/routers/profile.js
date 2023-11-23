const express = require("express");
const axios = require("axios");
const profileRouter = express.Router();

profileRouter.get("/profile", async (req, res, next) => {
  try {
    const url = "http://localhost:50010/profile";
    const response = await axios.get(url);
    //get拿到数据，
    console.log("response: ", response.data);
    //测试能从json server拿到数据
    res.status(200).send({
      status: 200,
      msg: "get profile successfully",
      data: response.data,
    });
    //send给前端
    // throw new Error("Server Error"); //Server Error 就是message
  } catch (error) {
    console.error("error: ", error);
    next(error);
  }
});

module.exports = profileRouter;
