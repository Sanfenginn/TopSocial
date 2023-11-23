//require some modules
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const moment = require("moment");
const bodyParser = require("body-parser");

// create an web server
const app = express();

// register global middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// require authentication middleware

//require router modules
const router = require("./routers/index"); // require the father router in the routers folder

// use router modules
app.use(router);

// require and user error handler middleware
const { errorHandler } = require("./middlewares/errorMiddleware"); // require the error handler middleware
app.use(errorHandler);

//run the server
app.listen(50009, () => {
  console.log("Server is running on http://localhost:50009");
});
