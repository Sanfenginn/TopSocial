const axios = require("axios");
const { getUrl } = require("../middlewares/getUrl");

const uniqueUrl = "http://localhost:51002/message";

const getMessage = async (req, res, next) => {
  try {
    // const uniqueUrl = getUrl("message");

    const axiosResponse = await axios.get(uniqueUrl);
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
