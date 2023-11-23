// link to the index.js outside of the routers folder,总路由，把其他的js都挂载进来

const express = require("express");
const axios = require("axios");
const profileRouter = require("./profile");
const cardsRouter = require("./cards");
const messageRouter = require("./message");
const highlineRouter = require("./highline");
const requestRouter = require("./request");

// create father router to link the child routers
const router = express.Router();

//use the child routers
router.use("/api", profileRouter);

module.exports = router;
