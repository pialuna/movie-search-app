const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  year: String,
  imdbID: String,
  poster: String,
  director: String,
  plot: String,
});

module.exports = mongoose.model("Movie", movieSchema);
