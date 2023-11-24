// link to the index.js outside of the routers folder, which is the parent router

const express = require("express");
const axios = require("axios");
const profileRouter = require("./profile");
const cardsRouter = require("./cards");
const messageRouter = require("./message");
const highlineRouter = require("./highline");
const requestRouter = require("./request");

// create parent router to link the child routers
const router = express.Router();

//use the child routers
router.use("/profile", profileRouter);
router.use("/cards", cardsRouter);
router.use("/message", messageRouter);
router.use("/highline", highlineRouter);
router.use("/request", requestRouter);

//exports the router
module.exports = router;
