const express = require("express");
const highlineRouter = express.Router();
const { getHighline } = require("../controllers/highlineController");

highlineRouter.get("/highline", getHighline);
module.exports = highlineRouter;
