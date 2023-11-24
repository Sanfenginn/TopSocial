const express = require("express");
const { getRequest } = require("../controllers/requestController");
const requestRouter = express.Router();

requestRouter.get("/request", getRequest);

module.exports = requestRouter;
