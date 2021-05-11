const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");

const Movie = require("../models/movie");

router.get("/", async (req, res) => {
  try {
    const docs = await Movie.find();
    const response = {
      count: docs.length,
      movies: docs.map((doc) => {
        return {
          movie: doc,
          url: "http://localhost:1234/movies/" + doc._id,
        };
      }),
    };
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "GET /movie/:id is currently not implemented" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "DELETE /movie/:id is currently not implemented" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/:id", (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "PATCH /movie/:id is currently not implemented" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "PUT /movie/:id is currently not implemented" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
