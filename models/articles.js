<<<<<<< HEAD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  article: { type: String, required: true },
  authorname: { type: String, required: true },
});

const Articles = mongoose.model("Article", articleSchema);

module.exports = Articles;
=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  article: { type: String, required: true },
  authorname: { type: String, required: true },
});

const Articles = mongoose.model("Article", articleSchema);

module.exports = Articles;
>>>>>>> 24cebef773147e17b503491fe233b883f0eb9cef
