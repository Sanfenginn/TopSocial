const express = require("express");
const messageRouter = express.Router();
const { getMessage } = require("../controllers/messageController");

messageRouter.get("/message", getMessage);

module.exports = messageRouter;
