import css from '../SearchMovie/SearchMovie.module.css';

export default function SearchMovie({ handleSubmit }) {
  const onSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    handleSubmit(query);
  };

  return (
    <form onSubmit={onSubmit} className={css.form}>
      <input
        className={css.input}
        type="text"
        name="query"
        placeholder="Search movies"
      />
      <button type="submit" className={css.buttonSearch}>Search</button>
    </form>
  );
}

