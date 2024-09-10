import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../Api";
import Loader from '../../components/Loader/Loader.jsx';
import css from './MovieCast.module.css';

export default function MovieCast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movieCastRes = async () => {
      setLoading(true);
      setError(null);
      try {
        const cast = await fetchMovieCast(movieId);
        setMovieCast(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    movieCastRes();
  }, [movieId]);

  const baseUrl = "https://image.tmdb.org/t/p/w500/";

  if (movieCast.length === 0) {
    return <p>There is no information about the cast</p>;
  } else {
    return (
      <>
        <ul className={css.listCast}>
          {movieCast.map(({ id, name, profile_path }) => (
            profile_path && (
              <li key={id} className={css.itemCast}>
                <img
                  src={baseUrl + profile_path}
                  alt={name}
                  className={css.imgCast}
                />
                <p className={css.textCast}> {name}</p>
              </li>
            )
          ))}
        </ul>
        {loading && <Loader />}
        {error && <h2>Something went wrong ...</h2>}
      </>
    );
  }
}
