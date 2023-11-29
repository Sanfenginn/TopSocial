const express = require("express");
const profileRouter = express.Router();
const { getProfile } = require("../controllers/profileController");

// async/await method, use with try/catch
profileRouter.get("/", getProfile);
// use the callback function from profileController.js

module.exports = profileRouter;
