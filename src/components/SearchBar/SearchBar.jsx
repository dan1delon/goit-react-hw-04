import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const notify = () => toast('Please, enter a keyword to search');
    if (e.target.search.value.trim() === '') {
      notify();
      return;
    }

    onSubmit(e.target.search.value.trim());
    e.target.reset();
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
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
