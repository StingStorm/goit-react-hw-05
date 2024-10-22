import { IoIosSearch } from 'react-icons/io';
import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.searchQuery.value;

    !query ? alert(`fill input`) : onSubmit(query);
    form.reset();
  };
  return (
    <form className={css.searchForm} onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        name="searchQuery"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <button className={css.searchBtn} type="submit">
        <IoIosSearch className={css.icon} size={'18px'} />
      </button>
    </form>
  );
};

export default SearchForm;
