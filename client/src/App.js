import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

const url = "http://localhost:1234/movies/";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [searchTerm, setSearchTerm] = useState("");

  // api call
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.movies);
      setMovies(data.movies);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar />
      <div className="m-5 flex flex-col items-start">
        <h1>Movies</h1>
        <h5 className="text-gray-400">
          (Movies from 2001 whose title contains "Space")
        </h5>
        <label className="sr-only" htmlFor="search">
          Search for movies
        </label>
        <input
          className="w-1/2 bg-white border-2 rounded-md shadow-sm p-2 my-2 flex flex-col items-start"
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
            setFilteredMovies(
              movies.filter(
                (movie) =>
                  !searchTerm ||
                  String(movie.title + movie.year + movie.director + movie.plot)
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
              )
            );
            console.log(searchTerm);
            console.log(filteredMovies);
          }}
        ></input>
        <MovieList movies={filteredMovies} />
      </div>
    </>
  );
}

export default App;
