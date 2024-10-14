import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieInfo from "./components/MovieInfo";
import FavoriteMovies from "./components/FavoriteMovies";
import axios from "axios";

const API_KEY = "035747fa620918ea646aa4910b8817d8";
const BASE_URL = "https://api.themoviedb.org/3";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const searchMovies = async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: query,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
    }
  };

  const fetchMovies = useCallback(async () => {
    if (searchQuery) {
      const results = await searchMovies(searchQuery);
      setMovies(results);
    } else {
      setMovies([]);
    }
  }, [searchQuery]);

  const pickFavorite = (movie) => {
    const newFavorites = favorites.includes(movie.id)
      ? favorites.filter((id) => id !== movie.id)
      : [...favorites, movie.id];

    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="App">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <MovieList
        movies={movies}
        onSelect={setSelectedMovie}
        favorites={favorites}
        pickFavorite={pickFavorite}
      />
      <MovieInfo movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      <FavoriteMovies favorites={favorites} movies={movies} />
    </div>
  );
};

export default App;
