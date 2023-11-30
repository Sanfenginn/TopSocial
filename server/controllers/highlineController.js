const axios = require("axios");
const { getUrl } = require("../middlewares/getUrl");

const uniqueUrl = getUrl("highline");
// const uniqueUrl = "http://localhost:51002/highline";

const getHighline = async (req, res, next) => {
  try {
    const axiosResponse = await axios.get(uniqueUrl);
    console.log("response: ", axiosResponse.data);
    res.status(200).json({
      status: 200,
      msg: "get highline successfully",
      data: axiosResponse.data,
    });
  } catch (error) {
    console.error("error: ", error);
    next(error);
  }
};

module.exports = { getHighline };
