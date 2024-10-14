import React from "react";

const MovieInfo = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="movie-info">
      <h2 style={{ color: "orange" }}>{movie.title}</h2>
      <p>
        <span style={{ fontWeight: "bold" }}>Description:</span>
        {movie.overview}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Release Date: </span>
        {movie.release_date}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Rating:</span> {movie.vote_average}
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default MovieInfo;
