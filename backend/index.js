require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;



app.listen(PORT, () => {
  mongoose.connect(uri);
  console.log("Database Conneted")
  console.log("App is Listening",PORT);
});
