const axios = require("axios");

const uniqueUrl = "http://localhost:50010/cards";

const getCards = async (req, res, next) => {
  if (req.query.id) {
    return getCardsById(req, res, next);
  }
  try {
    const axiosResponse = await axios.get(uniqueUrl); //返回的promise对象就包括了data
    console.log("response: ", axiosResponse.data);
    res.status(200).json({
      status: 200,
      msg: "get cards successfully",
      data: axiosResponse.data,
    });
  } catch (error) {
    console.error("error: ", error);
    next(error);
  }
};

const getCardsById = async (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).send("Id is required!");
  }
  console.log("id: ", id);
  try {
    const axiosResponse = await axios.get(`${uniqueUrl}?id=${id}`); //返回的promise对象就包括了data
    console.log("response: ", axiosResponse.data);
    if (axiosResponse.data.length === 0) {
      return res.status(404).json({
        status: 404,
        msg: "card not found",
      });
    }

    res.status(200).json({
      status: 200,
      msg: "get cards successfully",
      data: axiosResponse.data,
    });
  } catch (error) {
    console.error("error: ", error);
    next(error);
  }
};

const postCards = async (req, res, next) => {
  const newCard = req.body;
  console.log("newCard: ", newCard);

  if (Object.keys(newCard).length === 0) {
    return res.status(400).send("Card are required");
  }

  try {
    const axiosResponse = await axios.post(uniqueUrl, newCard, {
      //返回的是一个promise对象，包括了添加进去的数据
      headers: { "Content-Type": "application/json" },
      // 什么作用？
    });
    console.log("response: ", axiosResponse.data);
    res.status(200).json({
      status: 200,
      msg: "Post cards successfully",
      data: axiosResponse.data,
    });
  } catch (error) {
    console.error("error: ", error);
    next(error);
  }
};
//为什么自动生成的id，不需要在body里面传入？json server 会自动添加id

const deleteCardById = async (req, res, next) => {
  const id = req.params.card_id;
  console.log("id: ", id);
  if (!id) {
    return res.status(400).send("Id is required!");
  }
  try {
    const axiosResponse = await axios.delete(`${uniqueUrl}/${id}`);
    //但是返回的是一个空对象，没有数据
    console.log("response: ", axiosResponse.data);
    res.status(200).json({
      status: 200,
      msg: "delete card successfully",
      data: axiosResponse.data,
    });
  } catch (error) {
    console.error("error: ", error);
    if (error.response.status === 404) {
      res.status(404).send({
        status: 404,
        msg: `${id} is nor exist, please check the id you entered`,
      });
    }
    next(error);
  }
};

module.exports = { getCards, getCardsById, postCards, deleteCardById };
