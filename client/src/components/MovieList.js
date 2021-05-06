import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <section className="w-full">
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.imdbID}>
              <Movie movie={movie} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MovieList;
