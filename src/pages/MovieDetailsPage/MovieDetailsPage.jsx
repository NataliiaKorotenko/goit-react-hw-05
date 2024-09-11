import { useState, useEffect, useRef } from "react";
import { useParams, Outlet, Link, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../Api";
import Loader from '../../components/Loader/Loader.jsx';
import GoBack from '../../components/GoBack/GoBack.jsx';
import MovieInfoFilm from '../../components/MovieInfoFilm/MovieInfoFilm.jsx';
import css from '../MovieDetailsPage/MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation(); 
  const goBackRef = useRef(location.state?.from || '/'); 

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data); 
      } catch (error) {
        setError('Failed to fetch movie details');
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <div className={css.listDetPage}>
      <GoBack goBackRef={goBackRef} />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {movieDetails && (
        <>
          <MovieInfoFilm movie={movieDetails} />
          <div className={css.additionalInfo}>
            <h3 className={css.titleMovieDetail}>Additional Information</h3>
            <ul>
              <li className={css.linkMovieDetails}>
                <Link to="cast">Cast</Link>
              </li>
              <li className={css.linkMovieDetails}>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
}
