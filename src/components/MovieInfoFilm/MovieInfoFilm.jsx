import css from '../MovieInfoFilm/MovieInfoFilm.module.css';

export default function MovieInfoFilm({ movie }) {
  const { title, vote_average, overview, genres, backdrop_path } = movie;
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  
  return (
    <div className={css.infoList}>
      <img src={baseUrl + backdrop_path} alt={title} />  
      <div className={css.infoItem}>
        <h2>{title}</h2>
        <p>User score: {vote_average} %</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
}
