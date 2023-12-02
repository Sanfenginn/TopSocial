const axios = require("axios");
const { getUrl } = require("../utility/getUrl");

const getRequest = async (req, res, next) => {
  try {
    const uniqueUrl = getUrl("request");
    const axiosResponse = await axios.get(uniqueUrl);
    console.log("response: ", axiosResponse.data);
    res.status(200).json({
      status: 200,
      msg: "get request successfully",
      data: axiosResponse.data,
    });
  } catch (error) {
    console.error("error: ", error);
    next(error);
  }
};

module.exports = { getRequest };
