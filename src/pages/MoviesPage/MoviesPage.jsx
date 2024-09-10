import { useState, useEffect } from "react";
import { fetchTrendingQuery } from "../../Api";
import MovieList from '../../components/MovieList/MovieList.jsx';
import SearchMovie from '../../components/SearchMovie/SearchMovie.jsx';
import Loader from '../../components/Loader/Loader.jsx';

export default function MoviesPage() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const movies = await fetchTrendingQuery(query);
      setMovieList(movies.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchMovie handleSubmit={handleSearch} />
      {movieList.length > 0 && <MovieList movies={movieList} />}
      {loading && <Loader />}
      {error && <h2>Something went wrong: {error}</h2>}
    </div>
  );
}
