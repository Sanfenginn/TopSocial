const axios = require("axios");
// need axios to get the datums from database(json server)
const { getUrl } = require("../middlewares/getUrl");

const getProfile = async (req, res, next) => {
  try {
    const uniqueUrl = getUrl("profile");

    const responseDate = await axios.get(uniqueUrl);
    console.log("response: ", responseDate.data);
    res.status(200).json({
      status: 200,
      msg: "get profile successfully",
      data: responseDate.data,
    });
  } catch (error) {
    console.error("error: ", error);
    next(error);
  }
};

module.exports = { getProfile };
