const express = require("express");
const cardsRouter = express.Router();
const { getCards } = require("../controllers/cardsController");

cardsRouter.get("/cards", getCards);
module.exports = cardsRouter;
