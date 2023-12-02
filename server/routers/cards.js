const express = require("express");
const cardsRouter = express.Router();
const {
  getCards,
  getCardsById,
  postCards,
  deleteCardById,
  updateCardByPut,
  updateCardByPatch,
} = require("../controllers/cardsController");

// get all cards
cardsRouter.get("/", getCards);

// get a card by id. method:query
cardsRouter.get("/", getCardsById);

// post a card to database. method:post
cardsRouter.post("/", postCards);

//delete a card, pass a by from the params
cardsRouter.delete("/:card_id", deleteCardById);

//update a card by id to database. method:put
cardsRouter.put("/:id", updateCardByPut);

///update a card by id to database. method:patch
cardsRouter.patch("/:id", updateCardByPatch);

module.exports = cardsRouter;
