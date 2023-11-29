const axios = require("axios");

const getHighline = async (req, res, next) => {
  try {
    const url = "http://localhost:51002/highline";
    const axiosResponse = await axios.get(url);
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
