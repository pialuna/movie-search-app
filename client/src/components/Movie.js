import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="w-full bg-white rounded-md shadow-sm p-4 mb-4 flex flex-col items-start justify-between">
      <div className="w-full flex flex-row items-center">
        <img className="mr-4 w-1/4" src={movie.poster} alt={movie.title} />
        {/* TO DO: N/A img src placeholder img */}
        <div>
          <h3>{movie.title}</h3>
          <h4 className="text-gray-700">{movie.year}</h4>
          <p className="text-gray-700">Director: {movie.director}</p>
          <p className="text-gray-500 text-sm">{movie.plot}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
