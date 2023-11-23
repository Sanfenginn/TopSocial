// link to the index.js outside of the routers folder, which is the father router

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
router.use("/api", cardsRouter);
router.use("/api", messageRouter);
router.use("/api", highlineRouter);
router.use("/api", requestRouter);

module.exports = router;
