import { useState, useEffect } from "react";
import { fetchMovieByQuery } from "../../Api";
import { useSearchParams } from "react-router-dom";
import MovieList from '../../components/MovieList/MovieList.jsx';
import SearchMovie from '../../components/SearchMovie/SearchMovie.jsx';
import Loader from '../../components/Loader/Loader.jsx';

export default function MoviesPage() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  const handleSearch = (inputQuery) => {
    setSearchParams({ query: inputQuery });
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const getMoviesByQuery = async () => {
      setLoading(true);
      setError(null);
      try {
        const { results } = await fetchMovieByQuery(searchQuery);
        setMovieList(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMoviesByQuery();
  }, [searchQuery]);

  return (
    <div>
      <SearchMovie handleSearch={handleSearch} />
      {movieList.length > 0 && <MovieList movies={movieList} />}
      {loading && <Loader />}
      {error && <h2>Something went wrong: {error}</h2>}
    </div>
  );
}
