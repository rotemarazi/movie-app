import React from "react";

const FavoriteMovies = ({ favorites, movies }) => {
  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));
  return (
    <div className="favorite-movies">
      <h1 style={{ color: "blue" }}>Favorite Movies</h1>
      {favoriteMovies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default FavoriteMovies;
