const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uli = process.env.ATLAS_URI;

mongoose.connect(uri, {
  userNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => console.log("Udało się połączyć z Mongoose."));
