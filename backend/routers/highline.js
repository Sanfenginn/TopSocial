const express = require("express");
const highlineRouter = express.Router();
const { getHighline } = require("../controllers/highlineController");

highlineRouter.get("/", getHighline);
module.exports = highlineRouter;
