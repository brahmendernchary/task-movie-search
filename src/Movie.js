import React from "react";

const Movie = ({ title, year, poster }) => {
  return (
    <div className="movie">
      <h2>{title}</h2>
      <p>{year}</p>
      <img src={poster} alt={`${title} poster`} />
    </div>
  );
};

export default Movie;
