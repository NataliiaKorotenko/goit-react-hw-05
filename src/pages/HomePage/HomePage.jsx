import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../Api.js';
import MovieList from '../../components/MovieList/MovieList.jsx';
import Loader from '../../components/Loader/Loader.jsx';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchTrendingMovies();
        setTrendingMovies(response.results);
      } catch (error) {
        setError(error.message || 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      {trendingMovies.length > 0 && <MovieList movies={trendingMovies} />}
      {loading && <Loader />}
      {error && <h2>Something went wrong: {error}</h2>}
    </div>
  );
}
