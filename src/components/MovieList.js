import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieList = ({ movies, onSelect, favorites, pickFavorite }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-item"
          onClick={() => onSelect(movie)}
        >
          <LazyLoadImage
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              pickFavorite(movie);
            }}
          >
            {favorites.includes(movie.id)
              ? "Remove from favorites movies"
              : "Add to favorites movies"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
