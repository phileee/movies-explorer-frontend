import './SearchForm.css';
import Switch from '../Switch/Switch';

function SearchForm() {
  return (
    <article className="searchForm">
      <form className="searchForm__bar">
        <div className="searchForm__icon" />
        <input className="searchForm__input" type="text" placeholder="Фильм" required />
        <button className="searchForm__button" type="submit" >Найти</button>
      </form>
      <div className="searchForm__line" />
      <Switch />
    </article>
  );
}

export default SearchForm;
