import css from '../MovieList/MovieList.module.css';
import { Link, useLocation } from "react-router-dom";
import { FcVideoCall } from "react-icons/fc";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <h1 className={css.titleTreding}>Trending today</h1>
      <ul className={css.movieItem}>
        {movies.map(({ id, title }) => {
          return (
            <li key={id} >
              <Link state={{ from: location }} to={`/movies/${id}`}>
                <h3 className={css.title}>
                    <FcVideoCall className={css.movieIcon} /> {title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;