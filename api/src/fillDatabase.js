const axios = require("axios");
const mongoose = require("mongoose");
const Movie = require("./models/movie");

// open movie database api
const apiUrl = "http://www.omdbapi.com/?apikey=" + process.env.OMDBAPI_KEY;

module.exports = {
  async fillDatabase() {
    // at first, delete everything in the database
    await Movie.deleteMany({}, function (err) {
      if (err) return handleError(err);
    });
    // get all movies from 2001 whose title contains "space" from omdapi
    const data = await this.getMovieArray(
      apiUrl + "&s=space&y=2001&type=movie"
    );
    // parse and save movies to db
    const movieObjects = await this.parseMovieData(data);
    await this.saveMoviesToDb(movieObjects);
  },

  async saveMoviesToDb(movieObjects) {
    try {
      for (movieObject of movieObjects) {
        await movieObject.save();
      }
      console.log("Database filled");
    } catch (error) {
      console.error(error);
    }
  },

  async parseMovieData(movieArray) {
    let movieObjects = [];
    for (item of movieArray) {
      const movie = await this.getMovie(item.imdbID);
      // create Movie object
      const movieObject = new Movie({
        _id: new mongoose.Types.ObjectId(),
        title: movie.Title,
        year: movie.Year,
        imdbID: movie.imdbID,
        poster: movie.Poster,
        director: movie.Director,
        plot: movie.Plot,
      });
      movieObjects.push(movieObject);
    }
    return movieObjects;
  },

  async getMovie(id) {
    try {
      const response = await axios.get(apiUrl + "&i=" + id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  async getMovieArray(url) {
    try {
      const response = await axios.get(url);
      return response.data.Search;
    } catch (error) {
      console.error(error);
    }
  },
};
