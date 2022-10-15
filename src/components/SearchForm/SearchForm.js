import './SearchForm.css';
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import Switch from '../Switch/Switch';

function SearchForm({ handleSearchMovies, error, handleShortsCheckbox, keyWord, shortsCheckbox, shortsCheckboxSaved }) {

  const location = useLocation();

  const [searchForm, setSearchForm] = useState({
    error: '',
    keyWord: '',
    isFormValid: false,
  });

  const handleChange = (evt) => {
    setSearchForm({
      ...searchForm,
      error: '',
      [evt.target.name]: evt.target.value,
      isFormValid: evt.target.closest('form').checkValidity(),
    });
  }

  React.useEffect(() => {
    if (keyWord && (location.pathname === '/movies' || location.pathname === '/saved-movies')) {
      setSearchForm({ keyWord: keyWord });
    }
}, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSearchForm({
      ...searchForm,
      isFormValid: evt.target.closest('form').checkValidity(),
    });
    if (!searchForm.isFormValid) {
      return setSearchForm({
        ...searchForm,
        error: 'Нужно ввести ключевое слово',
      });
    }
    handleSearchMovies(searchForm.keyWord);
  }

  return (
    <>
      <article className="searchForm">
        <form className="searchForm__bar" noValidate onSubmit={handleSubmit} >
          <div className="searchForm__icon" />
          <input className="searchForm__input" type="text" placeholder="Фильм" name='keyWord' value={searchForm.keyWord} onChange={handleChange} required />
          <button className="searchForm__button" type="submit" onSubmit={handleSubmit}>Найти</button>
        </form>
        <div className="searchForm__line" />
        <Switch handleShortsCheckbox={handleShortsCheckbox} keyWord={searchForm.keyWord} shortsCheckbox={shortsCheckbox} shortsCheckboxSaved={shortsCheckboxSaved} />
      </article>
      <span className="searchForm__error">{searchForm.error || error}</span>
    </>
  );
}

export default SearchForm;
