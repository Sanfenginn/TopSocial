const axios = require("axios");

const getMessage = async (req, res, next) => {
  try {
    const url = "http://localhost:50010/message";
    const axiosResponse = await axios.get(url);
    console.log("response: ", axiosResponse.data);
    res.status(200).send({
      status: 200,
      msg: "get message successfully",
      data: axiosResponse.data,
    });
  } catch (error) {
    console.error("error: ", error);
    next(error);
  }
};

module.exports = { getMessage };
