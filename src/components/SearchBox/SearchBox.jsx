import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.wrapper}>
      <label className={css.labelWrapper}>
        <span className={css.label}>Find contacts</span>
        <input
          type="text"
          value={value}
          onChange={e => onFilter(e.target.value)}
          className={css.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
