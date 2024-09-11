import { useState } from 'react';
import css from '../SearchMovie/SearchMovie.module.css';

export default function SearchMovie({ handleSearch }) {
  const [error, setError] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();

    if (!query) {
      setError('Please enter a search term.');
      return;
    }

    setError(null); 
    handleSearch(query);
  };

  return (
    <div>
    <form onSubmit={onSubmit} className={css.form}>
      <input
        className={css.input}
        type="text"
        name="query"
        placeholder="Search movies"
      />
      <button type="submit" className={css.buttonSearch}>Search</button>
     
    </form>
    {error && <p className={css.error}>{error}</p>}
    </div>
  );
}

