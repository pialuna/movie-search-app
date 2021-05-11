const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");

const Movie = require("../models/movie");

router.get("/", (req, res) => {
  try {
    // res.json(movies);
    // console.log(fetchData.getData());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", (req, res) => {
  try {
    // to do: find movie
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
