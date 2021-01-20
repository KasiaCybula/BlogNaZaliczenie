<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const Articles = require("../models/articles");

router.get("/", (req, res) => {
  Articles.find()
    .then((article) => res.json(article))
    .catch((err) => res.sendStatus(400).res.json("Error: ${err}"));
});

module.exports = router;
=======
const express = require("express");
const router = express.Router();
const Articles = require("../models/articles");

router.get("/", (req, res) => {
  Articles.find()
    .then((article) => res.json(article))
    .catch((err) => res.sendStatus(400).res.json("Error: ${err}"));
});

module.exports = router;
>>>>>>> 24cebef773147e17b503491fe233b883f0eb9cef
