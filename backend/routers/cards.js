const express = require("express");
const cardsRouter = express.Router();
const {
  getCards,
  getCardsById,
  postCards,
  deleteCardById,
} = require("../controllers/cardsController");

// get all cards
cardsRouter.get("/", getCards);

// get a card by id. method:query
cardsRouter.get("/", getCardsById);

// post a card to database. method:post
cardsRouter.post("/", postCards);

//delete a card, pass a by from the params
cardsRouter.delete("/:card_id", deleteCardById);

module.exports = cardsRouter;
