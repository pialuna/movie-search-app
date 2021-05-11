import React from "react";

const Movie = ({ movie }) => {
  let imgUrl = movie.poster;
  if (imgUrl === "N/A") {
    imgUrl = "https://via.placeholder.com/100x150";
  }
  return (
    <div className="w-full bg-white rounded-md shadow-sm p-4 mb-4 flex flex-col items-start justify-between">
      <div className="w-full flex flex-row items-center">
        <img className="mr-4 w-1/4" src={imgUrl} alt={movie.title} />
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
