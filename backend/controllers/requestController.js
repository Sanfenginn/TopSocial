const axios = require("axios");

const getRequest = async (req, res, next) => {
  try {
    const url = "http://localhost:50010/request";
    const axiosResponse = await axios.get(url);
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
