import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReview } from "../../Api";
import Loader from '../../components/Loader/Loader.jsx';
import css from './MovieReviews.module.css';

export default function MovieReviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const movieReviewsRes = async () => {
      setLoading(true);
      setError(null);
      try {
        const reviews = await fetchMovieReview(movieId);
        setMovieReviews(reviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    movieReviewsRes();
  }, [movieId]);

  if (movieReviews.length === 0) {
    return <p>We don't have any for this reviews</p>;
  } else {
    return (
      <>
        {loading && <Loader />}
        <ul className={css.listReviews}>
          {movieReviews.map(({ content, author, id }) => (
            <li key={id} className={css.itemReviews}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
        {error && <h2>Something went wrong ...</h2>}
      </>
    );
  }
}

