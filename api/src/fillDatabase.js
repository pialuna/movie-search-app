const axios = require("axios");
const mongoose = require("mongoose");
const Movie = require("./models/movie");

// open movie database api
const apiUrl = "http://www.omdbapi.com/?apikey=" + process.env.OMDBAPI_KEY;
// all movies from 2001 whose title contains "space" from omdapi
const queryParams = "&s=space&y=2001&type=movie";

async function fillDatabase() {
  // at first, empty the database
  await Movie.deleteMany({}, function (err) {
    if (err) return handleError(err);
  });
  // get all movies
  const data = await getMovieArray(apiUrl + queryParams);
  // parse and save movies to db
  const movieObjects = await parseMovieData(data);
  await saveMoviesToDb(movieObjects);
}

async function saveMoviesToDb(movieObjects) {
  try {
    for (movieObject of movieObjects) {
      await movieObject.save();
    }
    console.log("Database filled");
  } catch (error) {
    console.error(error);
  }
}

async function parseMovieData(movieArray) {
  let movieObjects = [];
  for (item of movieArray) {
    const movie = await getMovie(item.imdbID);
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
}

async function getMovie(id) {
  try {
    const response = await axios.get(apiUrl + "&i=" + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieArray(url) {
  try {
    const response = await axios.get(url);
    return response.data.Search;
  } catch (error) {
    console.error(error);
  }
}

module.exports = fillDatabase;
