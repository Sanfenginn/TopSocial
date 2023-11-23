//require some modules
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const moment = require("moment");
const bodyParser = require("body-parser");

// create an web server
const app = express();

// require global middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//require router modules

// use router modules

// user error handler middleware

//run the server
app.listen(50009, () => {
  console.log("Server is running on http://localhost:50009");
});
