import { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={css.header}>
      <form onSubmit={onSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              padding: '16px',
              color: 'white',
              backgroundColor: '#CC0000',
            },
          }}
        />
      </form>
    </header>
  );
};

export default SearchBar;
