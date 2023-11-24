const axios = require("axios");

const getCards = async (req, res, next) => {
  try {
    const url = "http://localhost:50010/cards";
    const axiosResponse = await axios.get(url);
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

module.exports = { getCards };
