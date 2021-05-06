import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="w-full bg-white rounded-md shadow-sm p-4 mb-4 flex flex-col items-start justify-between">
      <div className="w-full flex flex-row items-center">
        <img className="mr-4 w-1/4" src={movie.Poster} alt={movie.Title} />
        {/* TO DO: N/A img src placeholder img */}
        <div>
          <h3>{movie.Title}</h3>
          {/* TO DO */}
          <p>Director: </p>
          <p>Plot ...</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
