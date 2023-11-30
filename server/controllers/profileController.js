const axios = require("axios");
// need axios to get the datums from database(json server)

const getProfile = async (req, res, next) => {
  try {
    // const url = "http://localhost:51002/profile";
    const url = "http://project1.sanfenginn.com/api2/profile";
    const responseDate = await axios.get(url);
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
