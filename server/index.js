const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/real-estate").then(() => {
  console.log("Mongoose connected");
});
app.listen(8000, () => {
  console.log("port running on");
});
